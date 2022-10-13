import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Typography, Paper, ButtonGroup, Button, IconButton } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const total =100
export default function OrderComponent() {
  const [value, setValue] = React.useState(0);
  

  return (
    <>
    <Paper elevation={5} sx={{ width: '100%', height:'13vh', position:"sticky", bottom:"7vh", backgroundColor: "black"}}>
      <Paper sx={{height:'0.3vh',backgroundColor:'white'}} />
      <ButtonGroup variant="contained" sx={{backgroundColor: '#952B3A', color:'white',borderRadius:'10px', alignContent:'center',marginTop:'5%'}} aria-label="outlined primary button group">
        <IconButton  sx={{backgroundColor:'#952B3A'}}><RemoveIcon /></IconButton>
        <Typography  fontSize='2.5vh' sx={{marginInline:'1vw', color:'black', lineHeight: '2.5rem'}}> 2 </Typography>
        <IconButton sx={{backgroundColor:'#952B3A'}}><AddIcon /></IconButton>
      </ButtonGroup>
      <Button variant="solid" className='button' sx={{backgroundColor: 'white',borderRadius:'10px', color: 'black',width:'40vw', marginInline:'3%',marginBottom:'3.5%'}}>Agregar $100</Button>

      </ Paper>

    </>
  );
}