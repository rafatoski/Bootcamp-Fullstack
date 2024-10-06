const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Hotel = require('./Hotel');

const Habitacion = sequelize.define('Habitacion', {
  name: { type: DataTypes.STRING, allowNull: false },
  number: { type: DataTypes.INTEGER, allowNull: false },
  capacity: { type: DataTypes.INTEGER },
  beds: { type: DataTypes.INTEGER },
  description: { type: DataTypes.TEXT },
  photo: { type: DataTypes.STRING }
});

// Relaciones un hotel tiene muchas habitaciones
Hotel.hasMany(Habitacion);
Habitacion.belongsTo(Hotel);

module.exports = Habitacion;
