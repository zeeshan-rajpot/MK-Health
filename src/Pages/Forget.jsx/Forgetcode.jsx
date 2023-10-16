
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import './otpverify.css'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Forgetcode = () => {
    const [otp, setOtp] = useState('');
  return (
    <>
    <div className="text-center">

    <h5 className="mt-4"><b>Please enter the 4 Digit Code sent to</b></h5>
    <h5><b>@idperson.com</b></h5>
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

  <p className='my-4' style={{fontSize:'14px'}}>Didn't Receive a Code!<b> Resend</b></p>
 
 <Link to='/ConfrimPassword'>

  <button className="btnn py-1 px-5 border-0 shadow rounded-5 mt-4 mb-5"  >               
    <span className='me-4'>Done</span>
    <img  src="/Component 638 – 1.svg" width="30" height="30"/>
    
</button>
</Link>
 </div>

    </div>

    </>
  )
}

export default Forgetcode