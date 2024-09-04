import React from 'react';
import BookItem from './BookItem';

function BookList({ books, removeBook }) {
  if (books.length === 0) {
    return <p>No hay libros en la biblioteca. Agrega uno!</p>;
  }

  return (
    <ul className="book-list">
      {books.map((book) => (
        <BookItem key={book.id} book={book} removeBook={removeBook} />
      ))}
    </ul>
  );
}

export default BookList;