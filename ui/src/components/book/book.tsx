import React, { useEffect, useState } from "react";

export function Book(props: any) {
  const { id } = props.routeProps.match.params;

  const [book, setBook] = useState<any>({});

  useEffect(() => {
    getBook();
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
    debugger;
    fetch(`http://localhost:5000/books/${id}`, { 
      method: 'PUT', 
      body,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
     })
      .then(response => response.json())
      .then(res => {debugger;});
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