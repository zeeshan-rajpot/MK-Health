import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Personalinfo from './Profile/Personalinfo.jsx';
import Chnage from './Profile/ChangePass.jsx';
import ChangeEmail from './Profile/Changeemail.jsx';
import Medical from './Profile/MedicalHis.jsx';
const profile = () => {
  const [activeTab, setActiveTab] = useState('Personal Information');
  const [colContent, setColContent] = useState(<Personalinfo />);

  const handleTabClick = (tabName, content) => {
    setActiveTab(tabName);
    setColContent(content);
  };

  return (
    <>
      <div className='mt-5'>
        <Container className='pt-5'>
          {/* <div className='mt-5 mobw90' style={{ width: '80%' }}> */}
          <Row>
            <Col xl={3} xs={4}>
              <Row>
                <Col className='shadow ps-0' style={{ height: '80vh' }}>
                  <div className='my-5 d-flex flex-column justify-content-center align-items-center'>
                    <div
                      style={{
                        borderRadius: '50%',
                        height: '100px',
                        width: '100px',
                        backgroundPosition: 'center',
                      }}
                    >
                      <img
                        src='https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt='profile'
                        style={{
                          borderRadius: '50%',
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                    <p className='mt-3'>John Smith</p>
                    <button
                      className='mb-2 border-0 text-white p-2 rounded-5'
                      style={{
                        backgroundColor: '#FAB915',
                        width: '80%',
                        fontSize: '13px',
                        boxShadow: '0 3px 1px rgba(0, 0, 0, 0.16)',
                      }}
                    >
                      Change Profile
                    </button>
                  </div>

                  {/* <div className='d-flex flex-column justify-content-start align-items-start '> */}
                  <div
                    className='text-left mt-5 ps-4 p-2 '
                    role='button'
                    style={{
                      backgroundColor:
                        activeTab === 'Personal Information'
                          ? '#FEF3D5'
                          : 'transparent',
                      borderRadius:
                        activeTab === 'Personal Information'
                          ? '0 15px 15px 0'
                          : '0',
                      color:
                        activeTab === 'Personal Information'
                          ? '#FAB915'
                          : '#D5D5D5',
                    }}
                    onClick={() =>
                      handleTabClick('Personal Information', <Personalinfo />)
                    }
                  >
                    <p className='my-0'>Personal Information</p>
                  </div>
                  <div
                    className='text-left mt-2 ps-4 p-2 '
                    role='button'
                    style={{
                      backgroundColor:
                        activeTab === 'Change' ? '#FEF3D5' : 'transparent',
                      borderRadius:
                        activeTab === 'Change' ? '0 15px 15px 0' : '0',
                      color: activeTab === 'Change' ? '#FAB915' : '#D5D5D5',
                    }}
                    onClick={() => handleTabClick('Change', <Chnage />)}
                  >
                    <p className='my-0'>Change Password</p>
                  </div>
                  <div
                    className='text-left mt-2 ps-4 p-2 '
                    role='button'
                    style={{
                      backgroundColor:
                        activeTab === 'Email' ? '#FEF3D5' : 'transparent',
                      borderRadius:
                        activeTab === 'Email' ? '0 15px 15px 0' : '0',
                      color: activeTab === 'Email' ? '#FAB915' : '#D5D5D5',
                    }}
                    onClick={() => handleTabClick('Email', <ChangeEmail />)}
                  >
                    <p className='my-0'>Change Email</p>
                  </div>

                  <div
                    className='text-left mt-2 ps-4 p-2 '
                    role='button'
                    style={{
                      backgroundColor:
                        activeTab === 'Medical' ? '#FEF3D5' : 'transparent',
                      borderRadius:
                        activeTab === 'Medical' ? '0 15px 15px 0' : '0',
                      color: activeTab === 'Medical' ? '#FAB915' : '#D5D5D5',
                    }}
                    onClick={() => handleTabClick('Medical', <Medical />)}
                  >
                    <p className='my-0'>Medical History</p>
                  </div>
                  {/* </div> */}
                </Col>
              </Row>
            </Col>
            <Col
              xl={9}
              xs={8}
              className='ms-0 ms-md-0 shadow'
              style={{
                height: '80vh',
                overflowY: 'auto',
                backgroundColor: '#F8F8F8',
              }}
            >
              <Row className='p-0 p-md-4 '>{colContent}</Row>
            </Col>
          </Row>
          {/* </div> */}
        </Container>
      </div>
    </>
  );
};

export default profile;
