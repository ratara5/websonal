import React, {useContext} from 'react'
import { BookContext } from '../context/BookContext';

import { Typography, Box, Icon } from '@mui/material';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import ElectricalEngineering from '../pages/ElectricalEngineering';
import GraphicDesign from '../pages/GraphicDesign';

const Desktop = () => {

  const {descriptionBook}=useContext(BookContext);

  return (
    <Router>

      <Box 
      sx={{m:'auto', 
          height:'25%', 
          backgroundColor:descriptionBook.bookColor,
          borderRadius:3,
          textAlign:'center'}}>
          
          <Icon sx={{color:'white'}}>
            {descriptionBook.bookIcon}
          </Icon>
          <Typography variant="h3">
            <Link to={`/book-${descriptionBook.bookId}`}>
              {descriptionBook.bookDescription}
            </Link>
          </Typography>   
      </Box>

    

      <Routes>
        <Route path="/book-1" element={<ElectricalEngineering />}/>
        <Route path="/book-2" element={<GraphicDesign />}/>
      </Routes>

    

    </Router>

  )
}


export default Desktop