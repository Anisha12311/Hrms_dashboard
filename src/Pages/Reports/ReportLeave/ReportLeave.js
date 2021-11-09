import React,{useState} from 'react'
import OnboardAutoEmail from '../../../components/Tables/OnboardAutoEmail/OnboardAutoEmail';
import Leave from './Leave/Leave';

import LeaveCustomReport from '../../../components/Tables/LeaveCustomReport/LeaveCustomReport';

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
                {navClicked === "Candidatedetails" && <Leave> </Leave>}
                {navClicked === "QuickReport" && <LeaveCustomReport> </LeaveCustomReport>}
                {navClicked === "AutoEmail" && <OnboardAutoEmail> </OnboardAutoEmail>}
            </div>
         
           
    )
}
