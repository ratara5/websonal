import {useState} from 'react';

import {Box, IconButton} from '@mui/material';
import {Light as Lamp} from '@mui/icons-material';
import { ThemeProvider } from '@emotion/react';

import {themeDark} from './themeConfig';
import Furniture from './components/Furniture';

import CssBaseline from '@mui/material/CssBaseline';

const App=()=> {

  const [light, setLight]=useState(false); //Somethings maybe better out of BookContext

  const onStyle=(themeS)=>{return{
    color: themeS.palette.accent,
    boxShadow: '2px 2px 2px yellow',
  }};

  const offStyle=(themeS)=>{return{
    color: themeS.palette.primary
  }};
  
  return (
    <ThemeProvider theme={themeDark}>
      <CssBaseline />
      <Box 
      sx={{'& button':{m:'auto', mt:1, height:'content'}, '& svg':{height:'100px', width:'100px'}}} display='flex'>
        <IconButton style={light ? onStyle(theme) : offStyle(theme)} onClick={()=>{
          setLight(!light)}} size='large'>
          <Lamp/>
        </IconButton>
      </Box>
      {light ? 
      <Furniture visibilityFurniture='block'/>
      :
      <Furniture visibilityFurniture='none'/>
      }
    </ThemeProvider>
  );
}

export default App;