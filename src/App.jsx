import { useState } from 'react';

import {Box, Button} from '@mui/material'
import { ThemeProvider } from '@emotion/react';

import theme from './themeConfig'; 
import Furniture from './components/Furniture';

const App=()=> {

  const [visibility, setVisibility]=useState();
  const [buttonText, setButtonText]=useState();
  
  return (
    <ThemeProvider theme={theme}>
      <Box textAlign='center'>
        <Button variant='outlined' onClick={()=>{
          setVisibility(!visibility)}}>
            {visibility ? '¡OFF!' : '¡ON!'}
        </Button>
      </Box>
      {visibility ? 
      <Furniture myDisplay='block'/>
      :
      <Furniture myDisplay='none'/>
      }
    </ThemeProvider>
  );
}

export default App;
