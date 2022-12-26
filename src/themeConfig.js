import {createTheme} from '@mui/material/styles';

import blue from '@mui/material/colors/blue'
import red from '@mui/material/colors/red'
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
            main:red[500]
        },
        typography:{
            fontFamily:"'Roboto', 'Helvetica', 'Arial', 'sans-serif'"
        }
    }
})

export default theme;