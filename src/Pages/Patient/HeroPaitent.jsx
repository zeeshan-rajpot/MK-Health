
import { Col, Container, Row } from "react-bootstrap";

const HeroPaitent = () => {
  return (
    <>
            <div
        className="bg-formm"
        style={{  }}
      >
        <Container >
          <Row>
            <Col
              md={6}
              className=" d-flex align-items-start justify-content-center flex-column mobile70vh"
              style={{ height: "80vh" }}
            >
              <h1>
                <b className=" text-uppercase ">Everyday
                  
</b>
              </h1>
              <h1>
                <b className=" text-uppercase ">
                  <span style={{ color: "#FAB915" }}>Health Care  </span> Connected
                </b>
              </h1>
              <p style={{fontSize:'12px'}} className=" text-secondary  w-75 my-2">
              Our app that makes it simple where You can securely message, document encounters, e-invoice, e-prescribe, and e-order lab testswith a few clicks.
Join the thousands of medical providers already using MK Health Care torun a mobile medical practice.
              </p>
             
              {/* <input type="text" placeholder="Enter your email address"  className="w-75 input-field border-0 p-2 shadow   rounded-5   " /> */}

<br />
<Row>
    <Col xs={6} md={6}>
    <div className=" shadow  rounded-5 w-100"  >
        <a href="#teleservices">      <button className=" border-0  rounded-5  singupbtnbgimg   py-2  text-light  shadow  text-nowrap  ps-3 " style={{}}>Get Started</button></a>
</div>
    </Col>
    <Col xs={6}  >
 
<button className="myButton shadow">Install App Now!</button>
    </Col>
  

</Row>
             

            </Col>

            <Col
              md={6}
              className=" d-flex align-items-center justify-content-center flex-column mobile40vh"
              style={{ height: "80vh" }}
            >
            <img src="/Component 636 – 1.svg" width='70%' alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    
    
    </>
  )
}

export default HeroPaitent