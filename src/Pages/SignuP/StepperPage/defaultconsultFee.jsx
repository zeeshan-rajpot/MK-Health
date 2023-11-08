import { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const defaultconsultFee = () => {
  const [value, setValue] = useState(25);

  const hChange = event => {
    let newValue = parseInt(event.target.value);
    if (isNaN(newValue) || newValue < 0) {
      newValue = 0;
    }
    setValue(newValue);
  };

  return (
    <Container className='shadow'>
      <div className=' m-auto mobw90 pt-3' style={{ width: '80%' }}>
        <Row>
          <p>
            <img src='./feeicon.svg' className='me-3' />
            Professional Fee (Default)
          </p>
          <p style={{ fontSize: '13px' }}>
            Your default fee is displayed to patients when they are requesting a
            service. You can change this fee at any time.
          </p>
        </Row>
        <Row>
          <Col xs={12} xl={5}>
            <div
              className='d-flex justify-content-start align-items-center mt-3'
              style={{ width: '50%' }}
            >
              <div
                className='text-center'
                style={{
                  backgroundColor: '#DFE2E5',
                  width: '50%',
                  borderRadius: '15px 0 0 15px',
                  padding: '5px',
                }}
              >
                <img src='./dolor sign.svg' alt='dollar' />
              </div>
              <input
                type='number'
                className='text-center'
                placeholder='25'
                value={value}
                onChange={hChange}
                style={{
                  width: '100%',
                  border: 'none',
                  borderBottom: '1px solid #fff',
                  padding: '5px',
                }}
              />
              <div
                className='text-center'
                style={{
                  backgroundColor: '#DFE2E5',
                  width: '50%',
                  borderRadius: '0 15px 15px 0',
                  padding: '5px',
                }}
              >
                .00
              </div>
            </div>
          </Col>

          <p className='my-3'>Most active providers charge more than 50$.</p>
        </Row>
        <Row>
          <p className='my-0'>
            <label className='custom-checkbox'>
              <input type='checkbox' />
              <span className='checkmark'></span>
            </label>
            <span className='ms-3'>I Pledge to donate my fees to charity.</span>
          </p>
        </Row>
        <Row className='py-5 mt-5'>
          {/* <Col></Col>
          <Col xl={4} xs={12}>
            <button className='backbutton w-100 rounded-5 p-2'>Back</button>
          </Col>
          <Col xl={4} xs={12}>
            <Link to='/Login'>
              <button className='back border-0 w-100 button text-white rounded-5 p-2 ms-0 mt-4 mt-md-0 ms-md-2'>
                Submit
                <img src='./Component 622 – 1.svg' className='ms-2' />
              </button>
            </Link>
          </Col>
          <Col></Col> */}
        </Row>
      </div>
    </Container>
  );
};
export default defaultconsultFee;
