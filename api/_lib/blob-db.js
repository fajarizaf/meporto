import { list, put, del } from '@vercel/blob';

const DATA_KEY = 'showcases-data.json';

export async function readData() {
  try {
    const { blobs } = await list({ prefix: DATA_KEY });
    const found = blobs.find(b => b.pathname === DATA_KEY);
    if (!found) return [];

    const response = await fetch(found.url);
    const text = await response.text();
    return JSON.parse(text);
  } catch (error) {
    console.error('readData error:', error);
    return [];
  }
}

export async function writeData(data) {
  const json = JSON.stringify(data, null, 2);
  const blob = await put(DATA_KEY, json, {
    access: 'public',
    contentType: 'application/json',
  });
  return blob;
}

export async function deleteDataFile() {
  try {
    const { blobs } = await list({ prefix: DATA_KEY });
    const found = blobs.find(b => b.pathname === DATA_KEY);
    if (found) await del(found.url);
  } catch (error) {
    // ignore
  }
}
