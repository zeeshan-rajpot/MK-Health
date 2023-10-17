import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ConfirmRequestModal = () => {
  const fields = [
    { label: "NAME:", type: "text", placeholder: "Shahid Care" },

    { label: "Date of birth:", type: "date" },
    { label: "Age:", type: "number", placeholder: "22" },
    { label: "GENDER:", type: "text", placeholder: "Male" },
    { label: "PHONE:", type: "number", placeholder: "123 456 789" },
    { label: "ADDRESS:", type: "text", placeholder: "California, Usa, Texas, CA, 45223" },
    { label: "Request:", type: "number", placeholder: "12" },
    { label: "Lab location:", type: "text", placeholder: "135 Barclay Cir, Ste 103, Rocheste, r Hills" }
  ];

  return (
    <>
      <Row>
        <Col className="text-center py-2" style={{ backgroundColor: '#FAB915' }}>
          <p className="mb-0 text-light"><b>Confirm Request</b></p>
        </Col>
      </Row>
      <Row style={{ backgroundColor: '#fff' }}>
        <Col md={12}>
          <div className="text-center py-2">
            <p className="mb-0" style={{ color: '#747E93', fontSize: '12px' }}>
              Please review carefully, Errors cause delays.
            </p>
          </div>
        </Col>

        <Col md={12} className="my-5">
          <div className="w-75 m-auto ">
            {fields.map((field, index) => (
              <div className="d-flex align-items-center justify-content-between w-100 m-auto py-2 border-bottom mb-2" key={index}>
                <p className="mb-0 text-nowrap " style={{ fontSize: '14px' }}><b>{field.label}</b></p>
                <input
                  type={field.type}
                  className=""
                  placeholder={field.placeholder}
                />
              </div>
            ))}
          </div>
          <div className="w-75 m-auto">

              <div className="d-flex align-items-center justify-content-between w-100 m-auto py-1 mb-2" >
                <p className="mb-0 text-nowrap " style={{ fontSize: '14px' ,color:'#FAB915' }}><b>Total Fees (if approved) :</b></p>
                <p className="mb-0 text-nowrap " style={{ fontSize: '14px', color:'#FAB915'}}><b>990$</b></p>
              </div>
 
          </div>


        </Col>

<Col className="text-center pb-5">

<button className=" py-2 px-5 me-3 shadow rounded-5 mt-3 bg-light" style={{border:'1px solid  #FAB915'}}>               
    <span className='' style={{color:'#FAB915'}}>Skip</span>
   
    
</button>

<Link to='/Payment'>

<button className="btnn py-1 px-4 border-0 shadow rounded-5 mt-3">               
    <span className='me-4'>Submit</span>
    <img  src="/Component 638 – 1.svg" width="30" height="30"/>
    
</button>
</Link>
</Col>

      </Row>
    </>
  );
}

export default ConfirmRequestModal;
