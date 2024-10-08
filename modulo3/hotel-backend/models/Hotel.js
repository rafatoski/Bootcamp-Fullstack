const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Hotel = sequelize.define('Hotel', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  stars: { type: DataTypes.INTEGER },
  location: { type: DataTypes.STRING },
  photo: { type: DataTypes.STRING }
}, {
  tableName: 'hotels',
  timestamps: true,
  createdAt: 'created_at', // Cambiar aquí
  updatedAt: 'updated_at'
});

module.exports = Hotel;
