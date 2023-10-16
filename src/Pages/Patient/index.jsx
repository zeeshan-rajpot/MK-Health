
import Navbare from "../../Compunents/Navbar"
import Footer from "../../Compunents/Footer"
import HeroPaitent from "./HeroPaitent"
import PaitentTelehealthServices from "./PaitentTelehealthServices"
import PaitentFeatures from "./PaitentFeatures"
const Patient = () => {
  return (
    <>
     <Navbare
    activetab='Patient'
    bgcolor='transparent'
    />
    <HeroPaitent/>
    <PaitentTelehealthServices/>
    <PaitentFeatures/>
        <Footer/>
    
    </>
  )
}

export default Patient