import React, {useContext} from 'react'
import { BookContext } from '../context/BookContext';

import { Typography, Box, Icon } from '@mui/material';

const Desktop = () => {

  const {descriptionBook}=useContext(BookContext);

  return (
    <Box 
    sx={{m:'auto', 
        height:'25%', 
        backgroundColor:descriptionBook.bookColor,
        borderRadius:3,
        textAlign:'center'}}>
        <Icon sx={{color:'white'}}>
          {descriptionBook.bookIcon}
        </Icon>
        <Typography variant="h3">
          {descriptionBook.bookDescription}
        </Typography>
    </Box>
  )
}

export default Desktop