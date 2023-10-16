import Navbare from "../../Compunents/Navbar"
import Footer from "../../Compunents/Footer"
import HeroProvider from "./HeroProvider"
import ProviderFeatures from "./ProviderFeatures"
import TelehealthServices from "./TelehealthServices"



const Provider = () => {
  return (
    <>
    <Navbare
    activetab='Provider'
    bgcolor='transparent'
    />
    <HeroProvider/>
    <TelehealthServices/>
    <ProviderFeatures/>
    <Footer/>
    
    </>
  )
}

export default Provider