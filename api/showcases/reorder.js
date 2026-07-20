import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { ids } = req.body;

    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ error: 'IDs array is required' });
    }

    const data = (await kv.get('showcases')) || [];
    const reordered = [];

    for (const id of ids) {
      const item = data.find((d) => d.id === id);
      if (item) reordered.push(item);
    }

    // Add any items not in the ids array (safety net)
    for (const item of data) {
      if (!reordered.find((r) => r.id === item.id)) {
        reordered.push(item);
      }
    }

    await kv.set('showcases', reordered);
    return res.status(200).json(reordered);
  } catch (error) {
    console.error('Error reordering showcases:', error);
    return res.status(500).json({ error: 'Gagal mengubah urutan' });
  }
}
