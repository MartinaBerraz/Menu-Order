import React, {useState} from "react";
import './Login.css';
import { TextField, Paper, PaginationItemPropsSizeOverrides } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Sheet } from '@mui/joy';
import { borderColor } from "@mui/system";
import logoWhite from '../Resources/logoWhite.png';
import LogoComponent from "../Components/LogoComponent";
import {Link, withRouter} from 'react-router-dom';

function Login() {


    const [data, setData]= useState({username:"", password:""})
    const {username, password} = data;


    const handleChange=(e)=>{
        setData({...data,[e.target.name]:[e.target.value]});
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //to reset every time the form is submitted
        console.log(data);
        setData({username:"",password:""});
    }





    return(
        <form className="Form" onSubmit={handleSubmit}>
            <Sheet sx={{backgroundColor: 'black', alignContent: 'center', height:'100vh'}}>
            <LogoComponent />
            <Paper sx={{height:'0.3vh',backgroundColor:'white'}} />

            <Typography 
                className="title" sx ={{marginTop: '10vh', fontSize: '1.3rem', fontFamily: 'PT Serif',
                letterSpacing: '0.05rem'}}>BIENVENIDO
            </Typography>
                <TextField 
                    className="textField"
                    id="filled-basic"
                    label="E-mail"
                    type="text" 
                    name="username" 
                    variant="filled"
                    value={username}
                    onChange={handleChange}
                    sx={{marginTop:'5vh'}}
                    InputProps={{disableUnderline: true}}

                />

                <TextField 
                    className="textField"
                    id="filled-basic"
                    label="Contraseña"
                    type="password" 
                    name="password" 
                    value={password}
                    variant="filled"
                    sx={{marginTop:'3vh'}}
                    onChange={handleChange} 
                    InputProps={{disableUnderline: true, borderColor: 'brown'}}
                />

            <Button className='BrownBotton' component={Link} to={{pathname: '/Home'}} variant="solid" type="submit" sx={{backgroundColor: '#952B3A', borderRadius: '10px',margin:'auto',marginTop:'20%', marginBottom:'10%',display:'block', fontSize: '100%'}}>Ingresar</Button>
            <Typography component={Link} to={{pathname: '/SignUp'}}
                className="plain"
            >
            He olvidado la contraseña
            </Typography>
            <Typography component={Link} to={{pathname: '/SignUp'}}
                className="subtitle"
            >
            No tienes una cuenta?
            </Typography>
            </Sheet>
        </form>
    );
}

export default Login;