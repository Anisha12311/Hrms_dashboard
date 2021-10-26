import React,{useState} from 'react'
import OnboardAutoEmail from '../../../components/Tables/OnboardAutoEmail/OnboardAutoEmail';
import Attendance from './Attendance/Attendance';
import OnboardCustomizedReprot from '../../../components/Tables/OnboardCustomizedReport/OnboardCustomizedReprot';
import AttendanceCustomReport from '../../../components/Tables/AttendanceCustomReport/AttendanceCustomReport';



export default function ReportAttendence() {
    
    const [navClicked, setNavClicked] = useState("Candidatedetails");
    return (
    <div>
             <div className="navOptions">
                  
                  <div className ={`option ${
                      navClicked === "Candidatedetails"? "option-active" : ""
                  }`}                  

                  onClick = {() => setNavClicked("Candidatedetails")}>
                      <h3>Quick Report</h3>
                      </div>
                  <div className = {`option ${
                      navClicked ===  "QuickReport" ? " option-active" : "" }`}
                      onClick = {() => setNavClicked("QuickReport")}>
                      <h3>Customized Report</h3>
                      </div>
                  <div className ={`option ${
                      navClicked === "AutoEmail" ? "option-active" : ""}`}
                      onClick  ={() => setNavClicked("AutoEmail")}>
                      <h3>Auto Emailing</h3> </div>
                </div>
                {navClicked === "Candidatedetails" && <Attendance> </Attendance>}
                {navClicked === "QuickReport" && <AttendanceCustomReport> </AttendanceCustomReport>}
                {navClicked === "AutoEmail" && <OnboardAutoEmail> </OnboardAutoEmail>}
            </div>
         
           
    )
}
