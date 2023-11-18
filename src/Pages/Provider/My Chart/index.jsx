import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../../Compunents/Footer';
import Navbare from '../../../Compunents/Navbar';
import { Link } from 'react-router-dom';

const ProviderChart = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [iconSrc1, setIconSrc1] = useState('./galaAdd0.svg');

  const handleToggle1 = () => {
    setIsOpen1(!isOpen1);

    // Change the icon source based on the current state
    const newIconSrc1 = isOpen1 ? './galaAdd0.svg' : './gala_add.svg';
    setIconSrc1(newIconSrc1);
  };

  const [isOpen2, setIsOpen2] = useState(false);
  const [iconSrc2, setIconSrc2] = useState('./galaAdd0.svg');

  const handleToggle2 = () => {
    setIsOpen2(!isOpen2);

    // Change the icon source based on the current state
    const newIconSrc2 = isOpen2 ? './galaAdd0.svg' : './gala_add.svg';
    setIconSrc2(newIconSrc2);
  };
  return (
    <>
      <Navbare />

      <Container>
        <Row>
          <Col className='mt-5'>
            <div className='text-center'>
              <h3 className='m-auto mt-5' style={{ color: '#FAB915' }}>
                <b> My Chart </b>
              </h3>
            </div>
            <div
              className=' m-auto mt-4 shadow py-5 mobw100 rounded-5 '
              style={{ width: '80%' }}
            >
              <div className=' m-auto' style={{ width: '80%' }}>
                <Row>
                  <Col md={6}>
                  <Link to='/OrdermySelf'>
                    <button
                      className='w-100 p-3 rounded-5 border-0 text-white'
                      style={{ backgroundColor: '#FAB915' }}
                    >
                      <img
                        src='./icomoon-free_lab.svg'
                        alt='down arrow'
                        className='me-4'
                      />
                      Order For Myself
                    </button>
                    </Link>
                  </Col>
                  <Col md={6}>
                    <button
                      className='w-100 p-3 rounded-5 border-0 text-white'
                      style={{ backgroundColor: '#FAB915' }}
                    >
                      <img
                        src='./chartsendMessage.svg'
                        alt='down arrow'
                        className='me-4'
                      />
                    Message To Colleagues
                    </button>
                  </Col>
                </Row>
              </div>
            </div>
            <br />
            <br />

            <div
              className=' m-auto pt-5 mobw100 rounded-0 '
              style={{ width: '80%' }}
            >
              <p>Previous Order History</p>
            </div>
            <div
              className=' m-auto shadow  py-5 mobw100 rounded-0 rounded-5'
              style={{ width: '80%' }}
            >
              <div
                className='m-auto d-flex justify-content-between align-items-center pb-4'
                style={{ borderBottom: '1px solid #FAB915', width: '90%' }}
              >
                <div className='d-flex'>
                  {' '}
                  <img
                    src={iconSrc1}
                    alt='open'
                    className='me-4'
                    role='button'
                    onClick={handleToggle1}
                  />
                  <p className='my-0'>
                    Covid-19
                    <br />
                    Lab Test
                  </p>
                </div>
                <div>
                  <p>September 30, 2023</p>
                </div>
              </div>
              {isOpen1 && (
                <div
                  className=' m-auto  py-3 mobw100 rounded-0 rounded-5'
                  style={{ width: '80%' }}
                >
                  <div className='m-auto  ' style={{ width: '90%' }}>
                    <div className='text-center'>
                      <button
                        className='rounded-5 text-white p-2 border-0 w-25'
                        style={{ backgroundColor: '#FAB915' }}
                      >
                        <img src='./pepicons-pencil_file.svg' alt='' />
                        View Lab Result
                      </button>
                    </div>

                    <div
                      className='m-auto d-flex flex-column  justify-content-start align-items-start '
                      style={{ width: '90%' }}
                    >
                      <p className='mt-3 my-0' style={{ color: '#FAB915' }}>
                        Your Note
                      </p>
                      <p className='my-0 '>Screw this test</p>
                      <p className='mt-3 my-0' style={{ color: '#FAB915' }}>
                        Lab Test Ordered
                      </p>
                      <p className='my-0 '>
                        COVID-19 lgG Antibody, Semi-Quantitative
                      </p>
                      <p className='mt-3 my-0' style={{ color: '#FAB915' }}>
                        Total Fee
                      </p>
                      <p className='my-0 '> $0.00</p>
                    </div>
                  </div>
                </div>
              )}
              <div
                className='mt-5 m-auto d-flex justify-content-between align-items-center pb-4'
                style={{ width: '90%' }}
              >
                <div className='d-flex'>
                  {' '}
                  <img
                    src={iconSrc2}
                    alt=''
                    className='me-4'
                    role='button'
                    onClick={handleToggle2}
                  />
                  <p className='my-0'>
                    Covid-19
                    <br />
                    Lab Test
                  </p>
                </div>
                <div>
                  <p>September 30, 2023</p>
                </div>
              </div>
              {isOpen2 && (
                <div
                  className=' m-auto  py-5 mobw100 rounded-0 rounded-5'
                  style={{ width: '80%' }}
                >
                  <div className='m-auto  pb-4' style={{ width: '90%' }}>
                    <div className='text-center'>
                      <button
                        className='rounded-5 text-white p-2 border-0 w-25'
                        style={{ backgroundColor: '#FAB915' }}
                      >
                        <img src='./pepicons-pencil_file.svg' alt='' />
                        View Lab Result
                      </button>
                    </div>

                    <div
                      className='m-auto d-flex flex-column  justify-content-start align-items-start pb-4'
                      style={{ width: '90%' }}
                    >
                      <p className='mt-3 my-0' style={{ color: '#FAB915' }}>
                        Your Note
                      </p>
                      <p className='my-0 '>Screw this test</p>
                      <p className='mt-3 my-0' style={{ color: '#FAB915' }}>
                        Lab Test Ordered
                      </p>
                      <p className='my-0 '>
                        COVID-19 lgG Antibody, Semi-Quantitative
                      </p>
                      <p className='mt-3 my-0' style={{ color: '#FAB915' }}>
                        Total Fee
                      </p>
                      <p className='my-0 '> $0.00</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <br />
            <br />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ProviderChart;
