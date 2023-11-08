import Footer from "../../../Compunents/Footer"
import Navbare from "../../../Compunents/Navbar"
import HeroMedication from "./HeroMedication"
import Overview from "./Overview"


const Medication = () => {
  return (
    <>
    <Navbare activetab='' bgcolor='white' />
      <HeroMedication />
      <Overview/>

      <Footer />
    
    
    </>
  )
}

export default Medication