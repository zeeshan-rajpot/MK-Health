import RequestCard from './RequestCard';
import { Container, Row, Col } from 'react-bootstrap';
const PendingRequest = () => {
  return (
    <>
    <br /><br />
    <br />
    <br />
    <div>
      <Container className='shadow m-auto ' style={{ width: '80' }}>
        <Row className='m-auto pt-5 ' style={{ width: '80%' }}>
          <h5 className='text' style={{color:'#FAB915'}}>Your Pending Request</h5>
        </Row>
        <Row className='m-auto mt-2 py-5' style={{ width: '80%' }}>
         
            <RequestCard />
          
            <RequestCard />
    
            <RequestCard />
        
            <RequestCard />
       
            <RequestCard />
         
            <RequestCard />
    
        </Row>
      </Container>
    </div>
    
    
    </>
  )
}

export default PendingRequest