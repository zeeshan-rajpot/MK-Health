import { useState, useRef, useEffect } from 'react';
import { Col, Container, Row, Modal } from 'react-bootstrap';
import Footer from "../../../Compunents/Footer"
import Navbare from "../../../Compunents/Navbar"


const ProviderChart = () => {
    const datePickerRef = useRef(null);

  const openDatePicker = () => {
    datePickerRef.current.click();
  };

  const LabDetails = [
    { placeholder: 'Eg. Panadol Medicine', label: 'Your Notes', type: 'text' },
    { placeholder: 'Eg. Panadol Medicine', label: 'Your Notes', type: 'text' },
    {
      placeholder: 'Covid-19 IgG Antibody',
      label: 'Lab Test(s) Ordered',
      type: 'text',
    },
  ];

  const [values, setValues] = useState(Array(LabDetails.length).fill(''));

  const handleChange = (index, e) => {
    const updatedValues = [...values];
    updatedValues[index] = e.target.value;
    setValues(updatedValues);
  };
  return (
    <>
    <Navbare/>

    <Container>
        <Row>
          <Col>
            <h3 className='m-auto py-3' style={{ width: '75%' }}>
              My Chart
            </h3>
            <div
              className=' m-auto  shadow py-5 mobw100 rounded-0 '
              style={{ width: '80%' }}
            >
              <div className=' m-auto' style={{ width: '80%' }}>
                <Row>
                  <Col md={6}>
                    <div className='p-5 bg-white shadow d-flex justify-content-between align-items-center rounded-3 '>
                      <img src='./Group 7651.svg' alt='text' />
                      <p className='my-0' style={{ fontSize: '15px' }}>
                        Messages partner
                      </p>
                      <img src='./Path 32622.svg' alt='down arrow' />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className='p-5 bg-white shadow d-flex justify-content-between align-items-center rounded-3 mt-3 mt-md-0'>
                      <img src='./Group 7651.svg' alt='text' />

                      <p className='my-0' style={{ fontSize: '15px' }}>
                        Order for Myself
                      </p>
                      <img src='./Path 32622.svg' alt='down arrow' />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <br />
            <br />
            <div
              className=' m-auto  shadow py-5 mobw100 rounded-0 '
              style={{ width: '80%' }}
            >
              <div className=' m-auto d-flex pb-4' style={{ width: '80%' }}>
                <h6 className=''>
                  <b style={{ color: '#FAB915' }}>
                    September 30,2022 - Lab Test
                  </b>
                </h6>
                <img src='./Path 32622.svg' alt='down arrow' className='ms-5' />
              </div>
              <div className=' m-auto' style={{ width: '80%' }}>
                <button
                  className='btnn py-2 px-4 border-0 shadow rounded-5 text-white'
                  style={{ backgroundColor: '#FAB915' }}
                >
                  <span className='me-4'>View Lab Result</span>
                  <img src='/Component 638 – 1.svg' width='30' height='30' />
                      
                </button>
              </div>
              <div>
                {LabDetails.map((input, index) => (
                  <div
                    key={index}
                    className=' m-auto mobw90 mt-4'
                    style={{ width: '80%' }}
                  >
                    <p className='mb-1 ms-3 mt-3 text-muted'>{input.label}</p>
                    <input
                      type={input.type}
                      className='shadow border-0 w-100 m-0 p-3 rounded-5 text-black'
                      placeholder={input.placeholder}
                      value={values[index]}
                      onChange={e => handleChange(index, e)}
                      style={{
                        '--placeholder-color': 'black',
                        'font-weight': 'normal',
                      }}
                    />
                  </div>
                ))}
                <div className=' m-auto' style={{ width: '80%' }}>
                  <button
                  className='text-white rounded-3 w-50  border-0 p-3 d-flex justify-content-between align-items-center mt-5'
                  style={{ backgroundColor: '#FAB915' }}
                >
                  <img src='./Component 619 – 3.svg' alt='plus' />
                  April 24, 2023 - Lab Results
                  <img
                    src='./ArrowRight.svg'
                    alt='dropdown'
                  />
                </button>

                </div>
              </div>
            </div>

            <br />
            <br />
          </Col>
        </Row>
      </Container>
<Footer/>    
    </>
  )
}

export default ProviderChart