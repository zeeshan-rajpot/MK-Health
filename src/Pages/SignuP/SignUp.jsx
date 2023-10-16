import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap"
import Navbare from "../../Compunents/Navbar"
import { Link } from "react-router-dom"
import { Modal } from 'react-bootstrap';
import SelectOption from "./SelectOption";

const SignUp = () => {
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
      <Col md={6}  className=" d-flex align-items-center justify-content-center flex-column mobile80vh" style={{height:'95vh'}}>

        {/* <h2 style={{color:'#FAB915'}}><b>Welcome back!</b></h2> */}
        <h3 className='mt-3'><b>Sign Up</b></h3>
        <div className="input-container shadow bg-light mt-3 ">
              {/* <FaUser className='icon' /> */}
              <img src={ "/Profile.svg"} />
              <input type="text" name='email'  placeholder="Name" className="bg-light" />
            </div>
      
        <div className="input-container shadow bg-light mt-4 ">
              {/* <FaUser className='icon' /> */}
              <img src={ "/Message.svg"} />
              <input type="text" name='email'  placeholder="Davidwilliam@gmail.com" className="bg-light" />
            </div>
            <div className="input-container shadow bg-light mt-4 ">
              {/* <FaUser className='icon' /> */}
              <img src={ "/Iconly-Bold-Lock.svg"} />
              <input type="password" name='email'  placeholder="*************" className="bg-light" />
            </div>

            <div className="input-container shadow bg-light mt-4 ">
              {/* <FaUser className='icon' /> */}
              <img src={ "/Iconly-Bold-Lock.svg"} />
              <input type="password" name='email'  placeholder="*************" className="bg-light" />
            </div>

            {/* <div
              className="text-end mt-2"
              style={{ width: "80%",  }}
            >
              <p className="mb-0 " style={{color:"#B4B5B5"}}>Forget Password</p>
            </div> */}

            <button className="btnn py-1 px-4 border-0 shadow rounded-5 mt-3" onClick={handleShowModal}>               
    <span className='me-4'>Sign Up</span>
    <img  src="/Component 638 – 1.svg" width="30" height="30"/>
    
</button>

<p className='mt-3'>Already have an account?  <Link to='/Login'> <span style={{color:'#FAB915'}}>Sign in</span> </Link></p>
      </Col>
      <Col md={6}  className=" d-flex align-items-center justify-content-center flex-column mobile50vh" style={{height:'95vh'}}>
        <img src="/Component 639 – 1.svg" alt="" width='70%' />
      </Col>
    </Row>
  </Container>

</div>

</div>
    


<Modal show={showModal} onHide={handleCloseModal} centered size='lg'>

  <Modal.Body>
    
<SelectOption/>
  </Modal.Body>

</Modal>

    
    </>
  )
}

export default SignUp