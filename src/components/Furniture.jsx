import {Box, Grid} from '@mui/material'

import Library from './Library';
import Desktop from './Desktop';

import {ReactComponent as Table} from '../assets/table.svg'

const Furniture = ({visibilityFurniture}) => {

  return (
    <Box id='office' display={visibilityFurniture} sx={{}}>
        <Grid container alignItems='flex-end'>
            <Grid item container xs={6}>
                <Library/>
            </Grid>
            <Grid className='workspace' item container xs={6}>
                <Desktop/>
                <Box 
                  sx={
                        {
                        m:'auto',
                        mb:0,
                        '& svg':{height:'500px', width:'500px'}, 
                        '& g':{fill:'#FFFFFF !important'}
                        }
                      }>
                  <Table/>
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Furniture