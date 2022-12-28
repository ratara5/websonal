import {useState} from 'react';

import {Box, Button, IconButton} from '@mui/material';
import {Light} from '@mui/icons-material';
import { ThemeProvider } from '@emotion/react';

import theme from './themeConfig'; 
import Furniture from './components/Furniture';

const App=()=> {

  const [visibility, setVisibility]=useState();//Somethings maybe better out of BookContext
  
  return (
    <ThemeProvider theme={theme}>
      <Box 
      sx={{'& button':{m:'auto', mt:1, height:'content'}, '& svg':{height:'100px', width:'100px'}}} display='flex'>
        <IconButton color={visibility ? 'accent' : 'primary'} onClick={()=>{
          setVisibility(!visibility)}} size='large'>
          <Light/>
        </IconButton>
      </Box>
      {visibility ? 
      <Furniture visibilityFurniture='block'/>
      :
      <Furniture visibilityFurniture='none'/>
      }
    </ThemeProvider>
  );
}

export default App;