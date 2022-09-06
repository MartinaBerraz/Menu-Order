import React, {useState} from "react";
import './Login.css';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, Paper, Box } from '@mui/material';
import { Sheet } from '@mui/joy';
import { borderColor } from "@mui/system";
import logoWhite from '../Resources/logoWhite.png';
import LogoComponent from "../Components/LogoComponent";

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
            <Typography 
                className="title">
                <h3>Bienvenido!</h3>
            </Typography>
                <TextField 
                    id="filled-basic"
                    label="E-mail"
                    type="text" 
                    name="username" 
                    variant="filled"
                    value={username}
                    onChange={handleChange}

                    InputProps={{disableUnderline: true}}

                    sx={{marginTop: '4%',
                        width: '60vw'
                    }}

                />

                <TextField 
                    id="filled-basic"
                    label="Contraseña"
                    type="text" 
                    name="password" 
                    value={password}
                    variant="filled"
                    onChange={handleChange} 
                    InputProps={{disableUnderline: true, borderColor: 'brown'}}

                    sx={{marginTop: '4%',
                    width: '60vw'
                    
                }}
                />

            <Button variant="solid" type="submit" sx={{backgroundColor: '#952B3A',width:'60%',margin:'auto',marginTop:'10%',display:'block',alignContent:'center'}}>Ingresar</Button>
            <Typography
                className="plain"
                endDecorator={<Link href="/sign-up">Sign up</Link>}
                sx={{  }}
            >
            He olvidado la contraseña
            </Typography>
            <Typography
                className="subtitle"
                endDecorator={<Link href="/sign-up">Sign up</Link>}
                fontSize="sm"
            >
            No tienes una cuenta?
            </Typography>
            </Sheet>
        </form>
    );
}

export default Login;