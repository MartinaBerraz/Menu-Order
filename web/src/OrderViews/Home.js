import LogoComponent from "../Components/LogoComponent";
import {Card, CardMedia, Paper,Box, Typography} from "@mui/material"
import CardComponent from "../Components/CardComponent";
import './Home.css'
export default function Home()
{
    return(
        <>
            <LogoComponent></LogoComponent>
            <Card sx={{marginBottom: '1vh'}}>
                <div style={{ position: "relative" }}>
                    <CardMedia style={{ height: "250px", paddingTop: "2%" }}   component="img" image={"https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80"} title="Pancakes" alt="Pancakes"/> 
                    <div style={{position: "absolute", color: "white",top: '80%',left: "30%",transform: "translateX(-50%)",fontSize:'5vw'}}> Menú del día</div>
                    <div style={{position: "absolute", color: "white",top: '90%',left: "30%",transform: "translateX(-50%)",fontSize:'3vw'}}> Focaccia del chef</div>
                </div>
            </Card>

            <CardComponent type='Entradas'></CardComponent>
            <CardComponent type='Plato Principal'></CardComponent>
            <CardComponent type='Postres'></CardComponent>

        
        </>
    )
}