import { Container, Row , Col} from "react-bootstrap"
import { Link } from "react-router-dom"


const Overview = () => {
  return (
    <>
    <Container className="mt-5">
        <Row>
            <Col>
            <h3><b>Prescription Refill - Overview</b></h3>
            <p style={{color:'#747E93'}}>A prescription refill is the process by which one can get a new prescription from a medical provider to get the medications that they are already taking at a pharmacy. Through MK Healthcare, you may be able to get a prescription refill from a licensed medical provider when appropriate to do so.</p>
            </Col>
        </Row>


        <Row>
            <Col>
            <h3><b>Why Get A Prescription Refill</b></h3>
            <p style={{color:'#747E93'}}>

            Most prescription refills are provided by one's existing medical provider. Sometimes, one might need a short-term prescription refill from a new medical provider due to the lack of availability of an appointment with one's regular provider. 
<br /><br />
Another reason might be that the medications have been lost or destroyed. In general, short-term prescription refills can be done at places like a medical clinic, urgent care or online but they are not a substitute for having a regular doctor or other medical provider who can provide ongoing medical care and management.

            </p>
          <div className="text-center">  
       <Link to='/RequestPrescription'>
      
        <button className=" btnn py-1 px-4 border-0 shadow rounded-5 mt-3">               
    <span className='me-4'>Get Prescription Refill</span>
    <img  src="/Component 638 – 1.svg" width="30" height="30"/>
    
</button>
</Link>
</div>    </Col>
        </Row>



        <Row>
            <Col>
            <h3><b>Get your prescription refill online</b></h3>
            <p style={{color:'#747E93'}}>

            Medications that cannot be refilled via an online prescription through a service like MK Health included controlled medications like narcotics or anxiety medications, gabapentin, or any other medication that a medical provider determines would not be appropriate to prescribe through an online evaluation.
 
<br /><br />
Prescription refills can sometimes be done online after the appropriate medical evaluation is performed. Push Health can connect people who need a prescription refill online with a licensed medical provider who can refill a prescription if it is safe and appropriate to do so.

            </p>
          <div className="text-center">  
       <Link  to='/RequestPrescription'>
       <button className=" btnn py-1 px-4 border-0 shadow rounded-5 mt-3">               
    <span className='me-4'>Request Rx Refill</span>
    <img  src="/Component 638 – 1.svg" width="30" height="30"/>
    
</button>
</Link>
</div>    </Col>
        </Row>
      
    </Container>
    
    
    </>
  )
}

export default Overview