import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import AddLicenceModal from './AddLicenceModal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

export const Licenverification = ({ updateData }) => {
  const [show, setShow] = useState(false);
  const [consoleData, setConsoleData] = useState({});
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);
  const [isRowVisible, setRowVisibility] = useState(true);
  const [npiNumber, setNpiNumber] = useState('');
  const [degree, setDegree] = useState('');


  const handleNpiNumberChange = (e) => {
    const value = e.target.value;
    setNpiNumber(value);
    setConsoleData(prevData => ({ ...prevData, npiNumber: value }));
  };

  const handleDegreeChange = (e) => {
    const value = e.target.value;
    setDegree(value);
    setConsoleData(prevData => ({ ...prevData, degree: value }));
  };





  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const onDataSubmit = modaldata => {
    setConsoleData(modaldata); // Update consoleData with all the data received from the modal

    // Send the data to the parent component
    updateData({
      licenseDetails: { ...modaldata, npiNumber, degree }, // Include npiNumber and degree in the update
    });
    setIsDataSubmitted(true);
  };

  const hideRow = () => {
    setRowVisibility(false);
  };


  return (
    <div>
      <Container className='shadow '>
        <Row>
          <Col xs={12}>
            <label className='mb-1 ms-3 mt-3 text-muted'>NPI Number</label>
            <input
              className='shadow border-0 w-100 m-0 p-3 rounded-5 text-black'
              placeholder='MD'
              type='text'
              value={npiNumber}
              onChange={handleNpiNumberChange}
            />
            <label className='mb-1 ms-3 mt-3 text-muted'>Degree</label>
            <input
              className='shadow border-0 w-100 m-0 p-3 rounded-5 text-black'
              placeholder='MBBS'
              type='text'
              value={degree}
              onChange={handleDegreeChange}
            />
          </Col>
        </Row>

        {isDataSubmitted && (
          <div>
            <Row className='shadow mt-4'>
              <Table responsive='sm xl lg md'>
                <thead>
                  <tr>
                    <th>license</th>
                    <th>Number</th>
                    <th>Expires</th>
                    <th>Image</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{consoleData.licenseType}</td>
                    <td>{consoleData.licenseNumber}</td>
                    <td>{consoleData.licenseExpiry}</td>
                    <td>{consoleData.selectedImage ? 'Yes' : 'No'}</td>
                    <td>{consoleData.licenseStatus}</td>
                  </tr>
                </tbody>
              </Table>
              <Row className='my-4'>
                <Col xs={12} xl={4}>
                  <button className='border-0 w-100 p-3 rounded-5 button text-white ms-2 mobfont12'>
                    Edit Medical License{' '}
                    <img
                      src='./Component 622 – 1.svg'
                      alt='arrows'
                      className='ms-2'
                    />
                  </button>
                </Col>
              </Row>
            </Row>
            <Row className='mt-4'>
              <p>NPDB Self Query</p>
              <Row>
                <Col xs={12} xl={3}>
                  <button className='w-100 button border-0 rounded-5 p-2 text-white'>
                    <img src='./storedsvg.svg' alt='data' className='me-2' />
                    Stored
                  </button>
                </Col>
                <Col xl={3}>
                  <button className='w-100 ms-md-3 ms-0 mt-4 mt-md-0 bg-body rounded-5 p-2 text-muted border'>
                    <img src='./remove.svg' alt='data' className='me-2' />
                    Remove
                  </button>
                </Col>
              </Row>
            </Row>
          </div>
        )}
        {isRowVisible && (
          <Row className='mt-4'>
            <Col xl={6}>
              <Button
                className='border-0 p-5 rounded-4 w-100 text-white text-center '
                style={{ backgroundColor: '#B6C5D1' }}
                onClick={handleShow}
                variant='primary'
              >
                Add Medical License
              </Button>
            </Col>

            <Col xl={6}>
              <button
                className='border-0 p-5 w-100 rounded-4 text-white text-center mt-4 mt-md-0'
                style={{ backgroundColor: '#B6C5D1' }}
                variant='primary'
              >
                Add NPDB Document
              </button>
            </Col>
          </Row>
        )}

        <Row className='py-5  mt-5 mt-md-0'>
          {/* <Col xs={12} className='text-center '>
            <button
              className='m-auto backbutton rounded-5 p-2 bg-transparent buttonw'
              style={{ width: '40%' }}
            >
              Back
            </button>
            <button
              className='ms-3 mt-0 mt-md-0 text-center ms-md-3 m-auto border-0 rounded-5 p-2 text-white button buttonw'
              style={{ width: '40%' }}
            >
              Next
              <img src='./Component 622 – 2.svg' className='ms-2' />
            </button>
          </Col> */}
          <Row className='my-5 '></Row>
        </Row>
      </Container>
      <div className='w-100 bg-white'>
        <Modal show={show} onHide={handleClose} size='xl'>
          <Modal.Body className='w-100'>
            <AddLicenceModal
              onDataSubmit={onDataSubmit}
              onHide={handleClose}
              hideRow={hideRow}
              npiNumber={npiNumber} // Pass the npiNumber state as a prop
              degree={degree} // Pass the degree state as a prop
            />
          </Modal.Body>
        </Modal>

      </div>
    </div>
  );
};

export default Licenverification;
