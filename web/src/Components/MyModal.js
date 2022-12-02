import LogoComponent from "../Components/LogoComponent";
import {Card,Button, CardMedia, Paper,Box, Typography} from "@mui/material"
import VerticalCards from "../Components/VerticalCards";
import NavBar from "../Components/NavBar";
import * as React from 'react';
import OrderComponent from "../Components/OrderComponent";
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import { NavLink } from "react-router-dom";
import { useState } from "react";
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

  
export default function MyModal({opened, message})
{
    const [open, setOpen] = useState(opened);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
        <>
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
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}> {message}

                    </Typography>
                    <Button component={NavLink} to={{pathname: '/Home'}} variant="solid" className='button' sx={{backgroundColor: '#952B3A', fontStyle:'bold', borderRadius:'10px', color: 'black',width:'20vw', marginTop:'5%',marginInline:'3%',marginBottom:'3.5%', height:'5%', fontFamily: 'PT Serif',
                letterSpacing: '0.05rem'}}>Ok</Button>

                    
                </Box>
                </Fade>
            </Modal>
        </>
    )
}
