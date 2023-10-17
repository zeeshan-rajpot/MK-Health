import { Col, Container, Row } from "react-bootstrap";
import './medicalsection.css'
import { Link } from "react-router-dom";
const MedicalProviderHome = () => {
  return (
    <>
    <div className="MedicalProvidersbg">
    <Container>
        <Row className=" py-md-3 py-0">
            <Col  md={6}
              className="ps-md-5 ms-0 d-flex align-items-start justify-content-center flex-column mobile40vh"
              style={{ height: "70vh" }}>
             <h1><b>For Medical Providers </b></h1>
             <p className=" text-secondary mb-4 "><span className=" p-2 shadow  rounded-3 me-2"><img src="/Component 620 – 3.svg" alt=""  /></span><b>Simple documentation</b></p>
             <p className=" text-secondary mb-4"><span className=" p-2 shadow  rounded-3 me-2"><img src="/Chat.svg" alt=""  /></span><b>Secure messaging</b></p>
             <p className=" text-secondary mb-4"><span className=" p-2 shadow  rounded-3 me-2"><img src="/Star.svg" alt=""  /></span><b>Integrated with Quest Diagnostics</b></p>
           
     <Link to='/SignUp'>    <button className=" border-0  rounded-5  singupbtnbgimg  py-2 ps-4 text-light  shadow ">Sign Up</button>
     </Link>   
            </Col>
            <Col  md={6}
              className=" d-flex align-items-end justify-content-center flex-column mobile70vh"
              style={{ height: "70vh" }}>
               <img className=" me-md-5 me-0" src="/providerhome.svg"  width='80%' alt="" />
            </Col>
        </Row>
    </Container>
    </div>
    <div className="Medicalpaitentsbg">
    <Container>
        <Row className=" py-md-3 py-0">
        <Col  md={6}
              className=" d-flex align-items-start justify-content-center flex-column mobile40vh"
              style={{ height: "70vh" }}>
              <img className=" ms-md-5 ms-0" src="/Component 621 – 1.svg"  width='80%' alt="" />
            </Col>
            <Col  md={6}
              className=" d-flex align-items-end justify-content-center flex-column mobile50vh pe-md-5 pe-0"
              style={{ height: "70vh" }}>
           <h1><b>For Medical Patients</b></h1>
          <div className=" d-flex align-items-end justify-content-center mb-2"><p className="me-3 text-secondary mb-1"><b>Save a trip to the office</b></p><span className=" p-2 shadow  rounded-3 "><img src="/clock.svg" alt=""  /></span></div>   
          <div className=" d-flex align-items-end justify-content-center mb-2"><p className="me-3 text-secondary mb-1"><b>Quality health care in just a few clicks</b></p><span className=" p-2 shadow  rounded-3 "><img src="/Send.svg" alt=""  /></span></div>   
          <div className=" d-flex align-items-end justify-content-center mb-2"><p className="me-3 text-secondary mb-1"><b>100% price transparency</b></p><span className=" p-2 shadow  rounded-3 "><img src="/Discount.svg" alt=""  /></span></div>   
          <Link to='/SignUp'>        <button className=" border-0  rounded-5  singupbtnbgimg mt-3  py-2 ps-4 text-light  shadow ">Sign Up</button>
    </Link>        </Col>
        </Row>
    </Container>
    </div>







    </>
  )
}

export default MedicalProviderHome