import LogoComponent from "../Components/LogoComponent";
import {Card, CardMedia, Paper,Box, Typography} from "@mui/material"
import CardComponent from "../Components/CardComponent";
import './Home.css'
import NavBar from "../Components/NavBar";
import RestClient from "../RestClient.ts";
import LogoutIcon from '@mui/icons-material/Logout';
import Fab from '@mui/material/Fab';
import {NavLink, withRouter} from 'react-router-dom';
import { useEffect, useState } from "react";

export default function Home({food})
{
    const [types, setTypes] = useState([])



    useEffect(()=> {
        RestClient.getTypes().then((res)=>{
            setTypes(res)
            console.log("types res",res)
        })
      },[food]);


    return(
        <>
            <LogoComponent></LogoComponent>
            
            <Card sx={{marginBottom: '1vh'}}>
                <div style={{ position: "relative" }}>
                    <CardMedia style={{ height: "250px", paddingTop: "1%" }}   component="img" image={"https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80"} title="Pancakes" alt="Pancakes"/> 
                    <div style={{position: "absolute", color: "white",top: '80%',left: "30%",transform: "translateX(-50%)",fontSize:'5vw', fontFamily: 'PT Serif'}}> Menú del día</div>
                    <div style={{position: "absolute", color: "white",top: '90%',left: "30%",transform: "translateX(-50%)",fontSize:'3vw', fontFamily: 'PT Serif'}}> Focaccia del chef</div>
                </div>
            </Card>

            <Fab component={NavLink} to={{pathname: '/Login'}} sx={{backgroundColor: 'cream', position:'absolute',bottom:'81%',right:'8%',alignSelf:'flex-start'}} aria-label="add">
                    <LogoutIcon />
                </Fab>

                {types.map((item, index) => {
                return (<CardComponent key={index} type={item} data={food} />)
                })}

            <NavBar></NavBar>
        </>
    )
}