import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export function Book(props: any) {
  const { id } = props.routeProps.match.params;

  const [book, setBook] = useState<any>();

  useEffect(() => {
    getBook();
  }, []);

  const getBook = () => {
    fetch(`http://localhost:5000/books/${id}`, { method: 'GET' })
      .then(response => response.json())
      .then(res => setBook(res));
  }  

  if (!book) {
    return ( <div> Loading... </div> );
  }

  const { author, title } = book;

  return (
   <div>
     <h1>Book # {id}</h1>
     {title}
     &nbsp;
     {author}
   </div>
  );
}