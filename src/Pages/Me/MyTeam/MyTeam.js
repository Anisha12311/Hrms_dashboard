import React,{useState} from 'react'

import AttendanceTeam from './AttendanceTeam/AttendanceTeam';
import LeaveRequestTeam from './LeaveRequestTeam/LeaveRequestTeam';
import Ticket from './Ticket/Ticket'
import Payroll from './Payroll/Payroll';

export default function ReportOnboard() {
    
    const [navClicked, setNavClicked] = useState("Attendance");
    return (
    <div>
             <div className="navOptions1">
                  
                  <div className ={`option1 ${
                      navClicked === "Attendance"? "option1-active" : ""
                  }`}                  

                  onClick = {() => setNavClicked("Attendance")}>
                      <h3> Attendance</h3>
                      </div>
                  <div className = {`option1 ${
                      navClicked ===  "LeaveRequest" ? " option1-active" : "" }`}
                      onClick = {() => setNavClicked("LeaveRequest")}>
                      <h3>Leave Request</h3>
                      </div>
                   <div className = {`option1 ${
                      navClicked ===  "Ticket" ? " option1-active" : "" }`}
                      onClick = {() => setNavClicked("Ticket")}>
                      <h3> Tickets</h3> </div>
                      <div className = {`option1 ${
                      navClicked ===  "Payroll" ? " option1-active" : "" }`}
                      onClick = {() => setNavClicked("Payroll")}>
                      <h3> Payroll</h3> </div>
                
               </div>

               {navClicked === "Attendance" && <AttendanceTeam> </AttendanceTeam>}
               {navClicked === "LeaveRequest" && <LeaveRequestTeam></LeaveRequestTeam>}
               {navClicked === "Ticket" && <Ticket> </Ticket>}
               {navClicked === "Payroll" && <Payroll></Payroll>}
            </div>
         
           
    )
}
