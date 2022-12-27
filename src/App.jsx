import {useState} from 'react';

import {Box, Button} from '@mui/material'
import { ThemeProvider } from '@emotion/react';

import theme from './themeConfig'; 
import Furniture from './components/Furniture';

const App=()=> {

  const [visibility, setVisibility]=useState();//Somethings maybe better out of BookContext
  
  return (
    <ThemeProvider theme={theme}>
      <Box textAlign='center' sx={{'& button':{m:'auto', mt:1}}} display='flex'>
        <Button variant='outlined' onClick={()=>{
          setVisibility(!visibility)}} size='large'>
            {visibility ? '¡OFF!' : '¡ON!'
          }
        </Button>
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