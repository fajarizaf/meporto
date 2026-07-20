const showcases = require('../server/data/showcases.json');

async function migrate() {
  const items = showcases.map(s => ({
    id: s.id,
    title: s.title,
    description: s.description,
    features: s.features,
  }));

  const res = await fetch('https://meporto.vercel.app/api/update-features', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items }),
  });

  const result = await res.json();
  console.log(result);
}

migrate();
