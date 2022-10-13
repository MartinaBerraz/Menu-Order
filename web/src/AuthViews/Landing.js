import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import logoWhite from '../Resources/logoWhite.png';
import './Landing.css';
import { snackbarClasses } from '@mui/material';
import { grey, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import LogoComponent from '../Components/LogoComponent';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import {Link, withRouter} from 'react-router-dom';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
    'https://images.unsplash.com/photo-1546456674-8aa8c81b9b8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    label: 'Goč, Serbia',
    imgPath:'https://images.unsplash.com/photo-1561758033-7e924f619b47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    label: 'Bird',
    imgPath:'https://images.unsplash.com/photo-1546456674-7ce72b9286b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
},
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1583694589417-a7b12fe0815b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  }
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: 'black' }}>
      <LogoComponent />
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: '55vh',
                  display: 'block',
                  overflow: 'hidden',
                  width: '100%',
                  paddingBottom:'2vh'

                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      {/* <MobileStepper
        theme={theme}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        variant="progress"
        color="#952B3A"


        sx= {{
            paddingTop:'3vh',
            paddingLeft:'7vw',
            backgroundColor: 'black',
            width: '100%',
            color: 'red',

        }}
        
      /> */}
      <Box>
        <HorizontalRuleIcon sx={{color: 'white'}} className='icon' ></HorizontalRuleIcon>
        <HorizontalRuleIcon sx={{color: 'white'}} className='icon' ></HorizontalRuleIcon>
        <HorizontalRuleIcon sx={{color: 'white'}} className='icon' ></HorizontalRuleIcon>


      </Box>
    <Typography 
           sx= {{
            backgroundColor: 'black',
            color: 'white',
            textAlign: 'center',
            paddingTop: '5vh',
            paddingBottom: '2vh',
            wordWrap: 'break-word',
            fontSize: '1rem',
            fontFamily: 'PT Serif',
            letterSpacing: '0.05rem',
            lineHeight:'1.7rem'

        }}
    ><text class='wrap-it'>HACÉ TU PEDIDO EN INSTANTES</text>
        </Typography>

        <br></br>
        <Button  component={Link} to={{pathname: '/Login'}} variant="solid" className='button' sx={{backgroundColor: '#952B3A', color: 'black',bottom:'1%', width:'40vw',marginRight:'5vw'}}>Iniciar sesión</Button>
        <Button  component={Link} to={{pathname: '/SignUp'}} variant="solid" className='button'sx={{backgroundColor: '#514949',color: 'black',bottom:'1%', width:'40vw'}}>Registrarme</Button>
        



    </Box>
  );
}

export default SwipeableTextMobileStepper;
