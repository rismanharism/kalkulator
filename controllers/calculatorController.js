const Calculation = require('../models/Calculation');

exports.calculate = async (req, res) => {
  const { num1, num2, operation } = req.body;
  let result;

  switch (operation) {
    case 'tambah':
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case 'pengurangan':
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case 'perkalian':
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case 'pembagian':
      result = parseFloat(num1) / parseFloat(num2);
      break;
    default:
      return res.status(400).send('operasi gagal');
  }

  await Calculation.create({ operation, result });
  res.render('index', { result });
};

exports.history = async (req, res) => {
  const calculations = await Calculation.findAll();
  res.render('history', { calculations });
};
