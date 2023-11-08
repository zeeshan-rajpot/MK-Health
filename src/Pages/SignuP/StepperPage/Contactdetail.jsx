import { useState, useRef, useEffect } from 'react';

import { Row, Col } from 'react-bootstrap';
export const Contactdetail = () => {
  const CreateAccount = [
    { placeholder: 'Sarah', label: 'First Name', type: 'text' , key:'firstname'},
    { placeholder: 'Johnson', label: 'Last Name' ,key:'LastName'},
    { placeholder: '000 - 0000 - 0000', label: 'Phone' ,key:'Phone' },
    { placeholder: 'Texas', label: 'Medical or Professional school' ,key:'Medicalschool' },
    {
      placeholder: '123 West Walnut Street #1234',
      label: 'Practice Address (line1)',
      key:'Practice Address'
    },
    { placeholder: 'England, Dewsbury', label: 'Practice Address (line2)' , key:'Address'},
    { placeholder: 'Rogers', label: 'City' , key:'City'},
    { placeholder: 'Arkansas', label: 'State' ,key:'State' },
    { placeholder: 'Arkansas', label: 'Zip Code' ,key:'ZipCode' },
    { placeholder: '123@mail.com', label: 'Email' , key:'Email'},
  ];

  const [values, setValues] = useState(CreateAccount.reduce((acc, field) => {
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
    console.log(values);
  }, [values]);

  return (
    <div>
    <Row className='shadow'>
      <Col className='py-5'>
        {CreateAccount.map((input, index) => (
          <div
            key={index}
            className=' m-auto mobw90 pt-3'
            style={{ width: '80%' }}
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
      </Col>
      <Row className='my-5 text-center'></Row>
    </Row>
  </div>
  );
};
export default Contactdetail;
