import  { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import TagsInput from 'react-tagsinput';
 // import the styles

const DesiredLab = () => {
    const [tags, setTags] = useState([]);

  const handleChange = (tags) => {
    setTags(tags);
  };
  const handleTagRemove = (tag) => {
    setTags(tags.filter(t => t !== tag));
  };
    
  return (
    <>
      <Container id='requestLab'>
        <Row className=" m-auto mt-5 mobw100" style={{width:'75%'}} >
          <Col className=" text-center shadow">
            <h5 className="mt-5">
              <b>Choose Desired Lab Tests</b>
            </h5>
            <p
              className="mobw100 text-secondary m-auto"
              style={{ fontSize: "14px" , width:'75%' }}
            >
              After you finish selecting tests, the total fees due will be
              displayed before you submit this lab order. At this time, the
              tests listed are the only tests available through Push Health and
              stat processing is not available. If you have questions or would
              like us to add specific tests, please contact us at
              questions@pushhealth.com.
            </p>
{/* 
            <div className="input-containerr shadow w-50 rounded-5 my-4">
              <input
               
                name="fruits"
                // placeHolder="enter fruits"
                type="text"
                placeholder="Search for test"
                className="input-field rounded-5 "
              />
              <button
                type="button"
                className="image-button rounded-5 "
              ></button>
            </div> */}


            <div>



            <div>
  <div className="input-containerr shadow mobw100 rounded-5 my-4" style={{width:'50%'}} >
    <TagsInput
      value={tags}
      onChange={handleChange}
      inputProps={{ placeholder: 'Search for test' }}
    />
    <Link to='/LabRequest'>
    <button type="button" className="image-button rounded-5"></button>
    </Link>
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

export default DesiredLab;
