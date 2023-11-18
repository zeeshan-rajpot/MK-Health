import React from 'react';
import Navbare from '../../../Compunents/Navbar';
import Footer from '../../../Compunents/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

export const PracticeStates = () => {
  const data = [
    {
      date: '10/12/23',
      patientName: 'Mohsin',
      type: 'Rx',
      fees: '$48',
    },
    {
      date: '10/12/23',
      patientName: 'Patient Name2',
      type: 'Type2',
      fees: 'Fees2',
    },
    {
      date: '10/12/23',
      patientName: 'Patient Name2',
      type: 'Type2',
      fees: 'Fees2',
    },
    {
      date: '10/12/23',
      patientName: 'Patient Name2',
      type: 'Type2',
      fees: 'Fees2',
    },
    {
      date: '10/12/23',
      patientName: 'Patient Name2',
      type: 'Type2',
      fees: 'Fees2',
    },
    {
      date: '10/12/23',
      patientName: 'Patient Name2',
      type: 'Type2',
      fees: 'Fees2',
    },
    {
      date: '10/12/23',
      patientName: 'Patient Name2',
      type: 'Type2',
      fees: 'Fees2',
    },
    {
      date: '10/12/23',
      patientName: 'Patient Name2',
      type: 'Type2',
      fees: 'Fees2',
    },
    {
      date: '10/12/23',
      patientName: 'Patient Name2',
      type: 'Type2',
      fees: 'Fees2',
    },
    {
      date: '10/12/23',
      patientName: 'Patient Name2',
      type: 'Type2',
      fees: 'Fees2',
    },
    {
      date: '10/12/23',
      patientName: 'Patient Name2',
      type: 'Type2',
      fees: 'Fees2',
    },
    {
      date: '10/12/23',
      patientName: 'Patient Name2',
      type: 'Type2',
      fees: 'Fees2',
    },
    {
      date: '10/12/23',
      patientName: 'Patient Name2',
      type: 'Type2',
      fees: 'Fees2',
    },
    {
      date: '10/12/23',
      patientName: 'Patient Name2',
      type: 'Type2',
      fees: 'Fees2',
    },
    {
      date: '10/12/23',
      patientName: 'Patient Name2',
      type: 'Type2',
      fees: 'Fees2',
    },
    // Add more data objects as needed
  ];
  const headerCellStyle1 = {
    background: '#FAB915',
    color: '#000',
    fontWeight: '500',
    borderRadius: '15px 0  0 15px',
  };
  const headerCellStyle = {
    background: '#FAB915',
    color: '#000',
    fontWeight: '500',
  };
  const headerCellStylelast = {
    background: '#FAB915',
    color: '#000',
    fontWeight: '500',
    borderRadius: ' 0 15px 15px 0',
  };

  return (
    <div>
      <Navbare activetab='Provider' bgcolor='transparent' />
      <br />
      <br />
      <br />
      <div style={{ backgroundColor: '#FFEEC5' }}>
        <Container>
          <Row className='pt-5 fw-bold  text-center'>
            <h4>Practice States </h4>
          </Row>
          <Row className='mt-5'>
            <Col xl={3}></Col>
            <Col
              xl={3}
              className='text-center my-5 '
              style={{
                borderRadius: '40px',
                border: '2px solid #FAB915',
                backgroundColor: ' #FFF',
                boxShadow: '0px 3px 20px 0px rgba(0, 0, 0, 0.16)',
              }}
            >
              <div className='d-flex justify-content-center align-items-center mt-5'>
                <img src='./fluent_people-community-24-filled.svg' />
                <p className='text-black ms-4 my-0 fs-4'>Patients</p>
              </div>
              <p className='mt-3 fs-5 fw-bolde '>200</p>
              <p className='mt-3 mb-5 fs-6' style={{ color: ' #FAB915' }}>
                32 invites pending{' '}
              </p>
            </Col>
            <Col
              xl={3}
              className='text-center my-5 ms-0 ms-md-5'
              style={{
                borderRadius: '40px',
                border: '2px solid #FAB915',
                backgroundColor: ' #FFF',
                boxShadow: '0px 3px 20px 0px rgba(0, 0, 0, 0.16)',
              }}
            >
              <div className='d-flex justify-content-center align-items-center mt-5'>
                <img src='./fluent_people-community-24-filled.svg' />
                <p className='text-black ms-4 my-0 fs-4'>Patients</p>
              </div>
              <p className='mt-3 fs-5 fw-bolde '>200</p>
              <p className='mt-3 mb-5 fs-6' style={{ color: ' #FAB915' }}>
                32 invites pending{' '}
              </p>
            </Col>

            <Col xl={3}></Col>
          </Row>
          <Row>
            <Col xl={3}></Col>
            <Col
              xl={3}
              className='text-center my-5 '
              style={{
                borderRadius: '40px',
                border: '2px solid #FAB915',
                backgroundColor: ' #FFF',
                boxShadow: '0px 3px 20px 0px rgba(0, 0, 0, 0.16)',
              }}
            >
              <div className='d-flex justify-content-center align-items-center mt-5'>
                <img src='./fluent_people-community-24-filled.svg' />
                <p className='text-black ms-4 my-0 fs-4'>Patients</p>
              </div>
              <p className='mt-3 fs-5 fw-bolde '>200</p>
              <p className='mt-3 mb-5 fs-6' style={{ color: ' #FAB915' }}>
                32 invites pending{' '}
              </p>
            </Col>
            <Col
              xl={3}
              className='text-center my-5 ms-0 ms-md-5'
              style={{
                borderRadius: '40px',
                border: '2px solid #FAB915',
                backgroundColor: ' #FFF',
                boxShadow: '0px 3px 20px 0px rgba(0, 0, 0, 0.16)',
              }}
            >
              <div className='d-flex justify-content-center align-items-center mt-5'>
                <img src='./fluent_people-community-24-filled.svg' />
                <p className='text-black ms-4 my-0 fs-4'>Patients</p>
              </div>
              <p className='mt-3 fs-5 fw-bolde '>200</p>
              <p className='mt-3 mb-5 fs-6' style={{ color: ' #FAB915' }}>
                32 invites pending{' '}
              </p>
            </Col>

            <Col xl={3}></Col>
          </Row>
        </Container>
      </div>
      <div className='mt-5 m-auto rounded-4' style={{ width: '80%' }}>
        <p className='pt-5'>Professional Fee Details</p>
        <div className='shadow mt-5 rounded-4'>
          <div className='p-5  ' style={{ height: '80vh', overflowY: 'auto' }}>
            <Table responsive>
              <thead>
                <tr className='tbody,td,tfoot,th,thead,tr '>
                  <th style={headerCellStyle1}>Date</th>
                  <th style={headerCellStyle}>Patient Name</th>
                  <th style={headerCellStyle}>Type</th>
                  <th style={headerCellStylelast}>Your Fees</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className='border-bottom'>
                    <td className='py-4'>{item.date}</td>
                    <td className='py-4'>{item.patientName}</td>
                    <td className='py-4'>{item.type}</td>
                    <td className='py-4'>{item.fees}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default PracticeStates;
