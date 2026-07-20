import { randomUUID } from 'crypto';
import { put } from '@vercel/blob';
import { IncomingForm } from 'formidable';
import { readData, writeData } from './_lib/blob-db.js';

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

export default async function handler(req, res) {
  const { method } = req;

  if (method === 'GET') {
    try {
      const data = await readData();
      return res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching showcases:', error);
      return res.status(500).json({ error: 'Gagal mengambil data' });
    }
  }

  if (method === 'POST') {
    try {
      const { fields, files } = await parseMultipart(req);
      const title = fields.title?.[0];
      const description = fields.description?.[0];
      const link = fields.link?.[0] || '';
      const linkType = fields.linkType?.[0] || 'github';
      const demoUrl = fields.demoUrl?.[0] || '';
      const features = fields.features?.[0] || '';

      if (!title || !description) {
        return res.status(400).json({ error: 'Title dan description wajib diisi' });
      }

      let imageUrl = '';
      if (files.image?.[0]) {
        const file = files.image[0];
        const ext = file.originalFilename?.split('.').pop() || 'png';
        const filename = `uploads/${randomUUID()}.${ext}`;
        const blob = await put(filename, file.filepath, {
          access: 'public',
          contentType: file.mimetype || 'image/png',
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
      console.error('Error creating showcase:', error);
      return res.status(500).json({ error: 'Gagal menyimpan data' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
