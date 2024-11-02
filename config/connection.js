const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('database', 'username', 'password', {
  host: '127.0.0.1',
  dialect: 'mysql',
  port: 3000,
  dialectOptions: {
    connectTimeout: 60000
  }
});

module.exports = sequelize;
