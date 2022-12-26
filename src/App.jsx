import { useEffect, useState } from 'react';

import {Box, Grid} from '@mui/material'
import { ThemeProvider } from '@emotion/react';


import Book from './components/Book'
import Desktop from './components/Desktop'
import theme from './themeConfig'; 

const App=()=> {
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
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item container xs={6} alignContent='baseline' spacing={6}>
          {books && books.length>0 ? books.map((book)=><Book key={book.id} {...book}/>):null}
        </Grid>
        <Grid item container xs={6}>
          <Desktop description={setBooks}/>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
