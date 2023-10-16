
import Navbare from "../../../Compunents/Navbar"
import Footer from "../../../Compunents/Footer"
import HeroLab from "./HeroLab"
import DesiredLab from "./DesiredLab"
import HowitWorks from "./HowitWorks"
const LabTest = () => {
  return (
    <>
     <Navbare
    activetab=''
    bgcolor='white'
    />
    <HeroLab/>
    <DesiredLab/>
    <HowitWorks/>
    
            <Footer/>
    </>
  )
}

export default LabTest