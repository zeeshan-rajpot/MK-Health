import { Col, Container ,Row } from 'react-bootstrap'
import './style.css'
import { Link, useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Perform any necessary actions before navigating

    // Navigate to the "/home" route
    navigate('/Patient');
    alert('Login Successfully')
  }


  
  return (
    <>
    
<div className="bg-form" style={{height:''}}>

  <Container style={{height:'100vh'}}>
    <Row>
      <Col md={6}  className=" d-flex align-items-center justify-content-center flex-column mobile80vh" style={{height:'95vh'}}>

        <h2 style={{color:'#FAB915'}}><b>Welcome back!</b></h2>
        <h3 className='mt-3'><b>Sign In</b></h3>
      
        <div className="input-container shadow bg-light mt-3 ">
              {/* <FaUser className='icon' /> */}
              <img src={ "/Message.svg"} />
              <input type="text" name='email'  placeholder="Davidwilliam@gmail.com" className="bg-light" />
            </div>
            <div className="input-container shadow bg-light mt-4 ">
              {/* <FaUser className='icon' /> */}
              <img src={ "/Iconly-Bold-Lock.svg"} />
              <input type="password" name='email'  placeholder="*************" className="bg-light" />
            </div>

            <div
              className="text-end mt-2"
              style={{ width: "80%",  }}
            >
           <Link to='/Forget'>   <p className="mb-0 " style={{color:"#B4B5B5"}}>Forget Password </p></Link>
            </div>

            <button className="btnn py-1 px-4 border-0 shadow rounded-5 mt-3" onClick={handleSignIn}>               
    <span className='me-4'>Sign In</span>
    <img  src="/Component 638 – 1.svg" width="30" height="30"/>
    
</button>

<p className='mt-3'>D on't have an account? <Link to='/SignUp'> <span style={{color:'#FAB915'}}> Sign up</span> </Link></p>
      </Col>
      <Col md={6}  className=" d-flex align-items-center justify-content-center flex-column mobile50vh" style={{height:'95vh'}}>
        <img src="/Component 637 – 1.svg" alt="" />
      </Col>
    </Row>
  </Container>

</div>






  </>
  )
}

export default Form