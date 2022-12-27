import React, {useContext} from 'react'
import { BookContext } from '../context/BookContext';

import { Typography, Box } from '@mui/material';

const Desktop = ({description}) => {

  const {descriptionBook}=useContext(BookContext);

  return (
    <Box 
    sx={{margin:'auto', 
        height:'25%', 
        backgroundColor:'white',
        textAlign:'center'}}>
        <Typography variant="h3">
          {descriptionBook}
        </Typography>
    </Box>
  )
}

export default Desktop