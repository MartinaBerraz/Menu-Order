import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemButton from '@mui/joy/ListItemButton';
import './VerticalCards.css'
import { ButtonGroup, Button, IconButton, Box } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
const data = [
  
    {
      src: 'https://images.unsplash.com/photo-1619926340139-9a2e2245a64e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      title: 'Empanadas',
      price: 1200,
      type: 'Entrada',
      quantity: 1,
      total: 1200
    },
    {
      src: 'https://images.unsplash.com/photo-1635552709208-41a3d96f7bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      title: 'Hamburguesa',
      price: 1500,
      type: 'Plato Principal',
      quantity: 1,
      total: 1500
  
    },
    {
      src: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
      title: 'Cheesecake',
      price: 700,
      type: 'Postre',
      quantity: 2,
      total: 1400
    }
  ];

  export default function VerticalCards() {

    const [food, setFood] = React.useState(data)

    
    

    return (
      <Sheet
        variant="outlined"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          width: '100%',
          borderRadius: "sm",
          height: '100vh',
          color:'white',
          borderColor: 'black'
        }}
      >
        <List sx={{ py: "var(--List-divider-gap)" }}>
          {food.map((item, index) => (
            <React.Fragment key={item.title}>
              <ListItem>
                <ListItemButton sx={{ gap: 2}}>
                  <AspectRatio
                    sx={{ flexBasis: 120, borderRadius: "sm", overflow: "auto" }}
                  >
                    <img
                      src={`${item.image}?w=120&fit=crop&auto=format`}
                      srcSet={`${item.image}?w=120&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                    />
                  </AspectRatio>
                  <ListItemContent sx={{boxSizing: 'border-box'}}>
                    <Box sx={{display: 'inline-block'}} >
                    <Typography fontWeight="md" sx={{fontFamily:'PT Serif', letterSpacing: '0.05rem'}} >{item.title}</Typography>
                    <Typography level="body2">${item.price}</Typography>
                    </Box>
                    <Box>
                    <ButtonGroup variant="contained" sx={{backgroundColor: 'white',color:'white',borderRadius:'10px',marginTop:'5%', height:'2rem'}} aria-label="outlined primary button group">
                        <IconButton  sx={{backgroundColor:'white'}}><RemoveIcon sx={{fontSize:'1rem'}}  /></IconButton>
                        <Typography  fontSize='1rem' sx={{marginInline:'1vw', color:'black', lineHeight: '2rem'}}> {item.quantity} </Typography>
                        <IconButton onClick = {()=>setFood({...item, quantity: item.quantity+=1}) }sx={{backgroundColor:'white'}}><AddIcon sx={{fontSize:'1rem'}} /></IconButton>
                    </ButtonGroup>
                    </Box>

                  </ListItemContent>
                </ListItemButton>
              </ListItem>
              {index !== data.length - 1 && <ListDivider />}
            </React.Fragment>
          ))}
        </List>
      </Sheet>
    );
  }
  