import {useState} from 'react';

import {Box, Button, IconButton} from '@mui/material';
import {Light} from '@mui/icons-material';
import { ThemeProvider } from '@emotion/react';

import {themeLight} from './themeConfig'; 
import {themeDark} from './themeConfig';
import Furniture from './components/Furniture';

import CssBaseline from '@mui/material/CssBaseline';

const App=()=> {

  const [visibility, setVisibility]=useState(false);//Somethings maybe better out of BookContext
  const [light, setLight]=useState(false);

  const visibleStyle = {
    color: 'yellow',
    boxShadow: '2px 2px 2px yellow',
  };

  const noVisibleStyle = {
    color: 'blue'
  };
  
  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />
      <Box 
      sx={{'& button':{m:'auto', mt:1, height:'content'}, '& svg':{height:'100px', width:'100px'}}} display='flex'>
        <IconButton style={visibility ? visibleStyle : noVisibleStyle} onClick={()=>{
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