const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  dialectOptions: {
    connectTimeout: 60000
  }
});

module.exports = sequelize;
