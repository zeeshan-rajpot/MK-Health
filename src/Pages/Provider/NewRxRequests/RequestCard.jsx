import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Col, Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import Demomodal from './Demomodal';

const RequestCard = () => {
  const [data, setData] = useState([]); // Initialize data as an empty array
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await axios.get('https://hkhealth.azurewebsites.net/api/doctor/getprescriptions', config);
       
        setData(response.data.data); // Set the data in the state
      console.log(response.data.data)
      } catch (error) {
        console.log(error.response.data);
        alert(error.response.data)
      }
    };

    fetchData();
  }, []);
  const openDetailsModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };


  return (
    <>
      {data.length > 0 && data.map((item) => (
        <Col md={4} xs={12} key={item.id} onClick={() => openDetailsModal(item)}>
          {/* <Link to='/PaitentDetail'> */}
            <div className='shadow d-flex justify-content-center align-items-center my-4 rounded-4 hover-effect '>
              <div className='d-flex justify-content-center align-items-center flex-column '>
                <img
                  src='https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Use the image URL from the data
                  className=' mt-4 providerimg  '
                  style={{
                    borderRadius: '100%',
                    // objectFit: 'cover',
                    // width: '100px',
                   
                  }}
                  alt='girl'
                />
                <h3 className='mt-3 text m-auto ' style={{ color: '#FAB915', fontSize: '15px' }}>
                  {item.personalInformation.name} {/* Use the name from the data */}
                </h3>
                <p className='text-black ' style={{ fontSize: '15px' }}>
                 (Open Practice) {/* Use the practice from the data */}
                </p>
              </div>
            </div>
          {/* </Link> */}
        </Col>




      ))}



<Modal size='lg' show={selectedItem !== null} onHide={closeModal}>

<Modal.Body>
  {selectedItem && <Demomodal item={selectedItem} />} {/* Render ItemDetails component */}
</Modal.Body>

</Modal>
    </>
  );
};

export default RequestCard;
