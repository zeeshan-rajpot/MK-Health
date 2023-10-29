import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ConditionPayModal = () => {
  
  // Array of form fields
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
      {/* Header */}
      <Row>
        <Col className="text-center py-2" style={{ backgroundColor: '#FAB915' }}>
          <p className="mb-0 text-light"><b>Confirm Request</b></p>
        </Col>
      </Row>

      {/* Info Message */}
      <Row style={{ backgroundColor: '#fff' }}>
        <Col md={12}>
          <div className="text-center py-2">
            <p className="mb-0" style={{ color: '#747E93', fontSize: '12px' }}>
              Please review carefully, Errors cause delays.
            </p>
          </div>
        </Col>

        {/* Form Fields */}
        <Col md={12} className="my-2">
          <div className="mobw100 m-auto " style={{width:'75%'}}>
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
          <div className=" m-auto mobw100" style={{width:'75%'}}>
            <div className="d-flex align-items-center justify-content-between w-100 m-auto py-1 mb-2" >
              <p className="mb-0 text-nowrap " style={{ fontSize: '14px' ,color:'#FAB915' }}><b>Total Fees (if approved) :</b></p>
              <p className="mb-0 text-nowrap " style={{ fontSize: '14px', color:'#FAB915'}}><b>990$</b></p>
            </div>
          </div>
        </Col>
      </Row>

      {/* Condition/Disease Fee Section */}
      <Row style={{  backgroundColor: '#fff' }}>
<div className="shadow">

</div>
        {/* Condition 1 */}
        <div className="py-3  mobw100 m-auto " style={{ width:'75%', backgroundColor: '#fff' }}>
          <div className="mobw100 m-auto " style={{ width:'90%', backgroundColor: '#fff' }}>
            <p><b>Condition/Disease Fee</b></p>
          </div>

          <div className="d-flex align-items-center  justify-content-between  shadow   m-auto py-2 px-2 mobw100 rounded-5 " style={{width:'90%'}}>
            <p className="mb-0 " style={{color:'#FAB915'}}> Condition 1 = Allergy</p>
            <p className="mb-0" style={{color:'#FAB915'}}>$45 (Fixed)</p>
          </div>

          <p className="mobw100 m-auto " style={{fontSize:'10px' , width:'80%' ,color:'#747E93'}}>The Fee is Pre-set and therefore cannot be changed.</p>
        </div>

        {/* Condition 2 */}
        <div className="py-3  mobw100 m-auto " style={{ width:'75%', backgroundColor: '#fff' }}>
          <div className="d-flex align-items-center  justify-content-between  shadow   m-auto py-2 px-2 mobw100 rounded-5 " style={{width:'90%'}}>
            <p className="mb-0 " style={{color:'#FAB915'}}> Condition 2 = Asthma </p>
            <p className="mb-0" style={{color:'#FAB915'}}>$45 (Fixed)</p>
          </div>
          <p className="mobw100 m-auto " style={{fontSize:'10px' , width:'80%' ,color:'#747E93'}}>The Fee is Pre-set and therefore cannot be changed.</p>
        </div>






        <div className="py-3  mobw100 m-auto " style={{ width:'75%', backgroundColor: '#fff' }}>
  <div className="mobw100 m-auto " style={{ width:'90%', backgroundColor: '#fff' }}>
    <p><b>Select Medications & Months Supply:</b></p>
  </div>

  <div className="d-flex align-items-center  justify-content-between  shadow   m-auto py-2 px-2 mobw100 rounded-5 " style={{width:'90%'}}>
   

  <select name="cars" id="cars" className="border-0 w-100">
  <option value="volvo">Medications No.</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>




  </div>

</div>

{/* Condition 2 */}
<div className="py-3  mobw100 m-auto " style={{ width:'75%', backgroundColor: '#fff' }}>
  <div className="d-flex align-items-center  justify-content-between  shadow   m-auto py-2 px-2 mobw100 rounded-5 " style={{width:'90%'}}>
  <select name="cars" id="cars" className="border-0 w-100">
  <option value="volvo">No. of Months (Monthly Supply)</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>

  </div>
  
</div>
      </Row>
      
      

<Row style={{ backgroundColor: '#fff' }}>
    <div style={{width:'80%' ,margin:'auto'}}>
    <Col md={12} className="d-flex align-items-center  justify-content-between border-bottom pb-3 mobw100 m-auto " style={{width:'80%'}}>
    <p className="mb-0" style={{color:'#252424'}}><b>Sub Total</b></p>
    <p className="mb-0" style={{color:'#747E93'}}><b>$45</b></p>
    </Col>
    <Col md={12} className="d-flex align-items-center  justify-content-between border-bottom pb-3 mobw100 m-auto " style={{width:'80%'}}>
    <p className="mb-0" style={{color:'#252424'}}>Additonal Medication Fee</p>
    <p className="mb-0" style={{color:'#747E93'}}>$45</p>
    </Col>
    <Col md={12} className="d-flex align-items-center  justify-content-between border-bottom pb-3 mobw100 m-auto " style={{width:'80%'}}>
    <p className="mb-0" style={{color:'#252424'}}>Additonal Monthly Supply Fee</p>
    <p className="mb-0" style={{color:'#747E93'}}>$45</p>
    </Col>
    <Col md={12} className="d-flex align-items-center  justify-content-between  pb-3 mobw100 m-auto " style={{width:'80%'}}>
    <p className="mb-0" style={{color:'#FAB915'}}><b>Total Fees :</b> </p>
    <p className="mb-0" style={{color:'#FAB915'}}><b>$245</b></p>
    </Col>
    </div>
   
</Row>




      
      {/* Buttons */}
      <Row style={{ backgroundColor: '#fff' }}>
        <Col className="text-center pb-5">

          {/* Skip Button */}
          <button className=" py-2 px-5 me-3 shadow rounded-5 mt-3 bg-light" style={{border:'1px solid  #FAB915'}}>               
              <span className='' style={{color:'#FAB915'}}>Skip</span>
          </button>

          {/* Submit Button */}
          <Link to='/Payment'>
            <button className="btnn py-1 px-4 border-0 shadow rounded-5 mt-3">               
                <span className='me-4'>Submit</span>
                <img  src="/Component 638 – 1.svg" width="30" height="30"/>
            </button>
          </Link>

        </Col>
      </Row>

    </>
  )
}

export default ConditionPayModal;
