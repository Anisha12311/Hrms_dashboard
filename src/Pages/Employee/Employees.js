import React,{useState} from 'react'
import Archieved from './Archieved/Archieved'
import Onboard from './Onboard/Onboard'
import Shortlist from './Shortlist/Shortlist'
import './Employees.scss'
export default function Employees() {

    const [navClicked,setNavClicked] = useState("Onboard")
    return (
        <div className = "dashboard-container">
            <div className = "Top_btns">
           <button className = {`btn btn-w btn-${
               navClicked === "Onboard" ? "active" : "inactive"
           }`}
           onClick = {() => setNavClicked("Onboard")}
           >Onboard</button>

        <button className = {`btn btn-w btn-${
               navClicked === "Shortlist"? "active" : "inactive"
           }`}
           onClick = {() => setNavClicked("Shortlist")}
           >Shortlist</button>
           
           <button className = {`btn btn-w btn-${
               navClicked === "Archieved"? "active" : "inactive"
           }`}
           onClick = {() => setNavClicked("Archieved")}
           >Archived</button>
    </div>

    {navClicked === "Onboard" && (
     <Onboard></Onboard>
    
   )}

   {navClicked === "Shortlist" && (
       <Shortlist></Shortlist>
   )}
   {navClicked === "Archieved" && (
       <Archieved></Archieved>
   )}

        </div>
    )
}
