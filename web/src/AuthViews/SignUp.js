import React, {useState} from "react";
import './Login.css';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper, Box } from '@mui/material';
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

            <Typography sx={{ fontFamily: 'PT Serif',
                letterSpacing: '0.05rem', marginTop: '15%'}}>
                <p className="plain">CREAR UNA CUENTA</p>
            </Typography>
                <TextField 
                
                    id="filled-basic"
                    label="E-mail"
                    className="textField"
                    type="text" 
                    name="username" 
                    variant="filled"
                    value={username}
                    onChange={handleChange}

                    InputProps={{disableUnderline: true}}

                    sx={{marginTop: '4%'
                    }}

                />

                <TextField 
                    id="filled-basic"
                    label="Contraseña"
                    type="text" 
                    className="textField"
                    name="password" 
                    value={password}
                    variant="filled"
                    onChange={handleChange} 
                    InputProps={{disableUnderline: true, borderColor: 'brown'}}

                    sx={{marginTop: '10%'
                }}

                
                />

                <TextField 
                    id="filled-basic"
                    label="Confirmar contraseña"
                    type="text" 
                    className="textField"
                    name="password" 
                    value={password}
                    variant="filled"
                    onChange={handleChange} 
                    InputProps={{disableUnderline: true, borderColor: 'brown'}}

                    sx={{marginTop: '4%'
                    
                }}

                
                />

            <Button variant="solid" className="BrownButton" type="submit" sx={{backgroundColor: '#952B3A', fontSize: '1rem',width:'60%',margin:'auto',marginTop:'25%',display:'block',alignContent:'center',marginBottom:'1%', height:'5%', borderRadius: '10px'}}>Registrarse</Button>

            <Typography
                className="plain"
                fontSize="sm"
                component={Link} to={{pathname: '/Login'}}
            >
            Ya tienes una cuenta?
            </Typography>
            </Sheet>
        </form>
    );
}

export default Login;