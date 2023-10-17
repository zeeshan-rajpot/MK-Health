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
      <Container className="pt-5">
        <Row>
          <Col className="text-center py-3" style={{ backgroundColor: '#FAB915' }}>
            <p className="mb-0 text-light"><b>Payment Method</b></p>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="mobw100 m-auto " style={{width:'75%'}}>
            <div>
              <p><b>Card Type</b></p>
            </div>
          </Col>

          <Col md={12}>
            <div className="d-block w-75 m-auto  d-md-flex ">
              <div
                className={`p-4 px-5 rounded-4 shadow me-4 ${selectedDiv === 0 ? 'border-pay' : ''}`}
                onClick={() => handleDivClick(0)}
              >
                <img src="/Group 67830.svg" alt="" />
              </div>
              <div
                className={`p-4 px-5 rounded-4 shadow me-4 ${selectedDiv === 1 ? 'border-pay' : ''}`}
                onClick={() => handleDivClick(1)}
              >
                <img src="/PayPal New 2023.svg" alt="" />
              </div>
              <div
                className={`p-4 px-5 rounded-4 shadow ${selectedDiv === 2 ? 'border-pay' : ''}`}
                onClick={() => handleDivClick(2)}
              >
                <img src="/Visa Payment Card.svg" alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PayNow;
