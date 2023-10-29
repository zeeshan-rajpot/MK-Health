import  { useState } from 'react';
import { Col, Container, Row } from "react-bootstrap"
import Footer from "../../../Compunents/Footer"
import Navbare from "../../../Compunents/Navbar"
import { Link } from 'react-router-dom';

const RequestedRxForm = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [inputDetails, setInputDetails] = useState('');

  const handleInputChange = (index, event) => {
    const newValue = event.target.value;

    // Update the value in the inputDetails array
    const updatedInputDetails = [...inputDetails];
    updatedInputDetails[index].value = newValue;

    setInputDetails(updatedInputDetails);
  };

  const handleButtonClick = () => {
    setIsEditable(prevState => !prevState); // Toggle isEditable state
  };

  
  const inputDAta = [
    { placeholder: "Zeeshan", label: "Name", type: "text", value: "Zeeshan", disabled: true },
    { placeholder: "42 years old", label: "Age", value: "42", disabled: true },
    { placeholder: "", label: "DOB", type: 'date', value: "1990-01-01", disabled: true },
    { placeholder: "1224 Stillwater Dr,Roc Springs ,WY,52467", label: "Address", value: "1224 Stillwater Dr,Roc Springs ,WY,5246f7", disabled: true },
  ];

  const inputMoreDetail = [
    { placeholder: "$30", label: "Professional Fee Authorized", type: "text" , value:'$30' ,disabled: true },
    { placeholder: "I want to be sure of my health conditions.", label: "Reason For Request"  , value:'I want to be sure of my health conditions.' ,disabled: true},
    { placeholder: "Ozempic", label: "Medication Requested" , value:'Ozempic' ,disabled: true},

    { placeholder: "2.5 - 5.0", label: "Dosage Requested" , value:'2.5 - 5.0' ,disabled: true},
    { placeholder: "At least for 3 Months", label: "Quantity Requested" , value:'At least for 3 Months' ,disabled: true},
    { placeholder: "W: 170 lbs / 77.1 Kg, H: 63 in. / BMI: 30.1", label: "Vital Signs", value:'W: 170 lbs / 77.1 Kg, H: 63 in. / BMI: 30.1' ,disabled: true },
    { placeholder: "Inflammation in Knees & Elbows", label: "Past Medical History" , value:'Inflammation in Knees & Elbows' ,disabled: true},
    { placeholder: "Ambien", label: " Current Medications:" , value:'Ambien' ,disabled: true},
    { placeholder: "Amoxicilion", label: " Allergies:" , value:'Amoxicilion' ,disabled: true},
    { placeholder: "NO", label: " Pregnant?" , value:'NO' ,disabled: true },
    { placeholder: "NO", label: " Breastfeeding?" , value:'NO' ,disabled: true},
    { placeholder: "No", label: " Has the patient ever had an allergic reaction to Munjaro, tripeptide or another GLP-1 receptor against diabetes medication ?" , value:'NO' ,disabled: true},
    { placeholder: "NO", label: " Does the patient have a personal or family history of thyroid cancer?" , value:'NO' ,disabled: true},
    { placeholder: "NO", label: " Has the patient or a family member been diagnosed with multiple Endocrine Neoplasia syndrome?" , value:'NO' ,disabled: true},
    { placeholder: "NO", label: " Has the patient been diagnosed with gallbladder,pancreas, heart, or kidney problems?" , value:'NO' ,disabled: true},
    { placeholder: "NO", label: " Has the patient ever had thoughts of suicide?" , value:'NO' ,disabled: true},
    { placeholder: "NO", label: " Is the patient pregnant, or planning to get pregnant in the near future, or breastfeeding?" , value:'NO' ,disabled: true}, 


];


