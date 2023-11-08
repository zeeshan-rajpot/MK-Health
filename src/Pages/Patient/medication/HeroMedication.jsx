import { Col, Container, Row } from 'react-bootstrap';
import './Medication.css';
import { Link } from 'react-router-dom';
const HeroMedication = () => {
  return (
    <>
      <div className='medicationimg'>
        <Container>
          <Row>
            <Col
              md={6}
              className=' d-flex align-items-start justify-content-center flex-column mobile70vh'
              style={{ height: '80vh' }}
            >
              <h1>
                <b className=' text-uppercase '>Choose your</b>
              </h1>
              <h1>
                <b className=' text-uppercase '>
                  <span style={{ color: '#FAB915' }}>Medication </span> online
                </b>
              </h1>
              <p>
                Mk Health Care has streamlined and simplified the process of
                obtaining comprehensive guidance for managing your specific
                medical condition or disease. Before you begin, let's take a
                closer look at how this process works.
              </p>
          
                <button className='btnn py-2 px-5 border-0 shadow rounded-5 mt-3'>
                  <span className='m-auto'>Request Now</span>
                  {/* <img  src="/Component 638 – 1.svg" width="30" height="30"/> */}
                </button>
   
            </Col>

            <Col
              md={6}
              className=' d-flex align-items-center justify-content-center flex-column '
            >
              {/* <img src="/Component 636 – 1.svg" width='70%' alt="" /> */}
            </Col>
          </Row>
        </Container>
      </div>
    
    </>
  )
}

export default HeroMedication