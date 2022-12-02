import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import './CardComponent.css';
import {Link, withRouter} from 'react-router-dom';
import {useState} from "react";




export default function CardComponent(props) {

  const [food, setFood] = useState(props.data)

  return (
    <>
    <Typography class="typetitle" >{props.type.description}</Typography>
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        py: 1,
        overflow: 'auto',
        backgroundColor: 'black',
        width: '99%',
        scrollSnapType: 'x mandatory',
        '& > *': {
          scrollSnapAlign: 'center',
        },
        '::-webkit-scrollbar': { display: 'none' },
      }}
    >
      
      {food.filter((item) => item.productTypeId === props.type.productTypeId).map((item) => (
        <Card
          component={Link} to={{pathname: `/products/${item.productId}`}}
          row
          key={item.name}
          variant="outlined"
          sx={{
            gap: 2,
            backgroundColor: 'white',
            width: '50%',
            marginLeft: '2vw',
            flexGrow: 0,
            minWidth:'45%',
            textDecoration: 'none',
            '--Card-padding': (theme) => theme.spacing(2),
          }}
        >
          <AspectRatio
            ratio="1"
            sx={{ minWidth: 60, borderRadius: 'sm', overflow: 'auto' }}
          >
            <img
              src={`${item.image}?h=120&fit=crop&auto=format`}
              srcSet={`${item.image}?h=120&fit=crop&auto=format&dpr=2 2x`}
              alt={item.name}
            />
          </AspectRatio>
          <Box sx={{ fontSize:'80%' }}>
            <Typography className="plain" sx={{fontFamily: 'PT Serif'}} fontWeight="bold" >{item.name}</Typography>
            <Typography className="plain" >${item.price}</Typography>
          </Box>
        </Card>
      ))}
    </Box>
    </>
  );
}
