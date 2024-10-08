const { Sequelize } = require('sequelize');
const Hotel = require('./Hotel');
const Habitacion = require('./Habitacion');

// Configuración de la conexión a PostgreSQL
const sequelize = new Sequelize('postgres://postgres:Psql123@localhost:5432/hotel_booking', {
  dialect: 'postgres',
  logging: false, // Opción para evitar logs en la consola
});

// Inicialización de los modelos
const models = {
  Hotel: Hotel,
  Habitacion: Habitacion,
};

// Asociaciones
Hotel.hasMany(Habitacion, { foreignKey: 'hotelId' });
Habitacion.belongsTo(Hotel, { foreignKey: 'hotelId' });

// Sincronización de la base de datos
sequelize.sync()
  .then(() => {
    console.log('Base de datos sincronizada');
  })
  .catch(error => {
    console.error('Error al sincronizar la base de datos:', error);
  });

module.exports = { sequelize, models };
