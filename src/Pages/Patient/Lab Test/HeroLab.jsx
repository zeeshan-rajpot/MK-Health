
import { Col, Container, Row } from 'react-bootstrap'
import './lab.css'

const HeroLab = () => {
  return (
    <>
                <div
        className="Labbgimg "
   
      >
        <Container >
          <Row>
            <Col
              md={6}
              className=" d-flex align-items-start justify-content-center flex-column mobile70vh"
              style={{ height: "80vh" }}
            >
              <h1>
                <b className=" text-uppercase ">Affordable  <span style={{ color: "#FAB915" }}>Lab  </span>
                  
</b>
              </h1>
              <h1>
                <b className=" text-uppercase ">
                  <span style={{ color: "#FAB915" }}>Testing  </span> Made Simple
                </b>
              </h1>
              <p style={{fontSize:'12px'}} className=" text-secondary  w-75 my-2">
              Mk Health Care has made it simple and convenient to request a lab order from your medical provider at affordable prices. Please review how the process works before getting started.
              </p>
           <a href="#requestLab"> 
              <button  className="btnn py-2 px-5 border-0 shadow rounded-5 mt-3">               
    <span className='m-auto'>Select tests now</span>
    {/* <img  src="/Component 638 – 1.svg" width="30" height="30"/> */}
    
</button></a> 


             

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

export default HeroLab