import React, {useContext} from 'react';
import { BookContext } from '../context/BookContext';

import Book from './Book';

const Library = () => {
  const {books}=useContext(BookContext);

  return (
    <>
        {books && books.length>0 ? 
        books.map((book)=>
        <Book key={book.id} {...book}/>):
        null}
    </>
  )
}

export default Library