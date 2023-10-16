import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
    <div  style={{background:'#37474F'}}>
    <Container className="mt-5 pt-5 pb-5">
  <footer className="py-2">
    <Row className="row pt-3 pb-5">
      <Col md={3} xs={12} className="col-6 col-md-2 mb-3 text-start ">
      <img src="/Group 11307.svg" />
      <p className="text-light" style={{fontSize:'14px'}}>Logoipsumoffers a wide range of properties of the highest quality. Using Mostrew, finding a new place to live has become much easier.</p>
      </Col>
      <Col md={2} xs={6} className="col-6 col-md-2 mb-3">
        <h5 style={{color:'#FAB915' , fontSize:'20px'}}>Menu</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2 "style={{fontSize:'14px' , color:'#fff'}} >
            <a href="#" className="nav-link p-0   text-light " style={{fontSize:'14px' }}>
            Our Services

            </a>
          </li>
          <li className="nav-item mb-2 ">
            <a href="#" className="nav-link p-0  text-light" style={{fontSize:'14px'}}>
              About Us
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0  text-light" style={{fontSize:'14px'}}>
             Contact
            </a>
          </li>
       
        </ul>
      </Col>
      <Col md={2} xs={6} className=" mb-3">
        <h5 style={{color:'#FAB915' , fontSize:'20px'}}>IT Services</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 " style={{fontSize:'14px'}}>
            Privacy

            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link p-0 " style={{fontSize:'14px'}}>
            See more
            </a>
          </li>
        
        </ul>
      </Col>

<Col md={2} xs={0}>

</Col>
<Col md={3} xs={12} className="text-center mb-3">
<img src="/Component 630 – 1.svg" width='30px' alt="" />
<img src="/Component 631 – 1.svg" width='30px' alt="" className="ms-2" />
<img src="/Component 633 – 1.svg" width='30px' alt="" className="ms-2" />
</Col>

      {/* <Col md={5} className=" offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">
              Email address
            </label>
            <input
              id="newsletter1"
              type="text"
              className="form-control"
              placeholder="Email address"
            />
            <button className="btn btn-primary" type="button">
              Subscribe
            </button>
          </div>
        </form>
      </Col> */}
    </Row>
    <div className="d-flex  flex-sm-row justify-content-between pt-4 align-items-center   " style={{borderTop:'1px solid #FAB915'}}>
      <p className="text-light mb-0" style={{fontSize:'14px'}}>Copyright © 2022 Laaqiq. All Rights Reserved.</p>
      <div className="d-flex justify-content-between align-items-center">
        <p className="mb-0 text-light me-3 " style={{fontSize:'14px'}}>Terms of Use</p>
      <p className="mb-0 text-light" style={{fontSize:'14px'}}>Privacy Policy</p>
      </div>
    </div>
  </footer>
</Container>
</div>
    
    
    </>
  )
}

export default Footer