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
    
  },
  [`& .${classes.content}`]: {
    color: theme.palette.common.white,
    writingMode: 'vertical-lr',
    padding: '5px',
    margin:"auto",
  },
}))

const Book = ({name}) => {
  return (
    
      <Grid item xs={3}>
        <Root>
          <div className={classes.cta}>
              <Typography variant="h5" className={classes.content}>
                  {name}
              </Typography>
          </div>
        </Root>
    </Grid>
  )
}

export default Book