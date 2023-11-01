import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap"
import Navbare from "../../Compunents/Navbar"
import { Link } from "react-router-dom"
import { Modal } from 'react-bootstrap';
import SelectOption from "./SelectOption";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [validationErrors, setValidationErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    // Check if any field is empty
    const isAnyFieldEmpty = Object.values(formData).some(value => value === '');

    if (isValid && !isAnyFieldEmpty) {
      handleShowModal();
      setButtonClicked(true);
      // console.log("Form Data:", formData);
    }
  }

  const validateForm = () => {
    const errors = {};

    if (!formData.name) {
      errors.name = "Name is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    setValidationErrors(errors);

    return Object.keys(errors).length === 0;
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const isValid = validateForm();

  //   if (isValid) {
  //     handleShowModal();
  //   }
  // }



  const inputFields = [
    { label: "Name", name: "name", type: "text", placeholder: "Name" },
    { label: "Email", name: "email", type: "text", placeholder: "Davidwilliam@gmail.com" },
    { label: "Password", name: "password", type: "password", placeholder: "*************" },
    { label: "Confirm Password", name: "confirmPassword", type: "password", placeholder: "*************" }
  ];


  return (
    <>
     <div className="overflow-x-hidden">
        <Navbare activetab='' bgcolor='transparent' />
        <div className="bg-form" style={{height:''}}>
          <Container style={{height:'100vh'}}>
            <Row>
              <Col md={6} className="d-flex align-items-center justify-content-center flex-column mobile80vh" style={{height:'95vh'}}>
                <h3 className='mt-3'><b>Sign Up</b></h3>
                {inputFields.map((field, index) => (
  <div key={index} className={`input-container shadow bg-light mt-4 ${validationErrors[field.name] ? 'border border-danger' : ''} ${buttonClicked && formData[field.name] === '' ? '' : ''}`}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={`/Iconly-Bold-Lock.svg`} />
      <input 
        type={field.type} 
        name={field.name} 
        value={formData[field.name]} 
        onChange={handleInputChange} 
        placeholder={field.placeholder} 
        className="bg-light" 
      />
    </div>
    
    {/* {validationErrors[field.name] && <div className="error-message">{validationErrors[field.name]}</div>}  */}
  </div>
))}

                <button className="btnn py-1 px-4 border-0 shadow rounded-5 mt-3" onClick={handleSubmit}>
                  <span className='me-4'>Sign Up</span>
                  <img src="/Component 638 – 1.svg" width="30" height="30"/>
                </button>
                <p className='mt-3'>Already have an account? <Link to='/Login'> <span style={{color:'#FAB915'}}>Sign in</span> </Link></p>
              </Col>
              <Col md={6} className="d-flex align-items-center justify-content-center flex-column mobile50vh" style={{height:'95vh'}}>
                <img src="/Component 639 – 1.svg" alt="" width='70%' />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal} centered size='lg'>
        <Modal.Body>
          <SelectOption  formData={formData}/>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default SignUp;
