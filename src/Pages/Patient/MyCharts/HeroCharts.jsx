import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeroCharts = () => {
  return (
    <>
      <div className="bg-formm" style={{}}>
        <Container>
          <Row>
            <Col
              md={6}
              className=" d-flex align-items-start justify-content-center flex-column mobile70vh"
              style={{ height: "80vh" }}
            >
              <h2>
                <b className=" text-uppercase ">
                  Access Your <span style={{ color: "#FAB915" }}> Medical</span>
                </b>
              </h2>
              <h3>
                <b className=" text-uppercase ">
                  <span style={{ color: "#FAB915" }}>History </span> and
                  Requested Services
                </b>
              </h3>
              <p
                style={{ fontSize: "12px", color: "#747E93" }}
                className=" text-secondary  w-75 my-2"
              >
                At Mk Health Care, we believe in empowering our patients with
                easy access to their medical information. That's why we've
                introduced our feature-rich MyChart, designed to provide you
                with a comprehensive overview of your health journey.
              </p>

              {/* <input type="text" placeholder="Enter your email address"  className="w-75 input-field border-0 p-2 shadow   rounded-5   " /> */}

              <br />
              <Row>
                <Col xs={6} md={6}>
                  <div className=" shadow  rounded-5 w-100">
                    <a href="#teleservices">
                      {" "}
                 
                        <button
                          className=" border-0  rounded-5     py-2  text-light  shadow  text-nowrap  px-4 "
                          style={{ background: "#FAB915" }}
                        >
                          Install App Now!
                        </button>
                 
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col
              md={6}
              className=" d-flex align-items-center justify-content-center flex-column mobile40vh"
              style={{ height: "80vh" }}
            >
              <img src="/Component 617 – 1.svg" width="70%" alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HeroCharts;
