import React,{useState} from 'react'
import ReportAttendence from './ReportAttendence/ReportAttendence'
import ReportOnboard from './ReportOnboard/ReportOnboard'
import ReportLeave from './ReportLeave/ReportLeave'
import './Reports.scss'
export default function Reports() {
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
               navClicked === "Attendence"? "active" : "inactive"
           }`}
           onClick = {() => setNavClicked("Attendence")}
           >Attendence</button>
           
           <button className = {`btn btn-w btn-${
               navClicked === "Leave"? "active" : "inactive"
           }`}
           onClick = {() => setNavClicked("Leave")}
           >Leave</button>
    </div>

    {navClicked === "Onboard" && (
     <ReportOnboard></ReportOnboard>
    
   )}
     {navClicked === "Attendence" && (
       <ReportAttendence></ReportAttendence>
   )}
   {navClicked === "Leave" && (
       <ReportLeave></ReportLeave>
   )}
  

        </div>
    )
}
