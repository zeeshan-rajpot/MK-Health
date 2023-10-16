import  { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import TagsInput from 'react-tagsinput';

const SearchDiease = () => {
    const [tags, setTags] = useState([]);

    const handleChange = (tags) => {
      setTags(tags);
    };
    const handleTagRemove = (tag) => {
      setTags(tags.filter(t => t !== tag));
    };
      
    return (
      <>
        <Container>
          <Row className=" m-auto mt-5 py-5 mobw100" style={{width:'75%'}}>
            <Col className=" text-center shadow">
              <h5 className="mt-5">
                <b>Choose Desired Condition/Disease</b>
              </h5>
              <p
                className=" text-secondary m-auto mobw100"
                style={{ fontSize: "14px" , width:'75%'}}
              >
                Medications that cannot be refilled via an online prescription through a service like MK Health included controlled medications like narcotics or anxiety medications, gabapentin, or any other medication that a medical provider determines would not be appropriate to prescribe through an online evaluation.

              </p>
  
  
  
              <div>
  
  
  
              <div>
    <div className="input-containerr shadow mobw100 rounded-5 mb-5 mt-4 " style={{width:'50%'}}>
      <TagsInput
        value={tags}
        onChange={handleChange}
        inputProps={{ placeholder: 'Search for test' }}
      />
     <Link to='/ConditionForm'> <button type="button" className="image-button rounded-5"></button></Link>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {tags.map((tag, index) => (
        <div
          key={index}
          style={{
            border: '1px solid #ccc',
            padding: '5px 10px',
            borderRadius: '15px',
            margin: '5px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <span>{tag}</span>
          <button
            type="button"
            style={{ border: 'none', background: 'transparent', marginLeft: '5px' }}
            onClick={() => handleTagRemove(tag)}
          >
            <span role="img" aria-label="Remove Tag">❌</span>
          </button>
        </div>
      ))}
    </div>
  </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
      </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  };
export default SearchDiease