import React, { useState, useRef, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap'; // Added Col
import { Dropdown } from 'react-bootstrap';
import axios from 'axios'; // Import axios
import { baseurl } from '../../../const';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PersonalInfo = () => {
  const [userData, setUserData] = useState({});
  const [selectedGender, setSelectedGender] = useState(
    userData?.specific_Details?.gender || 'Male'
  );
  const [inputDetails, setInputDetails] = useState([]);
  const [selectedOpt, setSelectedOpt] = useState('yes'); // Fixed variable name
  const [pSelectedOpt, setPSelectedOpt] = useState('yes'); // Fixed variable name

  const datePickerRef = useRef(null);

  const openDatePicker = () => {
    datePickerRef.current.click();
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios
      .get(`${baseurl}/api/auth/getdetails`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log('API response:', response.data);
        setUserData(response.data);
        setSelectedGender(response.data?.specific_Details?.gender || 'Male');

        // Initialize inputDetails after fetching user details
        setInputDetails([
          { placeholder: 'John', label: 'First Name ', type: 'text', value: response.data?.specific_Details?.firstName || '' },
          { placeholder: 'Wick', label: 'Last Name', value: response.data?.specific_Details?.lastName || '' },
          { placeholder: 'email', label: 'Email', value: response.data?.data?.email || '' },
          { placeholder: 'Address Line 1', label: 'Adress ', value: response.data?.specific_Details?.location?.address || '' },
          { placeholder: 'Address Line 2', label: 'City', value: response.data?.specific_Details?.location?.city || '' },
          { placeholder: 'Address Line 2', label: 'State', value: response.data?.specific_Details?.location?.state || '' },
          { placeholder: 'Number', label: 'Phone', value: response.data?.specific_Details?.phone || '' },
          { placeholder: 'Zip Code', label: 'Zip Code', value: response.data?.specific_Details?.location?.zipCode || '' },
          { placeholder: 'Date of Birth', label: 'Date of Birth', value: response.data?.specific_Details?.dob || '' },
        ]);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to run the effect once when the component mounts

  console.log(userData);


  const handleInputChange = (index, newValue) => {
    const updatedInputDetails = [...inputDetails];
    updatedInputDetails[index].value = newValue;
    setInputDetails(updatedInputDetails);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission here
  };
  const handleUpdate = () => {
    const token = localStorage.getItem('token');
    const updatedData = {
      phone: inputDetails[6].value,
      firstName: inputDetails[0].value,
      lastName: inputDetails[1].value,
      location: {
        address: inputDetails[3].value,
        state: inputDetails[5].value,
        city: inputDetails[4].value,
        zipCode: inputDetails[7].value,
      },
      dob: inputDetails[8].value,
      gender: selectedGender,
    };
  
    console.log('Updated Data:', updatedData);
  
    axios
      .put(`${baseurl}/api/auth/updatedetails`, updatedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {

        toast.success(`${response.data.message}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        console.log('Details updated successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error updating details:', error);
      });
  };
  
  return (
  <>
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
      value={input.value}
      onChange={(e) => handleInputChange(index, e.target.value)}
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
  );
};

export default PersonalInfo;
