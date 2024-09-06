import React, { useState, useEffect } from 'react';
import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList';

import './App.css';

function App() {
  const [libros, setLibros] = useState([]);
  const [nuevoLibro, setNuevoLibro] = useState({ tittle: '', author: '', year: '' });

  // Obtener libros desde el backend
  useEffect(() => {
    fetch('http://localhost:5000/libros')
      .then((response) => response.json())
      .then((data) => setLibros(data))
      .catch((error) => console.error('Error al obtener los libros:', error));
  }, []);

  // Agregar un nuevo libro
  const agregarLibro = () => {
    fetch('http://localhost:5000/libros', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevoLibro),
    })
      .then((response) => {
        if (response.ok) {
          setLibros([...libros, { ...nuevoLibro, id: Date.now() }]);
          setNuevoLibro({ tittle: '', author: '', year: '' });
        }
      })
      .catch((error) => console.error('Error al agregar el libro:', error));
  };

  // Eliminar un libro
  const eliminarLibro = (id) => {
    fetch(`http://localhost:5000/libros/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setLibros(libros.filter((libro) => libro.id !== id));
        }
      })
      .catch((error) => console.error('Error al eliminar el libro:', error));
  };

  return (
    <div className="app">
      <h1>Gestión de Biblioteca</h1>
      <input
        type="text"
        placeholder="Título del libro"
        value={nuevoLibro.tittle}
        onChange={(e) => setNuevoLibro({ ...nuevoLibro, titulo: e.target.value })}
      />
      <input
        type="text"
        placeholder="Autor del libro"
        value={nuevoLibro.author}
        onChange={(e) => setNuevoLibro({ ...nuevoLibro, author: e.target.value })}
      />
      <input
        type="number"
        placeholder="year de publicación"
        value={nuevoLibro.year}
        onChange={(e) => setNuevoLibro({ ...nuevoLibro, year: e.target.value })}
      />
      <button onClick={agregarLibro}>Agregar Libro</button>

      <ul>
        {libros.map((libro) => (
          <li key={libro.id}>
            <h3>{libro.tittle}</h3>
            <p>Autor: {libro.author}</p>
            <p>year: {libro.year}</p>
            <button onClick={() => eliminarLibro(libro.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
