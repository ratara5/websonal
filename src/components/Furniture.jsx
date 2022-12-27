import React, {useEffect, useState, useContext} from 'react'

import {BookContext} from '../context/BookContext'

import {Box, Grid} from '@mui/material'

import Library from './Library';
import Desktop from './Desktop';

const Furniture = ({visibilityFurniture}) => {

  return (
    <Box id='office' display={visibilityFurniture}>
        <Grid container>
            <Grid item container xs={6} alignItems='flex-end'>
                <Library/>
            </Grid>
            <Grid item container xs={6}>
                <Desktop/>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Furniture