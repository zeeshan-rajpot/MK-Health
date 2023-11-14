import React, { useState ,useRef } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import Personalinfo from './Profile/Personalinfo.jsx';
import { useNavigate } from 'react-router-dom';
import ChangePass from './Profile/ChangePass.jsx';
import Changeemail from './Profile/Changeemail.jsx';
import MedicalHis from './Profile/MedicalHis.jsx';

const profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Personal Information');
  const [colContent, setColContent] = useState(<Personalinfo />);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleTabClick = (tabName, content) => {
    setActiveTab(tabName);
    setColContent(content);
  };
  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem('token');
    
    // Navigate to the home page
    navigate('/');
  };

  
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    // Display a preview of the selected image
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);

    setSelectedImage(file);
  };

  const handleUpload = () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append('image', selectedImage);

      axios
        .post('http://localhost:5000/api/upload/images?containerName=profile', formData)
        .then((response) => {
          console.log('Image uploaded successfully:', response.data);
          // Add any additional logic here after successful upload
        })
        .catch((error) => {
          console.error('Error uploading image:', error);
        });
    } else {
      console.error('No image selected.');
    }
  };

  const handleClickProfileImage = () => {
    // Trigger file input click when the profile image is clicked
    fileInputRef.current.click();
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
                  <div className='text-center'>
      {previewImage ? (
        <div
          style={{
            borderRadius: '50%',
            height: '100px',
            width: '100px',
            backgroundPosition: 'center',
          }}
          onClick={handleClickProfileImage}
        >
          <img
            src={previewImage}
            alt='profile'
            style={{
              borderRadius: '50%',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      ) : (
        <div
          style={{
            borderRadius: '50%',
            height: '100px',
            width: '100px',
            backgroundPosition: 'center',
          }}
          onClick={handleClickProfileImage}
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
      )}

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleImageChange}
        accept="image/*"
        style={{ display: 'none' }}
      />

      <button
        className='mb-2 border-0 text-white p-2 rounded-5'
        style={{
          backgroundColor: '#FAB915',
          width: '80%',
          fontSize: '13px',
          boxShadow: '0 3px 1px rgba(0, 0, 0, 0.16)',
        }}
        onClick={handleUpload}
      >
        Change Profile
      </button>
    </div>
                    <button
                      className=' border-0 text-white p-2 rounded-5'
                      style={{
                        backgroundColor: '#FAB915',
                        width: '80%',
                        fontSize: '13px',
                        boxShadow: '0 3px 1px rgba(0, 0, 0, 0.16)',
                      }}
                   onClick={handleLogout}
                   >
                      Logout
                    </button>
                  </div>

                  {/* <div className='d-flex flex-column justify-content-start align-items-start '> */}
                  <div
                    className='text-left mt-5 ps-4 p-2 '
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
                    style={{
                      backgroundColor:
                        activeTab === 'Change' ? '#FEF3D5' : 'transparent',
                      borderRadius:
                        activeTab === 'Change' ? '0 15px 15px 0' : '0',
                      color: activeTab === 'Change' ? '#FAB915' : '#D5D5D5',
                    }}
                    onClick={() =>
                      handleTabClick('Change', <ChangePass/>)
                    }
                  >
                    <p className='my-0'>Change Password</p>
                  </div>
                  <div
                    className='text-left mt-2 ps-4 p-2 '
                    style={{
                      backgroundColor:
                        activeTab === 'Email' ? '#FEF3D5' : 'transparent',
                      borderRadius:
                        activeTab === 'Email' ? '0 15px 15px 0' : '0',
                      color: activeTab === 'Email' ? '#FAB915' : '#D5D5D5',
                    }}
                    onClick={() =>
                      handleTabClick('Email', <Changeemail/>)
                    }
                  >
                    <p className='my-0'>Change Email</p>
                  </div>

                  <div
                    className='text-left mt-2 ps-4 p-2 '
                    style={{
                      backgroundColor:
                        activeTab === 'Medical' ? '#FEF3D5' : 'transparent',
                      borderRadius:
                        activeTab === 'Medical' ? '0 15px 15px 0' : '0',
                      color: activeTab === 'Medical' ? '#FAB915' : '#D5D5D5',
                    }}
                    onClick={() =>
                      handleTabClick('Medical', <MedicalHis/>)
                    }
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
