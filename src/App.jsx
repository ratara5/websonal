import {useState, useContext} from 'react';

import {Box, IconButton} from '@mui/material';
import {Light as Lamp} from '@mui/icons-material';
import { ThemeProvider } from '@emotion/react';

import Furniture from './components/Furniture';

import {themeDark} from './themeConfig';
import CssBaseline from '@mui/material/CssBaseline';


const App=()=> {

  const theme=themeDark;

  const [light, setLight]=useState(false); //Somethings maybe better out of BookContext

  const onStyle={
    color: theme.palette.accent.main,
    filter: 'drop-shadow(0 25px 35px '+theme.palette.accent.main+')'
  };

  const offStyle={
    color: theme.palette.primary.main
  };
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box 
      sx={{'& button':{m:'auto', mt:1, height:'content'}, '& svg':{height:'100px', width:'100px'}}} display='flex'>
        <IconButton style={light ? onStyle : offStyle} onClick={()=>{
          setLight(!light)}} size='large'>
          <Lamp/>
        </IconButton>
      </Box>
      {light ? 
      <Furniture visibilityFurniture='flex'/>
      :
      <Furniture visibilityFurniture='none'/>
      }
    </ThemeProvider>
  );
}

export default App;