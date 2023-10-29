import { useState, useRef } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import Navbare from '../../../Compunents/Navbar';
import Footer from '../../../Compunents/Footer';

const ReviewPrescribePage = () => {
    const datePickerRef = useRef(null);

    const openDatePicker = () => {
      datePickerRef.current.click();
    };
  
    const MedicationStrengthDetail = [
      {
        placeholder: '$25.00',
        label:
          'Requested: Ozempic or Maujaurno 2.5-5.0, Qty: at least for 3 Months',
        type: 'text',
      },
      {
        placeholder: '6',
        label: ' Quantity (eg. 30)',
      },
      { placeholder: '14.65', label: ' Quantity Unit of Measure' },
  
      { placeholder: '2', label: 'Refills' },
      { placeholder: 'Effective Date', label: 'Effective Date', type: 'date' },
    ];
    const DispenseDetail = [
      {
        placeholder: 'E.g take 2 tablets by mouth daily for 5 days',
        label: 'Sig: Patient-friendly English only, no latin abbreviations.',
        type: 'text',
      },
      {
        placeholder:
          'Enter any other information that you want written on the prescription itself.',
        label: 'Non-Sig Notes for the Rx (E.g flavoring choice)',
      },
      { placeholder: 'All Fill Statuses', label: 'Rx Status Tracking:' },
  
      { placeholder: '66.8', label: 'Height (Inches)' },
      { placeholder: '66.8', label: 'Weight (Pounds)' },
    ];
    const [values, setValues] = useState(
      Array(MedicationStrengthDetail.length).fill('')
    );
  
    const handleChange = (index, e) => {
      const updatedValues = [...values];
      updatedValues[index] = e.target.value;
      setValues(updatedValues);
    };
    const medicationData = [
      {
        text: 'Aldara 5% Topical Cream',
      },
      {
        text: 'Aspirin (relieve pain )',
      },
      {
        text: 'Ibuprofen (lower fever)',
      },
      {
        text: 'Amoxicillin(ear )',
      },
    ];
  
    const [selected, setSelected] = useState(
      Array(medicationData.length).fill(false)
    );
  
    const handleSelectClick = index => {
      setSelected(prevSelected => {
        const newSelected = [...prevSelected];
        newSelected[index] = !newSelected[index];
        return newSelected;
      });
    };

  return (
    <>
    <Navbare/>
     <div>
      <Container>
        <Row>
          <Col>
            <h3 className='m-auto py-3' style={{ width: '75%' }}>
              Review / Prescribe
            </h3>
            <div
              className=' m-auto  shadow py-5 mobw100 rounded-0 '
              style={{ width: '80%' }}
            >
              <div className=' m-auto' style={{ width: '80%' }}>
                <h6 className='pb-4'>
                  <b style={{ color: '#FAB915' }}>Prescription Detail</b>
                </h6>
                <p style={{color:'#252424'}}>
                  This is what gets sent to the pharmacy of your patient. Please
                  note that MK Health Care is not set up to enable the
                  prescribing of controlled substances.
                </p>
              </div>
              <div className='shadow  m-auto p-4 mobw100' style={{ width: '80%' }}>
                <p className=''>Previously Written Prescriptions</p>
         
                <Row>
                  {medicationData.map((data, index) => (
                    <Col
                      md={5}
                      className='d-flex justify-content-between align-items-center rounded-3 mt-2  me-3'
                      style={{
                        backgroundColor: '#FEF3D5',
                      }}
                      key={index}
                    >
                      <p className='py-3 my-0 text-muted'>{data.text}</p>
                      <button
                        className={`border-0 w-25 rounded-5 text-white p-1 ${
                          selected[index] ? 'selected' : ''
                        }`}
                        style={{ backgroundColor: '#FAB915' }}
                        onClick={() => handleSelectClick(index)}
                      >
                        {selected[index] ? 'Selected' : 'Select'}
                      </button>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>

            <br />
            <br />
            <div
              className=' m-auto  shadow py-5 mobw100 rounded-0 '
              style={{ width: '80%' }}
            >
              <div className='m-auto border-bottom' style={{ width: '80%' }}>
                <p className='pb-2 my-0' style={{ color: '#FAB915' }}>
                  <b>Medication, Strength, Form</b>
                  <br />
                  (e.g, Amoxicillin 500MG Oral Tablet)
                </p>
              </div>

              <div>
                {MedicationStrengthDetail.map((input, index) => (
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
            <br />
            <br />

            <div
              className=' m-auto  shadow py-4 mobw100 rounded-0 '
              style={{ width: '80%' }}
            >
              <div className='m-auto border-bottom' style={{ width: '80%' }}>
                <p className='pb-2 my-0' style={{ color: '#FAB915' }}>
                  <b>Dispense as written:</b>
                  <br />
                </p>
                {/* <input type='checkbox' /> */}
                <span className='text-muted ms-3'>No Substitutions</span>
              </div>
              <div>
                {DispenseDetail.map((input, index) => (
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
              <div className=' m-auto mobw90' style={{ width: '80%' }}>
                <button
                  className='text-white rounded-3   border-0 p-3 d-flex justify-content-between align-items-center mt-5'
                  style={{ backgroundColor: '#FAB915' }}
                >
                  <img src='./Path 32617.svg' alt='' />
                  Add Another Medication
                  <img
                    src='./Iconly-Bulk-Arrow - Right Circle.svg'
                    alt='dropdown'
                    className='ms-2'
                  />
                </button>
              </div>
            </div>
            <br />
            <br />

            <div className='shadow m-auto mobw100' style={{ width: '80%' }}>
              <div className='m-auto py-3' style={{ width: '80%' }}>
                <p className='text my-0'>Professional Fee Authorized</p>
                <span className='text'>$25.00</span>
                <p className='text-black mt-3'>
                  This is what gets sent to the pharmacy of your patient. Please
                  note that MK Health Care is not set up to enable the
                  prescribing of controlled substances.
                </p>
              </div>
            </div>
            <br />
            <br />

            <div className='shadow m-auto mobw100' style={{ width: '80%' }}>
              <div className='m-auto py-4 ' style={{ width: '80%' }}>
                <p className='text my-0'>Sign Your Prescription</p>
                <div className='d-flex align-items-center'>
                  <label className='custom-checkbox-other'>
                    <input type='checkbox-other' />
                    <span className='checkmark-other'></span>
                  </label>
                  <span className='text-muted ms-3 mt-1 align-self-start'>
                  By checking this box, I am electronically signing and
                      authorizing this prescription.
                  </span>
                </div>
                <p className='mt-3 text-black'>
                  How was consult handled?
                  <span className='text-secondary'>
                    {' '}
                    (select all that apply)
                  </span>
                </p>
                <div className='d-flex align-items-center'>
                  <label className='custom-checkbox-other'>
                    <input type='checkbox-other' />
                    <span className='checkmark-other'></span>
                  </label>
                  <span className='text-muted ms-3 mt-1 align-self-start'>
                    Message
                  </span>
                </div>

                <div className='d-flex align-items-center'>
                  <label className='custom-checkbox-other'>
                    <input type='checkbox-other' />
                    <span className='checkmark-other'></span>
                  </label>
                  <span className='text-muted ms-3 mt-1 align-self-start'>
                    Phone
                  </span>
                </div>
                <div className='d-flex align-items-center'>
                  <label className='custom-checkbox-other'>
                    <input type='checkbox-other' />
                    <span className='checkmark-other'></span>
                  </label>
                  <span className='text-muted ms-3 mt-1 align-self-start'>
                    Video
                  </span>
                </div>
                <div className='d-flex align-items-center'>
                  <label className='custom-checkbox-other'>
                    <input type='checkbox-other' />
                    <span className='checkmark-other'></span>
                  </label>
                  <span className='text-muted ms-3 mt-1 align-self-start'>
                    In Person
                  </span>
                </div>
                <div className='d-flex align-items-center'>
                  <label className='custom-checkbox-other'>
                    <input type='checkbox-other' />
                    <span className='checkmark-other'></span>
                  </label>
                  <span className='text-muted ms-3  align-self-start'>
                    Other
                  </span>
                </div>
                <p className='text-black mt-3' style={{ fontSize: '15px' }}>
                  When you click the “NEXT” Button below and confirm
                  prescription details, the prescription will be routed to the
                  pharmacy that your patient will be notified. You will have the
                  opportunity to document notes from this encounter on the next
                  screen.
                </p>
                <button
                  className=' py-1  px-4 border-0 shadow rounded-5 mt-2 text-white'
                  style={{ backgroundColor: '#FAB915' }}
                >
                  <span className='me-4'>Next</span>
                  <img src='/Component 638 – 1.svg' width='30' height='30' />
               
                </button>
              </div>
            </div>
            <br />
          </Col>
        </Row>
      </Container>
    </div>
    
    <Footer/>
    
    
    
    </>
  )
}

export default ReviewPrescribePage