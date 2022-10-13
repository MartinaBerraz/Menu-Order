import LogoComponent from "../Components/LogoComponent";
import {Card, CardMedia, TextField,Paper,Box, Typography} from "@mui/material"
import CardComponent from "../Components/CardComponent";
import './Home.css'
import OutlinedInput from '@mui/material/OutlinedInput';
import NavBar from "../Components/NavBar";
import { Sheet } from "@mui/joy";
import './Product.css'
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OrderComponent from "../Components/OrderComponent";
import { ButtonGroup, Button, IconButton } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const food = 
    {
      src: 'https://images.unsplash.com/photo-1619926340139-9a2e2245a64e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      title: 'Empanadas',
      description: 'Empanadas de carne de cerdo y vegetales acompañados de una salsa picante de ají' ,
      precio:'$1200',
      type: 'Entrada'
    }


export default function Product()
{
    return(
        <>
            <LogoComponent></LogoComponent>
            <Box sx={{height:'100vh',backgroundColor:'black'}}>
            <Paper sx={{height:'0.3vh',backgroundColor:'white'}} />

            <Card sx={{marginBottom: '1vh'}}>
                <div style={{ position: "relative" }}>
                    <CardMedia style={{ height: "250px"}}   component="img" image={food.src}/> 
                </div>
            </Card>
            <Typography className='plainTitle' sx={{fontFamily: 'PT Serif',
                letterSpacing: '0.05rem'}}  variant='h4'>{food.title}</Typography>
            <Typography className='plainSubtitle'sx={{fontFamily: 'PT Serif',
                letterSpacing: '0.05rem', fontSize: '1.1rem'}}  variant='body2'>{food.description}</Typography>
            <Typography className='plainTitle' sx={{fontFamily: 'PT Serif',
                letterSpacing: '0.05rem'}} variant='body2'>{food.precio}</Typography>
            <ButtonGroup variant="contained" sx={{backgroundColor: 'white', color:'white',borderRadius:'10px', alignContent:'left',marginTop:'5%'}} aria-label="outlined primary button group">
                <IconButton  sx={{backgroundColor:'white'}}><RemoveIcon /></IconButton>
                <Typography  fontSize='2.5vh' sx={{marginInline:'1vw', color:'black', lineHeight: '2.5rem'}}> 2 </Typography>
                <IconButton sx={{backgroundColor:'white'}}><AddIcon /></IconButton>
            </ButtonGroup>
            <Typography className='plainTitle' sx={{marginTop:'3vh', fontSize:'1.3rem',marginLeft:'10%',display:'inline', fontFamily: 'PT Serif',
                letterSpacing: '0.05rem'}}>Subtotal: $2400</Typography>
    

                 <TextField
                    id="filled-multiline-static"
                    label="Añade instrucciones para tu pedido"
                    multiline
                    rows={1}
                    variant="filled"
                    sx={{borderRadius:'12px',marginTop:'4vh',width:'77vw',backgroundColor:'white', border: '2px', }}
                    />
            <Button variant="solid" className='button' sx={{backgroundColor: '#952B3A', fontStyle:'bold', borderRadius:'10px', color: 'black',width:'50vw', marginTop:'5%',marginInline:'3%',marginBottom:'3.5%', height:'5%', fontFamily: 'PT Serif',
                letterSpacing: '0.05rem'}}>Agregar</Button>
            </Box>
            
            
     



            <NavBar></NavBar>
        </>
    )
}