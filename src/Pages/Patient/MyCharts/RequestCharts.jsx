import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"


const RequestCharts = () => {
  return (
    <>
    
    <Container>
        <Row>
            <Col md={12} className="w-100 m-auto text-center pt-5 mt-0 mt-md-5">
            <h2><b>My Chart</b></h2>
            </Col>
            <Col md={12} className="w-100 m-auto text-center ">
            <p className="" style={{fontSize:'12px' ,color:'#747E93'}}>MyChart offers a consolidated record of your health, ensuring you're always informed.</p>
            </Col>
            
        </Row>
        <Row className="  mobw100  m-auto" style={{width:'65%'}}>
     <Col md={12} xs={10} className="mt-3 mt-md-0 ms-4 ms-md-0  ">
<div className="p-4 position-absolute  " style={{borderRadius:'50% 50% 0 50%' , backgroundColor:'#FAB915' , width:'70px' , height:'70px'}}>
<img src="/Path 32206.svg" width="25px" alt="" />
</div>
<Link to='/RequestedPrescription'> 
<div className="pt-5  bg-light ms-4 mt-5 pb-4 rounded-4 shadow d-flex align-content-center justify-content-between  "  >
    <h5 className="px-5 text-dark"><b>Requested Lab Test</b></h5>
<img src="/Iconly-Bulk-Arrow - Right Circle.svg" alt="" className="pe-5" />
</div>
            </Link> 
            </Col>

            <Col md={12} xs={10} className="mt-3 mt-md-5 ms-4 ms-md-0  mb-5">
<div className="p-4 position-absolute  " style={{borderRadius:'50% 50% 0 50%' , backgroundColor:'#FAB915' , width:'70px' , height:'70px'}}>
<img src="/Path 32306.svg" width="25px" alt="" />
</div>
<Link to='/RequestedPrescription'> 
<div className="pt-5  bg-light ms-4 mt-5 pb-4 rounded-4 shadow d-flex align-content-center justify-content-between  "  >
    <h5 className="px-5 text-dark"><b>Requested Prescription</b></h5>
<img src="/Iconly-Bulk-Arrow - Right Circle.svg" alt="" className="pe-5" />
</div>    </Link> 
            </Col>

        </Row>
    </Container>

    
    
    </>
  )
}

export default RequestCharts