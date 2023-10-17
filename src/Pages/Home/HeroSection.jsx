import { Col, Container, Row } from "react-bootstrap";
import './herosection.css'
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div
        className="bg-formm"
        style={{ background: " " }}
      >
        <Container >
          <Row>
            <Col
              md={6}
              className=" d-flex align-items-start justify-content-center flex-column mobile70vh"
              style={{ height: "85vh" }}
            >
              <h1>
                <b>The Only Health</b>
              </h1>
              <h1>
                <b>
                  <span style={{ color: "#FAB915" }}>Care Platform</span> for
                  you!
                </b>
              </h1>
              <p style={{fontSize:'12px'}} className=" text-secondary  w-75">
                MK Health Care is the biggest Virtual Concierge Medical Care
                which enables doctors, medical providers and patients to connect
                virtually for concierge telemedicine care.
              </p>
              <p className=""><b>Get started today, it's free</b></p>
              {/* <input type="text" placeholder="Enter your email address"  className="w-75 input-field border-0 p-2 shadow   rounded-5   " /> */}

              <div className="input-containerr shadow w-75 rounded-5 "  >
  <input type="text" placeholder="Enter your email address" className="input-field rounded-5 " />
 <Link to='/Login'>
<button type="button" className="image-button rounded-5 "></button> </Link> 
</div>

            </Col>

            <Col
              md={6}
              className=" d-flex align-items-center justify-content-center flex-column mobile50vh"
              style={{ height: "85vh" }}
            >
      
            <img src="/Component 618 – 3.svg" width='80%' alt="" />
       </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HeroSection;
