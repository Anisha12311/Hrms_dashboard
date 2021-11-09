import React,{useState} from 'react'

import PaySlips1 from './PaySlips/PaySlips1';
import Reimbursement from './Reimbursement/Reimbursement';
import ReleasedAmount from './ReleasedAmount/ReleasedAmount';



export default function Payroll() {
    
    const [navClicked, setNavClicked] = useState("PaySlips");
    return (
    <div>
             <div className="navOptions1">
                  
                  <div className ={`option1 ${
                      navClicked === "PaySlips"? "option1-active" : ""
                  }`}                  

                  onClick = {() => setNavClicked("PaySlips")}>
                      <h3> Pay Slips</h3>
                      </div>
                  <div className = {`option1 ${
                      navClicked ===  "ReleasedAmount" ? " option1-active" : "" }`}
                      onClick = {() => setNavClicked("ReleasedAmount")}>
                      <h3>Released Amount</h3>
                      </div>
                   <div className = {`option1 ${
                      navClicked ===  "Reimbursement" ? " option1-active" : "" }`}
                      onClick = {() => setNavClicked("Reimbursement")}>
                      <h3> Reimbursements</h3> </div>
                      
                
               </div>

               {navClicked === "PaySlips" && <PaySlips1> </PaySlips1>}
               {navClicked === "ReleasedAmount" && <ReleasedAmount></ReleasedAmount>}
               {navClicked === "Reimbursement" && <Reimbursement> </Reimbursement>}
          
            </div>
         
           
    )
}
