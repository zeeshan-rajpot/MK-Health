import React from 'react';
import { Row, Col } from 'react-bootstrap';
export const MedicalHis = () => {
  return (
    <div>
      <Row>
        <Row className='border-bottom border-1'>
          <p className='my-0 mb-2' style={{ color: '#FAB915' }}>
            Change Password
          </p>

          <p className='text-muted ms-4' style={{ fontSize: '12px' }}>
            Your MK Health Care medical provider, otherwise, it is completely
            secure and private
          </p>
        </Row>
        <Row className='mt-4'>
          <div className='shadow bg-white border-0 rounded-4 p-3 w-75'>
            <p className='text-black my-0'>
              Past Medical Problems (if no, type "none")
            </p>
            <textarea
              className='text-muted border-0'
              style={{ width: '100%', height: '5vh' }}
              placeholder='No'
            />
          </div>
        </Row>
        <Row className='mt-4'>
          <div className='shadow bg-white border-0 rounded-4 p-3 w-75'>
            <p className='text-black my-0'>Current Medications</p>
            <textarea
              className='text-muted border-0'
              style={{ width: '100%', height: '5vh' }}
              placeholder='No'
            />
          </div>
        </Row>
        <Row className='mt-4'>
          <div className='shadow bg-white border-0 rounded-4 p-3 w-75'>
            <p className='text-black my-0'>
              Known Allergies (if no, type "none")
            </p>
            <textarea
              className='text-muted border-0'
              style={{ width: '100%', height: '5vh' }}
              placeholder='No'
            />
          </div>
        </Row>
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
export default MedicalHis;
