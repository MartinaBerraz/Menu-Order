import React from "react";
import { Paper, Box } from '@mui/material';
import logoWhite from '../Resources/logoWhite.png';
import './LogoComponent.css'

export default function LogoComponent()
{
  return(
    <Paper className='logoPaper'
        square
        elevation={0}
        sx={{
          display: 'flex',
          justifyContent: "center",
          textAlign: "center",
          alignItems: 'center',
          height: '15vh',
          pl: 2,
          backgroundColor: 'black'
        }}
      >
    <Box
        component="img"
        sx={{
            alignItems: 'center',
            height: '7vh',
            display: 'block',
            overflow: 'hidden',
            backgroundColor: 'black',
            paddingBottom: '2vh',
            paddingTop: '2vh'
        }}
        src={logoWhite}
        alt='Logo'
        />
      </Paper> 

  )
   
}

      