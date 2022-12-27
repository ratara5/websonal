import React, {useEffect, useState} from 'react';

import Book from './Book';

const Library = ({handleSelectedBook}) => {

  const [books,setBooks]=useState();

  useEffect(()=>{
    async function getBooks(){
      const result=await fetch('http://localhost:3001/books');
      const response=await result.json();
      setBooks(response);
    }
    getBooks();
    },[]);

  return (
    <>
        {books && books.length>0 ? 
        books.map((book)=>
        <Book key={book.id} {...book} onClick={handleSelectedBook}/>):
        null}
    </>
  )
}

export default Library