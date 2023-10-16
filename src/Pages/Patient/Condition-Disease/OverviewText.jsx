import { Container, Row ,Col } from "react-bootstrap"


const OverviewText = () => {
  return (
    <>
    <Container className="">
        <Row className="pt-5  m-auto mobw100" style={{width:'75%'}}>
            <Col>
            <h4><b>Condition and Disease Management - Overview</b></h4>
            <p style={{color:'#747E93'}}>Condition and disease management refers to the ongoing care and treatment of individuals who are affected by specific medical conditions or diseases. This process involves monitoring, medical intervention, lifestyle adjustments, and patient education to ensure that individuals can effectively manage their health and improve their quality of life. Here, we'll explore the key aspects of condition and disease management.</p>
            </Col>
        </Row>

        <Row className="  m-auto mobw100" style={{width:'75%'}}>
            <Col>
            <h4><b>Condition and Disease - Healthcare Providers</b></h4>
            <p style={{color:'#747E93'}}>Primary Care Physicians (PCPs): Primary care doctors play a central role in managing various medical conditions and diseases. They serve as the first point of contact for patients and coordinate their overall healthcare.
            <br /><br />
            Specialists: Depending on the specific condition or disease, individuals may also require the expertise of medical specialists, such as cardiologists, endocrinologists, oncologists, and neurologists, among others.
            <br /><br />
            Care Teams: In complex cases, a team of healthcare professionals may work together to manage a patient's condition. This team can include nurses, dietitians, physical therapists, and social workers.
            </p>

            </Col>
        </Row>
    </Container>
    
    
    </>
  )
}

export default OverviewText