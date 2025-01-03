const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Calculation = sequelize.define('Calculation', {
  operation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  result: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {});

(async () => {
  await sequelize.sync();
  console.log('Table created or exists.');
})();

module.exports = Calculation;
