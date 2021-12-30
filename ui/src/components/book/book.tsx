import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export function Book(props: any) {
  const { id } = props.routeProps.match.params;
  const isEdit = id ? true : false;
  let history = useHistory();

  const [book, setBook] = useState<any>({});

  useEffect(() => {
    if (isEdit) {
      getBook();
    }
  }, []);

  const getBook = () => {
    fetch(`http://localhost:5000/books/${id}`, { method: 'GET' })
      .then(response => response.json())
      .then(res => setBook(res));
  }  

  const handleSubmit = (event: any) => {
    event.preventDefault();
    saveBook();
  }

  const saveBook = () =>  {
    const body = JSON.stringify(book);

    // Edit 
    if (isEdit) {
      fetch(`http://localhost:5000/books/${id}`, { 
        method: 'PUT', 
        body,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
       })
        .then(res => res.json())
        .then(console.log);

      // Create
    } else {
      fetch(`http://localhost:5000/books/`, { 
        method: 'POST', 
        body,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
       })
        .then(res => res.json())
        .then(book => {
          const url = `/books/${book.id}`
          history.push(url);
        });
    }
  }

  const setValue = (key: string, value: string) => {
    const newBook = {...book};
    newBook[key] = value;
    setBook(newBook);
  }

  if (!book) {
    return ( <div> Loading... </div> );
  }

  const { author, title } = book;

  return (
   <form onSubmit={handleSubmit}>
     <h1>{id}) {title}</h1>
     title: <br />
     <input type="text" value={title} onChange={(event: any) => setValue('title', event.target.value)} />
     <br /><br />

     author: <br />
     <input type="text" value={author} onChange={(event: any) => setValue('author', event.target.value)} />

     <br /><br />
     <button type="submit">Save</button>
   </form>
  );
}