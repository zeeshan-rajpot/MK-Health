import React, { useState, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Modal, Button } from 'react-bootstrap';
import ConfrimPassword from "../../Forget.jsx/ConfrimPassword";
import ConfirmRequestModal from "./ConfirmRequestModal";

const RequestLabForm = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const [selectedGender, setSelectedGender] = useState("male");

  const handleGenderClick = (gender) => {
    setSelectedGender(gender);
  };

  const datePickerRef = useRef(null);

  const openDatePicker = () => {
    datePickerRef.current.click();
  };

  const inputDetails = [
    { placeholder: "User", label: "First Name", type: "text" },
    { placeholder: "User", label: "Last Name" },
    { placeholder: "California", label: "Address Line 1" },
    { placeholder: "USA", label: "Address Line 2" },
    { placeholder: "Texas", label: "City" },
    { placeholder: "California", label: "State" },
    { placeholder: "45200", label: "Zip Code", type: "number" },
    { placeholder: "000 - 0000 - 0000", label: "Phone", type: "number" },
  ];

  const [values, setValues] = useState(Array(inputDetails.length).fill(""));

  const handleChange = (index, e) => {
    const updatedValues = [...values];
    updatedValues[index] = e.target.value;
    setValues(updatedValues);
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <br />
            <br />
            <br />

            <div
              className=" m-auto  shadow py-5 mobw100 rounded-0 "
              style={{ width: "75%" }}
            >
              <h6 className="ms-2 ms-md-5  pb-4">
                <b style={{ color: "#FAB915" }}>Request Summary</b>
              </h6>

              <div
                className="py-5 m-auto  shadow mobw90 rounded-3 py-4"
                style={{ width: "80%" }}
              >
                <div
                  className="d-flex align-content-center  justify-content-between  border-bottom  m-auto "
                  style={{ width: "95%" }}
                >
                  <p className="ms-2 mobfont12">
                    <b>Requested Service</b>
                  </p>
                  <p className="me-2 mobfont12">
                    <b>Amino Acids, Quant Test </b>
                  </p>
                </div>
                <div
                  className="mt-3 d-flex align-content-center  justify-content-between  border-bottom  m-auto "
                  style={{ width: "95%" }}
                >
                  <p className="ms-2 mobfont12">Lab testing fees </p>
                  <p className="me-2 mobfont12">$678.51 </p>
                </div>
                <div
                  className="mt-3 d-flex align-content-center  justify-content-between  border-bottom  m-auto "
                  style={{ width: "95%" }}
                >
                  <p className="ms-2 mobfont12">
                    Medical provider and platform fees{" "}
                  </p>
                  <p className="me-2 mobfont12">$147.78 </p>
                </div>
                <div
                  className="mt-3 d-flex align-content-center  justify-content-between    m-auto "
                  style={{ width: "95%" }}
                >
                  <p className="ms-2 mobfont12" style={{ color: "#FAB915" }}>
                    <b>Total: </b>
                  </p>
                  <p className="me-2 mobfont12" style={{ color: "#FAB915" }}>
                    <b>$826.29 </b>
                  </p>
                </div>
              </div>
            </div>
            <br />
            <br />

            <div
              className=" m-auto  shadow py-5 mobw100 rounded-0 "
              style={{ width: "75%" }}
            >
              <h6 className="  pb-4 border-bottom mx-4">
                <b style={{ color: "#FAB915", width: "90%" }}>
                  Step - 1 Personal Information
                </b>
              </h6>

              <div>
                {inputDetails.map((input, index) => (
                  <div
                    key={index}
                    className=" m-auto mobw90"
                    style={{ width: "80%" }}
                  >
                    <p className="mb-1 ms-3 mt-3 ">{input.label}</p>
                    <input
                      type={input.type}
                      className="shadow border-0  w-100 m-0 p-3 rounded-5 "
                      placeholder={input.placeholder}
                      value={values[index]}
                      onChange={(e) => handleChange(index, e)}
                    />
                  </div>
                ))}
              </div>

              <div>
                <div className="m-auto mobw90" style={{ width: "80%" }}>
                  <p className="mb-1 ms-3 mt-3">Date</p>
                  <div style={{ position: "relative" }}>
                    <input
                      type="date"
                      className="shadow border-0 w-100 m-0 p-3 rounded-5 custom-date-input"
                      ref={datePickerRef}
                    />
                    <img
                      src="/Iconly-Bold-Calendar.svg"
                      alt="Custom Icon"
                      onClick={openDatePicker}
                      style={{
                        position: "absolute",
                        right: "20px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div className=" m-auto mobw90" style={{ width: "80%" }}>
                    <p className="mb-1 ms-3 mt-3 ">Gender</p>

                    <div className="d-flex align-items-center">
                      <div
                        className={`d-flex align-items-center justify-content-center px-5 py-2 shadow rounded-5 ${
                          selectedGender === "male" ? "selected" : ""
                        }`}
                        onClick={() => handleGenderClick("male")}
                        style={{
                          background:
                            selectedGender === "male" ? "" : "#FFFFFF",
                          color: selectedGender === "male" ? "#FAB915" : "",
                        }}
                      >
                        <input
                          type="radio"
                          checked={selectedGender === "male"}
                          readOnly
                        />
                        <span className="ms-2">Male</span>
                      </div>
                      <div
                        className={`ms-2 d-flex align-items-center justify-content-center px-5 py-2 shadow rounded-5 ${
                          selectedGender === "female" ? "selected" : ""
                        }`}
                        onClick={() => handleGenderClick("female")}
                        // style={{ background: selectedGender === 'female' ? '#FAB915' : '#FFFFFF', color: selectedGender === 'female' ? '#FFFFFF' : '#000000' }}
                      >
                        <input
                          type="radio"
                          checked={selectedGender === "female"}
                          readOnly
                        />
                        <span
                          className="ms-2"
                          style={{
                            background:
                              selectedGender === "female" ? "" : "#FFFFFF",
                            color: selectedGender === "female" ? "#FAB915" : "",
                          }}
                        >
                          Female
                        </span>
                      </div>
                    </div>
                
                  </div>
              
                </div>


                <div className="m-auto mobw90" style={{ width: "80%" }}>
                  <p className="mb-1 ms-3 mt-3">Reason for Lab Testing (detailed is better)</p>
                  <div >
                  <textarea name="" id="" className="w-100 border-0 shadow  rounded-4 p-3" placeholder='When i woke up i feel like...'  style={{height:'130px'}}></textarea>
                  </div>
                </div>



                <div className="m-auto mobw90 mt-3" style={{ width: "80%" }}>
                  {/* <p className="mb-1 ms-3 mt-3">Reason for Lab Testing (detailed is better)</p> */}
                  <div >
                  <textarea name="" id="" className="w-100 border-0 shadow  rounded-4 p-3" placeholder='Past Medical Problems (if no, type "none")'  style={{height:'90px'}}></textarea>
                  </div>
                </div>
                <div className="m-auto mobw90 mt-3" style={{ width: "80%" }}>
                  {/* <p className="mb-1 ms-3 mt-3">Reason for Lab Testing (detailed is better)</p> */}
                  <div >
                  <textarea name="" id="" className="w-100 border-0 shadow  rounded-4 p-3" placeholder='Known Allergies (if no, type "none")
'  style={{height:'90px'}}></textarea>
                  </div>
                </div>

              </div>
            </div>




            <div
              className=" m-auto  shadow py-5 mobw100 rounded-0 "
              style={{ width: "75%" }}
            >
              <h6 className="ms-2 ms-md-5  pb-4">
                <b style={{ color: "#FAB915" }}>Step 2 - Find a Lab</b>
                <p style={{color:'#747E93'}}>Enter your Zip Code or city to see a list of available Quest Diagnostics lab locations in your area.</p>
              </h6>

              <div
                className="py-5 m-auto  shadow mobw90 rounded-3 py-4"
                style={{ width: "80%" }}
              >
             
        
             <div className="input-container shadow bg-light m-auto ">
              {/* <FaUser className='icon' /> */}
              <img src={ "/Iconly-Bold-Search.svg"} />
              <input type="text" name='email'  placeholder="48306 (Rochester, MI)" className="bg-light p-1 rounded-5 " />
            </div>

           {/* <div className="d-md-flex align-items-center  ">
            <div className="py-2 shadow m-auto" style={{width:'70%'}}>
<h6><b>A - Quest Diagnostics</b></h6>
<p style={{color:'#747E93'}}>135 Barclay Cir, Ste 103Rochester Hills,
 MI 48307</p>

 <button className="py-2 px-4 border-0  rounded-5 " style={{background:'#FEF3D5' , color:'#FAB915'}}>Choose</button>
            </div>
            <div className="py-2 shadow m-auto" style={{width:'70%'}}>
<h6><b>A - Quest Diagnostics</b></h6>
<p style={{color:'#747E93'}}>135 Barclay Cir, Ste 103Rochester Hills,
 MI 48307</p>

 <button className="py-2 px-4 border-0  rounded-5 " style={{background:'#FEF3D5' , color:'#FAB915'}}>Choose</button>
            </div>
               
           </div> */}
           <Row className="pt-5 pb-3">
            <Col md={2} className="p-0">
            
            </Col>
            <Col md={8} className="p-0">
            <div className="d-md-flex align-items-center   justify-content-between ">
            <div className="py-2 p-3  shadow m-auto  me-md-4 rounded-4 " style={{width:'80%'}}>
<h6><b>A - Quest Diagnostics</b></h6>
<p style={{color:'#747E93' , fontSize:'12px'}}>135 Barclay Cir, Ste 103Rochester Hills,
 MI 48307</p>

 <button className="py-2 px-4 border-0  rounded-5 " style={{background:'#FEF3D5' , color:'#FAB915'}}>Choose</button>
            </div>
            <div className="py-2 p-3 shadow m-auto me-md-4 mt-md-0 mt-4 rounded-4" style={{width:'80%'}}>
<h6><b>A - Quest Diagnostics</b></h6>
<p style={{color:'#747E93' , fontSize:'12px'}}>135 Barclay Cir, Ste 103Rochester Hills,
 MI 48307</p>

 <button className="py-2 px-4 border-0  rounded-5 " style={{background:'#FEF3D5' , color:'#FAB915'}}>Choose</button>
            </div>
               
           </div>
            </Col>
            <Col md={2}>
            </Col>
           </Row>
              </div>
            </div>














            <div
              className=" m-auto  shadow py-5 mobw100 rounded-0 mt-5"
              style={{ width: "75%" }}
            >
              <h6 className="ms-2 ms-md-5  pb-1">
                <b style={{ color: "#FAB915" }}>Step 3 - Terms of Use</b>
              </h6>

          <p className=" ms-2 ms-md-5" style={{color:'#747E93'}}> These Terms of Use must be agreed to by the patient or, when appropriate, the legal guardian.</p>
          
          <div className="ms-2 ms-md-5">
         
  <div className=" d-flex align-items-start  justify-content-start">


   <div>
   <label className='custom-checkbox'>
            <input type='checkbox' className="shadow"/>
            <span className='checkmark shadow rounded-5 ' ></span>
          </label>
   </div>
   <div><p style={{fontSize:'12px'}}>By checking this box, you certify that, to the best of your knowledge, all medical information submitted is accurate. You agree to follow up with your regular medical provider for ongoing care.</p></div>
      
  </div>
  <div className=" d-flex align-items-start  justify-content-start">


<div>
<label className='custom-checkbox'>
         <input type='checkbox' className="shadow"/>
         <span className='checkmark shadow rounded-5 ' ></span>
       </label>
</div>
<div><p style={{fontSize:'12px'}}>By checking this box, you indicate that you, as the patient or legal guardian of the patient, agree to the Terms of Service, Lab Testing Terms of Use, Privacy Policy and Consent to Telehealth.</p></div>
   
</div>

  <div>
    <div></div>
    <div></div>
  </div>
</div>

          
          
          
          
          
          
          
          
          
          
          
            </div>









          </Col>
        </Row>


<Row className="py-5">
  <Col className="text-center">
  <button className="btnn py-1 px-4 border-0 shadow rounded-5 mt-3" onClick={handleShow}>               
    <span className='me-4'>Submit</span>
    <img  src="/Component 638 – 1.svg" width="30" height="30"/>
    
</button>
  </Col>
</Row>

      </Container>















      <Modal show={showModal} onHide={handleClose} size='lg'  >
      
        <Modal.Body className="p-0 rounded-3 ">
          <ConfirmRequestModal/>
        </Modal.Body>
        
      </Modal>





    </>
  );
};

export default RequestLabForm;