const update = [
  { placeholder: "1224 Stillwater Dr,Roc Springs ,WY,52467", label: "Address", value: "1224 Stillwater Dr,Roc Springs ,WY,5246f7", disabled: true },

  { placeholder: "123456789", label: "Phone number", value: "(321) 123-4545", disabled: true },

  
];

  
  return (
    <>
    <Navbare/>

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
                <b style={{ color: "#FAB915" }}>Patient Detail</b>
              </h6>

              <div className=" m-auto mobw90" style={{ width: "80%" }}>
  {inputDAta.map((input, index) => (
    <div key={index} >
      <p className="mb-1 ms-3 mt-3 ">{input.label}</p>
      <input
        type={input.type}
        className="shadow border-0 w-100 m-0 p-3 rounded-5 "
        placeholder={input.placeholder}
        disabled={input.disabled} // Add disabled prop based on condition
        value={input.value} // Add value prop based on condition
      />
     




    
    </div>
  ))}
      <button className="btnn py-1 px-4 border-0 shadow rounded-5 mt-4" >               
    <span className='me-4'>Call Patient</span>
    <img  src="/Component 638 – 1.svg" width="30" height="30"/>
    
</button>
</div>

            </div>










            <div
              className=" m-auto  shadow py-5 mobw100 rounded-0 mt-5"
              style={{ width: "75%" }}
            >
              <h6 className="ms-2 ms-md-5  pb-4">
                <b style={{ color: "#FAB915" }}>Patient provided Data</b>
              </h6>

              <div>
  {inputMoreDetail.map((input, index) => (
    <div key={index} className=" m-auto mobw90" style={{ width: "80%" }}>
      <p className="mb-1 ms-3 mt-3 " style={{color:'#747E93' ,fontSize:'14px'}}>{input.label}</p>
      <input
        type={input.type}
        className="shadow border-0 w-100 m-0 p-3 rounded-5 "
        placeholder={input.placeholder}
        disabled={input.disabled} // Add disabled prop based on condition
        value={input.value} // Add value prop based on condition
      />
    </div>
  ))}
</div>

            </div>
























            <div className="m-auto shadow py-5 mobw100 rounded-0 mt-5" style={{ width: "75%" }}>
      <h6 className="ms-2 ms-md-5 pb-4">
        <b style={{ color: "#FAB915" }}>Pharmacy Detail</b>
      </h6>

      <div className="m-auto mobw90" style={{ width: "80%" }}>
        {update.map((input, index) => (
          <div key={index}>
            <p className="mb-1 ms-3 mt-3">{input.label}</p>
            <input
              type={input.type}
              className="shadow border-0 w-100 m-0 p-3 rounded-5"
              placeholder={input.placeholder}
              disabled={!isEditable} // Add disabled prop based on isEditable state
              value={input.value} // Add value prop based on condition
              onChange={(event) => handleInputChange(index, event)}
            />
          </div>
        ))}

        <button className="btnn py-1 px-4 border-0 shadow rounded-5 mt-4" onClick={handleButtonClick}>
          <span className='me-4'>{isEditable ? 'Save' : 'Change'}</span>
          <img src="/Component 638 – 1.svg" width="30" height="30" alt="icon" />
        </button>
      </div>
    </div>








    <div className='d-block d-md-flex align-items-center justify-content-center '>
      <div>

      </div>
      <div>
          
          </div>
    </div>
    </Col>
  </Row>
</Container>




<Container>
<Row className='shadow my-4 m-auto p-4 mobw100' style={{ width: '75%' }}>
                <Col md={6}>
                  <button
                    className='text-white w-100 p-3 border-0 rounded-3 mb-2 '
                    style={{
                      backgroundColor:'#EB5757',
                        
                    }}
                   
                  >
                    <img
                      src='./Component 613 – 2.svg'
                      alt='icon'
                      className='me-3'
                    />
                 Cancel RX
                  </button>
                </Col>
                <Col md={6}>
                    <Link to='/ReviewPrescribePage'>
                    <button
                    className='text-white w-100 p-3 border-0 rounded-3 mb-2 '
                    style={{
                      backgroundColor:'#FAB915',
                        
                    }}
                   
                  >
                    <img
                      src='./Component 618 – 2.svg'
                      alt='icon'
                      className='me-3'
                    />
               Write Rx & Confirm Fees
                  </button>
                  </Link>
                </Col>
             
              </Row>
</Container>
       
        
    
    <Footer/>

    
    </>
  )
}

export default RequestedRxForm