const { Sequelize } = require('sequelize');
const mysql = require('mysql2/promise');

(async () => {
  try {
    // Buat koneksi ke MySQL server tanpa menyebutkan database
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '', // Ganti dengan password MySQL Anda jika ada
    });

    // Buat database jika belum ada
    await connection.query('CREATE DATABASE IF NOT EXISTS calculator_db');
    console.log('Database "calculator_db" siap digunakan.');

    // Tutup koneksi awal
    await connection.end();
  } catch (error) {
    console.error('Error saat membuat database:', error);
  }
})();

// Koneksi ke database menggunakan Sequelize
const sequelize = new Sequelize('calculator_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Koneksi ke database berhasil!');
  } catch (error) {
    console.error('Database connection error:', error);
  }
})();

module.exports = sequelize;
