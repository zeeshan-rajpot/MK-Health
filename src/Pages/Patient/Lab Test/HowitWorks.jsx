import { Col, Container, Row } from "react-bootstrap"


const HowitWorks = () => {
  return (
    <>
    <Container className="py  -5">

        <Row className="text-center pb-4  pt-5">
            <h2 ><b>How it Works</b></h2>
        </Row>
        <Row className="pb-5">
            <Col md={3} className="p-0  d-flex align-items-center  justify-content-center   ">
            <div className="text-center w-75 shadow py-4  my-4 my-md-0">
                <h6 style={{color:'#FAB915'}}>1. Request Online</h6>
                <p style={{fontSize:'12px'}} className="w-75 m-auto ">Place your request online and pay the all-inclusive fees for the lab tests.</p>
            </div>
            <div className="text-center w-25 mobile-none">
<img src="/Arrow - Right.svg" alt="" />

            </div>
            </Col >
            <Col md={3} className="p-0  d-flex align-items-center  justify-content-center  ">
            <div className="text-center w-75 shadow py-4 my-4 my-md-0">
                <h6 style={{color:'#FAB915'}}>2. Request Reviewed</h6>
                <p style={{fontSize:'12px'}} className="w-75 m-auto ">A licensed medical provider in your state will review your request and authorize a lab order.</p>
            </div>
            <div className="text-center w-25 mobile-none">
<img src="/Arrow - Right.svg" alt="" />

            </div>
            </Col >
            <Col md={3} className="p-0  d-flex align-items-center  justify-content-center  ">
            <div className="text-center w-75 shadow py-4 my-4 my-md-0">
                <h6 style={{color:'#FAB915'}}>3. Get Tested</h6>
                <p style={{fontSize:'12px'}} className="w-75 m-auto ">Visit an approved Quest Diagnostics lab near you and get tested.</p>
            </div>
            <div className="text-center w-25 mobile-none">
<img src="/Arrow - Right.svg" alt="" />

            </div>
            </Col >
            <Col md={3} className="p-0  d-flex align-items-center  justify-content-center  ">
            <div className="text-center w-75 shadow py-4 m-0 my-4 my-md-0 ">
                <h6 style={{color:'#FAB915'}}>4. Receive Results</h6>
                <p style={{fontSize:'12px'}} className="w-75 m-auto ">Receive your results through your Push Health account.</p>
            </div>
            <div className="text-center w-25 mobile-none">
<img src="/Arrzow - Right.svg" alt="" />

            </div>
            </Col >
        </Row>
    </Container>
    
    </>
  )
}

export default HowitWorks