import Footer from "../../Compunents/Footer"
import Navbare from "../../Compunents/Navbar"
import ChooseUs from "./ChooseUs"
import HeroSection from "./HeroSection"
import MedicalProviderHome from "./MedicalProviderHome"

const Home = () => {
  return (
    <>
    <Navbare
    activetab='Home'
    bgcolor='transparent'
    />
    <HeroSection/>
    <MedicalProviderHome/>
    <ChooseUs/>
    <Footer/>
    
    </>
  )
}

export default Home