
import Navbare from "../../../Compunents/Navbar"
import Footer from "../../../Compunents/Footer"
import HeroPrescription from "./HeroPrescription"
import Overview from "./Overview"


const Prescription = () => {
  return (
    <>
     <Navbare
    activetab=''
    bgcolor='white'
    />
  <HeroPrescription/>
  <Overview/>
    
            <Footer/>
    
    
    </>
  )
}

export default Prescription