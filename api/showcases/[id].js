import { randomUUID } from 'crypto';
import { put, del } from '@vercel/blob';
import { IncomingForm } from 'formidable';
import { readData, writeData } from '../_lib/blob-db.js';

export const config = {
  api: {
    bodyParser: false,
  },
};

function parseMultipart(req) {
  return new Promise((resolve, reject) => {
    const form = new IncomingForm({
      keepExtensions: true,
      maxFileSize: 5 * 1024 * 1024,
    });
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

function streamToBuffer(stream) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    stream.on('data', (chunk) => chunks.push(chunk));
    stream.on('end', () => resolve(Buffer.concat(chunks)));
    stream.on('error', reject);
  });
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
      console.error('Error fetching showcase:', error);
      return res.status(500).json({ error: 'Gagal mengambil data' });
    }
  }

  if (method === 'PUT') {
    try {
      const { fields, files } = await parseMultipart(req);
      const data = await readData();
      const index = data.findIndex((d) => d.id === id);

      if (index === -1) {
        return res.status(404).json({ error: 'Data tidak ditemukan' });
      }

      const existing = data[index];
      const get = (v) => Array.isArray(v) ? v[0] : v;
      const title = get(fields.title);
      const description = get(fields.description);
      const link = get(fields.link);
      const linkType = get(fields.linkType);
      const demoUrl = get(fields.demoUrl);
      const features = get(fields.features);

      let imageUrl = existing.image;

      if (files.image?.[0]) {
        if (existing.image && existing.image.includes('vercel.blob')) {
          try { await del(existing.image); } catch (e) {}
        }

        const file = files.image[0];
        const ext = file.originalFilename?.split('.').pop() || 'png';
        const filename = `uploads/${randomUUID()}.${ext}`;
        const buffer = await streamToBuffer(file);
        const blob = await put(filename, buffer, {
          access: 'public',
          contentType: file.mimetype || 'image/png',
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
      console.error('Error updating showcase:', error);
      return res.status(500).json({ error: 'Gagal memperbarui data' });
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
      console.error('Error deleting showcase:', error);
      return res.status(500).json({ error: 'Gagal menghapus data' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
