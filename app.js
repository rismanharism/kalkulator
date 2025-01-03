const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const calculatorRoutes = require('./routes/calculatorRoutes');
const app = express();

// Konfigurasi view engine
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Gunakan router
app.use('/', calculatorRoutes);

// Jalankan server
app.listen(3000, () => console.log('Server running on port 3000'));
