
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Rating from '@mui/material/Rating';


export default function Modal () {

  return (
    <Card raised>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" >
        Sales Rep Name: <span color="text.primary">Darren Kaplan</span>
        </Typography>
        <Typography variant="h4" component="div">
        B2B - 2023 - New Life Financial Inc
        </Typography>
        <Divider variant="middle" />

        <div>
          <Grid container spacing={3} justifyContent="center" sx={{ paddingTop: 5 }}  >
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              amount: 3690
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              product: "Mini-Plan"
            </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
              stage: 1. No Conversation
          </Typography>
         

          </Grid>
        </div>
    
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>  
        <Rating name="read-only" value={3} readOnly />
      </CardContent>
    </Card>

        

)
  }
  



    


// const card = (
//   <React.Fragment>
//     <CardContent>
//       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//         Word of the Day
//       </Typography>
//       <Typography variant="h5" component="div">
//         be{bull}nev{bull}o{bull}lent
//       </Typography>
//       <Typography sx={{ mb: 1.5 }} color="text.secondary">
//         adjective
//       </Typography>
//       <Typography variant="body2">
//         well meaning and kindly.
//         <br />
//         {'"a benevolent smile"'}
//       </Typography>
//     </CardContent>
//     <CardActions>
//       <Button size="small">Learn More</Button>
//     </CardActions>
//   </React.Fragment>
// );

// export default function OutlinedCard() {
//   return (
//     <Box sx={{ minWidth: 275 }}>
//       <Card variant="outlined">{card}</Card>
//     </Box>
//   );
// }


//   )

// }




