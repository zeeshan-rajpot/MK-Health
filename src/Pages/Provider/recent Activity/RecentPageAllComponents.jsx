import React from 'react';
import { Row, Col } from 'react-bootstrap';

export const RecentPageAllComponents = () => {
  return (
    <div>
        <Col xl={9} xs={12} className=' ms-4'>
          <Row className='p-0 p-md-4 pt-md-0 pt-3'>
            <Row className='shadow'>
              <Col xl={3} className='text-center mt-4'>
                <img src='./RecentActivity.svg' alt='img' width='50' />
              </Col>
              <Col xl={6}>
                {' '}
                <p className='mt-4' style={{ color: '#FAB915' }}>
                  September 30,2022 - Lab Test
                </p>
                <p className='my-0' style={{ fontSize: '10.1px' }}>
                  Rx Request: Pending
                </p>
                <p className='my-0' style={{ fontSize: '10.1px' }}>
                  {' '}
                  Payment of your $25.00 Professional fee has been
                </p>
                <p className='my-0 mb-4' style={{ fontSize: '10.1px' }}>
                  authorized. Tap to review it
                </p>
              </Col>
              <Col className='mt-4'>
                <div
                  className='text-center w-100 rounded-3 ms-3'
                  style={{ backgroundColor: '#FDEEEE' }}
                >
                  <p className='fw-bold fs-6' style={{ color: '#EB5757' }}>
                    7/13/23
                  </p>
                </div>
              </Col>
            </Row>
          </Row>
        </Col>
        <Col xl={9} xs={12} className=' ms-4'>
          <Row className='p-0 p-md-4 mt-md-0 mt-3'>
            <Row className='shadow'>
              <Col xl={3} className='text-center mt-4'>
                <img src='./Chat.svg' alt='img' width='50' />
              </Col>
              <Col xl={6}>
                {' '}
                <p className='mt-4' style={{ color: '#FAB915' }}>
                  September 30,2022 - Lab Test
                </p>
                <p className='my-0' style={{ fontSize: '10.1px' }}>
                  Rx Request: Pending
                </p>
                <p className='my-0' style={{ fontSize: '10.1px' }}>
                  {' '}
                  Payment of your $25.00 Professional fee has been
                </p>
                <p className='my-0 mb-4' style={{ fontSize: '10.1px' }}>
                  authorized. Tap to review it
                </p>
              </Col>
              <Col className='mt-4'>
                <div
                  className='text-center w-100 ms-3 rounded-3 '
                  style={{ backgroundColor: '#EAF7EB' }}
                >
                  <p className='fw-bold fs-6' style={{ color: '#74C778' }}>
                    7/13/23
                  </p>
                </div>
              </Col>
            </Row>
          </Row>
        </Col>
        <Col xl={9} xs={12} className=' ms-4'>
          <Row className='p-0 p-md-4 mt-md-0 mt-3'>
            <Row className='shadow'>
              <Col xl={3} className='text-center mt-4'>
                <img src='./RecentActivity.svg' alt='img' width='50' />
              </Col>
              <Col xl={6}>
                {' '}
                <p className='mt-4' style={{ color: '#FAB915' }}>
                  September 30,2022 - Lab Test
                </p>
                <p className='my-0' style={{ fontSize: '10.1px' }}>
                  Rx Request: Pending
                </p>
                <p className='my-0' style={{ fontSize: '10.1px' }}>
                  {' '}
                  Payment of your $25.00 Professional fee has been
                </p>
                <p className='my-0 mb-4' style={{ fontSize: '10.1px' }}>
                  authorized. Tap to review it
                </p>
              </Col>
              <Col className='mt-4'>
                <div
                  className='text-center w-100 ms-3 rounded-3 '
                  style={{ backgroundColor: '#FDEEEE' }}
                >
                  <p className='fw-bold fs-6' style={{ color: '#EB5757' }}>
                    7/13/23
                  </p>
                </div>
              </Col>
            </Row>
          </Row>
        </Col>
    </div>
  );
};
export default RecentPageAllComponents;
