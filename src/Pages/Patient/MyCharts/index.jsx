import Footer from "../../../Compunents/Footer"
import Navbare from "../../../Compunents/Navbar"
import HeroCharts from "./HeroCharts"
import RequestCharts from "./RequestCharts"


const MyCharts = () => {
  return (
    <>
    <Navbare
        activetab='Patient'
        bgcolor='transparent'
    />
    <HeroCharts/>
    <RequestCharts/>
    <Footer/>
    
    
    </>
  )
}

export default MyCharts