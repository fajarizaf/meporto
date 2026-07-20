import { readData, writeData } from '../_lib/blob-db.js';

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { ids } = req.body;

    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ error: 'IDs array is required' });
    }

    const data = await readData();
    const reordered = [];

    for (const id of ids) {
      const item = data.find((d) => d.id === id);
      if (item) reordered.push(item);
    }

    for (const item of data) {
      if (!reordered.find((r) => r.id === item.id)) {
        reordered.push(item);
      }
    }

    await writeData(reordered);
    return res.status(200).json(reordered);
  } catch (error) {
    console.error('Error reordering showcases:', error);
    return res.status(500).json({ error: 'Gagal mengubah urutan' });
  }
}
