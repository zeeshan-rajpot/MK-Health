

import { Col, Container, Row } from 'react-bootstrap'
import './Disease.css'
import { Link } from 'react-router-dom'
const HeroDisease = () => {
  return (
    <>
    

    <div
        className="Diseaseimg "
   
      >
        <Container >
          <Row>
            <Col
              md={6}
              className=" d-flex align-items-start justify-content-center flex-column mobile70vh"
              style={{ height: "80vh" }}
            >
              <h1>
                <b className=" text-uppercase ">Describe your 

                  
</b>
              </h1>
              <h1>
                <b className=" text-uppercase ">
                  <span style={{ color: "#FAB915" }}>Condition/Disease   </span> online
                </b>
              </h1>
              <p style={{fontSize:'12px'}} className=" text-secondary  w-75 my-2">
              Mk Health Care has streamlined and simplified the process of obtaining comprehensive guidance for managing your specific medical condition or disease. Before you begin, let's take a closer look at how this process works.
              </p>
             
   <Link to='/ConditionForm'>
          <button className="btnn py-2 px-5 border-0 shadow rounded-5 mt-3">               
    <span className='m-auto'>Request Now</span>
    {/* <img  src="/Component 638 – 1.svg" width="30" height="30"/> */}
    
</button>   </Link> 


             

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

export default HeroDisease