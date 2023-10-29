import { useState, useRef } from "react";
import { Col, Container, Row ,Modal } from "react-bootstrap";

function UpdateForm() {

    // const [showModal, setShowModal] = useState(false);

    // const handleShow = () => setShowModal(true);
    // const handleClose = () => setShowModal(false);

  
    const datePickerRef = useRef(null);
  
    const openDatePicker = () => {
      datePickerRef.current.click();
    };
  
    const inputDetails = [
      { placeholder: "Zeeshan", label: "Name", type: "text" },
      { placeholder: "42 years old", label: "Age" },
      { placeholder: "", label: "DOB" ,type:'date' },
      { placeholder: "1224 Stillwater Dr,Roc Springs ,WY,52467", label: "Address" },

    ];

    const inputMoreDetail = [
        { placeholder: "$30", label: "Professional Fee Authorized", type: "text" },
        { placeholder: "I want to be sure of my health conditions.", label: "Reason For Request" },
        { placeholder: "Ozempic", label: "Medication Requested" },

        { placeholder: "2.5 - 5.0", label: "Dosage Requested" },
        { placeholder: "At least for 3 Months", label: "Quantity Requested" },
        { placeholder: "W: 170 lbs / 77.1 Kg, H: 63 in. / BMI: 30.1", label: "Vital Signs" },
        { placeholder: "Inflammation in Knees & Elbows", label: "Past Medical History"},
        { placeholder: "Ambien", label: " Current Medications:" },
        { placeholder: "Amoxicilion", label: " Allergies:" },
        { placeholder: "NO", label: " Pregnant?" },
        { placeholder: "NO", label: " Breastfeeding?" },
        { placeholder: "No", label: " Has the patient ever had an allergic reaction to Munjaro, tripeptide or another GLP-1 receptor against diabetes medication ?" },
        { placeholder: "NO", label: " Does the patient have a personal or family history of thyroid cancer?" },
        { placeholder: "NO", label: " Has the patient or a family member been diagnosed with multiple Endocrine Neoplasia syndrome?" },
        { placeholder: "NO", label: " Has the patient been diagnosed with gallbladder,pancreas, heart, or kidney problems?" },
        { placeholder: "NO", label: " Has the patient ever had thoughts of suicide?" },
        { placeholder: "NO", label: " Is the patient pregnant, or planning to get pregnant in the near future, or breastfeeding?" }, 
    
    
    ];



   const PharmacyDetail =[
    { placeholder: "135 Barclay Cir, Ste 103Rochester Hills, MI 48307", label: "Address", type: "text" },
    { placeholder: "(321) 123-4545", label: "Phone number", type: "text" },

   ]
  
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
            </div>
            <br />
            <br />

            <div
              className=" m-auto  shadow py-5 mobw100 rounded-0 "
              style={{ width: "75%" }}
            >
              <h6 className="  pb-4 border-bottom mx-4">
                <b style={{ color: "#FAB915", width: "90%" }}>
               Provided Data
                </b>
              </h6>

              <div>
                {inputMoreDetail.map((input, index) => (
                  <div
                    key={index}
                    className=" m-auto mobw90"
                    style={{ width: "80%" }}
                  >
                    <p className="mb-1 ms-3 mt-3 " style={{color:'#747E93'}}>{input.label}</p>
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

      
            </div>



            <div
              className=" m-auto  shadow py-5 mobw100 rounded-0 "
              style={{ width: "75%" }}
            >
              <h6 className="  pb-4 border-bottom mx-4">
                <b style={{ color: "#FAB915", width: "90%" }}>
               Provided Data
                </b>
              </h6>

              <div>
                {PharmacyDetail.map((input, index) => (
                  <div
                    key={index}
                    className=" m-auto mobw90"
                    style={{ width: "80%" }}
                  >
                    <p className="mb-1 ms-3 mt-3 " style={{color:'#747E93'}}>{input.label}</p>
                    <input
                      type={input.type}
                      className="shadow border-0  w-100 m-0 p-3 rounded-5 "
                      placeholder={input.placeholder}
                      value={values[index]}
                      onChange={(e) => handleChange(index, e)}
                    />
                  </div>
                ))}
                s
              </div>
s
      
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
    
        </Container>
    </>
  )
}

export default UpdateForm