import React, {useState} from "react";
import './Login.css';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import { Sheet } from '@mui/joy';

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
            <Sheet sx={{backgroundColor: 'black'}}>
            <Typography>
                <h1>Log in</h1>
            </Typography>
                <TextField 
                    id="filled-basic"
                    label="E-mail"
                    type="text" 
                    name="username" 
                    value={username}
                    onChange={handleChange}
                />

                <TextField 
                    id="filled-basic"
                    label="Contraseña"
                    type="text" 
                    name="password" 
                    value={username}
                    onChange={handleChange}
                    sx={{backgroundColor: 'white', textDecorationColor:'#952B3A'} }   
                />
            <Button type="submit" name="submit" id="button"
                
                sx={{
                mt: 1, // margin top
                }}
            >
                Log in
            </Button>
            <Typography
                endDecorator={<Link href="/sign-up">Sign up</Link>}
                fontSize="sm"
                sx={{ alignSelf: 'center' }}
            >
            Don't have an account?
            </Typography>
            <input id="button" type="submit" name="submit"/>
            </Sheet>
        </form>
    );
}

export default Login;