import { randomUUID } from 'crypto';
import { put, del } from '@vercel/blob';
import { readData, writeData } from '../_lib/blob-db.js';

export const config = {
  api: {
    bodyParser: false,
    responseLimit: false,
  },
};

async function parseBody(req) {
  const contentType = req.headers['content-type'] || '';

  if (contentType.includes('application/json')) {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const body = JSON.parse(Buffer.concat(chunks).toString());
    return { fields: body, files: {} };
  }

  if (contentType.includes('multipart/form-data')) {
    return parseMultipart(req);
  }

  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  return { fields: JSON.parse(Buffer.concat(chunks).toString()), files: {} };
}

async function parseMultipart(req) {
  const contentType = req.headers['content-type'] || '';
  const boundaryMatch = contentType.match(/boundary=(.+)/);
  if (!boundaryMatch) throw new Error('No boundary in content-type');

  const boundary = boundaryMatch[1];
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const buffer = Buffer.concat(chunks);

  const boundaryBuffer = Buffer.from('--' + boundary);
  const fields = {};
  const files = {};

  let start = 0;
  while (true) {
    const idx = buffer.indexOf(boundaryBuffer, start);
    if (idx === -1) break;

    const nextIdx = buffer.indexOf(boundaryBuffer, idx + boundaryBuffer.length);
    if (nextIdx === -1) break;

    const part = buffer.slice(idx + boundaryBuffer.length, nextIdx);
    const headerEnd = part.indexOf('\r\n\r\n');
    if (headerEnd === -1) { start = nextIdx; continue; }

    const headers = part.slice(0, headerEnd).toString();
    const body = part.slice(headerEnd + 4, part.length - 2);

    const nameMatch = headers.match(/name="([^"]+)"/);
    const filenameMatch = headers.match(/filename="([^"]+)"/);
    const typeMatch = headers.match(/Content-Type:\s*(.+)/i);

    if (!nameMatch) { start = nextIdx; continue; }

    const name = nameMatch[1];

    if (filenameMatch) {
      files[name] = [{
        originalFilename: filenameMatch[1],
        mimetype: typeMatch ? typeMatch[1].trim() : 'application/octet-stream',
        buffer: body,
      }];
    } else {
      fields[name] = body.toString();
    }

    start = nextIdx;
  }

  return { fields, files };
}

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  if (method === 'GET') {
    try {
      const data = await readData();
      const item = data.find((d) => d.id === id);
      if (!item) return res.status(404).json({ error: 'Data tidak ditemukan' });
      return res.status(200).json(item);
    } catch (error) {
      return res.status(500).json({ error: 'Gagal mengambil data' });
    }
  }

  if (method === 'PUT') {
    try {
      const { fields, files } = await parseBody(req);
      const data = await readData();
      const index = data.findIndex((d) => d.id === id);

      if (index === -1) {
        return res.status(404).json({ error: 'Data tidak ditemukan' });
      }

      const existing = data[index];
      const get = (v) => v;
      const title = get(fields.title);
      const description = get(fields.description);
      const link = get(fields.link);
      const linkType = get(fields.linkType);
      const demoUrl = get(fields.demoUrl);
      const features = get(fields.features);

      let imageUrl = existing.image;

      if (files.image && files.image[0]) {
        if (existing.image && existing.image.includes('vercel.blob')) {
          try { await del(existing.image); } catch (e) {}
        }

        const file = files.image[0];
        const ext = file.originalFilename?.split('.').pop() || 'png';
        const filename = `uploads/${randomUUID()}.${ext}`;

        const blob = await put(filename, file.buffer, {
          access: 'public',
          contentType: file.mimetype,
        });
        imageUrl = blob.url;
      }

      data[index] = {
        ...existing,
        title: title || existing.title,
        description: description || existing.description,
        link: link !== undefined ? link : existing.link,
        linkType: linkType || existing.linkType,
        demoUrl: demoUrl !== undefined ? demoUrl : existing.demoUrl || '',
        features: features !== undefined ? features : existing.features || '',
        image: imageUrl,
        updatedAt: new Date().toISOString(),
      };

      await writeData(data);
      return res.status(200).json(data[index]);
    } catch (error) {
      console.error('PUT error:', error);
      return res.status(500).json({ error: 'Gagal memperbarui data', detail: error.message });
    }
  }

  if (method === 'DELETE') {
    try {
      const data = await readData();
      const index = data.findIndex((d) => d.id === id);

      if (index === -1) {
        return res.status(404).json({ error: 'Data tidak ditemukan' });
      }

      const item = data[index];
      if (item.image && item.image.includes('vercel.blob')) {
        try { await del(item.image); } catch (e) {}
      }

      data.splice(index, 1);
      await writeData(data);
      return res.status(200).json({ message: 'Berhasil dihapus' });
    } catch (error) {
      return res.status(500).json({ error: 'Gagal menghapus data' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
