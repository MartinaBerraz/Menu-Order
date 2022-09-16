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
  
      <ButtonGroup variant="contained" sx={{backgroundColor: '#952B3A', color:'white',borderRadius:'10%', alignContent:'center',marginTop:'5%'}} aria-label="outlined primary button group">
        <IconButton  sx={{backgroundColor:'#952B3A'}}><AddIcon /></IconButton>
        <Typography level="h1" fontSize='1.5rem' sx={{marginInline:'1vw', color:'black'}}> 2 </Typography>
        <IconButton sx={{backgroundColor:'#952B3A'}}><RemoveIcon /></IconButton>
      </ButtonGroup>
      <Button variant="solid" className='button' sx={{backgroundColor: 'white', color: 'black',width:'40vw', marginInline:'3%',marginBottom:'3.5%'}}>Agregar $100</Button>

      </ Paper>

    </>
  );
}