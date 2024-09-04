import React, { useState, useEffect } from 'react';
import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList';
import './App.css';
 
function App() {
  const [books, setBooks] = useState([]);
 
  // Cargar libros desde localStorage al iniciar la aplicación
  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books'));
    if (storedBooks) setBooks(storedBooks);
  }, []);
 
  // Guardar libros en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);
 
  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };
 
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
 
  return (
<div className="app">
<h1>Gestión de Biblioteca</h1>
<AddBookForm addBook={addBook} />
<BookList books={books} removeBook={removeBook} />
</div>
  );
}
 
export default App;