import { useEffect, useState } from 'react';

import {Box, Grid} from '@mui/material'

import Book from './components/Book'
import Desktop from './components/Desktop'

const App=()=> {
  const [books,setBoooks]=useState();

  useEffect(()=>{
    async function getBooks(){
      const result=await fetch('http://localhost:3001/books');
      const response=await result.json();
      setBoooks(response);
    }
    getBooks();
  },[]);

  return (
    <div>
      <Grid container>
        <Grid item container xs={6} alignContent='baseline' spacing={6}>
          {books && books.length>0 ? books.map((book)=><Book key={book.id} {...book}/>):null}
        </Grid>
        <Grid item container xs={6}>
          <Desktop/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
