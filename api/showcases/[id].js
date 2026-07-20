import { kv } from '@vercel/kv';
import { put, del } from '@vercel/blob';
import { v4 as uuidv4 } from 'uuid';
import { IncomingForm } from 'formidable';

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
  const { id } = req.query;

  if (method === 'GET') {
    try {
      const data = (await kv.get('showcases')) || [];
      const item = data.find((d) => d.id === id);
      if (!item) {
        return res.status(404).json({ error: 'Data tidak ditemukan' });
      }
      return res.status(200).json(item);
    } catch (error) {
      console.error('Error fetching showcase:', error);
      return res.status(500).json({ error: 'Gagal mengambil data' });
    }
  }

  if (method === 'PUT') {
    try {
      const { fields, files } = await parseMultipart(req);
      const data = (await kv.get('showcases')) || [];
      const index = data.findIndex((d) => d.id === id);

      if (index === -1) {
        return res.status(404).json({ error: 'Data tidak ditemukan' });
      }

      const existing = data[index];
      const title = fields.title?.[0];
      const description = fields.description?.[0];
      const link = fields.link?.[0];
      const linkType = fields.linkType?.[0];
      const demoUrl = fields.demoUrl?.[0];
      const features = fields.features?.[0];

      let imageUrl = existing.image;

      if (files.image?.[0]) {
        // Delete old image if exists
        if (existing.image && existing.image.includes('vercel.blob')) {
          try {
            await del(existing.image);
          } catch (e) {
            console.error('Error deleting old image:', e);
          }
        }

        const file = files.image[0];
        const ext = file.originalFilename?.split('.').pop() || 'png';
        const filename = `${uuidv4()}.${ext}`;

        const blob = await put(filename, file.filepath, {
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

      await kv.set('showcases', data);
      return res.status(200).json(data[index]);
    } catch (error) {
      console.error('Error updating showcase:', error);
      return res.status(500).json({ error: 'Gagal memperbarui data' });
    }
  }

  if (method === 'DELETE') {
    try {
      const data = (await kv.get('showcases')) || [];
      const index = data.findIndex((d) => d.id === id);

      if (index === -1) {
        return res.status(404).json({ error: 'Data tidak ditemukan' });
      }

      const item = data[index];

      // Delete image from blob if exists
      if (item.image && item.image.includes('vercel.blob')) {
        try {
          await del(item.image);
        } catch (e) {
          console.error('Error deleting image:', e);
        }
      }

      data.splice(index, 1);
      await kv.set('showcases', data);

      return res.status(200).json({ message: 'Berhasil dihapus' });
    } catch (error) {
      console.error('Error deleting showcase:', error);
      return res.status(500).json({ error: 'Gagal menghapus data' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
