import { kv } from '@vercel/kv';
import showcases from './server/data/showcases.json' assert { type: 'json' };

async function seed() {
  try {
    await kv.set('showcases', showcases);
    console.log(`✓ Berhasil seed ${showcases.length} showcase ke Vercel KV`);
    process.exit(0);
  } catch (error) {
    console.error('✗ Gagal seed data:', error.message);
    process.exit(1);
  }
}

seed();
