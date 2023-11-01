
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './otpverify.css'
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { baseurl } from '../../const';
const Forgetcode = ({email}) => {
    const [otp, setOtp] = useState('');

    const handleResendClick = () => {
      axios.post(`${baseurl}/api/auth/forgotpassword`, { email })
        .then((response) => {
          toast.success(`${response.data.message}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        })
        .catch((error) => {
          toast.error(` ${error.response.data.message}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        });
    };

    console.log('OTP Value:', otp);
  return (
    <>
    <div className="text-center">

    <h5 className="mt-4"><b>Please enter the 4 Digit Code sent to</b></h5>
    <h5><b> {email}</b></h5>
    <Row>

        <Col md='12' className='w-75 m-auto '>
        <OtpInput
     value={otp}
     onChange={setOtp}
     numInputs={4}
     className='inputStyle my-5'
    //   renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} className='inputotp w-25 ' />}
    />
        </Col>
    </Row>
 <div>

 <p className='my-4' style={{fontSize:'14px'}} onClick={handleResendClick}>Didn't Receive a Code!<b style={{cursor:'pointer'}}> Resend</b></p>

 
 <Link Link to={`/ConfrimPassword/${otp}/${email}`}>

  <button className="btnn py-1 px-5 border-0 shadow rounded-5 mt-4 mb-5"  >               
    <span className='me-4'>Done</span>
    <img  src="/Component 638 – 1.svg" width="30" height="30"/>
    
</button>
</Link>
 </div>

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
  )
}

export default Forgetcode