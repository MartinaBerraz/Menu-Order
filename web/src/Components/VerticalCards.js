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
const data = [
  
    {
      src: 'https://images.unsplash.com/photo-1619926340139-9a2e2245a64e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      title: 'Empanadas',
      description: '$1200',
      type: 'Entrada',
      cantidad: 1
    },
    {
      src: 'https://images.unsplash.com/photo-1635552709208-41a3d96f7bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      title: 'Hamburguesa',
      description: '$1200',
      type: 'Plato Principal'
  
    },
    {
      src: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
      title: 'Cheesecake',
      description: '$700',
      type: 'Postre'
    }
  ];

  export default function VerticalCards() {
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
          {data.map((item, index) => (
            <React.Fragment key={item.title}>
              <ListItem>
                <ListItemButton sx={{ gap: 2}}>
                  <AspectRatio
                    sx={{ flexBasis: 120, borderRadius: "sm", overflow: "auto" }}
                  >
                    <img
                      src={`${item.src}?w=120&fit=crop&auto=format`}
                      srcSet={`${item.src}?w=120&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                    />
                  </AspectRatio>
                  <ListItemContent>
                    <Typography fontWeight="md">{item.title}</Typography>
                    <Typography level="body2">{item.description}</Typography>
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
  