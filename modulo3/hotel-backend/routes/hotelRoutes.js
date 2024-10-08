const express = require('express');
const router = express.Router();
const Hotel = require('../models/Hotel');
const Habitacion = require('../models/Habitacion');

// Ruta para crear un nuevo hotel
router.post('/hotels', async (req, res) => {
  try {
    const { name, description, stars, location, photo } = req.body;
    const hotel = await Hotel.create({ name, description, stars, location, photo });
    res.status(201).json(hotel);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Ruta para listar todos los hoteles
router.get('/hotels', async (req, res) => {
  try {
    const hotels = await Hotel.findAll();
    res.status(200).json(hotels);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Ruta para obtener las habitaciones de un hotel específico
router.get('/hotels/:hotelId/habitaciones', async (req, res) => {
  try {
    const { hotelId } = req.params;
    const habitaciones = await Habitacion.findAll({ where: { hotelId } });
    res.status(200).json(habitaciones);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


// Ruta para crear una nueva habitación
router.post('/habitaciones', async (req, res) => {
  try {
    const { name, number, capacity, beds, description, photo, hotelId } = req.body;
    const habitacion = await Habitacion.create({ name, number, capacity, beds, description, photo, HotelId: hotelId });
    res.status(201).json(habitacion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
