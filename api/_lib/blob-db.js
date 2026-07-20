import { put, head, del } from '@vercel/blob';

const DATA_KEY = 'showcases-data.json';

export async function readData() {
  try {
    const blob = await head(DATA_KEY);
    const response = await fetch(blob.url);
    const text = await response.text();
    return JSON.parse(text);
  } catch (error) {
    if (error.statusCode === 404) return [];
    throw error;
  }
}

export async function writeData(data) {
  const json = JSON.stringify(data, null, 2);
  const blob = await put(DATA_KEY, json, {
    access: 'public',
    contentType: 'application/json',
    addRandomSuffix: false,
  });
  return blob;
}

export async function deleteDataFile() {
  try {
    await del(DATA_KEY);
  } catch (error) {
    // ignore
  }
}
