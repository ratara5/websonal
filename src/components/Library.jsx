import React, {useContext} from 'react';

import {Grid} from '@mui/material'

import { BookContext } from '../context/BookContext';

import Book from './Book';

const Library = () => {
  
  const {books}=useContext(BookContext);

  return (
    <Grid container alignItems='flex-end' spacing={5}>
        {books && books.length>0 ? 
        books.map((book)=>
        <Book key={book.id} {...book}/>):
        null}
    </Grid>
  )
}

export default Library