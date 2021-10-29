import React,{useState} from 'react'
import AttendanceReport from './AttendanceReport/AttendanceReport';
import LeaveRequest from './LeaveRequest/LeaveRequest';
import LeaveStats from './LeaveStats/LeaveStats';

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
                      navClicked ===  "Leavestats" ? " option1-active" : "" }`}
                      onClick = {() => setNavClicked("Leavestats")}>
                      <h3> Leave Stats</h3> </div>
                
                
               </div>

               {navClicked === "Attendance" && <AttendanceReport> </AttendanceReport>}
               {navClicked === "LeaveRequest" && <LeaveRequest> </LeaveRequest>}
               {navClicked === "Leavestats" && <LeaveStats> </LeaveStats>}
            </div>
         
           
    )
}
