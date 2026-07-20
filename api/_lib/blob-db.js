import { list, put, del } from '@vercel/blob';

const DATA_KEY = 'showcases-data.json';

export async function readData() {
  try {
    const result = await list({ prefix: DATA_KEY, limit: 1 });
    const blob = result.blobs.find(b => b.pathname === DATA_KEY);
    if (!blob) return [];
    const response = await fetch(blob.url);
    const text = await response.text();
    return JSON.parse(text);
  } catch (error) {
    return [];
  }
}

export async function writeData(data) {
  const json = JSON.stringify(data, null, 2);
  const blob = await put(DATA_KEY, json, {
    access: 'public',
    contentType: 'application/json',
    addRandomSuffix: false,
    allowOverwrite: true,
  });
  return blob;
}

export async function deleteDataFile() {
  try {
    const result = await list({ prefix: DATA_KEY, limit: 1 });
    const blob = result.blobs.find(b => b.pathname === DATA_KEY);
    if (blob) await del(blob.url);
  } catch (error) {
    // ignore
  }
}
