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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import Contact from './StepperPage/Contactdetail.jsx';
import Other from './StepperPage/Otherdetail.jsx';
import License from './StepperPage/Licenandverification.jsx';
import Defaultfee from './StepperPage/defaultconsultFee.jsx';


import axios from 'axios';



const useStyles = makeStyles(theme => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return ['', '', '', ''];
}




const SignupStepper = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {},
  });
  const [activeStep, setActiveStep] = useState(0);
  const [showStep3, setShowStep3] = useState(false);
  const [signupData, setSignupData] = useState({
    contactDetails: {},
    otherDetails: {},
    licenseDetails: {},
    defaultFee: {},
  });
  const navigate = useNavigate();

  const handleNext = data => {
    console.log(data);
    if (activeStep === getSteps().length - 1) {
      // navigate('/signup');
    } else if (activeStep === 1 && showStep3) {
      setActiveStep(activeStep + 2);
    } else {
      setActiveStep(activeStep + 1);
    }
    if (activeStep === getSteps().length - 1) {
      handleFinish(); // Now, handleFinish has access to signupData
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
      navigate('/');
    }
  };

//   const handleFinish = () => {
//     //console all the date with key value pair

//     console.log(signupData.contactDetails);
//     console.log(signupData.otherDetails);
//     console.log(signupData.licenseDetails);
//     console.log(signupData.defaultFee);
  
// console.log(signupData)
//   };



  const handleFinish = async () => {



    console.log(signupData.contactDetails);
    console.log(signupData.otherDetails);
    console.log(signupData.licenseDetails);
    console.log(signupData.defaultFee);
  
console.log(signupData)

const signup ={
  professionalEmail: signupData.contactDetails.Email,
  firstName: signupData.contactDetails.firstname,
  lastName: signupData.contactDetails.LastName,
  phone: signupData.contactDetails.Phone,
  practiceAddress: signupData.contactDetails.Address,
  location: {
    residency: signupData.otherDetails.Residency,
    state: signupData.contactDetails.State,
    city: signupData.contactDetails.City,
    zipCode: signupData.contactDetails.ZipCode
  },
  preferedSuffix: signupData.otherDetails.PreferredSuffix,
  degree: signupData.otherDetails.Degree,
  specialty: signupData.otherDetails.Specialty,
  otherInfo: signupData.otherDetails.otherInformation,
  npiNumber: signupData.licenseDetails.npiNumber,
  medicalLicense: {
    licenseNumber: signupData.licenseDetails.licenseNumber,
    licenseType: signupData.licenseDetails.licenseType,
    expires: signupData.licenseDetails.licenseExpiry,
    img: "https://example.com/profile.jpg",
    status: true
  },
  fee: signupData.defaultFee.defaultFee,
  npdbImg: "https://example.com/profile.jpg"


}
const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NGNjNDhmZGI5NGE1MDA5OTA2YTI3MyIsImlhdCI6MTcwMTM2NjA3NX0.OKE2_VxdXKrFssv3QwlxL3ERMR1q6fPG4mUOVMjKq48'
    try {
      // Assuming signupData contains all the necessary details
      const response = await axios.post('https://hkhealth.azurewebsites.net/api/auth/adddetails', signup, {
        headers: {
          'Authorization': `Bearer ${token}`, // Replace with your actual access token
          'Content-Type': 'application/json',
        },
      });

      toast.promise(
        // Pass a promise function that will resolve on success and reject on error
        () => Promise.resolve(response.data), // Resolve the promise with response.data
        {
          pending: "Details added please wait", // Pending message
          success: "Details added successfully", // Success message
          error: "Details added successfully", // Error message
        }
      );

      navigate('/');
      console.log('Server response:', response.data);

      // Optionally, you can handle the response or navigate to another page
      // navigate('/success'); // Use the appropriate navigation function from your framework
    } catch (error) {
      console.error('Error adding details:', error);


      toast.error(` ${error.response.data.message}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      // Handle the error, show a message to the user, etc.
    }
  };




  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Contact updateData={data => setSignupData({ ...signupData, contactDetails: data })} />;
      case 1:
        return <Other updateData={data => setSignupData({ ...signupData, otherDetails: data })} />;
      case 2:
        return   <License updateData={data => setSignupData({ ...signupData, ...data })} />;
      case 3:
        return <Defaultfee updateData={data => setSignupData({ ...signupData, defaultFee: data })} />;
      // ... other cases if needed
    }
  }
  
  return (
    <>
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
        {getStepContent(activeStep, showStep3, handleChoice, navigate, setSignupData)}

          <div className='d-flex justify-content-center'>
            <Row
              className=' w-100 p-3 text-center'
              // style={{ transform: 'translateY(-100px)' }}
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
                  type='submit'
                >
                  {activeStep === getSteps().length - 1 ? 'Finish' : 'Next'}{' '}
                  <img src='/Component 622 – 2.svg' className='ms-2' />
                </Button>
              </Col>
              <Col></Col>
            </Row>
          </div>
        </form>
      </FormProvider>
    </div>

<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>

</>

  );
};

export default SignupStepper;
