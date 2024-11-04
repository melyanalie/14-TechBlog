const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('mysql', 'melyanalie', 'Mei1986*', {
  host: '127.0.0.1',
  port: 3306,
  dialect: 'mysql',
  timeout: 60000 // 60 seconds
});

module.exports = sequelize;
