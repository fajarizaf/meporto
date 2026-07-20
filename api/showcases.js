import { randomUUID } from 'crypto';
import { put } from '@vercel/blob';
import { readData, writeData } from './_lib/blob-db.js';

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

  if (method === 'GET') {
    try {
      const data = await readData();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: 'Gagal mengambil data' });
    }
  }

  if (method === 'POST') {
    try {
      const { fields, files } = await parseBody(req);
      const title = fields.title;
      const description = fields.description;
      const link = fields.link || '';
      const linkType = fields.linkType || 'github';
      const demoUrl = fields.demoUrl || '';
      const features = fields.features || '';

      if (!title || !description) {
        return res.status(400).json({ error: 'Title dan description wajib diisi' });
      }

      let imageUrl = '';
      if (files.image && files.image[0]) {
        const file = files.image[0];
        const ext = file.originalFilename?.split('.').pop() || 'png';
        const filename = `uploads/${randomUUID()}.${ext}`;

        const blob = await put(filename, file.buffer, {
          access: 'public',
          contentType: file.mimetype,
        });
        imageUrl = blob.url;
      }

      const existingData = await readData();
      const newItem = {
        id: randomUUID(),
        title,
        description,
        image: imageUrl,
        link,
        linkType,
        demoUrl,
        features,
        createdAt: new Date().toISOString(),
      };

      existingData.push(newItem);
      await writeData(existingData);

      return res.status(201).json(newItem);
    } catch (error) {
      console.error('POST error:', error);
      return res.status(500).json({ error: 'Gagal menyimpan data', detail: error.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
