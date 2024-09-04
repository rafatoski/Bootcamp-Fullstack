import React from 'react';

function BookItem({ book, removeBook }) {
  return (
    <li className="book-item">
      <div>
        <strong>{book.title}</strong> por {book.author} ({book.year})
      </div>
      <button onClick={() => removeBook(book.id)}>Eliminar</button>
    </li>
  );
}
export default BookItem;