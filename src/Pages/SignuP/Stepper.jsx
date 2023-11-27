import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Row, Col } from 'react-bootstrap';
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import Contact from './StepperPage/Contactdetail.jsx';
import Other from './StepperPage/Otherdetail.jsx';
import License from './StepperPage/Licenandverification.jsx';
import Defaultfee from './StepperPage/defaultconsultFee.jsx';

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return ['', '', '', ''];
}



function getStepContent(step, showStep3, handleChoice, navigate) {
  switch (step) {
    case 0:
      return <Contact />;
    case 1:
      return <Other handleChoice={handleChoice} />;
    case 2:
      return <License />;
    // case 3:
    //   return ;
    default:
      return<Defaultfee />;
  }
}

const SignupStepper = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
   
      // Add default values for other form fields
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [showStep3, setShowStep3] = useState(false);
  const navigate = useNavigate(); // Add this line to access the navigate function

  const handleNext = data => {
    console.log(data);
    if (activeStep === getSteps().length - 1) {
      navigate('/signup'); // Redirect to the signup page
    } else if (activeStep === 1 && showStep3) {
      setActiveStep(activeStep + 2);
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleChoice = choice => {
    if (choice === 'yes') {
      setShowStep3(true);
    } else {
      navigate('/'); // Replace '/' with the desired home page route
    }
  };

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {getSteps().map((step, index) => (
          <Step key={index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleNext)}>
          {getStepContent(activeStep, showStep3, handleChoice, navigate)}

          <div className='d-flex justify-content-center'>
            <Row
              className=' w-100 p-3 text-center'
              style={{ transform: 'translateY(-100px)' }}
            >
              <Col></Col>
              <Col xl={4}>
                <Button
                  className='rounded-5 bg-body '
                  style={{
                    border: '1px solid #FAB915',
                    width: '200px',
                    color: '#FAB915',
                  }}
                  disabled={activeStep === 0}
                  onClick={handleBack}
                >
                  Back
                </Button>
              </Col>
              <Col xl={4}>
               <Button
  className='border-0 rounded-5 mt-3 mt-md-0'
  style={{ backgroundColor: '#FAB915', width: '200px' }}
  variant='contained'
  color='primary'
  // Add this line
  type='submit' // Change type to 'button' to prevent form submission
>
  {activeStep === getSteps().length - 1 ? 'Finish' : 'Next'}{' '}
  <img src='/public/Component 622 – 2.svg' className='ms-2' />
</Button>
              </Col>
              <Col></Col>
            </Row>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default SignupStepper;
