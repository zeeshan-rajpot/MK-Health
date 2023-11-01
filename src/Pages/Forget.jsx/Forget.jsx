
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbare from "../../Compunents/Navbar"
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import { Link } from "react-router-dom"
// import { toast } from 'react-toastify';
import Forgetcode from "./Forgetcode";
import { baseurl } from "../../const";
const Forget = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [emailExists, setEmailExists] = useState(false);
 
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendButtonClick = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!email.trim()) {
      toast.error("Enter the Email", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else if (!email.match(emailRegex)) {
      toast.error("Please add valid email address", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      // Send a POST request to the backend API
      axios.post(`${baseurl}/api/auth/forgotpassword`, { email })
        .then((response) => {
          // Handle the response from the server if needed
          toast.success(`${response.data.message}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          handleShowModal();
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
    }
  };
  
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
      <Col md={6}  className=" d-flex align-items-center justify-content-center flex-column mobile60vh" style={{height:'95vh'}}>

        {/* <h2 style={{color:'#FAB915'}}><b>Welcome back!</b></h2> */}
        <h3 className='mt-3'><b>Forget Password</b></h3>
        <div
              className="text-center "
              style={{ width: "70%", fontSize:'12px' }}
            >
              <p className="mb-0 " style={{color:"#B4B5B5"}}>Please enter your email account to recover your lost password.</p>
            </div> 

        <div className="input-container shadow bg-light mt-5 ">
              {/* <FaUser className='icon' /> */}
              <img src={ "/Message.svg"} />
              <input type="text" name='email' 
               placeholder="Davidwilliam@gmail.com"
               className="bg-light"
               value={email} // Bind the input value to the email state
               onChange={handleEmailChange} // Update email state when input changes
                    />
            </div>
       

   
            <button className="btnn py-1 px-4 border-0 shadow rounded-5 mt-5"         onClick={handleSendButtonClick}>               
    <span className='me-4'>Send</span>
    <img  src="/Component 638 – 1.svg" width="30" height="30"/>
    
</button>

      </Col>
      <Col md={6}  className=" d-flex align-items-center justify-content-center flex-column mobile70vh" style={{height:'95vh'}}>
        <img src="/Forgot.svg" alt="" width='70%' />
      </Col>
    </Row>
  </Container>

</div>

</div>
<Modal show={showModal} onHide={handleCloseModal} centered size='lg'>

<Modal.Body>
<Forgetcode  email={email}/>
</Modal.Body>

</Modal>
    
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

export default Forget