
import { Col, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';


const TelehealthServiceItem = ({ text, imagePath , link}) => (
    <Col md={3} xs={10} className="mt-3 mt-md-5 ms-4 ms-md-0">
      <div className="p-4 position-absolute" style={{ borderRadius: '50% 50% 0 50%', backgroundColor: '#FAB915', width: '70px', height: '70px' }}>
        <img src={imagePath} width="25px" alt="" />
      </div>
      <Link to={link} className="text-decoration-none">
      <div className="pt-5 ms-4 mt-5 pb-5 rounded-4  text-center hover-effect">
        <p className="px-3 text-black " style={{fontSize:'18px'}}>{text}</p>
      </div>
      </Link>
    </Col>
  );
  
  const PaitentTelehealthServices = () => {
    const serviceItems = [
      { text: "Request Lab Test", imagePath: "/Path 32206.svg" , link: "/LabTest" },
      { text: "Request Prescription", imagePath: "/Path 32207.svg" , link: "/Prescription"},
      { text: "My Chart", imagePath: "/Path 32208.svg" , link: "/myCharts"},
      { text: "Condition/Disease", imagePath: "/Path 32209.svg" , link: "/Condition"},
    
      // Add more items as needed
    ];
  

  return (
    <>
     <div className="teleservisesbg" > 
        <Container className="mt-3 mt-md-5 py-3  text-center" id='teleservices'>
          <Row>
            <Col>
              <h1><b>Telehealth Services</b></h1>
            </Col>
          </Row>
        </Container>
  
        <Container className=" rounded-5  pt-3 pb-5">
          <Row className="text-start">
            {serviceItems.map((item, index) => (
              <TelehealthServiceItem 
                key={index} 
                text={item.text} 
                imagePath={item.imagePath} 
                link={item.link}
              />
            ))}
          </Row>
        </Container>
        </div>
    
    
    </>
  )
}

export default PaitentTelehealthServices