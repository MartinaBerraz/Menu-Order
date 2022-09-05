import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import './CardComponent.css';

const types= ['Entradas', 'Plato Principal', 'Postres']

const food = [
  {
    src: 'https://images.unsplash.com/photo-1579783411194-f697db862dcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    title: 'Rabas',
    description: '$2000',
    type: 'Entrada'
  },
  {
    src: 'https://images.unsplash.com/photo-1603208785984-cdf985beca7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=697&q=80',
    title: 'Sopa Calabaza',
    description: '$1200',
    type: 'Entrada'
  },
  {
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
    title: 'Mountain view',
    description: 'Plato principal',
  },
  {
    src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
    title: 'Night view',
    description: 'Entrada',
  },
  {
    src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
    title: 'Lake view',
    description: '´PlatoPrincipal',
  },
  {
    src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
    title: 'Mountain view',
    description: 'Postre',
  },
];

export default function CarouselRatio(props) {
  return (
    <>
    <Typography class="typetitle">{props.type}</Typography>
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        py: 1,
        overflow: 'auto',
        backgroundColor: 'black',
        width: 343,
        scrollSnapType: 'x mandatory',
        '& > *': {
          scrollSnapAlign: 'center',
        },
        '::-webkit-scrollbar': { display: 'none' },
      }}
    >
      {food.map((item) => (
        <Card
          row
          key={item.title}
          variant="outlined"
          sx={{
            gap: 2,
            backgroundColor: 'white',
            minWidth: '35vw',
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
            <Typography fontWeight="md">{item.title}</Typography>
            <Typography level="body2">{item.description}</Typography>
          </Box>
        </Card>
      ))}
    </Box>
    </>
  );
}
