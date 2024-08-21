const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
 
app.use(express.json()); // Middleware para parsear JSON
 
// Ruta de prueba
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});
 
app.listen(PORT, () => {
    console.log('Servidor corriendo en: http://localhost:${PORT}');
});