import React from 'react';
import Navbare from '../../../Compunents/Navbar';
import Footer from '../../../Compunents/Footer';
import { Row, Col, Container } from 'react-bootstrap';
export const InvitePatients = () => {
  return (
    <div>
      <Navbare activetab='Provider' bgcolor='transparent' />
      <Container className='  py-3  text-center'>
        <Row className=''>
          {/* <p className='fs-5 text-start mt-5' style={{ color: '#FAB915' }}>
            <b>Send message to all patients</b>
          </p> */}
          <Row
            className=' p-5 d-flex flex-column justify-content-center align-items-center'
            style={{ borderBottom: '1px solid #FAB915' }}
          >
            <div className='shadow p-5 rounded-5 pb-5'>
              <div>
                <h3 style={{ color: '#FAB915' }}>
                  <img src='./fa-solid_share.svg' alt='' className='me-4' />
                  Share Your link
                </h3>
              </div>
              <div className='mt-4 text-center'>
                <p>
                  Using this link, a new patient can submit their information
                  and create an account without an invitation.
                </p>
                <p>OR</p>
                <p>
                  Share your custom invitation code:<b> MOHSIN</b>
                </p>
                <p style={{ color: '#FAB915' }}>Preview Share link</p>
              </div>
              <Col xs={12}>
                <button
                  className='p-3 rounded-5 border-0 text-white'
                  style={{ backgroundColor: '#FAB915' }}
                >
                  Recommend to friends
                  <img src='./Component 622 – 2.svg' alt='' className='ms-3' />
                </button>
              </Col>
            </div>
          </Row>

          <Row className=' p-5 d-flex flex-column justify-content-center align-items-center'>
            <div className='shadow p-5 rounded-5 pb-5'>
              <div>
                <h3 style={{ color: '#FAB915' }}>
                  <img
                    src='./fluent_mail-16-filled.svg'
                    alt=''
                    className='me-4'
                  />
                  Share Your link
                </h3>
              </div>
              <div className='mt-4 text-center'>
                <p>
                  Enter patient email address into the box below and send a
                  customized email invitation. once person click on your link
                  and create an account, they are a patient of your practice
                </p>
                <div className='text-start'>
                  <label className=' mb-2 ms-4'> Enter Patient Email</label>
                  <input
                    type='text'
                    placeholder='xyz@email.com'
                    className='shadow p-3 rounded-5'
                  />
                </div>
                <div className='text-start mt-5'>
                  <label className=' mb-2 ms-4'> Message</label>
                  <textarea
                    type='text'
                    style={{ height: '15vh' }}
                    placeholder="It's Optional..."
                    className='shadow p-3 rounded-5 w-100 border-0'
                  />
                </div>
                <div className='text-start mt-4'>
                  <p>
                    This invitation are send from a ( MK Health ) email address.
                    Your personal email address is not included.
                  </p>
                </div>
              </div>
              <Col xs={12} className='mt-5'>
                <button
                  className='p-3 rounded-5 border-0 text-white'
                  style={{ backgroundColor: '#FAB915' }}
                >
                  Invite Patient
                  <img src='./Component 622 – 2.svg' alt='' className='ms-3' />
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
export default InvitePatients;
