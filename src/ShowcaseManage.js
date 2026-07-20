import React, { useState, useEffect, useCallback } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencil, faTrash, faGlobe, faImage, faExclamationTriangle, faArrowUp, faArrowDown, faGripVertical } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const API_URL = process.env.REACT_APP_API_URL || '/api';

const quillModules = {
  toolbar: [
    [{ header: [3, 4, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['blockquote', 'code-block'],
    ['link'],
    ['clean']
  ],
  clipboard: { matchVisual: false }
};

const quillFormats = [
  'header', 'bold', 'italic', 'underline', 'strike',
  'list', 'bullet', 'indent',
  'blockquote', 'code-block', 'link'
];

const STATIC_DATA = [
  { id: "1", title: "Mobile Apps - System Information Covid 19", description: "Mobile application built with React Native Expo for real-time COVID-19 data tracking.", image: "../assets/img/picovid.jpg", link: "https://github.com/fajarizaf/picovid", linkType: "github", demoUrl: "", features: "<ul><li>Real-time COVID-19 data tracking</li><li>Interactive charts and statistics</li><li>Province-level data breakdown</li><li>Cross-platform (iOS & Android)</li></ul>" },
  { id: "2", title: "WHMCS Addons - Bulk Services", description: "Hosting bulk services module integrated with WHMCS internal API.", image: "../assets/img/bulkservices.png", link: "https://github.com/fajarizaf/WHMCS-ADDON-BulkServices", linkType: "github", demoUrl: "", features: "<ul><li>Bulk service management via WHMCS API</li><li>Automated provisioning</li><li>CSV import/export support</li></ul>" },
  { id: "3", title: "Penulis - Blog Platform", description: "A clean blog platform inspired by Medium, built with React JS.", image: "../assets/img/penulis.jpg", link: "https://github.com/fajarizaf/penulis.site", linkType: "github", demoUrl: "http://penulis.site", features: "<ul><li>Rich text editor for writing</li><li>Markdown support</li><li>Responsive design</li><li>Tag-based categorization</li></ul>" },
  { id: "4", title: "Certification Issuance System", description: "Internal web application for managing and issuing certifications.", image: "../assets/img/asttatindo.jpg", link: "https://app.asttatindo.org", linkType: "website", demoUrl: "https://app.asttatindo.org", features: "<ul><li>Certificate generation & print</li><li>Participant data management</li><li>Verification system</li><li>Batch processing support</li></ul>" },
  { id: "5", title: "WHMCS Addons - ShopeePay", description: "ShopeePay payment gateway module integrated with WHMCS.", image: "../assets/img/addons-shopeepay.jpg", link: "https://github.com/fajarizaf/WHMCS-ADDON-ShopeePay", linkType: "github", demoUrl: "", features: "<ul><li>ShopeePay payment integration</li><li>Automatic invoice reconciliation</li><li>Callback handling</li></ul>" },
  { id: "6", title: "WHMCS Addons - Virtual Account", description: "Faspay Virtual Account payment module for WHMCS orders.", image: "../assets/img/faspay.jpg", link: "https://github.com/fajarizaf/WHMCS-ADDON-Virtual-Account-Payment", linkType: "github", demoUrl: "", features: "<ul><li>Virtual Account generation</li><li>Multi-bank support</li><li>Real-time payment notification</li></ul>" }
];

function ShowcaseManage() {
  const [items, setItems] = useState(STATIC_DATA);
  const [loading, setLoading] = useState(true);
  const [serverConnected, setServerConnected] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title: '', description: '', link: '', linkType: 'github', demoUrl: '', features: '' });
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [saving, setSaving] = useState(false);

  const fetchItems = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/showcases`);
      if (!res.ok) throw new Error();
      const data = await res.json();
      if (data.length > 0) setItems(data);
      setServerConnected(true);
    } catch {
      setServerConnected(false);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchItems(); }, [fetchItems]);

  const resetForm = () => {
    setForm({ title: '', description: '', link: '', linkType: 'github', demoUrl: '', features: '' });
    setFile(null);
    setPreview(null);
    setEditing(null);
    setShowForm(false);
  };

  const handleEdit = (item) => {
    setEditing(item);
    setForm({ title: item.title, description: item.description, link: item.link, linkType: item.linkType, demoUrl: item.demoUrl || '', features: item.features || '' });
    setPreview(getImgSrc(item.image));
    setFile(null);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Yakin ingin menghapus item ini?')) return;
    if (!serverConnected) return alert('Server belum terhubung. Jalankan: npm run server');
    try {
      await fetch(`${API_URL}/showcases/${id}`, { method: 'DELETE' });
      setItems(prev => prev.filter(i => i.id !== id));
    } catch (err) {
      alert('Gagal menghapus: ' + err.message);
    }
  };

  const handleFileChange = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    setFile(f);
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(f);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.description) return alert('Title dan description wajib diisi');
    if (!serverConnected) return alert('Server belum terhubung. Jalankan: npm run server');
    setSaving(true);

    const fd = new FormData();
    fd.append('title', form.title);
    fd.append('description', form.description);
    fd.append('link', form.link);
    fd.append('linkType', form.linkType);
    fd.append('demoUrl', form.demoUrl);
    fd.append('features', form.features);
    if (file) fd.append('image', file);

    try {
      const url = editing ? `${API_URL}/showcases/${editing.id}` : `${API_URL}/showcases`;
      const method = editing ? 'PUT' : 'POST';
      const res = await fetch(url, { method, body: fd });
      const result = await res.json();
      if (!res.ok) return alert(result.error || 'Terjadi kesalahan');

      if (editing) {
        setItems(prev => prev.map(i => i.id === editing.id ? result : i));
      } else {
        setItems(prev => [...prev, result]);
      }
      resetForm();
    } catch (err) {
      alert('Gagal menyimpan: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  const getImgSrc = (image) => {
    if (!image) return null;
    if (image.startsWith('http')) return image;
    if (image.startsWith('/uploads')) return `${API_URL.replace('/api', '')}${image}`;
    return `${process.env.PUBLIC_URL}${image}`;
  };

  const handleReorder = async (newItems) => {
    setItems(newItems);
    if (!serverConnected) return;
    try {
      const ids = newItems.map(i => i.id);
      await fetch(`${API_URL}/showcases/reorder`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids })
      });
    } catch (err) {
      console.error('Reorder failed:', err);
    }
  };

  const moveItem = (index, direction) => {
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= items.length) return;
    const newItems = [...items];
    [newItems[index], newItems[newIndex]] = [newItems[newIndex], newItems[index]];
    handleReorder(newItems);
  };

  return (
    <div className="main" style={styles.container}>
      {!serverConnected && !loading && (
        <div style={styles.warning}>
          <FontAwesomeIcon icon={faExclamationTriangle} style={{ marginRight: 10, fontSize: 16 }} />
          <div>
            <strong>Server belum terhubung.</strong> CRUD membutuhkan backend server.
            <br />
            <span style={{ fontSize: 12, opacity: 0.8 }}>Jalankan: <code style={styles.code}>npm run server</code> di terminal terpisah</span>
          </div>
        </div>
      )}

      <div style={styles.header}>
        <div>
          <span style={styles.label}>Manage</span>
          <h2 style={styles.hi}>Showcase CRUD</h2>
          <p style={styles.sub}>Kelola data portfolio showcase</p>
        </div>
        <button
          style={{ ...styles.addBtn, opacity: serverConnected ? 1 : 0.5 }}
          onClick={() => { if (!serverConnected) return alert('Jalankan server dulu: npm run server'); resetForm(); setShowForm(true); }}
        >
          <FontAwesomeIcon icon={faPlus} style={{ marginRight: 8 }} />
          Tambah Item
        </button>
      </div>

      {showForm && (
        <div style={styles.formCard}>
          <h3 style={styles.formTitle}>{editing ? 'Edit Item' : 'Tambah Item Baru'}</h3>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Thumbnail</label>
              <div style={styles.uploadArea}>
                {preview ? (
                  <img src={preview} alt="preview" style={styles.previewImg} />
                ) : (
                  <div style={styles.uploadPlaceholder}>
                    <FontAwesomeIcon icon={faImage} style={{ fontSize: 28, color: 'var(--text-muted)', marginBottom: 8 }} />
                    <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Pilih gambar thumbnail</span>
                  </div>
                )}
                <input type="file" accept="image/*" onChange={handleFileChange} style={styles.fileInput} />
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Title</label>
              <input type="text" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} style={styles.formInput} placeholder="Nama project" />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Description</label>
              <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} style={{ ...styles.formInput, minHeight: 80, resize: 'vertical' }} placeholder="Deskripsi singkat project" />
            </div>
            <div style={styles.formRow}>
              <div style={{ ...styles.formGroup, flex: 2 }}>
                <label style={styles.formLabel}>Link</label>
                <input type="text" value={form.link} onChange={e => setForm({ ...form, link: e.target.value })} style={styles.formInput} placeholder="https://..." />
              </div>
              <div style={{ ...styles.formGroup, flex: 1 }}>
                <label style={styles.formLabel}>Tipe Link</label>
                <select value={form.linkType} onChange={e => setForm({ ...form, linkType: e.target.value })} style={styles.formInput}>
                  <option value="github">GitHub</option>
                  <option value="website">Website</option>
                </select>
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>URL Demo</label>
              <input type="text" value={form.demoUrl} onChange={e => setForm({ ...form, demoUrl: e.target.value })} style={styles.formInput} placeholder="https://demo.example.com (opsional)" />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Fitur / Detail</label>
              <div style={styles.editorWrap}>
                <ReactQuill
                  theme="snow"
                  value={form.features}
                  onChange={val => setForm({ ...form, features: val })}
                  modules={quillModules}
                  formats={quillFormats}
                  placeholder="Jelaskan fitur-fitur project..."
                />
              </div>
            </div>
            <div style={styles.formActions}>
              <button type="button" onClick={resetForm} style={styles.cancelBtn}>Batal</button>
              <button type="submit" style={styles.saveBtn} disabled={saving}>{saving ? 'Menyimpan...' : (editing ? 'Update' : 'Simpan')}</button>
            </div>
          </form>
        </div>
      )}

      <div style={styles.tableWrap}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.th, width: 40, textAlign: 'center' }}>
                <FontAwesomeIcon icon={faGripVertical} style={{ fontSize: 12, opacity: 0.5 }} />
              </th>
              <th style={styles.th}>Thumbnail</th>
              <th style={styles.th}>Title</th>
              <th style={styles.th}>Description</th>
              <th style={styles.th}>Link</th>
              <th style={styles.th}>Demo</th>
              <th style={{ ...styles.th, textAlign: 'center', width: 150 }}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={7} style={{ ...styles.td, textAlign: 'center', padding: 40, color: 'var(--text-muted)' }}>Memuat data...</td></tr>
            ) : items.map((item, index) => (
              <tr key={item.id} style={styles.tr}>
                <td style={{ ...styles.td, textAlign: 'center' }}>
                  <div style={styles.reorderWrap}>
                    <span style={styles.rowIndex}>{index + 1}</span>
                    <div style={styles.reorderBtns}>
                      <button
                        onClick={() => moveItem(index, -1)}
                        disabled={index === 0}
                        style={{ ...styles.reorderBtn, opacity: index === 0 ? 0.3 : 1 }}
                        title="Pindah ke atas"
                      >
                        <FontAwesomeIcon icon={faArrowUp} style={{ fontSize: 10 }} />
                      </button>
                      <button
                        onClick={() => moveItem(index, 1)}
                        disabled={index === items.length - 1}
                        style={{ ...styles.reorderBtn, opacity: index === items.length - 1 ? 0.3 : 1 }}
                        title="Pindah ke bawah"
                      >
                        <FontAwesomeIcon icon={faArrowDown} style={{ fontSize: 10 }} />
                      </button>
                    </div>
                  </div>
                </td>
                <td style={styles.td}>
                  <div style={styles.thumbWrap}>
                    {item.image ? (
                      <img src={getImgSrc(item.image)} alt={item.title} style={styles.thumb} />
                    ) : (
                      <div style={styles.thumbEmpty}><FontAwesomeIcon icon={faImage} style={{ color: 'var(--text-muted)', fontSize: 16 }} /></div>
                    )}
                  </div>
                </td>
                <td style={styles.td}><span style={styles.tdTitle}>{item.title}</span></td>
                <td style={styles.td}><span style={styles.tdDesc}>{item.description}</span></td>
                <td style={styles.td}>
                  <div style={styles.linkWrap}>
                    {item.linkType === 'github'
                      ? <FontAwesomeIcon icon={faGithub} style={{ marginRight: 6, color: 'var(--text-muted)', fontSize: 13 }} />
                      : <FontAwesomeIcon icon={faGlobe} style={{ marginRight: 6, color: 'var(--text-muted)', fontSize: 13 }} />
                    }
                    <span style={styles.tdLink}>{item.link || '-'}</span>
                  </div>
                </td>
                <td style={styles.td}>
                  {item.demoUrl ? (
                    <span style={styles.tdLink}>{item.demoUrl}</span>
                  ) : (
                    <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>-</span>
                  )}
                </td>
                <td style={{ ...styles.td, textAlign: 'center' }}>
                  <div style={styles.actions}>
                    <button onClick={() => { if (!serverConnected) return alert('Jalankan server dulu'); handleEdit(item); }} style={styles.editBtn} title="Edit">
                      <FontAwesomeIcon icon={faPencil} />
                    </button>
                    <button onClick={() => handleDelete(item.id)} style={styles.deleteBtn} title="Hapus">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  container: { paddingTop: 40, paddingBottom: 80 },
  warning: {
    display: 'flex', alignItems: 'center', gap: 12, padding: '14px 20px', marginBottom: 24,
    background: 'rgba(234, 179, 8, 0.08)', border: '1px solid rgba(234, 179, 8, 0.25)',
    borderRadius: 12, color: '#eab308', fontSize: 13, lineHeight: 1.6
  },
  code: {
    background: 'rgba(0,0,0,0.3)', padding: '2px 8px', borderRadius: 6, fontSize: 12,
    fontFamily: 'monospace', letterSpacing: 0.5
  },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 },
  label: {
    display: 'inline-block', fontSize: 11, fontWeight: 600, color: 'var(--accent-3)',
    textTransform: 'uppercase', letterSpacing: 2, marginBottom: 8, padding: '5px 12px',
    background: 'var(--accent-3-subtle)', border: '1px solid rgba(192, 132, 252, 0.2)', borderRadius: 20
  },
  hi: { color: 'var(--text-primary)', fontSize: '2rem', marginBottom: 4, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 },
  sub: { color: 'var(--text-secondary)', fontSize: 14, margin: 0 },
  addBtn: {
    background: 'var(--accent)', color: 'var(--bg-primary)', border: 'none', borderRadius: 12,
    padding: '10px 20px', fontSize: 13, fontWeight: 600, cursor: 'pointer',
    fontFamily: "'Inter', sans-serif", display: 'flex', alignItems: 'center', transition: 'var(--transition)'
  },
  formCard: { background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 16, padding: 28, marginBottom: 24 },
  formTitle: { color: 'var(--text-primary)', fontSize: '1.1rem', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, marginBottom: 20 },
  formGroup: { marginBottom: 16 },
  formRow: { display: 'flex', gap: 16 },
  formLabel: { display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.5 },
  formInput: {
    width: '100%', padding: '10px 14px', background: 'var(--bg-secondary)', border: '1px solid var(--border)',
    borderRadius: 10, color: 'var(--text-primary)', fontSize: 14, fontFamily: "'Inter', sans-serif",
    outline: 'none', transition: 'var(--transition)', boxSizing: 'border-box'
  },
  uploadArea: {
    position: 'relative', width: 200, height: 140, border: '2px dashed var(--border)',
    borderRadius: 12, overflow: 'hidden', cursor: 'pointer', display: 'flex',
    alignItems: 'center', justifyContent: 'center', background: 'var(--bg-secondary)', transition: 'var(--transition)'
  },
  previewImg: { width: '100%', height: '100%', objectFit: 'cover' },
  uploadPlaceholder: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' },
  fileInput: { position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer' },
  editorWrap: {},
  formActions: { display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 8 },
  cancelBtn: {
    background: 'transparent', color: 'var(--text-secondary)', border: '1px solid var(--border)',
    borderRadius: 10, padding: '8px 18px', fontSize: 13, fontWeight: 500, cursor: 'pointer', fontFamily: "'Inter', sans-serif"
  },
  saveBtn: {
    background: 'var(--accent)', color: 'var(--bg-primary)', border: 'none', borderRadius: 10,
    padding: '8px 22px', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: "'Inter', sans-serif"
  },
  tableWrap: { background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 16, overflow: 'auto' },
  table: { width: '100%', minWidth: 700, borderCollapse: 'collapse' },
  th: {
    textAlign: 'left', padding: '14px 16px', fontSize: 11, fontWeight: 600, color: 'var(--text-muted)',
    textTransform: 'uppercase', letterSpacing: 1, borderBottom: '1px solid var(--border)', background: 'var(--bg-secondary)',
    whiteSpace: 'nowrap'
  },
  tr: { transition: 'var(--transition)' },
  td: { padding: '12px 16px', fontSize: 13, color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)', verticalAlign: 'middle' },
  tdTitle: { color: 'var(--text-primary)', fontWeight: 500, fontSize: 13 },
  tdDesc: { fontSize: 12, lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' },
  tdLink: { fontSize: 12, color: 'var(--text-muted)' },
  linkWrap: { display: 'flex', alignItems: 'center' },
  thumbWrap: { width: 56, height: 56, borderRadius: 8, overflow: 'hidden', border: '1px solid var(--border)', flexShrink: 0 },
  thumb: { width: '100%', height: '100%', objectFit: 'cover' },
  thumbEmpty: { width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-secondary)' },
  actions: { display: 'flex', gap: 6, justifyContent: 'center' },
  editBtn: {
    width: 32, height: 32, borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg-secondary)',
    color: 'var(--accent-2)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, transition: 'var(--transition)'
  },
  deleteBtn: {
    width: 32, height: 32, borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg-secondary)',
    color: '#ef4444', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, transition: 'var(--transition)'
  },
  reorderWrap: {
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4
  },
  rowIndex: {
    fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', fontFamily: 'monospace'
  },
  reorderBtns: {
    display: 'flex', gap: 2
  },
  reorderBtn: {
    width: 22, height: 22, borderRadius: 5, border: '1px solid var(--border)', background: 'var(--bg-secondary)',
    color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
    transition: 'var(--transition)'
  }
};

export default ShowcaseManage;
