

import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TagsInput from 'react-tagsinput';

const RxRefilltext = () => {
  const Common = [
    'Acne',
    'Asthma',
    'Birth Control',
    'Cellulitis',
    'Cold Sores',
    'Erectile Dysfunction',
    'Pink Eye',
    'Scabies',
    'STD Treatment',
    'Toenail Fungus',
    'Vitiligo',
    'Urinary Tract Infection (UTI)',
    'Yeast Infection',
    'Weight Loss',
  ];
  const Other = [
    'Acid Reflux',
    'Allergies',
    'Bacterial Vaginosis',
    'Chlamydia',
    'Diabetes ',
    'Gonorrhea',
    'H. pylori Treatment',
    'High Blood Pressure',
    'High Cholesterol',
    'Lyme Treatment',
    'MRSA',
    'Melasma',
    'PrEP',
    'Rosacea',
    'Overactive Bladder',
  ];

  return (
    <>
      <Container>
        <Row className=' m-auto mt-5 py-5 mobw100' style={{ width: '75%' }}>
          <Col className='px-5 text-start shadow'>
            <h5 className='mt-5'>
              <b>Choose Desired Condition/Disease</b>
            </h5>
            <p className='text-secondary mt-4'>
              Medications that cannot be refilled via an online prescription
              through a service like MK Health included controlled medications
              like narcotics or anxiety medications, gabapentin, or any other
              medication that a medical provider determines would not be
              appropriate to prescribe through an online evaluation.
            </p>

            <Row className='m-auto mt-4'>
              <p>Common Conditions</p>
              {Common.map((Common, index) => (
                <Col key={index} xl={4} xs={6}>
                  <Link to={`/ConditionForm/${Common}`}>
                    {' '}
                    <p className='medicationp'>{Common}</p>
                  </Link>
                </Col>
              ))}
            </Row>

            <Row className='m-auto my-4 '>
              <p>Other Conditions</p>
              {Other.map((Other, index) => (
                <Col key={index} xl={4} xs={6} className='medicationp'>
                  <Link to={`/ConditionForm/${Common}`}>
                    <p className='medicationp'>{Other}</p>
                  </Link>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default RxRefilltext;