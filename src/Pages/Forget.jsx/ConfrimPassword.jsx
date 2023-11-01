import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap"
import Navbare from "../../Compunents/Navbar"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams, useNavigate } from 'react-router-dom';
import { baseurl } from "../../const";
import axios from 'axios';

const ConfrimPassword = () => {
  // const location = useLocation();
  // const otp = location.state && location.state.otp;
  let { otp, email } = useParams();
  console.log(otp, email);

  const [newPassword, setNewPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  }

  const handleSubmit = () => {
    if (newPassword === confirmPassword) {
      
      axios.post(`${baseurl}/api/auth/resetpassword`, {
        email: email,
        code: otp,
        password: newPassword
      })
      .then((response) => {
        toast.success(`${response.data.message}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        setTimeout(() => {
          setIsLoading(false);
          navigate("/Login");
        }, 5000);
      })
      .catch((error) => {
        console.log(error)
        toast.error(`${error.response.data.message}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setIsLoading(false);
      });
    } else {
      toast.error("Password does not match", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }
  
  return (
    <>
      <div className=" overflow-x-hidden ">
       <Navbare
    activetab=''
    bgcolor='transparent'
    />

<div className="bg-form" style={{height:''}}>

  <Container style={{height:'100vh'}}>
    <Row>
      <Col md={6}  className="d-flex align-items-center justify-content-center flex-column  mobile60vh mt-5" style={{height:'95vh'}}>

        {/* <h2 style={{color:'#FAB915'}}><b>Welcome back!</b></h2> */}
        <h3 className='mt-5 ' style={{width:'80%'}}><b>Change your password</b></h3>
      

            <p  className='mt-3 ' style={{width:'80%'}}>New Password</p>
     <div className="input-container shadow bg-light  ">
              {/* <FaUser className='icon' /> */}
              <img src={ "/Iconly-Bold-Lock.svg"} />
              <input type="password" name='email'  placeholder="*************" className="bg-light"
              value={newPassword}
              onChange={handleNewPasswordChange}

/>
            </div>

            <p  className='mt-3 ' style={{width:'80%'}}>Confrim New Password</p>
     <div className="input-container shadow bg-light  ">
              {/* <FaUser className='icon' /> */}
              <img src={ "/Iconly-Bold-Lock.svg"} />
              <input type="password" name='email'  placeholder="*************" className="bg-light"
               value={confirmPassword}
               onChange={handleConfirmPasswordChange}
                />
            </div>
  
   <div className=' text-center' >
            <button className="btnn py-1 px-5 border-0 shadow rounded-5 mt-5 text-center"   onClick={handleSubmit}>               
    <span className='me-4'>Done</span>
    <img  src="/Component 638 – 1.svg" width="30" height="30"/>
    
</button>
</div>
      </Col>
      <Col md={6}  className=" d-flex align-items-center justify-content-center flex-column mobile70vh" style={{height:'95vh'}}>
        <img src="/Reset password-cuate.svg" alt="" width='70%' />
      </Col>
    </Row>
  </Container>

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

export default ConfrimPassword