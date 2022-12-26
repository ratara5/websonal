import { useEffect, useState } from 'react';

import {Box, Grid} from '@mui/material'
import { ThemeProvider } from '@emotion/react';


import Book from './components/Book'
import Desktop from './components/Desktop'
import theme from './themeConfig'; 



const App=()=> {
  
  const [books,setBooks]=useState();
  const [descriptionBook, setDescriptionBook]=useState('Take a book for see its description');

  useEffect(()=>{
    async function getBooks(){
      const result=await fetch('http://localhost:3001/books');
      const response=await result.json();
      setBooks(response);
    }
    getBooks();
  },[]);

  function handleSelectedBook(bookId){
    const selectedBookDescription=books[bookId-1].description;
    setDescriptionBook(selectedBookDescription);
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item container xs={6} alignItems='flex-end'>
          {books && books.length>0 ? books.map((book)=><Book key={book.id} {...book} onClick={handleSelectedBook}/>):null}
        </Grid>
        <Grid item container xs={6}>
          <Desktop description={descriptionBook}/>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
