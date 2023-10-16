
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap"
import Navbare from "../../Compunents/Navbar"
import { Modal } from 'react-bootstrap';
import { Link } from "react-router-dom"
import Forgetcode from "./Forgetcode";
const Forget = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
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
              <input type="text" name='email'  placeholder="Davidwilliam@gmail.com" className="bg-light" />
            </div>
       

   
            <button className="btnn py-1 px-4 border-0 shadow rounded-5 mt-5" onClick={handleShowModal}>               
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
<Forgetcode/>
</Modal.Body>

</Modal>
    
    
    </>
  )
}

export default Forget