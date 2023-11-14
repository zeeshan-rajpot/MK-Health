import React, { useState, useRef, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap'; // Added Col
import { Dropdown } from 'react-bootstrap';
import axios from 'axios'; // Import axios
import { baseurl } from '../../../const';


const PersonalInfo = () => {
  const [userData, setUserData] = useState({});
  const [selectedGender, setSelectedGender] = useState(
    userData?.specific_Details?.gender || 'Male'
  );

  const [selectedOpt, setSelectedOpt] = useState('yes'); // Fixed variable name
  const [pSelectedOpt, setPSelectedOpt] = useState('yes'); // Fixed variable name

  const datePickerRef = useRef(null);

  const openDatePicker = () => {
    datePickerRef.current.click();
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    // Axios GET request
    axios
      .get(`${baseurl}/api/auth/getdetails`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // Handle successful response
        console.log('API response:', response.data);
        setUserData(response.data);
        // Set selected gender based on the API data
        setSelectedGender(response.data?.specific_Details?.gender || 'Male');
      })
      .catch((error) => {
        // Handle error
        console.error('Error fetching data:', error);
      });
  }, []);// Empty dependency array to run the effect once when the component mounts



  const inputDetails = [
    { placeholder: 'John', label: 'First Name ', type: 'text' , value: userData?.specific_Details?.firstName || ''},
    { placeholder: 'Wick', label: 'Last Name', value: userData?.specific_Details?.lastName || ''  },
    { placeholder: 'email', label: 'Email' , value: userData?.data?.email || '' },
    { placeholder: 'Address Line 1', label: 'Adress ' , value: userData?.specific_Details?.location?.address || '' },
    { placeholder: 'Address Line 2', label: 'City'  ,value: userData?.specific_Details?.location?.city || ''},
    { placeholder: 'Address Line 2', label: 'State'  ,value: userData?.specific_Details?.location?.state || ''},
    { placeholder: 'Number', label: 'Phone' , value: userData?.specific_Details?.phone || ''},
    { placeholder: '5800', label: 'Date of Birth' ,value: userData?.specific_Details?.dob || ''},
   
  ];

  // const [values, setValues] = useState(Array(inputDetails.length).fill(''));
  // const [values, setValues] = useState({
  //   firstName: userData?.specific_Details?.firstName || '',
  //   lastName: userData?.specific_Details?.lastName || '',
  //   email: userData?.data?.email || '',
  //   address: userData?.specific_Details?.location?.address || '',
  //   city: userData?.specific_Details?.location?.city || '',
  //   state: userData?.specific_Details?.location?.state || '',
  //   phone: userData?.specific_Details?.phone || '',
  //   dob: userData?.specific_Details?.dob || '',
  // });

  // const handleChange = (field, value) => {
  //   setValues((prevValues) => ({
  //     ...prevValues,
  //     [field]: value,
  //   }));
  // };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission here
  };
  const handleUpdate = () => {
    const token = localStorage.getItem('token');
    const updatedData = {
      phone: inputDetails[6].value,
      firstName: "Updated John",
      lastName: "Updated Doe",
      location: {
        address: "123 Elm Street",
        state: "CA",
        city: "Los Angeles",
        zipCode: "90001",
      },
      dob: "1990-05-05T00:00:00.000Z",
      gender: "Female",
    };
  
    // Axios PUT request
    axios
      .put(`${baseurl}/api/auth/updatedetails`, updatedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // Handle successful response
      
        console.log('Details updated successfully:', response.data);
      })
      .catch((error) => {
        // Handle error
        console.error('Error updating details:', error);
      });
  };

  return (
    <div className='m-auto' style={{ width: '90%' }}>
    
      <Row className='border-bottom border-1'>
        <p className='my-0 mb-2' style={{ color: '#FAB915' }}>
          Personal Information
        </p>
      </Row>
      <Row>
        {inputDetails.map((input, index) => (
          <div key={index} className='m-auto mobw90' style={{ width: '80%' }}>
            <p className='mb-1 ms-3 mt-3'>{input.label}</p>
            <input
              type={input.type || 'text'}
              className='shadow border-0 w-100 m-0 p-2 rounded-5'
              placeholder={input.placeholder}
              value={input.value} // Use values object instead of values array
              // onChange={(e) => handleChange(input.label, e.target.value)}
            />
          </div>
        ))}
        {/* Gender section using state */}
        <div className='m-auto mobw90' style={{ width: '80%' }}>
          <p className='mb-1 ms-3 mt-3'>Gender</p>
          <div className='d-flex align-items-center'>
            <div
              className={`d-flex align-items-center justify-content-center px-5 py-2 shadow rounded-5 ${
                selectedGender === 'Male' ? 'selected' : ''
              }`}
              onClick={() => setSelectedGender('Male')}
              style={{
                background: selectedGender === 'Male' ? '' : '#FFFFFF',
                color: selectedGender === 'Male' ? '#FAB915' : '',
              }}
            >
              <input type='radio' checked={selectedGender === 'Male'} readOnly />
              <span className='ms-2'>Male</span>
            </div>
            <div
              className={`ms-2 d-flex align-items-center justify-content-center px-5 py-2 shadow rounded-5 ${
                selectedGender === 'Female' ? 'selected' : ''
              }`}
              onClick={() => setSelectedGender('Female')}
            >
              <input type='radio' checked={selectedGender === 'Female'} readOnly />
              <span
                className='ms-2'
                style={{
                  background: selectedGender === 'Female' ? '' : '#FFFFFF',
                  color: selectedGender === 'Female' ? '#FAB915' : '',
                }}
              >
                Female
              </span>
            </div>
          </div>
        </div>
        <div>
          <Row>
            <Col xl={10} className='text-center '>
              <button
                className='border-0 w-50 mt-5 text-white p-2 rounded-5'
                style={{ backgroundColor: '#FAB915' }}
             onClick={handleUpdate}
             >
                Submit
              </button>
            </Col>
          </Row>
        </div>
      </Row>

  </div>
  );
};

export default PersonalInfo;
