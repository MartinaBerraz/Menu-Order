import LogoComponent from "../Components/LogoComponent";
import {Card,Button, CardMedia, Paper,Box, Typography} from "@mui/material"
import VerticalCards from "../Components/VerticalCards";
import './Home.css'
import NavBar from "../Components/NavBar";
import * as React from 'react';
import OrderComponent from "../Components/OrderComponent";

export default function MyOrder()
{
    return(
        <>
            <LogoComponent />
            <Box sx={{ width: '100%', height:'0.3vh', backgroundColor: "white"}}></Box>
            <VerticalCards />
            <Button variant="solid" sx={{  position:'sticky',bottom:'20%',backgroundColor:'whitesmoke', width:'30vw',borderRadius:'13px'}}>PEDIR</Button>

            
            <NavBar></NavBar>
        </>
    )
}
