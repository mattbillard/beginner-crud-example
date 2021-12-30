import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function List() {
  const [books, setBooks] = useState<any>();

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = () => {
    fetch('http://localhost:5000/books', { method: 'GET' })
      .then(res => res.json())
      .then(books => setBooks(books));
  }  

  const deleteBook = (id: number) => {
    fetch(`http://localhost:5000/books/${id}`, { method: 'DELETE' })
      .then(res => res.json())
      .then((book) => {
        console.log(book);
        getBooks();
      });
  }

  if (!books) {
    return ( <div> Loading... </div> );
  }

  return (
    <div>
      <h1>List</h1>
      <ul>
         {books.map((book: any, idx: number) => {
           const { author, id, title } = book;
           return (
             <li key={`${author}-${title}`}>
               {id}) 
               &nbsp;
               <Link to={`/books/${id}`}>
                {title} by {author} 
               </Link>
               &nbsp;
               <a href="#" onClick={() => deleteBook(id)}>Delete</a>
             </li>
           )
         })}
      </ul>
    </div>
  );
}