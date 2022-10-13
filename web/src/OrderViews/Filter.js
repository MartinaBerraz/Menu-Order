import LogoComponent from "../Components/LogoComponent";
import {Card, CardMedia, Paper,Box, Typography} from "@mui/material"
import NavBar from "../Components/NavBar";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Filter()
{
    const List = ['Entrada','Plato Principal','Postre','Bebidas']
    return(
        <>
            <LogoComponent />
            <Box sx={{ width: '100%', height:'0.3vh', backgroundColor: "white"}}></Box>
            <Box sx={{ width: '100%', height:'100%', backgroundColor: "black"}}>
            <Autocomplete
            options={List}
            sx={{ width: 300, marginTop: '10%', alignItems: 'center', alignSelf: 'center',justifyItems:'center'}}
            renderInput={(params) => <TextField {...params} label="Disabled options" />}
            />
            </Box>
            
            <NavBar />
        </>
    )}