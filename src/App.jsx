import React from 'react';
import { Button, Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, GlobalStyles, collapseClasses, makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import Modal from './Modal'
//import MyTable from './MyTable'
// import useStyles from './styles'




const App = () => {
  // const classes = useStyles();
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
          <div >
            <Container maxWidth="sm">
              <Typography variant="h2" align="center" color="textPrimary" gutterBottom style={{marginTop:"100px"}}> Photo Album</Typography>
              <Typography variant="h5"  align="center" color="textSecondary" paragraph> You are totally rocking this new set of dependencies. Really great job.</Typography>

            </Container>
            <div>
              <Grid container spacing={2} justifyContent="center" >
                <Grid item>
                  <Button variant="contained" color="primary">Push ME</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">Yay</Button>
                </Grid>
              </Grid>
            </div>
          </div>
        
      </main>
 
     <Container  maxWidth="md">
      <Modal />
     </Container>
        
        
    </div>
  )
}

export default App;




