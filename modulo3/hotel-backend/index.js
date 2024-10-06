const express = require('express');
const sequelize = require('./config/database');
const Hotel = require('./models/Hotel');
const Habitacion = require('./models/Habitacion');
const hotelRoutes = require('./routes/hotelRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use('/api', hotelRoutes);

// Sincronizar modelos
sequelize.sync({ force: true }).then(() => {
  console.log('Base de datos sincronizada');
});

// Rutas básicas
app.get('/', (req, res) => {
  res.send('API de Hotel lista');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
