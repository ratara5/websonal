import React, {useEffect, useState} from 'react'

import {Box, Grid} from '@mui/material'

import Library from './Library';
import Desktop from './Desktop';

const Furniture = ({myDisplay}) => {

  
  const [descriptionBook, setDescriptionBook]=useState('Take a book for see its description');


  function handleSelectedBook(bookId, bookDescription) {
    const selectedBookDescription=bookDescription;
    setDescriptionBook(selectedBookDescription);
  }

  return (
    <Box id='office' display={myDisplay}>
        <Grid container>
            <Grid item container xs={6} alignItems='flex-end'>
                <Library handleSelectedBook={handleSelectedBook}/>
            </Grid>
            <Grid item container xs={6}>
                <Desktop description={descriptionBook}/>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Furniture