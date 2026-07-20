const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3001;

const DB_PATH = path.join(__dirname, 'data', 'showcases.json');
const UPLOADS_DIR = path.join(__dirname, 'uploads');

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(UPLOADS_DIR));

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOADS_DIR),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${uuidv4()}${ext}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png|gif|webp/;
    const extOk = allowed.test(path.extname(file.originalname).toLowerCase());
    const mimeOk = allowed.test(file.mimetype);
    if (extOk && mimeOk) return cb(null, true);
    cb(new Error('Hanya file gambar (jpg, png, gif, webp) yang diperbolehkan'));
  }
});

function readDB() {
  const raw = fs.readFileSync(DB_PATH, 'utf-8');
  return JSON.parse(raw);
}

function writeDB(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

// GET all
app.get('/api/showcases', (req, res) => {
  const data = readDB();
  res.json(data);
});

// PUT reorder
app.put('/api/showcases/reorder', (req, res) => {
  const { ids } = req.body;
  if (!Array.isArray(ids) || ids.length === 0) {
    return res.status(400).json({ error: 'IDs array is required' });
  }

  const data = readDB();
  const reordered = [];
  for (const id of ids) {
    const item = data.find(d => d.id === id);
    if (item) reordered.push(item);
  }
  // Add any items not in the ids array (safety net)
  for (const item of data) {
    if (!reordered.find(r => r.id === item.id)) {
      reordered.push(item);
    }
  }

  writeDB(reordered);
  res.json(reordered);
});

// GET single
app.get('/api/showcases/:id', (req, res) => {
  const data = readDB();
  const item = data.find(d => d.id === req.params.id);
  if (!item) return res.status(404).json({ error: 'Data tidak ditemukan' });
  res.json(item);
});

// POST create
app.post('/api/showcases', upload.single('image'), (req, res) => {
  const data = readDB();
  const { title, description, link, linkType, demoUrl, features } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: 'Title dan description wajib diisi' });
  }

  const newItem = {
    id: uuidv4(),
    title,
    description,
    image: req.file ? `/uploads/${req.file.filename}` : '',
    link: link || '',
    linkType: linkType || 'github',
    demoUrl: demoUrl || '',
    features: features || '',
    createdAt: new Date().toISOString()
  };

  data.push(newItem);
  writeDB(data);
  res.status(201).json(newItem);
});

// PUT update
app.put('/api/showcases/:id', upload.single('image'), (req, res) => {
  const data = readDB();
  const index = data.findIndex(d => d.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Data tidak ditemukan' });

  const { title, description, link, linkType, demoUrl, features } = req.body;
  const existing = data[index];

  if (req.file && existing.image && existing.image.startsWith('/uploads/')) {
    const oldPath = path.join(__dirname, existing.image);
    if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
  }

  data[index] = {
    ...existing,
    title: title || existing.title,
    description: description || existing.description,
    link: link !== undefined ? link : existing.link,
    linkType: linkType || existing.linkType,
    demoUrl: demoUrl !== undefined ? demoUrl : (existing.demoUrl || ''),
    features: features !== undefined ? features : (existing.features || ''),
    image: req.file ? `/uploads/${req.file.filename}` : existing.image,
    updatedAt: new Date().toISOString()
  };

  writeDB(data);
  res.json(data[index]);
});

// DELETE
app.delete('/api/showcases/:id', (req, res) => {
  const data = readDB();
  const index = data.findIndex(d => d.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Data tidak ditemukan' });

  const item = data[index];
  if (item.image && item.image.startsWith('/uploads/')) {
    const imgPath = path.join(__dirname, item.image);
    if (fs.existsSync(imgPath)) fs.unlinkSync(imgPath);
  }

  data.splice(index, 1);
  writeDB(data);
  res.json({ message: 'Berhasil dihapus' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
