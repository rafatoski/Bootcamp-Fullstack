const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Habitacion = sequelize.define('Habitacion', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  number: { type: DataTypes.INTEGER, allowNull: false },
  capacity: { type: DataTypes.INTEGER, allowNull: false },
  beds: { type: DataTypes.INTEGER, allowNull: false },
  description: { type: DataTypes.TEXT },
  photo: { type: DataTypes.STRING },
  hotelId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'hotels',
      key: 'id',
    },
  },
}, {
  tableName: 'habitacions',
  timestamps: true
});

module.exports = Habitacion;
