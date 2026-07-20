import { head, put } from '@vercel/blob';
import { readData, writeData } from './_lib/blob-db.js';

const SEED_DATA = [
  {"id":"187b622e-bdf9-4a63-b26d-118309af46b6","title":"Limputra HR — Human Resources Management System For Limputra Group","description":"Modern, HR and Payroll platform untuk Limputra Group yang dirancang untuk mengelola seluruh siklus sumber daya manusia — mulai dari rekrutmen, absensi, cuti, penilaian kinerja, hingga penggajian","image":"","link":"","linkType":"github","demoUrl":"http://103.155.250.26:8001","features":"<p>Limputra HR adalah aplikasi HRMS lengkap untuk PT Uninet.</p>","createdAt":"2026-07-20T14:47:53.184Z","updatedAt":"2026-07-20T17:13:47.725Z"},
  {"id":"9e510471-a43f-49e1-ba6e-d054ff501151","title":"MettaDC - Data Center Customer Portal","description":"Portal manajemen data center terintegrasi untuk PT Metta Data Center.","image":"","link":"https://github.com/fajarizaf/portalmetta","linkType":"github","demoUrl":"http://202.145.0.38:3011","features":"<h2>Fitur Utama</h2><p>Document Engine, Sales & Order, Billing, Product, Inventory.</p>","createdAt":"2026-07-20T15:14:57.145Z","updatedAt":"2026-07-20T16:15:56.969Z"},
  {"id":"377e07e8-c512-412a-a9db-5781e8e152af","title":"Dashboard Uninet","description":"Portal back-office CRM/ERP terintegrasi untuk PT. Uninet Media Sakti.","image":"","link":"https://github.com/fajarizaf/dashuninet","linkType":"github","demoUrl":"https://staging.uninet.net.id/login","features":"<h2>Fitur Utama</h2><p>Dashboard, Penjualan, Layanan, Keuangan, Pelanggan, Support.</p>","createdAt":"2026-07-20T10:35:09.366Z","updatedAt":"2026-07-20T16:23:08.640Z"},
  {"id":"41c7843b-0e79-4a88-a702-3ecbf23fb2e7","title":"Peta Sebaran Unras","description":"Aplikasi monitoring dan visualisasi data unjuk rasa di seluruh provinsi Indonesia.","image":"","link":"https://github.com/fajarizaf/aksi-demo","linkType":"github","demoUrl":"http://103.153.42.77:5174/","features":"<ul><li>Peta Interaktif</li><li>Clustering Marker</li><li>Panel Admin</li><li>Dashboard Grafik</li></ul>","createdAt":"2026-07-20T15:42:13.837Z","updatedAt":"2026-07-20T17:24:48.595Z"},
  {"id":"1","title":"WHMCS Addons - ShopeePay","description":"ShopeePay payment gateway module integrated with WHMCS.","image":"","link":"https://github.com/fajarizaf/picovid","linkType":"github","demoUrl":"","features":"<ul><li>Real-time tracking</li><li>Interactive charts</li><li>Cross-platform</li></ul>","createdAt":"2024-01-01T00:00:00.000Z","updatedAt":"2026-07-20T16:56:44.105Z"},
  {"id":"2","title":"WHMCS Addons - Bulk Services","description":"Hosting bulk services module integrated with WHMCS internal API.","image":"","link":"https://github.com/fajarizaf/WHMCS-ADDON-BulkServices","linkType":"github","demoUrl":"","features":"<ul><li>Bulk service management</li><li>Automated provisioning</li><li>CSV import/export</li></ul>","createdAt":"2024-01-02T00:00:00.000Z","updatedAt":"2026-07-20T16:10:23.353Z"},
  {"id":"4","title":"Certification Issuance System","description":"Internal web application for managing and issuing certifications.","image":"","link":"https://github.com/fajarizaf/app.asttatindo","linkType":"github","demoUrl":"","features":"<ul><li>Certificate generation & print</li><li>Participant data management</li><li>Verification system</li></ul>","createdAt":"2024-01-04T00:00:00.000Z","updatedAt":"2026-07-20T17:00:18.327Z"},
  {"id":"5","title":"WHMCS Addons - ShopeePay","description":"ShopeePay payment gateway module integrated with WHMCS.","image":"","link":"https://github.com/fajarizaf/WHMCS-ADDON-ShopeePay","linkType":"github","demoUrl":"","features":"<ul><li>Payment integration</li><li>Auto reconciliation</li><li>Callback handling</li></ul>","createdAt":"2024-01-05T00:00:00.000Z","updatedAt":"2026-07-20T17:03:49.019Z"},
  {"id":"6","title":"WHMCS Addons - Virtual Account","description":"Faspay Virtual Account payment module for WHMCS orders.","image":"","link":"https://github.com/fajarizaf/WHMCS-ADDON-Virtual-Account-Payment","linkType":"github","demoUrl":"","features":"<ul><li>Virtual Account generation</li><li>Multi-bank support</li><li>Real-time notification</li></ul>","createdAt":"2024-01-06T00:00:00.000Z","updatedAt":"2026-07-20T17:07:19.921Z"}
];

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { action } = req.query;

    await writeData(SEED_DATA);
    return res.status(200).json({
      message: action === 'reset' ? 'Data berhasil direset' : 'Seed data berhasil',
      count: SEED_DATA.length
    });
  } catch (error) {
    console.error('Seed error:', error);
    return res.status(500).json({ error: 'Gagal melakukan seed data', detail: error.message });
  }
}
