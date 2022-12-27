import React from 'react'

import { Icon, Typography, Grid, Box } from '@mui/material';
import {styled} from '@mui/material/styles';


const wrapperGrid={
  transform: 'rotate(180deg)',
  margin: 'unset',
  border: '2px solid gray',
  borderRadius:'15px',
  '&:hover':{
    backgroundColor:'gray',
    opacity:'0.8',
    cursor:'pointer'
  }
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

const Book = ({id, name, description, styleShape, styleFont, icon, onClick}) => {
  return (
      <Grid 
        item xs={3} 
        sx={wrapperGrid}
        style={styleShape}
        onClick={()=>onClick(id, description)}
        >
            <Box textAlign='center' sx={{transform:'rotate(180deg)'}}>
              <Icon>
                {icon}
              </Icon>
            </Box>
            <Typography variant="h5" sx={wrapperTypograhy} style={styleFont}>
                {name}
            </Typography>
      </Grid>
  )
}

export default Book