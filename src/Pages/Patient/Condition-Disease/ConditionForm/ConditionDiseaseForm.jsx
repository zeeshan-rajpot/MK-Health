import React, { useState, useRef } from 'react';
import { Col, Container, Row, Modal } from 'react-bootstrap';

import ConditionPayModal from "../ConditionPayModal";
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ConfirmRequestModal from '../../Lab Test/ConfirmRequestModal';
import { useParams } from 'react-router-dom';
import { baseurl } from '../../../../const';



const ConditionDiseaseForm = () => {


  let { Common } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [pselectedopt, setPselectedopt] = useState('yes');
  const [isChecked, setIsChecked] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [formData, setFormData] = useState({

  });
  // console.log(formData)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const [selectedDate, setSelectedDate] = useState('');



//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Use 'formData' for further processing (e.g., sending to a server)
// console.log(formData)
//     // Reset form after submission (if needed)
//     setFormData({
//       username: '',
//       password: ''
//     });
//   };

const handleSubmit = async () => {
// console.log('hhhhhhh')
    try {
      const token = localStorage.getItem('token'); // Retrieve token from localStorage

      if (!token) {
        console.error('Token not found in localStorage');
        return;
      }
   const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };

    const prescriptionData = {
      type: "disease",     //can be  'disease', 'refill','medication'
      details:Common,
      // patientId: '65426074cb256db0f30c1de1',
      reason: formData.reason,
      personalInformation: {
        name: formData.FirstName + formData.LastName,
        address: {
          streetAddress: formData.Address,
          city: formData.City,
          state: formData.State,
        },
        phone: formData.phone,
        dob: selectedDate,
        gender: selectedGender,
        pastMedicalHistory: formData.pastMedicalHistory,
        currentMedication: formData.currentMedication,
        knownAllergies: formData.knownAllergies
      },
      desiredMedications: [
        {
          medicationName: formData.medicationName,
          dosage: formData.dosage,
          quantity: formData.quantity
        },
        {
          medicationName: 'Ibuprofen',
          dosage: '200mg',
          quantity: 20
        }
      ],
      pharmacyID: '65424010eedddf03afefe83b',
      status: 'pending',
      allergicReactions: isYes,
      breathingProblems: isYesp
    };
    const response = await axios.post(
      `${baseurl}/api/patient/newrequest`,
      prescriptionData,
      { headers }
    );

    console.log("Response:", response.data);
    setShowModal(true);
    setResponseData(response.data);
    toast.promise(
      // Pass a promise function that will resolve on success and reject on error
      () => Promise.resolve(response.data), // Resolve the promise with response.data
      {
        pending: "Adding disease...", // Pending message
        success: "Disease added successfully!", // Success message
        error: "An error occurred while adding prescription.", // Error message
      }
    );
  } catch (error) {
    console.error(error.response.data.message);
    toast.error(` ${error.response.data.message}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
};
const handleDateChange = (e) => {
  setSelectedDate(e.target.value);
};

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // const [selectedGender, setSelectedGender] = useState('male');

  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderClick = (gender) => {
    setSelectedGender(gender);
  };


  const [selectedopt, setSelectedopt] = useState('yes');

  // const handleoptClick = opt => {
  //   setSelectedopt(opt);
  // };

  const isYes = selectedopt === 'yes';

  const handleoptClick = opt => {
    setSelectedopt(opt);
    const isYes = opt === 'yes';
    // console.log(isYes);
  };

  const isYesp = pselectedopt === 'yes';
  const phandleoptClick = opt => {
    setPselectedopt(opt);
    const isYesp = opt === 'yes';
    // console.log(isYesp);
  };



  const inputDetails = [
    { placeholder: 'John', label: 'First Name ', type: 'text' ,key:'FirstName'},
    { placeholder: 'Wick', label: 'Last Name',key:'LastName' },
    { placeholder: 'Street Adress', label: 'Address' ,key:'Address'},
    { placeholder: 'California', label: 'State' ,key:'State'},
    { placeholder: 'City', label: 'City',key:'City' },
    // { placeholder: 'California', label: 'USA' ,key:''},
    { placeholder: '5800', label: 'Zip Code', type: 'number',key:'ZipCode' },
    { placeholder: '000 - 0000 - 0000', label: 'Phone', type: 'number' ,key:'phone'},
  ];

  const [inputValues, setInputValues] = useState(
    Array(inputDetails.length).fill('')
  );

  const handleInputChange = (index, e) => {
    const updatedInputValues = [...inputValues];
    updatedInputValues[index] = e.target.value;
    setInputValues(updatedInputValues);
  };

  const [pharmacies] = useState([
    {
      name: 'A - Quest Diagnostics',
      address: '135 Barclay Cir, Ste 103Rochester Hills, MI 48307',
    },
    {
      name: 'A - Quest Diagnostics',
      address: '135 Barclay Cir, Ste 103Rochester Hills, MI 48307',
    },
    {
      name: 'A - Quest Diagnostics',
      address: '135 Barclay Cir, Ste 103Rochester Hills, MI 48307',
    },
    {
      name: 'A - Quest Diagnostics',
      address: '135 Barclay Cir, Ste 103Rochester Hills, MI 48307',
    },
    {
      name: 'A - Quest Diagnostics',
      address: '135 Barclay Cir, Ste 103Rochester Hills, MI 48307',
    },
    {
      name: 'A - Quest Diagnostics',
      address: '135 Barclay Cir, Ste 103Rochester Hills, MI 48307',
    },
    {
      name: 'A - Quest Diagnostics',
      address: '135 Barclay Cir, Ste 103Rochester Hills, MI 48307',
    },
    {
      name: 'A - Quest Diagnostics',
      address: '135 Barclay Cir, Ste 103Rochester Hills, MI 48307',
    },
    {
      name: 'A - Quest Diagnostics',
      address: '135 Barclay Cir, Ste 103Rochester Hills, MI 48307',
    },
  ]);

  // ... (existing code)

  // Define patient health details input fields
  const patientHealthDetails = [
    {
      placeholder: '',
      label: 'Past Medical Problems (e.g. Asthma - if none, type "none")',
      type: 'text',
      key:'pastMedicalHistory'
    },
    {
      placeholder: '',
      label: 'Current Medications (if none, type "none")',
      type: 'text',
      key:'currentMedication'
    },

    {
      placeholder: ' ',
      label: 'Known Allergies (if none, type "none")',
      type: 'text',
      key:'knownAllergies'
    },
    {
      placeholder: ' ',
      label: 'Medication Desired',
      type: 'text',
      key:'medicationName'
    },
    {
      placeholder: ' ',
      label: 'Dosage Desired',
      type: 'text',
      key:'dosage'
    },
    {
      placeholder: ' ',
      label: 'Quantity Desired',
      type: 'number',
      key:'quantity'
    },
  ];

  const [healthValues, setHealthValues] = useState(
    Array(patientHealthDetails.length).fill('')
  );
  const handleHealthChange = (index, e) => {
    const updatedHealthValues = [...healthValues];
    updatedHealthValues[index] = e.target.value;
    setHealthValues(updatedHealthValues);
  };
  const [selectedPharmacies, setSelectedPharmacies] = useState([]);

  const toggleSelect = index => {
    const updatedSelectedPharmacies = [...selectedPharmacies];
    const isSelected = updatedSelectedPharmacies.includes(index);

    if (isSelected) {
      // If already selected, deselect it
      updatedSelectedPharmacies.splice(
        updatedSelectedPharmacies.indexOf(index),
        1
      );
    } else {
      // If not selected, select it
      updatedSelectedPharmacies.push(index);
    }

    setSelectedPharmacies(updatedSelectedPharmacies);
  };

  const [isUpperRowVisible, setIsUpperRowVisible] = useState(true);

  const togglesSelect = index => {
    // Toggle the visibility of the upper and lower rows when the button is clicked.
    setIsUpperRowVisible(!isUpperRowVisible);
  };

  // Define a function to toggle the visibility
  const toggleUpperRowVisibility = () => {
    setIsUpperRowVisible(!isUpperRowVisible);
  };




  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
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
              className=' m-auto  shadow py-5 mobw100 rounded-0'
              style={{ width: '75%' }}
            >
              <h6 className='ms-2 ms-md-5  pb-1'>
                <b style={{ color: '#FAB915' }}>Step 1 - Choose State</b>
              </h6>

              <div
                className='py-3 m-auto   mobw90 rounded-3 '
                style={{ width: '80%' }}
              >
                <div
                  className='d-flex align-content-center  justify-content-between    m-auto '
                  style={{ width: '95%' }}
                >
                  <p className='ms-2 mobfont12'>
                    Choose your state from below:
                  </p>
                </div>
                <div
                  className='mt-1 d-flex align-content-center  justify-content-between    m-auto '
                  style={{ width: '95%' }}
                >
                  <div className='input-container shadow bg-light  w-100 rounded-5 '>
                    <select
                      className='w-100 rounded-3 text-muted'
                      style={{
                        border: 'none',
                        backgroundColor: 'transparent',
                      }}
                    >
        <option value="AL">Alabama (AL)</option>
	<option value="AK">Alaska (AK)</option>
	<option value="AZ">Arizona (AZ)</option>
	<option value="AR">Arkansas (AR)</option>
	<option value="CA">California (CA)</option>
	<option value="CO">Colorado (CO)</option>
	<option value="CT">Connecticut (CT)</option>
	<option value="DE">Delaware (DE)</option>
	<option value="DC">District Of Columbia (DC)</option>
	<option value="FL">Florida (FL)</option>
	<option value="GA">Georgia (GA)</option>
	<option value="HI">Hawaii (HI)</option>
	<option value="ID">Idaho (ID)</option>
	<option value="IL">Illinois (IL)</option>
	<option value="IN">Indiana (IN)</option>
	<option value="IA">Iowa (IA)</option>
	<option value="KS">Kansas (KS)</option>
	<option value="KY">Kentucky (KY)</option>
	<option value="LA">Louisiana (LA)</option>
	<option value="ME">Maine (ME)</option>
	<option value="MD">Maryland (MD)</option>
	<option value="MA">Massachusetts (MA)</option>
	<option value="MI">Michigan (MI)</option>
	<option value="MN">Minnesota (MN)</option>
	<option value="MS">Mississippi (MS)</option>
	<option value="MO">Missouri (MO)</option>
	<option value="MT">Montana (MT)</option>
	<option value="NE">Nebraska (NE)</option>
	<option value="NV">Nevada (NV)</option>
	<option value="NH">New Hampshire (NH)</option>
	<option value="NJ">New Jersey (NJ)</option>
	<option value="NM">New Mexico (NM)</option>
	<option value="NY">New York (NY)</option>
	<option value="NC">North Carolina (NC)</option>
	<option value="ND">North Dakota (ND)</option>
	<option value="OH">Ohio (OH)</option>
	<option value="OK">Oklahoma (OK)</option>
	<option value="OR">Oregon (OR)</option>
	<option value="PA">Pennsylvania (PA)</option>
	<option value="RI">Rhode Island (RI)</option>
	<option value="SC">South Carolina (SC)</option>
	<option value="SD">South Dakota (SD)</option>
	<option value="TN">Tennessee (TN)</option>
	<option value="TX">Texas (TX)</option>
	<option value="UT">Utah (UT)</option>
	<option value="VT">Vermont</option>
	<option value="VA">Virginia</option>
	<option value="WA">Washington</option>
	<option value="WV">West Virginia</option>
	<option value="WI">Wisconsin</option>
	<option value="WY">Wyoming</option>
                        
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div
              className=' m-auto  shadow py-5 mobw100 rounded-0 '
              style={{ width: '75%' }}
            >
              {isUpperRowVisible ? (
                <div className='m-auto obw100 ' style={{ width: '95%' }}>
                  <h6 className='  pb-4 border-bottom mx-4'>
                    <b style={{ color: '#FAB915', width: '90%' }}>
                      Step - 2 Choose Pharmacy
                    </b>
                  </h6>

                  <p className='text-muted'>
                    Enter your Zip Code or city to see a list of available Quest
                    Diagnostics lab locations in your area.
                  </p>

                  <Row className='d-flex justify-content-between align-items-center w-100'>
                    <Row className='d-flex'>
                      <Col xl={6}>
                        <input
                          type='search'
                          placeholder='Newagen, ME'
                          className='w-50 shadow  p-2 rounded-5'
                        />
                        <button
                          className='border-0 p-1 w-25 rounded-5 text-white button ms-2'
                          style={{ fontSize: '14px' }}
                        >
                          Search
                        </button>
                      </Col>
                    </Row>
                    <Row className='d-flex justify-content-between align-items-center w-100'>
                      <Col xl={6}>
                        <Row
                          className='mt-4 overflow-auto'
                          style={{ height: '40vh', overflowX: 'none' }}
                        >
                          {pharmacies.map((pharmacy, index) => (
                            <Col xl={12} className='d-flex' key={index}>
                              <Col xl={3} className='ms-3'>
                                <button
                                  className={`border-0 w-100 p-1 rounded-4 button text-white ${
                                    selectedPharmacies.includes(index)
                                      ? 'selected'
                                      : ''
                                  }`}
                                  onClick={() => togglesSelect(index)}
                                >
                                  {selectedPharmacies.includes(index)
                                    ? 'Selected'
                                    : 'Select'}
                                </button>
                              </Col>
                              <Col></Col>
                              <Col xl={8} className='ms-'>
                                <p className='my-0 fw-bold'>{pharmacy.name}</p>
                                <p style={{ fontSize: '13px' }}>
                                  {pharmacy.address}
                                </p>
                              </Col>
                            </Col>
                          ))}
                        </Row>
                      </Col>
                      <Col xl={6} className='text-center'>
                        {/* <p>Google Map</p> */}
                        <img src="/map.png" alt=""  style={{width:'400px'}}/>
                        {/* <Google /> */}
                      </Col>
                    </Row>
                  </Row>
                </div>
              ) : (
                <div className='m-auto obw100 ' style={{ width: '95%' }}>
                  <div className='pb-4 border-bottom mx-4 d-flex justify-content-between  align-items-center'>
                    <h6>
                      <b style={{ color: '#FAB915', width: '90%' }}>
                        Step - 2 Choose Pharmacy
                      </b>
                    </h6>
                    <p
                      className='my-0 medicationp'
                      role='button'
                      onClick={toggleUpperRowVisibility}
                    >
                      Edit
                    </p>
                  </div>
                  <div className='m-auto obw100 mt-5' style={{ width: '95%' }}>
                    <Row className='shadow p-2 text-center rounded-4 bg-light-subtle d-flex  justify-content-between align-items-center'>
                      <Col xl={4}>
                        <button
                          className=' p-2 border-0 rounded-5 w-50 '
                          style={{
                            color: '#FAB915',
                            backgroundColor: '#FEF3D5',
                          }}
                        >
                          Selected
                        </button>
                      </Col>
                      <Col xl={4}>
                        <p className='my-0 fw-bold '>Quest Diagnostics</p>
                      </Col>
                      <Col xl={4}>
                        <p
                          className='my-0 text-muted'
                          style={{ fontSize: '13px' }}
                        >
                          135 Barclay Cir, Ste 103Rochester Hills,MI 48307{' '}
                        </p>
                      </Col>
                    </Row>
                    <p className='text-center mt-4'>
                      You can change your selected pharmacy.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <br />
            <br />

            <div
              className=' m-auto  shadow py-5 mobw100 rounded-0 '
              style={{ width: '75%' }}
            >
              <h6 className='  pb-4 border-bottom mx-4'>
                <b style={{ color: '#FAB915', width: '90%' }}>
                  Step - 3 Personal Information
                </b>
              </h6>

              <div>
                {inputDetails.map((input, index) => (
                  <div
                    key={index}
                    className=' m-auto mobw90'
                    style={{ width: '80%' }}
                  >
                    <p className='mb-1 ms-3 mt-3 '>{input.label}</p>
                    <input
                      type={input.type}

                      name={input.key}
                      className='shadow border-0  w-100 m-0 p-3 rounded-5 '
                      placeholder={input.placeholder}
                      value={inputValues[index]}
                      onChange={(e) =>{
                         handleInputChange(index, e);
                        handleChange(e); }}
                    />
                  </div>
                ))}
              </div>

              <div>
                <div className='m-auto mobw90' style={{ width: '80%' }}>
                  <p className='mb-1 ms-3 mt-3'>Date</p>
                  <div style={{ position: 'relative' }}>
                  <input
        type='date'
        className='shadow border-0 w-100 m-0 p-3 rounded-5'
        onChange={handleDateChange}
      />
                    {/* <img
                      src='/Iconly-Bold-Calendar.svg'
                      alt='Custom Icon'
                      onClick={openDatePicker}
                      style={{
                        position: 'absolute',
                        right: '20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        cursor: 'pointer',
                      }}
                    /> */}

                  
                  </div>
                </div>

                <div>
      <div className=' m-auto mobw90' style={{ width: '80%' }}>
        <p className='mb-1 ms-3 mt-3 '>Gender</p>

        <div className='d-flex align-items-center'>
          <div
            className={`d-flex align-items-center justify-content-center px-5 py-2 shadow rounded-5 ${
              selectedGender === 'male' ? 'selected' : ''
            }`}
            onClick={() => handleGenderClick('male')}
            style={{
              background: selectedGender === 'male' ? '' : '#FFFFFF',
              color: selectedGender === 'male' ? '#FAB915' : '',
            }}
          >
            <input
              type='radio'
              checked={selectedGender === 'male'}
              readOnly
            />
            <span className='ms-2'>Male</span>
          </div>
          <div
            className={`ms-2 d-flex align-items-center justify-content-center px-5 py-2 shadow rounded-5 ${
              selectedGender === 'female' ? 'selected' : ''
            }`}
            onClick={() => handleGenderClick('female')}
          >
            <input
              type='radio'
              checked={selectedGender === 'female'}
              readOnly
            />
            <span
              className='ms-2'
              style={{
                background:
                  selectedGender === 'female' ? '' : '#FFFFFF',
                color: selectedGender === 'female' ? '#FAB915' : '',
              }}
            >
              Female
            </span>
          </div>
        </div>
      </div>
    </div>
              </div>
            </div>

            <br />
            <br />
            <div
              className=' m-auto  shadow py-5 mobw100 rounded-0 '
              style={{ width: '75%' }}
            >
              <h6 className='  pb-4 border-bottom mx-4'>
                <b style={{ color: '#FAB915', width: '90%' }}>
                  Step 4 - Patient Health Information
                </b>
              </h6>

              <div>
                {patientHealthDetails.map((inputh, index) => (
                  <div
                    key={index}
                    className=' m-auto mobw90'
                    style={{ width: '80%' }}
                  >
                    <p className='mb-1 ms-3 mt-3 '>{inputh.label}</p>
                    <input
                      type={inputh.type}
                      className='shadow border-0  w-100 m-0 p-3 rounded-5 '
                      name={inputh.key}
                      placeholder={inputh.placeholder}
                      value={healthValues[index]}
                      onChange={(e) => {
                        handleHealthChange(index, e)
                        handleChange(e); }}
                    />
                  </div>
                ))}
              </div>
              <div className=' mobw90 m-auto  mt-4' style={{ width: '80%' }}>
                <p>Reason for Medication (detailed is better)</p>
                <div className='w-100 my-4'>
                  <textarea
                    name='reason'
                    className='w-100 border-0 shadow rounded-4 p-3'
                    placeholder='Temperature (e.g. 98° Fahrenheit)'
                    value={formData.reason || ''} // Set the value from formData if it exists
                    onChange={handleChange}
                    style={{ height: '90px' }}
                  ></textarea>
                </div>
              </div>

              <div>
                <div className=' m-auto mobw90' style={{ width: '80%' }}>
                  <p className='mb-1 ms-3 mt-3 '>
                    Has the patient ever had an allergic reaction to albuterol,
                    ProAir or Ventolin medication?
                  </p>

                  <div className='d-flex align-items-center'>
                    <div
                      className={`d-flex align-items-center justify-content-center px-5 py-2 shadow rounded-5 ${
                        selectedopt === 'yes' ? 'selected' : ''
                      }`}
                      onClick={() => handleoptClick('yes')}
                      style={{
                        background: selectedopt === 'yes' ? '' : '#FFFFFF',
                        color: selectedopt === 'yes' ? '#FAB915' : '',
                      }}
                    >
                      <input
                        type='radio'
                        checked={selectedopt === 'yes'}
                        readOnly
                      />
                      <span className='ms-2'>Yes</span>
                    </div>
                    <div
                      className={`ms-2 d-flex align-items-center justify-content-center px-5 py-2 shadow rounded-5 ${
                        selectedopt === 'no' ? 'selected' : ''
                      }`}
                      onClick={() => handleoptClick('no')}
                      // style={{ background: selectedGender === 'no' ? '#FAB915' : '#FFFFFF', color: selectedGender === 'no' ? '#FFFFFF' : '#000000' }}
                    >
                      <input
                        type='radio'
                        checked={selectedopt === 'no'}
                        readOnly
                      />
                      <span
                        className='ms-2'
                        style={{
                          background: selectedopt === 'no' ? '' : '#FFFFFF',
                          color: selectedopt === 'no' ? '#FAB915' : '',
                        }}
                      >
                        No
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className=' m-auto mobw90' style={{ width: '80%' }}>
                  <p className='mb-1 ms-3 mt-3 '>
                    Is the patient currently having shortness of breath or chest
                    pain?
                  </p>

                  <div className='d-flex align-items-center'>
                    <div
                      className={`d-flex align-items-center justify-content-center px-5 py-2 shadow rounded-5 ${
                        pselectedopt === 'yes' ? 'selected' : ''
                      }`}
                      onClick={() => phandleoptClick('yes')}
                      style={{
                        background: pselectedopt === 'yes' ? '' : '#FFFFFF',
                        color: pselectedopt === 'yes' ? '#FAB915' : '',
                      }}
                    >
                      <input
                        type='radio'
                        checked={pselectedopt === 'yes'}
                        readOnly
                      />
                      <span className='ms-2'>Yes</span>
                    </div>
                    <div
                      className={`ms-2 d-flex align-items-center justify-content-center px-5 py-2 shadow rounded-5 ${
                        pselectedopt === 'no' ? 'selected' : ''
                      }`}
                      onClick={() => phandleoptClick('no')}
                      // style={{ background: selectedGender === 'no' ? '#FAB915' : '#FFFFFF', color: selectedGender === 'no' ? '#FFFFFF' : '#000000' }}
                    >
                      <input
                        type='radio'
                        checked={pselectedopt === 'no'}
                        readOnly
                      />
                      <span
                        className='ms-2'
                        style={{
                          background: pselectedopt === 'no' ? '' : '#FFFFFF',
                          color: pselectedopt === 'no' ? '#FAB915' : '',
                        }}
                      >
                        No
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className=' m-auto  shadow py-5 mobw100 rounded-0 mt-5'
              style={{ width: '75%' }}
            >
              <h6 className='ms-2 ms-md-5  pb-1'>
                <b style={{ color: '#FAB915' }}>Step 4 - Terms of Use</b>
              </h6>

              <p className=' ms-2 ms-md-5' style={{ color: '#747E93' }}>
                {' '}
                After you submit your request, a licensed medical provider in
                your area will review your information. You will be notified by
                email when that provider has reviewed your request and, if
                appropriate, made care recommendations.
              </p>

              <div className='ms-2 ms-md-5'>
                <div className=' d-flex align-items-start  justify-content-start'>
                  <div>
                    <label className='custom-checkbox'>
                      <input type='checkbox' className='shadow' 
                      checked={isChecked}
                     onChange={handleCheckboxChange}
          />
                      <span className='checkmark shadow rounded-5 '></span>
                    </label>
                  </div>
                  <div className='ms-3'>
                    <p style={{ fontSize: '12px' }}>
                      By checking this box, you indicate that you, as the
                      patient or legal guardian of the patient, agree to the
                      Terms of Service, Privacy Policy and Consent to
                      Telehealth.
                    </p>
                  </div>
                </div>

                <div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className='py-5'>
          <Col className='text-center'>
            <button
              className='btnn py-1 px-4 border-0 shadow rounded-5 mt-3'
              // onClick={handleShow}
              onClick={handleSubmit}
              // onSubmit={handleSubmit}
              type="button"  >
              <span className='me-4'>Submit Request</span>
              <img src='/Component 638 – 1.svg' width='30' height='30' />
            </button>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleClose} size='lg'>
        <Modal.Body className='p-0 rounded-3 '>
          <ConfirmRequestModal onHide={handleClose} data={formData}  responseData={responseData}/>
        </Modal.Body>
      </Modal>



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

export default ConditionDiseaseForm