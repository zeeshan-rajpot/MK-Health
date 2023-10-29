import { useState, useRef, useEffect } from 'react';
import { Col, Container, Row, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PaitentDeatilForm = () => {
    const datePickerRef = useRef(null);

  const openDatePicker = () => {
    datePickerRef.current.click();
  };

  const PatientDetails = [
    { placeholder: 'Sarah Johnson', label: 'Name', type: 'text' },
    { placeholder: '42 years old (Female)', label: 'Age' },
    { placeholder: '11/30/80', label: 'DOB', type: 'date' },
    {
      placeholder: '1224 Stillwater Dr,Roc Springs ,WY,52467',
      label: 'Address',
    },
  ];

  const PatientDataDetail = [
    { placeholder: '07/11/2023', label: 'Date', type: 'date' },
    {
      placeholder: 'Inflammation in Knees & Elbows',
      label: 'Past Medical Problems:',
    },
    { placeholder: 'Ambien', label: ' Current Medications:' },

    { placeholder: 'Amoxicilion', label: 'Allergies:' },
    { placeholder: 'At least for 3 Months', label: 'Quantity Requested' },
    {
      placeholder: 'W: 170 lbs / 77.1 Kg, H: 63 in BMI: 30.5',
      label: 'Vitals',
    },
  ];

  const [values, setValues] = useState(Array(PatientDetails.length).fill(''));

  const handleChange = (index, e) => {
    const updatedValues = [...values];
    updatedValues[index] = e.target.value;
    setValues(updatedValues);
  };
  const [activeButton, setActiveButton] = useState(0);

  useEffect(() => {
    // Set the initial active button when the component mounts
    setActiveButton(0);
  }, []);

  const handleButtonClick = buttonIndex => {
    setActiveButton(buttonIndex);
  };
  return (
    <>
    
    
    <Container>
        <Row>
          <Col>
            <h3 className='m-auto py-3' style={{ width: '75%' }}>
              Hi,Doctor
            </h3>
            <div
              className=' m-auto  shadow py-5 mobw100 rounded-0 '
              style={{ width: '80%' }}
            >
              <div className=' m-auto' style={{ width: '80%' }}>
                <h6 className='pb-4'>
                  <b style={{ color: '#FAB915' }}>Patient Detail</b>
                </h6>
              </div>
              <div>
                {PatientDetails.map((input, index) => (
                  <div
                    key={index}
                    className=' m-auto mobw90'
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
                    className='btnn py-1 px-4 border-0 shadow rounded-5 mt-5  text-white'
                    style={{ backgroundColor: '#FAB915' }}
                  >
                    <span className='me-4'>Call Patient</span>
                    <img src='/Component 638 – 1.svg' width='30' height='30' />
                        
                  </button>
                </div>
              </div>
            </div>

            <br />
            <br />
            
            <div
              className=' m-auto  shadow py-5 mobw100 rounded-0 '
              style={{ width: '80%' }}
            >
              <div className=' m-auto' style={{ width: '80%' }}>
                <h6 className='pb-4'>
                  <b style={{ color: '#FAB915' }}>Patient provided Data</b>
                </h6>
              </div>

              <div>
                {PatientDataDetail.map((input, index) => (
                  <div
                    key={index}
                    className=' m-auto mobw90'
                    style={{ width: '80%' }}
                  >
                    <p className='mb-1 ms-3 mt-3 ' style={{ color: '#747E93' }}>
                      {input.label}
                    </p>
                    <input
                      type={input.type}
                      className='shadow border-0  w-100 m-0 p-3 rounded-5 '
                      placeholder={input.placeholder}
                      value={values[index]}
                      onChange={e => handleChange(index, e)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className='shadow my-4 m-auto p-4 mobw100' style={{ width: '80%' }}>
              <Row>
                <Col md={6}>
                  <button
                    className={`text-white w-100 p-3 border-0 rounded-3 mb-2 ${
                      activeButton === 0 ? 'active-button' : ''
                    }`}
                    style={{
                      backgroundColor:
                        activeButton === 0 ? '#EB5757' : '#B6C5D1',
                    }}
                    onClick={() => handleButtonClick(0)}
                  >
                    <img
                      src='./Component 613 – 2.svg'
                      alt='icon'
                      className='me-3'
                    />
                    Rx Request Pending
                  </button>
                </Col>
                <Col md={6}>
                    <Link to='/RequestedRxForm'>
                  <button
                    className={`text-white w-100 p-3 border-0 rounded-3 mb-2 ${
                      activeButton === 1 ? 'active-button' : ''
                    }`}
                    style={{
                      backgroundColor:
                        activeButton === 1 ? '#EB5757' : '#B6C5D1',
                    }}
                    onClick={() => handleButtonClick(1)}
                  >
                    <img
                      src='./Component 614 – 2.svg'
                      alt='icon'
                      className='me-3'
                    />
                    Write Prescription
                  </button>
                  </Link>
                </Col>
                <Col md={6}>
                  <button
                    className={`text-white w-100 p-3 border-0 rounded-3 mb-2 ${
                      activeButton === 2 ? 'active-button' : ''
                    }`}
                    style={{
                      backgroundColor:
                        activeButton === 2 ? '#EB5757' : '#B6C5D1',
                    }}
                    onClick={() => handleButtonClick(2)}
                  >
                    <img
                      src='./Component 615 – 2.svg'
                      alt='icon'
                      className='me-3'
                    />{' '}
                    Order Lab Tests
                  </button>
                </Col>
                <Col md={6}>
                  <button
                    className={`text-white w-100 p-3 border-0 rounded-3 mb-2 ${
                      activeButton === 3 ? 'active-button' : ''
                    }`}
                    style={{
                      backgroundColor:
                        activeButton === 3 ? '#EB5757' : '#B6C5D1',
                    }}
                    onClick={() => handleButtonClick(3)}
                  >
                    <img
                      src='./Component 617 – 2.svg'
                      alt='icon'
                      className='me-3'
                    />{' '}
                    Create Invoice
                  </button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    
    
    </>
  )
}

export default PaitentDeatilForm