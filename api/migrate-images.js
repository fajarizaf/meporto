import { put, list } from '@vercel/blob';
import { readData, writeData } from './_lib/blob-db.js';

const IMAGE_MAP = {
  '187b622e-bdf9-4a63-b26d-118309af46b6': '7a1dc6ba-078e-4bb5-894e-895ad9b8bdaf.png',
  '9e510471-a43f-49e1-ba6e-d054ff501151': 'f349e54b-98d6-4af1-9092-c760296b32ae.png',
  '377e07e8-c512-412a-a9db-5781e8e152af': 'e8d11d23-1a87-4318-bb8a-29c0ba220e58.png',
  '41c7843b-0e79-4a88-a702-3ecbf23fb2e7': '12bedcce-17c9-43d1-96dc-daf4587b2ccb.png',
  '1': '78f7a4a8-1508-408e-ab00-db6e38726b17.png',
  '2': '9dc13302-aaf8-4b9d-8abf-7f3e5a4021a5.png',
  '4': 'aab8921f-5d2d-47aa-82d4-c641f0a9f90e.png',
  '5': '89a237e8-e6c4-4ba4-afef-f971534b3012.png',
  '6': '3fc396b1-c679-4701-a432-c3f2aa5ca0c6.png',
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = await readData();
    const { images } = req.body;

    if (!images || typeof images !== 'object') {
      return res.status(400).json({ error: 'images object required: { showcaseId: base64Image }' });
    }

    let updated = 0;
    for (const item of data) {
      const imgData = images[item.id];
      if (!imgData || item.image) continue;

      const matches = imgData.match(/^data:image\/(\w+);base64,(.+)$/);
      if (!matches) continue;

      const ext = matches[1];
      const buffer = Buffer.from(matches[2], 'base64');
      const filename = `uploads/${item.id}.${ext}`;

      const blob = await put(filename, buffer, {
        access: 'public',
        contentType: `image/${ext}`,
      });

      item.image = blob.url;
      updated++;
    }

    if (updated > 0) {
      await writeData(data);
    }

    return res.status(200).json({ message: 'OK', updated });
  } catch (error) {
    console.error('Migration error:', error);
    return res.status(500).json({ error: error.message });
  }
}
