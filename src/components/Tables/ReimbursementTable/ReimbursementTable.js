import React, {useState}  from "react";
import PaySlipTeam from "../../PaySlipTeam/PaySlipTeam";
import ReibursementSlip from "./ReimbursementSlip/ReibursementsSlip";




export default function Reimbursements() {
 
 const [showSlip, setShowSlip] = useState(false)
  return (
    <div>
      <div class="container">
        <table class="table table--shaded">
        <thead class="table__head1">
            <tr class="table__row">
            

              <td class="table__cell table__cell--no-wrap">
              Purpose
              </td>
              <td class="table__cell table__cell--no-wrap">
              Month
              </td>
            
                  
              <td class="table__cell table__cell--remaino-wrapnder">
                Received On
              </td>
              <td class="table__cell table__cell--no-wrap">Status</td>
              <td class="table__cell table__cell--no-wrap" >Amount</td>
              
            </tr>
          </thead>
       
      
      
    
   

     <tbody class="table__body">
     <tr className="spacer"></tr>
     <tr class="table__row">
      
      
       <td class="UserTable__name table__cell table__cell--no-wrap">
      Reimbursements
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       July
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
      1 Aug, 2021
       </td>
      
       <td class="UserTable__name table__cell table__cell--no-wrap">
       In Progress
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick = {()=> setShowSlip(true)}>
      Rs. 1,000/-
       </td>
      
     
      
      

     </tr>
   



     <tr className="spacer"></tr>
     <tr class="table__row">
     
      
     <td class="UserTable__name table__cell table__cell--no-wrap">
      Reimbursements
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       July
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
      1 Aug, 2021
       </td>
      
       <td class="UserTable__name table__cell table__cell--no-wrap">
       In Progress
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick = {()=> setShowSlip(true)}>
      Rs. 800/-
       </td>
     </tr>
   
   



     <tr className="spacer"></tr>
     <tr class="table__row">
     <td class="UserTable__name table__cell table__cell--no-wrap">
      Reimbursements
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       July
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
      1 Aug, 2021
       </td>
      
       <td class="UserTable__name table__cell table__cell--no-wrap">
       In Progress
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick = {()=> setShowSlip(true)}>
      Rs. 800/-
       </td>
      

     </tr>






     <tr className="spacer"></tr>
     <tr class="table__row">
     <td class="UserTable__name table__cell table__cell--no-wrap">
      Reimbursements
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       July
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
      1 Aug, 2021
       </td>
      
       <td class="UserTable__name table__cell table__cell--no-wrap">
       In Progress
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick = {()=> setShowSlip(true)}>
      Rs. 800/-
       </td>
     </tr>

   
   



     <tr className="spacer"></tr>
     <tr class="table__row">
     <td class="UserTable__name table__cell table__cell--no-wrap">
      Reimbursements
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       July
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
      1 Aug, 2021
       </td>
      
       <td class="UserTable__name table__cell table__cell--no-wrap">
       In Progress
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick = {()=> setShowSlip(true)}>
      Rs. 800/-
       </td>
      

     </tr>




     <tr className="spacer"></tr>
     <tr class="table__row">
     <td class="UserTable__name table__cell table__cell--no-wrap">
      Reimbursements
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       July
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
      1 Aug, 2021
       </td>
      
       <td class="UserTable__name table__cell table__cell--no-wrap">
       In Progress
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick = {()=> setShowSlip(true)}>
      Rs. 800/-
       </td>
      

     </tr>

   



     <tr className="spacer"></tr>
     <tr class="table__row">
     <td class="UserTable__name table__cell table__cell--no-wrap">
      Reimbursements
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       July
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
      1 Aug, 2021
       </td>
      
       <td class="UserTable__name table__cell table__cell--no-wrap">
       In Progress
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick = {()=> setShowSlip(true)}>
      Rs. 800/-
       </td>

     </tr>

   



     <tr className="spacer"></tr>
     <tr class="table__row">
     <td class="UserTable__name table__cell table__cell--no-wrap">
      Reimbursements
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       July
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
      1 Aug, 2021
       </td>
      
       <td class="UserTable__name table__cell table__cell--no-wrap">
       In Progress
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick = {()=> setShowSlip(true)}>
      Rs. 800/-
       </td>

     </tr>

     <tr className="spacer"></tr>
     <tr class="table__row">
     <td class="UserTable__name table__cell table__cell--no-wrap">
      Reimbursements
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       July
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
      1 Aug, 2021
       </td>
      
       <td class="UserTable__name table__cell table__cell--no-wrap">
       In Progress
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick = {()=> setShowSlip(true)}>
      Rs. 800/-
       </td>
      
     </tr>

     <tr className="spacer"></tr>
     <tr class="table__row">
     <td class="UserTable__name table__cell table__cell--no-wrap">
      Reimbursements
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       July
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
      1 Aug, 2021
       </td>
      
       <td class="UserTable__name table__cell table__cell--no-wrap">
       In Progress
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" onClick = {()=> setShowSlip(true)}>
      Rs. 800/-
       </td>
</tr>

     <tr className="spacer"></tr>
     <tr class="table__row">
     <td class="UserTable__name table__cell table__cell--no-wrap">
      Reimbursements
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       July
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
      1 Aug, 2021
       </td>
      
       <td class="UserTable__name table__cell table__cell--no-wrap">
       In Progress
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap"onClick = {()=> setShowSlip(true)} >
      Rs. 800/-
       </td>
      

     </tr>

   
   </tbody>
 </table>

 <div className="table-footer">
         <div className="footer-left">
             Showing 10 from 160 data
         </div>
         <div className="footer-right">  

             <button className="btn btn-w btn-inactive">{`<< Previous`}</button>
             
             <button className="btn  btn-inactive pages">1</button>
             <button className="btn  btn-inactive pages">2</button>
             <button  className="btn  btn-inactive pages">3</button>
          
             
             <button className="btn btn-w btn-inactive">{`Next >>`}</button>
         </div>

        
     </div>
    
</div>
{showSlip &&(
<ReibursementSlip setShowSlip={setShowSlip}></ReibursementSlip> )}
</div>
  );
}
