import React, { useState } from 'react';

function AddBookForm({ addBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim() || !year.trim()) return;

    const newBook = {
      id: Date.now(),
      title,
      author,
      year,
    };

    addBook(newBook);
    setTitle('');
    setAuthor('');
    setYear('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-book-form">
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Autor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Año de Publicación"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        required
      />
      <button type="submit">Agregar Libro</button>
    </form>
  );
}

export default AddBookForm;