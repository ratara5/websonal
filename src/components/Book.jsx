import React from 'react'

import { Typography, Grid } from '@mui/material';
import {styled} from '@mui/material/styles';

const PREFIX = 'MyBook';
const classes = {
  root: `${PREFIX}-root`,
  cta: `${PREFIX}-cta`,
  content: `${PREFIX}-content`,
}
const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main
  },
  [`& .${classes.cta}`]: {
    transform: 'rotate(180deg)',
    marginLeft: '5px',
    height: '35%',
    backgroundColor: 'purple',
    alignSelf: 'self-end'
  },
  [`& .${classes.content}`]: {
    color: theme.palette.common.white,
    writingMode: 'vertical-lr',
    padding: '5px',
    margin:'auto',
  },
}))

const Book = ({name, styleContainer, styleFont}) => {
  return (
    
      <Grid item xs={3} style={{'align-self':'self-end'}} >
        <Root>
          <div className={classes.cta} style={styleContainer}>
              <Typography variant="h5" className={classes.content} style={styleFont}>
                  {name}
              </Typography>
          </div>
        </Root>
    </Grid>
  )
}

export default Book