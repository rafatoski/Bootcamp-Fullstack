const express = require('express');
const Hotel = require('../models/Hotel');
const router = express.Router();

// Ruta para crear un hotel
router.post('/hoteles', async (req, res) => {
  try {
    const hotel = await Hotel.create(req.body);
    res.status(201).json(hotel);
  } catch (error) {
    res.status(500).json({ error: 'Error creando el hotel' });
  }
});

// Ruta para obtener todos los hoteles
router.get('/hoteles', async (req, res) => {
  try {
    const hoteles = await Hotel.findAll();
    res.json(hoteles);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo los hoteles' });
  }
});

module.exports = router;
