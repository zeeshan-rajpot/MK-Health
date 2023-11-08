import { useState, useRef, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

export const Otherdetail = () => {
  const OtherDetails = [
    { placeholder: 'MD', label: 'Preferred Suffix', type: 'text', key: 'Preferred Suffix' },
    { placeholder: 'MD', label: 'Degree', key: 'Degree' },
    { placeholder: 'UAMS', label: 'Residency', key: 'Residency' },
    { placeholder: 'FE/EM', label: 'Specialty', key: 'Specialty' },
  ];

  const [values, setValues] = useState(OtherDetails.reduce((acc, field) => {
    acc[field.key] = '';
    return acc;
  }, {}));

  const handleChange = (key, value) => {
    setValues(prevValues => ({
      ...prevValues,
      [key]: value
    }));
  };

  useEffect(() => {
    const formDataKeyValue = Object.entries(values).reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
    console.log(formDataKeyValue);
  }, [values]);


  return (
    <div>
      <Row className='shadow p-4 w-100'>
        <Col>
          {OtherDetails.map((input, index) => (
            <div
              key={index}
              className='m-auto mobw90 pt-3'
              style={{ width: '100%' }}
            >
              <p className='mb-1 ms-3 mt-3 text-muted'>{input.label}</p>
              <input
                type={input.type}
                className='shadow border-0 w-100 m-0 p-3 rounded-5 text-black'
                placeholder={input.placeholder}
                value={values[input.key]}
                onChange={e => handleChange(input.key, e.target.value)}
                style={{
                  '--placeholder-color': 'black',
                  'font-weight': 'normal',
                }}
              />
            </div>
          ))}
          <Col className='d-flex flex-column'>
            <label className='mb-1 ms-3 mt-3 text-muted'>Other Information</label>
            <textarea
              className='shadow border-0 w-100 m-0 p-3 rounded-5 text-black'
              placeholder='E.g: Interests Services provided'
              style={{ height: '20vh' }}
            />
          </Col>
        </Col>

        <Row className='my-5'>
          {/* <Col xs={6}>
            <button
              className='w-100 m-auto backbutton rounded-5 p-2 bg-transparent z-10'
              onClick={handleBack}
            >
              Back
            </button>
          </Col>
          <Col xs={6}>
            <button className='w-100 m-auto border-0 rounded-5 p-2 text-white button'>
              Next
            </button>
          </Col> */}
        </Row>
      </Row>
    </div>
  );
};

export default Otherdetail;
