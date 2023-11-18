import React from 'react';
import Navbare from '../../../Compunents/Navbar';
import Footer from '../../../Compunents/Footer';
import { Row, Col, Container } from 'react-bootstrap';

export const MessagePatients = () => {
  return (
    <div>
      <Navbare activetab='Provider' bgcolor='transparent' />
      <Container className='  py-3  text-center'>
        <Row className='mt-5'>
          <p className='fs-5 text-start mt-5' style={{ color: '#FAB915' }}>
            <b>Send message to all patients</b>
          </p>
          <Row className='shadow p-5'>
            <div className='d-flex flex-column my-4 text-start border-bottom w-100'>
              <p>
                Type a message with or without an attachment and securely send
                it to all of your patients at once.
              </p>
            </div>
            <div className='d-flex flex-column '>
              <label className='text-start ms-3 mb-2'>Message</label>
              <textarea
                placeholder='Type here'
                style={{ height: '20vh' }}
                className='w-100  shadow rounded-4 border-0 p-4'
              />
            </div>
            <div className='d-flex flex-column  mt-5'>
              <Col xl={2} xs={12}>
                <button className='border-1 bg-white w-100 text-black rounded-5 p-2'>
                  <img src='./entypo_attachment.svg' alt='' className='me-3' />
                  Attach File
                </button>
              </Col>
              <Col xl={3} xs={12}>
                <button
                  className='border-0 w-100 text-white rounded-5 p-2 my-3'
                  style={{ backgroundColor: '#FAB915' }}
                >
                  Send Message
                  <img src='./Component 622 – 1.svg' alt='' className='ms-3' />
                </button>
              </Col>
            </div>
          </Row>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};
export default MessagePatients;
