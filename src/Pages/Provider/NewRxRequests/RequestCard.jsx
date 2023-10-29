import {  Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const RequestCard = () => {
  return (
    <>
   
  
    <Col md={4} xs={12}>
    <Link to='/PaitentDetail'>
    <div className='shadow d-flex justify-content-center align-items-center my-4 rounded-4 hover-effect'>
      <div className=' d-flex justify-content-center align-items-center  flex-column  '>
        <img
          src='https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=1972&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          className='w-100 mt-4'
          style={{
            borderRadius: '100%',
            objectFit: 'cover',
            width: '100px',
            height: '100px',
          }}
          alt='girl'
        />
        <h3 className='mt-3 text' style={{color:'#FAB915' ,fontSize:'15px'}}>Sophia</h3>
        <p className='text-black 'style={{fontSize:'15px'}}>(Open Practice)</p>
      </div>
    </div>
    </Link>
    </Col>
   
    </>
  )
}

export default RequestCard