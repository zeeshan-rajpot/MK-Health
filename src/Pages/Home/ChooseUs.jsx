import { Col, Container, Row } from "react-bootstrap"


const ChooseUs = () => {
  return (
    <>

<Container className="py-5 text-center">
    <Row>
        <Col>
        <h1><b>Why Choose us?</b></h1>
        </Col>
    </Row>
</Container>

    <Container className=" rounded-5  py-5 " style={{background:'#F2F2F2'}}>
        <Row className="text-start">
        <Col md={3} xs={10} className="mt-3 mt-md-0 ms-4 ms-md-0">
<div className="p-4 position-absolute  " style={{borderRadius:'50% 50% 0 50%' , backgroundColor:'#FAB915' , width:'70px' , height:'70px'}}>
<img src="/Path 31999.svg" width="25px" alt="" />
</div>
<div className="pt-5  bg-light-subtle ms-4 mt-5 pb-4 rounded-4  "  >
    <h5 className="px-3">Protected Insurance</h5>
    <p className="  px-3" style={{fontSize:'14px' , color:'#252424' }}>Your medical records are safe with us,
your health information is stays confidential</p>
</div>
            </Col>
            <Col md={3} xs={10} className="mt-3 mt-md-0 ms-4 ms-md-0">
           
            <div className="p-4 position-absolute  " style={{borderRadius:'50% 50% 0 50%' , backgroundColor:'#FAB915' , width:'70px' , height:'70px'}}>
<img src="/Group 7042.svg" width="25px" alt="" />
</div>
<div className="pt-5  bg-light-subtle ms-4 mt-5 pb-4 rounded-4  "  >
    <h5 className="px-3">No Insurance</h5>
    <p className="  px-3" style={{fontSize:'14px' , color:'#252424'}}>Get the care you need, even if you don't have insurance.</p>
</div>  
           </Col>
            <Col md={3} xs={10} className="mt-3 mt-md-0 ms-4 ms-md-0">

            <div className="p-4 position-absolute  " style={{borderRadius:'50% 50% 0 50%' , backgroundColor:'#FAB915' , width:'70px' , height:'70px'}}>
<img src="/Path 32003.svg" width="25px" alt="" />
</div>
<div className="pt-5  bg-light-subtle ms-4 mt-5 pb-4 rounded-4  "  >
    <h5 className="px-3">Recurring Refills</h5>
    <p className="  px-3" style={{fontSize:'14px' , color:'#252424'}}>Convenient and easy - Never run out of
medication again with recurring refills.</p>
</div>
            </Col>
            <Col md={3} xs={10} className="mt-3 mt-md-0 ms-4 ms-md-0">
            <div className="p-4 position-absolute  " style={{borderRadius:'50% 50% 0 50%' , backgroundColor:'#FAB915' , width:'70px' , height:'70px'}}>
<img src="/Group 7043.svg" width="25px" alt="" />
</div>
<div className="pt-5  bg-light-subtle ms-4 mt-5 pb-4 rounded-4  "   >
    <h5 className="px-3">24/7 Request</h5>
    <p className="  px-3" style={{fontSize:'14px' , color:'#252424'}}>Never run out of medication again 
with recurring refills.</p>
</div>
            </Col>
        </Row>
    </Container>
    
    </>
  )
}

export default ChooseUs