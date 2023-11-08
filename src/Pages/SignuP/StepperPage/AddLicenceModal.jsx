import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

export const AddLicenceModal = ({ onDataSubmit, onHide, hideRow }) => {
  const [licenseType, setLicenseType] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [licenseExpiry, setLicenseExpiry] = useState('');
  const [licenseStatus, setLicenseStatus] = useState('Active');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'licenseType') {
      setLicenseType(value);
    } else if (name === 'licenseNumber') {
      setLicenseNumber(value);
    } else if (name === 'licenseExpiry') {
      setLicenseExpiry(value);
    } else if (name === 'licenseStatus') {
      setLicenseStatus(value);
    }
  };

  const handleImageUpload = e => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleNextClick = () => {
    let hasImage = selectedImage ? 'Yes' : 'No';

    const data = {
      licenseType,
      licenseNumber,
      licenseExpiry,
      licenseStatus,
      selectedImage,
      hasImage, // Add "hasImage" to data
    };

    onDataSubmit(data); // Pass the data to the parent component
    onHide(); // Close the modal
    hideRow();
  };

  return (
    <div className='w-100 d-flex flex-column justify-content-center align-items-center '>
      <Row className='border-bottom ms-1' style={{ width: '80%' }}>
        <h6 className='p-3' style={{ color: '#FAB915' }}>
          Add Medical License
        </h6>
      </Row>
      <Row className='ms-1 mobw90' style={{ width: '80%' }}>
        <div className='mobw90' style={{ width: '80%' }}>
          <label className='mb-1 ms-3 mt-3 text-muted'>License type:</label>
          <input
            name='licenseType'
            placeholder='MBBS'
            type='text'
            className='shadow border-0 w-100 m-0 p-2 rounded-5 text-black'
            onChange={handleChange}
          />
          <label className='mb-1 ms-3 mt-3 text-muted'>License Number:</label>
          <input
            name='licenseNumber'
            placeholder='16438251798'
            type='text'
            className='shadow border-0 w-100 m-0 p-2 rounded-5 text-black'
            onChange={handleChange}
          />
          <label className='mb-1 ms-3 mt-3 text-muted'>License Expiry:</label>
          <input
            name='licenseExpiry'
            placeholder='8/29/2023'
            type='date'
            className='shadow border-0 w-100 m-0 p-2 rounded-5 text-black'
            onChange={handleChange}
          />
          <label className='mb-1 ms-3 mt-3 text-muted'>License Status:</label>
          <select
            name='licenseStatus'
            className='shadow border-0 w-100 m-0 p-2 rounded-5 text-black bg-white'
            onChange={handleChange}
            value={licenseStatus}
          >
            <option>Active</option>
            <option>InActive</option>
          </select>
        </div>
      </Row>
      <Row className='ms-1 mobw90' style={{ width: '80%' }}>
        {/* Upload ID Image input field */}
        <Col xs={12} xl={6}>
          <input
            type='file'
            accept='image/*'
            className='d-none'
            onChange={handleImageUpload}
            id='imageUploadInput'
          />
          <label
            htmlFor='imageUploadInput'
            className='button border-0 p-2 rounded-5 text-white my-4 '
            style={{ cursor: 'pointer' }}
          >
            Upload ID Image
          </label>
        </Col>
      </Row>
      <Row
        className='text-center d-flex justify-content-center '
        style={{ width: '80%' }}
      >
        <Col xs={12} xl={6}>
          <button className='p-2 w-100 rounded-5   backbutton'>
            Cancel
          </button>
        </Col>
        <Col xl={6}>
          <button
            className='button border-0 w-100 p-2 rounded-5 text-white my-2 my-md-0'
            onClick={handleNextClick}
          >
            Next
          </button>
        </Col>
      </Row>
    </div>
  );
};
export default AddLicenceModal;
