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

const food = 
    {
      src: 'https://images.unsplash.com/photo-1619926340139-9a2e2245a64e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      title: 'Empanadas',
      description: 'Empanadas de carne de cerdo y vegetales acompañados de una salsa picante de ají acompañadas' ,
      precio:'$1200',
      type: 'Entrada'
    }

export default function Product()
{
    return(
        <>
            <LogoComponent></LogoComponent>
            <Box sx={{height:'100vh',backgroundColor:'white'}}>
            <Card sx={{marginBottom: '1vh'}}>
                <div style={{ position: "relative" }}>
                    <CardMedia style={{ height: "250px", paddingTop: "1%",paddingBottom:"1%" }}   component="img" image={food.src}/> 
                </div>
            </Card>
            <Typography className='plainTitle' variant='h5'>{food.title}</Typography>
            <Typography className='plainSubtitle' variant='body2'>{food.description}</Typography>
            <Typography className='plainTitle' variant='body2'>{food.precio}</Typography>
            <TextField
                id="filled-multiline-static"
                label="Comentarios"
                multiline
                rows={1}
                variant="filled"
                sx={{borderRadius:'5%',marginTop:'4vh',width:'90vw',backgroundColor:'white'}}
                />
            </Box>
            <OrderComponent></OrderComponent>
     



            <NavBar></NavBar>
        </>
    )
}