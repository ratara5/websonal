import React from 'react'

import { Typography, Box } from '@mui/material';

const Desktop = ({description}) => {
  return (
    <Box 
    sx={{margin:'auto', 
        height:'25%', 
        backgroundColor:'white',
        textAlign:'center'}}>
        <Typography variant="h3">
          {description}
        </Typography>
    </Box>
  )
}

export default Desktop