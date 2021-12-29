import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export function List() {
  const [books, setBooks] = useState<any>();

  useEffect(() => {
    fetch('http://localhost:5000/books', { method: 'GET' })
      .then(response => response.json())
      .then(res => setBooks(res));
  }, []);

  if (!books) {
    return null;
  }

  return (
    <div>
      <h1>List</h1>
      <ul>
         {books.map((book: any) => {
           const { author, title } = book;
           return (
             <li key={`${author}-${title}`}>{title} : {author}</li>
           )
         })}
      </ul>
    </div>
  );
}