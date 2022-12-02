import LogoComponent from "../Components/LogoComponent";
import {Card,Button, CardMedia, Paper,Box, Typography} from "@mui/material"
import VerticalCards from "../Components/VerticalCards";
import './Home.css'
import NavBar from "../Components/NavBar";
import * as React from 'react';
import OrderComponent from "../Components/OrderComponent";
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import RestClient from "../RestClient.ts"

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

  
export default function MyOrder({food})
{
    const [open, setOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [orderDetails, setOrderDetails] = useState([])

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(()=> {
        RestClient.getProductsInOrder(1).then((res)=>{
            setOrderDetails(res)
            console.log("products",res)
        })

        
      },[]);

      useEffect(()=> {
        if(orderDetails !== undefined)
        {
            orderDetails.map((od) => {setProducts(...products, food.filter(p => p.productId === od.productId))
                console.log(products)})
        }
      },[setOrderDetails]);


    if(orderDetails !== undefined && products !== undefined){
    return(
        <>
            <LogoComponent />
            <Box sx={{ width: '100%', height:'0.1vh', backgroundColor: "white"}}></Box>

            <Typography sx={{color:'white', lineHeight: '7vh', fontFamily:'PT Serif', letterSpacing: '0.05rem'}}> Total: $3400 </Typography>
            
            <Box sx={{ width: '100%', height:'0.1vh', backgroundColor: "white"}}></Box>
            <VerticalCards data={products} order={orderDetails}/>
            <Button onClick={handleOpen} variant="solid" sx={{  position:'sticky',bottom:'20%',backgroundColor:'whitesmoke', width:'30vw',borderRadius:'13px'}}>PEDIR</Button>
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
                    Pedido realizado con éxito
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
}
