import React, {useState} from 'react'
import './Performance.scss'
import Recruiters from './Recrutiers/Recruiters'
export default function Performance() {

    const [navClicked, setNavClicked] = useState("Onboard")
    return (

        <div className="dashboard-container">
                 <div className = "Top_btns">
           <button className = {`btn btn-w btn-${
               navClicked === "Onboard" ? "active" : "inactive"
           }`}
           onClick = {() => setNavClicked("Onboard")}
           >Recruiters</button>
           </div>
           {navClicked === "Onboard" && (
     <Recruiters></Recruiters>
    
   )}
        </div>
    )
}
