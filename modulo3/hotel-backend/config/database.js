const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hotel_booking', 'postgres', 'Psql123', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;
