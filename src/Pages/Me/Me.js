import React,{useState} from 'react'


import Attendance from './Attendance/Attendance'
import Payroll from './Payroll/Payroll'
import Tickets from './Tickets/Tickets'
import Feedback from './Feedback/Feedback'
import MyTeam from './MyTeam/MyTeam'


export default function Me() {
    const [navClicked,setNavClicked] = useState("Attendance")
    return (
        <div className = "dashboard-container">
                
            <div className = "Top_btns">
           <button className = {`btn btn-w btn-${
               navClicked === "Attendance" ? "active" : "inactive"
           }`}
           onClick = {() => setNavClicked("Attendance")}
           >Attendance</button>

        <button className = {`btn btn-w btn-${
               navClicked === "Payroll"? "active" : "inactive"
           }`}
           onClick = {() => setNavClicked("Payroll")}
           >Payroll</button>
           
           <button className = {`btn btn-w btn-${
               navClicked === "Tickets"? "active" : "inactive"
           }`}
           onClick = {() => setNavClicked("Tickets")}
           >Tickets</button>

        <button className = {`btn btn-w btn-${
               navClicked === "Feedback"? "active" : "inactive"
           }`}
           onClick = {() => setNavClicked("Feedback")}
           >Feedback</button>

        <button className = {`btn btn-w btn-${
               navClicked === "MyTeam"? "active" : "inactive"
           }`}
           onClick = {() => setNavClicked("MyTeam")}
           >MyTeam</button>
    </div>

    {navClicked === "Attendance" && (
     <Attendance></Attendance>
    
   )}
     {navClicked === "Payroll" && (
       <Payroll></Payroll>
   )}
   {navClicked === "Tickets" && (
       <Tickets></Tickets>
   )}
   {navClicked === "Feedback" && (
       <Feedback></Feedback>
   )}
   {navClicked === "MyTeam" && (
       <MyTeam></MyTeam>
   )}

        </div>
    )
}
