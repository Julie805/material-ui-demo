import React from 'react';
import { Button, Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, GlobalStyles } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import useStyles from './styles'




const App = () => {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant ="h6"> Photo Album </Typography>        
        </Toolbar>
      </AppBar>
      <main>
          <div className={classes.container}>
            <Container maxWidth="sm">
              <Typography variant="h2" align="center" color="textPrimary" gutterBottom style={{marginTop:"100px"}}> Photo Album</Typography>
              <Typography variant="h5"  align="center" color="textSecondary" paragraph> You are totally rocking this new set of dependencies. Really great job.</Typography>

            </Container>
            <div>
              <Grid container spacing={2} justifyContent="center" >
                <Grid item>
                  <Button variant="contained" color="primary">See my photos</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">Yay</Button>
                </Grid>
              </Grid>
            </div>
          </div>

      </main>
     
    </div>
  )

}

export default App;




