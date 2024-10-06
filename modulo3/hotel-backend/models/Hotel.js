const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Hotel = sequelize.define('Hotel', {
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  stars: { type: DataTypes.INTEGER },
  location: { type: DataTypes.STRING },
  photo: { type: DataTypes.STRING }
});

module.exports = Hotel;
