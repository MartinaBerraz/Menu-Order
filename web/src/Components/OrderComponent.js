import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Typography } from '@mui/material';

const total =100
export default function OrderComponent() {
  const [value, setValue] = React.useState(0);
  

  return (
    <>
    <Box sx={{ width: '100%', height:'0.5vh', position:"sticky", bottom:"20vh",backgroundColor: "white"}}></Box>
    <Box sx={{ width: '100%', height:'10vh', position:"sticky", bottom:"10vh", backgroundColor: "black"}}>
      <Typography level="body2" sx={{textAlign: 'left', marginLeft:'5vw',paddingTop:'1vh', color:'white'}}>Total orden: ${total} </Typography>
      <Typography level="body2" sx={{textAlign: 'left', marginLeft:'5vw',paddingTop:'1vh',fontSize:'1rem'}}>Total pedido: ${total} </Typography>
      <Typography level="body2" fontWeight="md" sx={{textAlign: 'left',marginLeft:'6vw'}}>${total}</Typography>
    </Box>
    </>
  );
}