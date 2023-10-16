

import { Col, Container, Row } from "react-bootstrap";
const PaitentFeatures = () => {
  return (
    <>
    
    <Container className="mt-3 mt-md-5 py-3 mb-5 text-center">
          <Row>
            <Col>
              <h1><b>Patient Features</b></h1>
              <p className=" text-secondary ">With a few clicks, you can get the assistance you require without making a trip to the office.</p>
            </Col>
          </Row>
        </Container>
    

    <Container className=" " style={{marginTop:'40px' , marginBottom:'100px'}}>
        <Row className="d-flex align-items-stretch">
        <Col md={4}>
                <Row className="p-1 rounded-3 m-auto mt-3" style={{background:'#F2F2F2' ,width:'95%'}}>
                    <Col md={3} xs={3}>
                        <img src="/Component 635 – 1.svg" alt="" />
                    </Col>
                    <Col md={9} xs={9}>
                    <h5 className="mt-3"><b>CONVENIENT CARE</b></h5>
                    <p className=" text-secondary " style={{fontSize:'14px'}}>Requesting medical care when you need it and where you need it is simple with MK Health.</p>
                    </Col>
                </Row>
            </Col>
            <Col md={4}>
                <Row className="p-1 rounded-3 m-auto mt-3" style={{background:'#F2F2F2' ,width:'95%'}}>
                    <Col md={3} xs={3}>
                        <img src="/Component 635 – 1.svg" alt="" />
                    </Col>
                    <Col md={9} xs={9}>
                    <h5 className="mt-3"><b> RELIABLE SUPPLIER</b></h5>
                    <p className=" text-secondary " style={{fontSize:'14px'}}>When you need something, you can send your dependable medical practitioner a protected message.
</p>
                    </Col>
                </Row>
            </Col>
            <Col md={4}>
                <Row className="p-1 rounded-3 m-auto mt-3" style={{background:'#F2F2F2' ,width:'95%'}}>
                    <Col md={3} xs={3}>
                        <img src="/Component 635 – 1.svg" alt="" />
                    </Col>
                    <Col md={9} xs={9}>
                    <h5 className="mt-3"><b>EXPLICIT PRICES</b></h5>
                    <p className=" text-secondary " style={{fontSize:'14px'}}>Simple methods of payment include PayPal, a significant credit or debit card, or a Health Savings Account.

</p>
                    </Col>
                </Row>
            </Col>
            <Col md={4}>
                <Row className="p-1 rounded-3 m-auto mt-3" style={{background:'#F2F2F2' ,width:'95%'}}>
                    <Col md={3} xs={3}>
                        <img src="/Component 635 – 1.svg" alt="" />
                    </Col>
                    <Col md={9} xs={9}>
                    <h5 className="mt-3"><b>INSURANCE UNECESSARY</b></h5>
                    <p className=" text-secondary " style={{fontSize:'14px'}}>The basic line is that high-quality medical treatment is always affordable and does not require insurance.

</p>
                    </Col>
                </Row>
            </Col>
            <Col md={4}>
                <Row className="p-1 rounded-3 m-auto mt-3" style={{background:'#F2F2F2' ,width:'95%'}}>
                    <Col md={3} xs={3}>
                        <img src="/Component 635 – 1.svg" alt="" />
                    </Col>
                    <Col md={9} xs={9}>
                    <h5 className="mt-3" style={{fontSize:'19px'}}><b>YOUR MEDICAL HISTORY</b></h5>
                    <p className=" text-secondary " style={{fontSize:'14px'}}>Access your lab results, medication information, and secure messaging from any device at any time.
</p>
                    </Col>
                </Row>
            </Col>
            <Col md={4}>
                <Row className="p-1 rounded-3 m-auto mt-3" style={{background:'#F2F2F2' ,width:'95%'}}>
                    <Col md={3} xs={3}>
                        <img src="/Component 635 – 1.svg" alt="" />
                    </Col>
                    <Col md={9} xs={9}>
                    <h5 className="mt-3" style={{fontSize:'19px'}}><b>EASY LAB TESTING</b></h5>
                    <p className=" text-secondary " style={{fontSize:'14px'}}>Visit a nearby testing facility, place an order from your phone, and receive your secure findings through MK Health.
</p>
                    </Col>
                </Row>
            </Col>
         
        </Row>
    </Container>
    
    
    
    </>
  )
}

export default PaitentFeatures