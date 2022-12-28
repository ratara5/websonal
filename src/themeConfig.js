import {createTheme} from '@mui/material/styles';

import blue from '@mui/material/colors/blue'
import yellow from '@mui/material/colors/yellow'
import '@fontsource/roboto';

const theme=createTheme({
    palette:{
        primary: blue,
        secondary:{
            light:'#64ffda',
            main:'#1de9b6',
            dark:'#00bfa5',
            ContrastText:'#fff'
        },
        accent:{
            main:yellow[100]
        },
        typography:{
            fontFamily:"'Roboto', 'Helvetica', 'Arial', 'sans-serif'"
        }
    }
})

export default theme;