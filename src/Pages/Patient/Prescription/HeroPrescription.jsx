

import { Col, Container, Row } from 'react-bootstrap'
import './Prescription.css'
import { Link } from 'react-router-dom'
const HeroPrescription = () => {
  return (
    <>
          <div
        className="Prescriptionimg"
   
      >
        <Container >
          <Row>
            <Col
              md={6}
              className=" d-flex align-items-start justify-content-center flex-column mobile70vh"
              style={{ height: "80vh" }}
            >
              <h1>
                <b className=" text-uppercase ">Get your   
                  
</b>
              </h1>
              <h1>
                <b className=" text-uppercase ">
                  <span style={{ color: "#FAB915" }}>Prescription   </span> online
                </b>
              </h1>
             <ul>
                <li>
                Request Prescription refills online

                </li>
                <li>
                Licensed providers nationwide


                </li>
                <li>
                Convenient care from home

                </li>
             </ul>
             <Link to='/RequestPrescription'>
            
              <button className="btnn py-2 px-5 border-0 shadow rounded-5 mt-3">               
    <span className='m-auto'>Request Now</span>
    {/* <img  src="/Component 638 – 1.svg" width="30" height="30"/> */}
    
</button>

</Link>
             

            </Col>

            <Col
              md={6}
              className=" d-flex align-items-center justify-content-center flex-column "
              
            >
            {/* <img src="/Component 636 – 1.svg" width='70%' alt="" /> */}
            </Col>
          </Row>
        </Container>
      </div>
    
    </>
  )
}

export default HeroPrescription