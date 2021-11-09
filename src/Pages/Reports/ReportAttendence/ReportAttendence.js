import React,{useState} from 'react'
import OnboardAutoEmail from '../../../components/Tables/OnboardAutoEmail/OnboardAutoEmail';
import Attendance from './Attendance/Attendance';
import OnboardCustomizedReprot from '../../../components/Tables/OnboardCustomizedReport/OnboardCustomizedReprot';
import AttendanceCustomReport from '../../../components/Tables/AttendanceCustomReport/AttendanceCustomReport';



export default function ReportAttendence() {
    
    const [navClicked, setNavClicked] = useState("Candidatedetails");
    return (
    <div>
             <div className="navOptions1">
                  
                  <div className ={`option1 ${
                      navClicked === "Candidatedetails"? "option1-active" : ""
                  }`}                  

                  onClick = {() => setNavClicked("Candidatedetails")}>
                      <h3>Quick Report</h3>
                      </div>
                  <div className = {`option1 ${
                      navClicked ===  "QuickReport" ? " option1-active" : "" }`}
                      onClick = {() => setNavClicked("QuickReport")}>
                      <h3>Customized Report</h3>
                      </div>
                  <div className ={`option1 ${
                      navClicked === "AutoEmail" ? "option1-active" : ""}`}
                      onClick  ={() => setNavClicked("AutoEmail")}>
                      <h3>Auto Emailing</h3> </div>
                </div>
                {navClicked === "Candidatedetails" && <Attendance> </Attendance>}
                {navClicked === "QuickReport" && <AttendanceCustomReport> </AttendanceCustomReport>}
                {navClicked === "AutoEmail" && <OnboardAutoEmail> </OnboardAutoEmail>}
            </div>
         
           
    )
}
