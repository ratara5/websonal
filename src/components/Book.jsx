import React from 'react'

import { Typography, Grid, Box } from '@mui/material';
import {styled} from '@mui/material/styles';


const wrapperGrid={
  transform: 'rotate(180deg)',
  margin: 'unset',
}

const wrapperTypograhy={
    writingMode: 'vertical-lr',
    padding: '1px',
    margin:'auto',
    height:'min-content',
    wordWrap:'break-word',
    boxSizing: 'inherit',
    hyphens: 'auto'
  }

const Book = ({id, name, styleShape, styleFont, onClick}) => {
  return (
      <Grid 
        item xs={3} 
        sx={wrapperGrid}
        style={styleShape}
        onClick={()=>onClick(id)}
        >
            <Typography variant="h5" sx={wrapperTypograhy} style={styleFont}>
                {name}
            </Typography>
      </Grid>
  )
}

export default Book