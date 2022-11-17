import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import './CardComponent.css';
import {Link, withRouter} from 'react-router-dom';

const types= ['Entradas', 'Plato Principal', 'Postres']

const food = [
  
  {
    src: 'https://images.unsplash.com/photo-1619926340139-9a2e2245a64e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    title: 'Empanadas',
    description: '$1200',
    type: 'Entrada'
  },
  {
    src: 'https://images.unsplash.com/photo-1603208785984-cdf985beca7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=697&q=80',
    title: 'Sopa Calabaza',
    description: '$1200',
    type: 'Entrada'
  },

  {
    src: 'https://images.unsplash.com/photo-1499125562588-29fb8a56b5d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
    title: 'Salmón',
    description: '$1900',
    type: 'Plato Principal',
  },

  {
    src: 'https://images.unsplash.com/photo-1635552709208-41a3d96f7bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    title: 'Hamburguesa',
    description: '$1200',
    type: 'Plato Principal'

  },
  {
    src: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    title: 'Casuela de mariscos',
    description: '$200',
    type: 'Plato Principal'

  },
  {
    src: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
    title: 'Cheesecake',
    description: '$700',
    type: 'Postre'
  },
  {
    src: 'https://images.unsplash.com/photo-1505252929202-c4f39cda4d49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    title: 'Volcan chocolate',
    description: '$700',
    type: 'Postre'
  },
  {
    src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    title: 'Helado',
    description: '$500',
    type: 'Postre'
  },
];


export default function CardComponent(props) {

  return (
    <>
    <Typography class="typetitle" >{props.type}</Typography>
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
      {food.filter((item) => item.type === props.type).map((item) => (
        <Card
          component={Link} to={{pathname: '/Product'}}
          row
          key={item.title}
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
              src={`${item.src}?h=120&fit=crop&auto=format`}
              srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
            />
          </AspectRatio>
          <Box sx={{ fontSize:'80%' }}>
            <Typography className="plain" sx={{fontFamily: 'PT Serif'}} fontWeight="bold" >{item.title}</Typography>
            <Typography className="plain" >{item.description}</Typography>
          </Box>
        </Card>
      ))}
    </Box>
    </>
  );
}
