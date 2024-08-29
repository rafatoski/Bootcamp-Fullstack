const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Crea una instancia de Express
const app = express();
const PORT = 3000;

// Configura el directorio de uploads
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configura el motor de almacenamiento usando multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// Inicializa el middleware de multer
const upload = multer({ storage });

// Sirve un formulario HTML básico para la carga de archivos
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Maneja la carga de archivos mediante POST
app.post('/upload', upload.single('file'), (req, res) => {
  if (req.file) {
    res.send(`Archivo cargado exitosamente: ${req.file.filename}`);
  } else {
    res.status(400).send('Error al cargar el archivo');
  }
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});