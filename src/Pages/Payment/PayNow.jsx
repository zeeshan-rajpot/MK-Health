import React, { useState } from "react";
import './pay.css'
import { Container, Row, Col } from "react-bootstrap";

const PayNow = () => {
  const [selectedDiv, setSelectedDiv] = useState(0);

  const handleDivClick = (index) => {
    setSelectedDiv(index);
  };

  return (
    <>
      <Container className="pt-5 shadow pb-5" style={{borderRadius:'56px  56px '}}>
        <Row>
          <Col className="text-center py-3" style={{ backgroundColor: '#FAB915' }}>
            <p className="mb-0 text-light"><b>Payment Method</b></p>
          </Col>
        </Row>

        <Row className="d-md-flex d-none ">
          <Col md={12} className="mobw100 m-auto mt-4 " style={{width:'75%'}}>
            <div>
              <p><b>Card Type</b></p>
            </div>
          </Col>

          <Col md={12}>
            <div className="d-block w-75 m-auto  d-md-flex   ">
              <div
                className={`text-center p-4 px-5 rounded-4 shadow me-4 mt-3 mt-md-0 ${selectedDiv === 0 ? 'border-pay' : ''}`}
                onClick={() => handleDivClick(0)}
              >
                <img src="/Group 67830.svg" alt="" />
              </div>
              <div
                className={` text-center p-4 px-5 rounded-4 shadow me-4 mt-3 mt-md-0 ${selectedDiv === 1 ? 'border-pay' : ''}`}
                onClick={() => handleDivClick(1)}
              >
                <img src="/PayPal New 2023.svg" alt="" />
              </div>
              <div
                className={`text-center p-4 px-5 rounded-4 shadow me-4 mt-3 mt-md-0 ${selectedDiv === 2 ? 'border-pay' : ''}`}
                onClick={() => handleDivClick(2)}
              >
                <img src="/Visa Payment Card.svg" alt="" />
              </div>
            </div>
          </Col>
        </Row>

        <Row className="d-flex d-md-none">
        <Col md={12} className="mobw100 m-auto mt-4" style={{width:'75%'}}>
            <div>
              <p><b>Card Type</b></p>
            </div>
          </Col>
        <Col md={2} xs={4}>
<div
                className={`text-center p-4  rounded-4 shadow  mt-3 mt-md-0 ${selectedDiv === 0 ? 'border-pay' : ''}`}
                onClick={() => handleDivClick(0)}
              >
                <img src="/Group 67830.svg" alt="" />
              </div>
</Col>



<Col  md={3} xs={4}>

<div
                className={` text-center p-4  rounded-4 shadow  mt-3 mt-md-0 ${selectedDiv === 1 ? 'border-pay' : ''}`}
                onClick={() => handleDivClick(1)}
              >
                <img src="/PayPal New 2023.svg" alt="" />
              </div>

</Col>


<Col  md={3} xs={4}>

<div
                className={` text-center p-4  rounded-4 shadow  mt-3 mt-md-0 ${selectedDiv === 2 ? 'border-pay' : ''}`}
                onClick={() => handleDivClick(2)}
              >
                <img src="/Visa Payment Card.svg" alt="" />
              </div>

</Col>

        </Row>


        <Row>

        <Col md={12} className="mobw100 m-auto mt-4" style={{width:'75%'}}>
            <div>
              <span><b>Card Holder Name</b></span>
            </div>

            <div className="input-container shadow bg-light mt-1 w-100 rounded-5 ">
              {/* <FaUser className='icon' /> */}
              <img src={ "/profile new.svg"} className="mx-2" />
              <input type="text" name='email'  placeholder="David William" className="bg-light" />
            </div>
          </Col>
          <Col md={12} className="mobw100 m-auto mt-4" style={{width:'75%'}}>
            <div>
              <span><b>Card Number</b></span>
            </div>

            <div className="input-container shadow bg-light mt-1 w-100 rounded-5 ">
              {/* <FaUser className='icon' /> */}
              <img src={ "/Ticket Star.svg"} className="mx-2" />
              <input type="text" name='email'  placeholder="888532112155" className="bg-light" />
            </div>
          </Col>
          <Col md={12} className="mobw100 m-auto mt-4 border-bottom pb-4" style={{width:'75%'}}>
            
<div className="d-md-flex align-items-center  justify-content-between "> 
<div  className="w-100 me-4 mt-3">

              <span className="mt-2"><b>Expiry Date</b></span>
         
            <div className="input-container shadow bg-light mt-1 w-100  rounded-5 me-3 ">
              {/* <FaUser className='icon' /> */}
              {/* <img src={ "/profile new.svg"} className="mx-2" /> */}
              <input type="date" name='email'  placeholder="Davidwilliam@gmail.com" className="bg-light" />
            </div>
</div>

<div className="w-100  mt-3"> 

              <span ><b>CVV</b></span>
    
            <div className="input-container shadow bg-light  w-100 rounded-5 mt-3 mt-md-0 ">
              {/* <FaUser className='icon' /> */}
              <img src={ "/Lock.svg"} className="mx-2" />
              <input type="password" name='email'  placeholder="123" className="bg-light" />
            </div>
</div>
            
</div>
            
          </Col>







          <Col md={12} className="mobw100 m-auto mt-4  pb-4" style={{width:'75%'}}>
            
            <div className="d-flex align-items-center  justify-content-between "> 
           <h6><b style={{color:'#FAB915'}}>Total Fees (if approved): </b></h6>
            <h6><b style={{color:'#FAB915'}}>$826.29</b></h6>            
            </div>


                        
                      </Col>

                      
        </Row>

        <Row >
<Col className="w-100 m-auto text-center">
<button className="btnn py-1 px-4 border-0 shadow rounded-5 mt-3" >               
    <span className='me-4'>Pay Now</span>
    <img  src="/Component 638 – 1.svg" width="30" height="30"/>
    
</button>
</Col>
        </Row>
      </Container>
    </>
  );
};

export default PayNow;
