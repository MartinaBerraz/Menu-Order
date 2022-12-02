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
import MyModal from "../Components/MyModal";
import bcrypt from 'bcryptjs';
import UserService from '../Services/UserService.ts'

function Login() {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);


    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };
    
    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };
    
    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };
    
     
    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
            if (name === '' || email === '' || password === '') {
        setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };

        // Showing error message if error is true
    const errorMessage = () => {
        return (
        <div
            className="error"
            style={{
            display: error ? '' : 'none',
            }}>
            <h1>Please enter all the fields</h1>
        </div>
        );
    };

      // Showing success message
    const successMessage = () => {
            if (submitted === true) {

                const hashedPassword = bcrypt.hashSync(password, '$2a$10$CwTycUXWue0Thq9StjUM0u') // hash created previously created upon sign up

                UserService.addUser(name,email,hashedPassword)
                return(<MyModal message="User successfully registered" opened={true}> </MyModal>)
            } else { 

            }
    };
    




    return(
        <form className="Form" onSubmit={handleSubmit}>
            <Sheet sx={{backgroundColor: 'black', alignContent: 'center', height:'100vh'}}>
            <LogoComponent />
            <Paper sx={{height:'0.3vh',backgroundColor:'white'}} />

            <Typography sx={{ fontFamily: 'PT Serif',
                letterSpacing: '0.05rem', marginTop: '15%'}}>
                <p className="plain">CREAR UNA CUENTA</p>
            </Typography>
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>
                <TextField 
                
                    id="filled-basic"
                    label="Name"
                    className="textField"
                    type="text" 
                    name="Name" 
                    variant="filled"
                    value={name}
                    onChange={handleName}

                    InputProps={{disableUnderline: true}}

                    sx={{marginTop: '6%'
                    }}

                />

                <TextField 
                    id="filled-basic"
                    label="E-Mail"
                    type="email" 
                    className="textField"
                    name="E-mail" 
                    value={email}
                    variant="filled"
                    onChange={handleEmail} 
                    InputProps={{disableUnderline: true, borderColor: 'brown'}}

                    sx={{marginTop: '6%'}}
                
                />

                <TextField 
                    id="filled-basic"
                    label="Password"
                    type="password" 
                    className="textField"
                    name="password" 
                    value={password}
                    variant="filled"
                    onChange={handlePassword} 
                    InputProps={{disableUnderline: true, borderColor: 'brown'}}

                    sx={{marginTop: '6%'
                    
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