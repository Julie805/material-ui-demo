import React from 'react';
import { GlobalStyles } from '@mui/material';

// create a hook called useStyles that is equal to a function called makeStyles. Inside that function we use  a callback fucntion which returns an object that contains all the styles:
const useStyles = GlobalStyles((theme) => ({
  container: {
    background: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
    //can also just use something like padding: 10px
  }

}));

export default useStyles
