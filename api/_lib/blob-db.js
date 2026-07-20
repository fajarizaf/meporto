import { head, put, del } from '@vercel/blob';

const DATA_KEY = 'showcases-data.json';

export async function readData() {
  try {
    const blob = await head(DATA_KEY);
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
  });
  return blob;
}

export async function deleteDataFile() {
  try {
    const blob = await head(DATA_KEY);
    await del(blob.url);
  } catch (error) {
    // ignore
  }
}
