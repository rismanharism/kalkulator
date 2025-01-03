const express = require('express');
const { calculate, history } = require('../controllers/calculatorController');
const router = express.Router();

// Tambahkan rute untuk halaman utama
router.get('/', (req, res) => {
  res.render('index', { result: null }); // Kirim result null saat pertama kali
});

// Rute untuk menghitung
router.post('/calculate', calculate);

// Rute untuk riwayat
router.get('/history', history);

module.exports = router;
