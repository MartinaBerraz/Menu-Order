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
import LogoutIcon from '@mui/icons-material/Logout';
import Fab from '@mui/material/Fab';
import { useEffect, useState } from "react";
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import { NavLink } from "react-router-dom";
import RestClient from "../RestClient.ts";
import {useParams } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60vw',
  borderRadius:'20px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  fontFamily: 'PT Serif',
  letterSpacing: '0.05rem'
};




export default function Product()
{
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { id } = useParams();

    const [quantity, setQuantity] = useState(0)
    const [subtotal, setSubtotal] = useState(0)

    const [product, setProduct] = useState()
    const [espec, setEspec] = useState()


    const fetchProduct = () => {
        RestClient.getProduct(id).then((res) =>{
            setProduct(res)
            console.log("food",res)})
    }

    const handleEspecs = (e)=>{
        setEspec(e.target.value)
        console.log(espec)
    }

    useEffect(() =>
    {
        if(product !== undefined){
        setSubtotal(quantity*product.price)
        }
    },[quantity]);

    useEffect(() => {
        fetchProduct();
      }, []);

    
      const submitProduct = () => {
            RestClient.addProductToOrder(id,espec, subtotal, quantity, 1  )
            handleOpen()
        }
    
    
      if (product === undefined) {
        return <>Still loading...</>;
      }
    

    return(
        <>
            <LogoComponent></LogoComponent>
            <Box sx={{height:'100vh',backgroundColor:'black'}}>
            <Paper sx={{height:'0.3vh',backgroundColor:'white'}} />

            <Card sx={{marginBottom: '1vh'}}>
                <div style={{ position: "relative" }}>
                    <CardMedia style={{ height: "250px"}}   component="img" image={product.image}/> 
                </div>
            </Card>
            
            <Fab sx={{backgroundColor: '#952B3A', position:'absolute',bottom:'81%',right:'8%',alignSelf:'flex-start'}} aria-label="add">
                    <LogoutIcon />
                </Fab>
            <Typography className='plainTitle' sx={{fontFamily: 'PT Serif',
                letterSpacing: '0.05rem'}}  variant='h4'>{product.name}</Typography>
            <Typography className='plainSubtitle'sx={{fontFamily: 'PT Serif',
                letterSpacing: '0.05rem', fontSize: '1.1rem'}}  variant='body2'>{product.description}</Typography>
            <Typography className='plainTitle' sx={{fontFamily: 'PT Serif',
                letterSpacing: '0.05rem'}} variant='body2'>{product.price}</Typography>
            <ButtonGroup variant="contained" sx={{backgroundColor: 'white', color:'white',borderRadius:'10px', alignContent:'left',marginTop:'5%'}} aria-label="outlined primary button group">
                <IconButton  sx={{backgroundColor:'white'}} onClick={()=> {if (quantity > 0) {setQuantity(quantity-1)}}}><RemoveIcon /></IconButton>
                <Typography  fontSize='2.5vh' sx={{marginInline:'1vw', color:'black', lineHeight: '2.5rem'}}>{quantity}</Typography>
                <IconButton sx={{backgroundColor:'white'}} onClick={()=> setQuantity(quantity+1)}><AddIcon /></IconButton>
            </ButtonGroup>
            <Typography className='plainTitle' sx={{marginTop:'3vh', fontSize:'1.3rem',marginLeft:'10%',display:'inline', fontFamily: 'PT Serif',
                letterSpacing: '0.05rem'}}>Subtotal: ${subtotal}</Typography>
    

                 <TextField
                    id="filled-multiline-static"
                    label="Añade instrucciones para tu pedido"
                    multiline
                    rows={1}
                    variant="filled"
                    onChange={handleEspecs}
                    value = {espec}
                    sx={{borderRadius:'12px',marginTop:'4vh',width:'77vw',backgroundColor:'white', border: '2px', }}
                    />
            <Button onClick={submitProduct} variant="solid" className='button' sx={{backgroundColor: '#952B3A', fontStyle:'bold', borderRadius:'10px', color: 'black',width:'50vw', marginTop:'5%',marginInline:'3%',marginBottom:'3.5%', height:'5%', fontFamily: 'PT Serif',
                letterSpacing: '0.05rem'}}>Agregar</Button>
            </Box>
            <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                    Aviso 
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    Producto añadido con éxito
                    </Typography>
                    <Button component={NavLink} to={{pathname: '/Home'}} variant="solid" className='button' sx={{backgroundColor: '#952B3A', fontStyle:'bold', borderRadius:'10px', color: 'black',width:'20vw', marginTop:'5%',marginInline:'3%',marginBottom:'3.5%', height:'5%', fontFamily: 'PT Serif',
                letterSpacing: '0.05rem'}}>Ok</Button>

                    
                </Box>
                </Fade>
            </Modal>
            </div>
            
     



            <NavBar></NavBar>
        </>
    )
}