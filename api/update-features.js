import { readData, writeData } from './_lib/blob-db.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { items } = req.body;
    if (!Array.isArray(items)) {
      return res.status(400).json({ error: 'items array required' });
    }

    const data = await readData();
    let updated = 0;

    for (const incoming of items) {
      const existing = data.find(d => d.id === incoming.id);
      if (!existing) continue;
      if (incoming.features) existing.features = incoming.features;
      if (incoming.title) existing.title = incoming.title;
      if (incoming.description) existing.description = incoming.description;
      updated++;
    }

    await writeData(data);
    return res.status(200).json({ message: 'OK', updated });
  } catch (error) {
    console.error('Update error:', error);
    return res.status(500).json({ error: error.message });
  }
}
