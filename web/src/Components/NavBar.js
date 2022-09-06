import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import './NavBar.css';

export default function NavBar() {
  const [value, setValue] = React.useState(0);
  

  return (
    <Box sx={{ width: '100%', mt:3, position:"sticky", bottom:"0px", backgroundColor: "black"}}>
      <BottomNavigation
        className='Bar'
        sx={{backgroundColor: 'black', color: 'white'}}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction sx={{color: 'white'}} className='icon' label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction sx={{color: 'white'}} className='icon' label="Buscar" icon={<SearchIcon />} />
        <BottomNavigationAction sx={{color: 'white'}} className='icon' label="Pedir" icon={<RestaurantIcon />} />
      </BottomNavigation>
    </Box>
  );
}