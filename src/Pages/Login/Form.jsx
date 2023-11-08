import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Col, Container ,Row } from 'react-bootstrap'
import './style.css'
import { Link, useNavigate } from "react-router-dom";
import { baseurl } from '../../const';

const Form = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSignIn = () => {
    const { email, password } = formData;
  
    axios.post(`${baseurl}/api/auth/signin`, {
      email: email,
      password: password
    })
    .then((response) => {
      console.log('Login successful:', response.data);
      localStorage.setItem('token', response.data.token);
      toast.success(`${response.data.message}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setTimeout(() => {
        navigate('/Patient');
      }, 3000);
    })
    .catch((error) => {
      console.error( error.response.data.message);
      toast.error(` ${error.response.data.message}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      // Handle login error, e.g., show an error message
    });
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
              <input 
          type="text" 
          name='email' 
          value={formData.email} 
          placeholder="Davidwilliam@gmail.com" 
          className="bg-light" 
          onChange={handleInputChange} 
        />
            </div>
            <div className="input-container shadow bg-light mt-4 ">
              {/* <FaUser className='icon' /> */}
              <img src={ "/Iconly-Bold-Lock.svg"} />
              <input 
          type="password" 
          name='password' 
          value={formData.password} 
          placeholder="*************" 
          className="bg-light" 
          onChange={handleInputChange} 
        />
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


<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>



  </>
  )
}

export default Form






