import React, { useState } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import { baseurl } from '../../../const';

const MedicalHis = () => {
  const [pastMedicalHistory, setPastMedicalHistory] = useState('');
  const [currentMedication, setCurrentMedication] = useState('');
  const [allergies, setAllergies] = useState('');

  const handleSaveChanges = () => {
    // Prepare data to be sent in the POST request
    const medicalHistoryData = {
      pastMedicalHistory,
      currentMedication,
      allergies,
    };

    // Add logic to save medical history to the server
    axios
      .post(`${baseurl}/api/auth/addmedicalhistory`, medicalHistoryData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        console.log('Medical history added successfully:', response.data);
        // Add logic to handle success (if needed)
      })
      .catch((error) => {
        console.error('Error adding medical history:', error);
        // Add logic to handle error (if needed)
      });
  };

  return (
    <div>
      <Row>
        <Row className='border-bottom border-1'>
          <p className='my-0 mb-2' style={{ color: '#FAB915' }}>
            Medical History
          </p>

          <p className='text-muted ms-4' style={{ fontSize: '12px' }}>
            Your MK Health Care medical provider, otherwise, it is completely
            secure and private
          </p>
        </Row>
        <Row className='mt-4'>
          <div className='shadow bg-white border-0 rounded-4 p-3 '>
            <p className='text-black my-0'>
              Past Medical Problems (if no, type "none")
            </p>
            <textarea
              className='text-muted border-0'
              style={{ width: '100%', height: '5vh' }}
              placeholder='No'
              value={pastMedicalHistory}
              onChange={(e) => setPastMedicalHistory(e.target.value)}
            />
          </div>
        </Row>
        <Row className='mt-4'>
          <div className='shadow bg-white border-0 rounded-4 p-3 '>
            <p className='text-black my-0'>Current Medications</p>
            <textarea
              className='text-muted border-0'
              style={{ width: '100%', height: '5vh' }}
              placeholder='No'
              value={currentMedication}
              onChange={(e) => setCurrentMedication(e.target.value)}
            />
          </div>
        </Row>
        <Row className='mt-4'>
          <div className='shadow bg-white border-0 rounded-4 p-3 '>
            <p className='text-black my-0'>
              Known Allergies (if no, type "none")
            </p>
            <textarea
              className='text-muted border-0'
              style={{ width: '100%', height: '5vh' }}
              placeholder='No'
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
            />
          </div>
        </Row>
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
  );
};

export default MedicalHis;
