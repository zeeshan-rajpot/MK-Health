
import { Col, Container, Row } from "react-bootstrap";
const ProviderFeatures = () => {
  return (
    <>
       <Container className="mt-3 mt-md-5 py-3  text-center">
          <Row>
            <Col>
              <h1><b>Provider Features</b></h1>
              <p className=" text-secondary ">Utilizing your cell phone, you may provide patients with easy and discreet care.</p>
            </Col>
          </Row>
        </Container>
    

    <Container>
        <Row className="d-flex align-items-stretch">
        <Col md={4}>
                <Row className="p-1 rounded-3 m-auto mt-3" style={{background:'#F2F2F2' ,width:'95%'}}>
                    <Col md={3} xs={3}>
                        <img src="/Component 635 – 1.svg" alt="" />
                    </Col>
                    <Col md={9} xs={9}>
                    <h5 className="mt-3"><b>FLEXIBLE AND FREE</b></h5>
                    <p className=" text-secondary " style={{fontSize:'14px'}}>MK Health is designed for patient networks ranging from family and friends to your private practice.</p>
                    </Col>
                </Row>
            </Col>
            <Col md={4}>
                <Row className="p-1 rounded-3 m-auto mt-3" style={{background:'#F2F2F2' ,width:'95%'}}>
                    <Col md={3} xs={3}>
                        <img src="/Component 635 – 1.svg" alt="" />
                    </Col>
                    <Col md={9} xs={9}>
                    <h5 className="mt-3"><b>EXPERIENCE ANYTIME</b></h5>
                    <p className=" text-secondary " style={{fontSize:'14px'}}>You put a lot of effort into earning your medical license; now, practice as you choose. Invite anybody you like. </p>
                    </Col>
                </Row>
            </Col>
            <Col md={4}>
                <Row className="p-1 rounded-3 m-auto mt-3" style={{background:'#F2F2F2' ,width:'95%'}}>
                    <Col md={3} xs={3}>
                        <img src="/Component 635 – 1.svg" alt="" />
                    </Col>
                    <Col md={9} xs={9}>
                    <h5 className="mt-3"><b>FLEXIBLE AND FREE</b></h5>
                    <p className=" text-secondary " style={{fontSize:'14px'}}>Easily record online meetings & progress notes.Send clients encrypted messages without giving up your personal contact details.
</p>
                    </Col>
                </Row>
            </Col>
            <Col md={4}>
                <Row className="p-1 rounded-3 m-auto mt-3" style={{background:'#F2F2F2' ,width:'95%'}}>
                    <Col md={3} xs={3}>
                        <img src="/Component 635 – 1.svg" alt="" />
                    </Col>
                    <Col md={9} xs={9}>
                    <h5 className="mt-3" style={{fontSize:'19px'}}><b>HASSLE-FREE Working</b></h5>
                    <p className=" text-secondary " style={{fontSize:'14px'}}>Join today to receive a fully integrated Quest Diagnostics account with patient volume discounts.
</p>
                    </Col>
                </Row>
            </Col>
            <Col md={4}>
                <Row className="p-1 rounded-3 m-auto mt-3" style={{background:'#F2F2F2' ,width:'95%'}}>
                    <Col md={3} xs={3}>
                        <img src="/Component 635 – 1.svg" alt="" />
                    </Col>
                    <Col md={9} xs={9}>
                    <h5 className="mt-3" style={{fontSize:'19px'}}><b>PAYMENT PROCESS</b></h5>
                    <p className=" text-secondary " style={{fontSize:'14px'}}>MK Health makes it simple to set a professional fee for your service.No insurance billing means you get paid easily.
</p>
                    </Col>
                </Row>
            </Col>
            <Col md={4}>
                <Row className="p-1 rounded-3 m-auto mt-3" style={{background:'#F2F2F2' ,width:'95%'}}>
                    <Col md={3} xs={3}>
                        <img src="/Component 635 – 1.svg" alt="" />
                    </Col>
                    <Col md={9} xs={9}>
                    <h5 className="mt-3" style={{fontSize:'19px'}}><b>SECURE & SIMPLE</b></h5>
                    <p className=" text-secondary " style={{fontSize:'14px'}}>Mk Health is designed with bank-level encryption and security.</p>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default ProviderFeatures