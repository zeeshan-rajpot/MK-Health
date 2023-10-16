import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap"
import Navbare from "../../Compunents/Navbar"


const ConfrimPassword = () => {
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
      <Col md={6}  className="d-flex align-items-center justify-content- flex-column  mobile60vh mt-5" style={{height:'95vh'}}>

        {/* <h2 style={{color:'#FAB915'}}><b>Welcome back!</b></h2> */}
        <h3 className='mt-5 ' style={{width:'80%'}}><b>Change your password</b></h3>
      
  <p  className='' style={{width:'80%'}}>Your Current Password</p>


     <div className="input-container shadow bg-light  ">
              {/* <FaUser className='icon' /> */}
              <img src={ "/Iconly-Bold-Lock.svg"} />
              <input type="password" name='email'  placeholder="*************" className="bg-light" />
            </div>
            <p  className='mt-3 ' style={{width:'80%'}}>New Password</p>
     <div className="input-container shadow bg-light  ">
              {/* <FaUser className='icon' /> */}
              <img src={ "/Iconly-Bold-Lock.svg"} />
              <input type="password" name='email'  placeholder="*************" className="bg-light" />
            </div>

            <p  className='mt-3 ' style={{width:'80%'}}>Confrim New Password</p>
     <div className="input-container shadow bg-light  ">
              {/* <FaUser className='icon' /> */}
              <img src={ "/Iconly-Bold-Lock.svg"} />
              <input type="password" name='email'  placeholder="*************" className="bg-light" />
            </div>
  
   <div className=' text-center' >
            <button className="btnn py-1 px-5 border-0 shadow rounded-5 mt-5 text-center" >               
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
    
    
    </>
  )
}

export default ConfrimPassword