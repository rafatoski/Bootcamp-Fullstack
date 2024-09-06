const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: 'biblioteca',  // Nombre de tu base de datos
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

app.use(cors());
app.use(express.json());

// Ruta para obtener todas las tareas
app.get('/libros', (req, res) => {
  db.query('SELECT * FROM libros', (err, results) => {
    if (err) {
      res.status(500).send('Error al obtener los libros');
    } else {
      res.json(results);
    }
  });
});

// Ruta para agregar una nueva tarea
app.post('/tasks', (req, res) => {
  const { title, description } = req.body;
  const query = 'INSERT INTO tasks (title, description) VALUES (?, ?)';
  db.query(query, [title, description], (err) => {
    if (err) {
      res.status(500).send('Error al agregar la tarea');
    } else {
      res.status(201).send('Tarea agregada correctamente');
    }
  });
});

// Ruta para eliminar una tarea
app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM tasks WHERE id = ?';
  db.query(query, [id], (err) => {
    if (err) {
      res.status(500).send('Error al eliminar la tarea');
    } else {
      res.send('Tarea eliminada correctamente');
    }
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});