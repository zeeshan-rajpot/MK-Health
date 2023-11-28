import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'; // Import axios
import { baseurl } from '../../../const';

export const ChangePass = () => {
  const inputDetails = [
    { placeholder: '********', label: 'Old Password', type: 'password' },
    { placeholder: '********', label: 'New Password', type: 'password' },
    { placeholder: '********', label: 'Confirm New Password', type: 'password' },
  ];

  const [values, setValues] = useState(Array(inputDetails.length).fill(''));
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleChange = (index, e) => {
    const updatedValues = [...values];
    updatedValues[index] = e.target.value;
    setValues(updatedValues);
    
    // Track old and new password separately
    if (index === 0) {
      setOldPassword(e.target.value);
    } else if (index === 1) {
      setNewPassword(e.target.value);
    }
  };

  const handleSaveChanges = () => {
    const token = localStorage.getItem('token');
    if (newPassword !== values[2]) {
      // console.error('New Passwords do not match');
      toast.error('New Passwords do not match', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      return;
    }
    // Prepare data for the PUT request
    const requestData = {
      oldPassword: oldPassword,
      newPassword: newPassword,
    };

    // Axios PUT request
    axios
      .put(`${baseurl}/api/auth/changepassword`, requestData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // Handle successful response
        console.log('Password updated successfully:', response.data);

        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      })
      .catch((error) => {
        // Handle error
        console.error('Error updating password:', error);
        })
  };

  const generateInputFields = () => {
    return inputDetails.map((input, index) => (
      
      <div key={index}>
        <label className='text-muted mt-4'>{input.label}</label>
        <div className='input-container shadow bg-light'>
          <div
            className='w-100'
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <img src='/Iconly-Bold-Lock.svg' alt='Lock Icon' />
            <input
              placeholder={input.placeholder}
              type={input.type || 'password'}
              className='bg-light w-100'
              value={values[index]}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
    <div>
      <Row>
        <Row className='border-bottom border-1'>
          <p className='my-0 mb-2' style={{ color: '#FAB915' }}>
            Change Password
          </p>
        </Row>
        <div className='mt-3'>
          {generateInputFields()}
        </div>
        <Row className='mt-5 text-center'>
          <Col>
            <button
              className='border-50 text-white  border-0 rounded-5 p-2'
              style={{ backgroundColor: '#FAB915' }}
              onClick={handleSaveChanges}
            >
              Save Changes
            </button>
          </Col>
        </Row>
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
{/* Same as */}
<ToastContainer />
    </>
  );
};

export default ChangePass;
