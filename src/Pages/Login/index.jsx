
import { Col, Container, Row } from "react-bootstrap"
import Navbare from "../../Compunents/Navbar"
import Form from "./Form"
const Login = () => {
  return (
    <>

    <div className=" overflow-x-hidden ">
       <Navbare
    activetab=''
    bgcolor='transparent'
    />

        <Form/>

</div>
    
    
    {/* <Footer/> */}
    </>
  )
}

export default Login