const { Sequelize } = require('sequelize');
 
// Configura la conexión con la base de datos
const sequelize = new Sequelize('nombre_base_de_datos', 'usuario', 'contraseña', {
    host: 'localhost',
    dialect: 'mysql', // Cambia a 'mysql', 'sqlite', etc. dependiendo de tu base de datos
});
 
module.exports = sequelize;