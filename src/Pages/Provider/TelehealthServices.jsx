import { Col, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './teleservise.css'

const TelehealthServiceItem = ({ text, imagePath ,link }) => (
    <Col md={3} xs={10} className="mt-3 mt-md-5 ms-4 ms-md-0 " >
      <div className="p-4 position-absolute" style={{ borderRadius: '50% 50% 0 50%', backgroundColor: '#FAB915', width: '70px', height: '70px' }}>
        <img src={imagePath} width="25px" alt="" />
      </div>
      <Link to={link} className="text-decoration-none">
      <div className="pt-5 ms-4 mt-5 pb-5 rounded-4  text-center hover-effect">
        <h5 className="px-3 text-black ">{text}</h5>
      </div>
      </Link>

    </Col>
  );
  
  const TelehealthServices = () => {
    const serviceItems = [
      { text: "New Rx Requests", imagePath: "/Group 7482.svg" , link: "/RxRequest" },
      { text: "Patient Care", imagePath: "/Path 32262.svg", link: "/new-rx-requests" },
      { text: "My Chart", imagePath: "/Path 32208.svg" , link: "/ProviderChart"},
      { text: "Message All Paitents", imagePath: "/Path 32209.svg" , link: "/MessagePatients" },
      { text: "Recent Activity", imagePath: "/Path 32242.svg" , link: "/RecentActivity"},
      { text: "Invite Patients", imagePath: "/Group 7481.svg" , link: "/InvitePatients"},
      { text: "Collagues", imagePath: "/Path 32254.svg" , link: "/new-rx-requests"},
      { text: "Practice Stats", imagePath: "/Path 32258.svg" , link: "/PracticeStates"},

      // Add more items as needed
    ];
  
    return (
      <>
      <div className="teleservisesbg" id='teleprovciderservices'> 
        <Container className="mt-3 mt-md-5 py-3  text-center">
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
    );
  }
  
  export default TelehealthServices;