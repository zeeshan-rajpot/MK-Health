

import Navbare from "../../../Compunents/Navbar"
import Footer from "../../../Compunents/Footer"
import HeroDisease from "./HeroDisease"
import SearchDiease from "./SearchDiease"
import OverviewText from "./OverviewText"
const Condition = () => {
  return (
    <>
      <Navbare
    activetab=''
    bgcolor='white'
    />
<HeroDisease/>
<SearchDiease/>
<OverviewText/>

<Footer/>
    
    </>
  )
}

export default Condition