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


  export default function FilteredVerticalCards({food}) {

    

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
            <React.Fragment key={item.name}>
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
                    <Typography fontWeight="md" sx={{fontFamily:'PT Serif', letterSpacing: '0.05rem'}} >{item.name}</Typography>
                    <Typography level="body2">${item.price}</Typography>
                    </Box>

                  </ListItemContent>
                </ListItemButton>
              </ListItem>
              {index !== food.length - 1 && <ListDivider />}
            </React.Fragment>
          ))}
        </List>
      </Sheet>
    );
  }
  