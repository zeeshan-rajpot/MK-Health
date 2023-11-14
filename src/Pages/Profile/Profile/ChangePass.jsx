import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const ChangePass = () => {
  const inputDetails = [
    { placeholder: '********', label: 'Your Current Password', type: 'text' },
    { placeholder: '********', label: 'New Password' },
    { placeholder: '********', label: 'Confirm New Password' },
  ];

  const [values, setValues] = useState(Array(inputDetails.length).fill(''));
  const handleChange = (index, e) => {
    const updatedValues = [...values];
    updatedValues[index] = e.target.value;
    setValues(updatedValues);
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
              className='border-50 text-white w-25 border-0 rounded-5 p-2'
              style={{ backgroundColor: '#FAB915' }}
            >
              Save Changes
            </button>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default ChangePass;
