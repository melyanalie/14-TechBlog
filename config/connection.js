const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('database', 'username', 'password', {
  host: '127.0.0.1',
  dialect: 'mysql',
  port: 3310,
  dialectOptions: {
    connectTimeout: 60000 // 60 seconds
  }
});

module.exports = sequelize;
