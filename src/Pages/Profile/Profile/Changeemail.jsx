import React, { useState } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import { baseurl } from '../../../const';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Changeemail = () => {
  const inputDetails = [
    {
      placeholder: 'Davidwilliam@gmail.com',
      label: 'Your Current Email',
      type: 'text',
    },
    { placeholder: 'Davidwilliam@gmail.com', label: 'New Email' },
    { placeholder: 'Davidwilliam@gmail.com', label: 'Confirm New Email' },
  ];

  const [values, setValues] = useState(Array(inputDetails.length).fill(''));

  const handleChange = (index, e) => {
    const updatedValues = [...values];
    updatedValues[index] = e.target.value;
    setValues(updatedValues);
  };

  const handleSaveChanges = () => {
    const oldEmail = values[0];
    const newEmail = values[1];
    const confirmNewEmail = values[2];

    if (newEmail !== confirmNewEmail) {
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

    const token = localStorage.getItem('token');

    // Add logic to save changes to the server
    axios
      .put(
        `${baseurl}/api/auth/changeemail`,
        {
          oldEmail,
          newEmail,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log('Email updated successfully:', response.data);
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
        console.error('Error updating email:', error.response.data.message);
        // Add logic to handle error (if needed)


        toast.error( error.response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      });
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
            <img src={'/Message.svg'} />
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
            Change Email
          </p>
        </Row>
        <div className='mt-3'>{generateInputFields()}</div>
        <Row className='mt-5 text-center'>
          <Col>
            <button
              className='border-50 text-white w-25 border-0 rounded-5 p-2'
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

export default Changeemail;
