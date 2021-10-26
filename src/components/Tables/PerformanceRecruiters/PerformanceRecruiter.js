import React,{useState} from "react";
import './PerformanceRecruiters.scss';
import oda from '../../../asserts/images/oda.png';
import Recruiters from "../../../Pages/Performance/Recrutiers/Recruiters";
import RecruiterDetails from "../../RecruiterDetails/RecruiterDetails";

export default function PerformanceRecrutiers() {
 
    const [recruiterDetails , setRecruiterDetails] = useState(false)
  return (
    <div>
      <div class="container_Perfromance">
        <table class="table table--shaded">
          <thead class="table__head">
            
          </thead>
          <tbody class="table__body">

            
            <tr className="spacer"></tr>
           
       <tr class="table__row" style = {{fontWeight: "500"}}>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        Recruiter Name
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
         ID
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        Credits
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        Total Select
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        Yet to Join 
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        Profile Tagged
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        Dropped
       </td>
       
       <td class="UserTable__name table__cell table__cell--no-wrap">
       Action
       </td>
      
      
     </tr>
   


     <tr className="spacer"></tr>
     <tr class="table__row">
       <td class=" UserTable__name table__cell table__cell--checkbox table__cell--no-wrap">
       <img src = {oda} alt = ""style = {{width : "40px", marginRight : "10px"}}/> Oda Dink
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        #JC-00150
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
         480/500
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
      185
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       75
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       125
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       75
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" style = {{color : "#2186F2", cursor : "pointer"}}>
      See Details
       </td>
      
      

     </tr>
   



     <tr className="spacer"></tr>
     <tr class="table__row">
     <td class=" UserTable__name table__cell table__cell--checkbox table__cell--no-wrap">
       <img src = {oda} alt = ""style = {{width : "40px", marginRight : "10px"}}/> Oda Dink
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        #JC-00150
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
         480/500
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
      185
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       75
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       125
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       75
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" style = {{color : "#2186F2", cursor : "pointer"}}>
      See Details
       </td>
      
     </tr>
   
   



     <tr className="spacer"></tr>
     <tr class="table__row">
     <td class=" UserTable__name table__cell table__cell--checkbox table__cell--no-wrap">
       <img src = {oda} alt = ""style = {{width : "40px", marginRight : "10px"}}/> Oda Dink
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        #JC-00150
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
         480/500
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
      185
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       75
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       125
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       75
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" style = {{color : "#2186F2", cursor : "pointer"}}>
      See Details
       </td>
      
     </tr>






     <tr className="spacer"></tr>
     <tr class="table__row">
     <td class=" UserTable__name table__cell table__cell--checkbox table__cell--no-wrap">
       <img src = {oda} alt = ""style = {{width : "40px", marginRight : "10px"}}/> Oda Dink
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        #JC-00150
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
         480/500
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
      185
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       75
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       125
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       75
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" style = {{color : "#2186F2", cursor : "pointer"}}>
      See Details
       </td>
      </tr>

   
   



     <tr className="spacer"></tr>
     <tr class="table__row">
     <td class=" UserTable__name table__cell table__cell--checkbox table__cell--no-wrap">
       <img src = {oda} alt = ""style = {{width : "40px", marginRight : "10px"}}/> Oda Dink
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        #JC-00150
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
         480/500
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
      185
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       75
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       125
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       75
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" style = {{color : "#2186F2", cursor : "pointer"}}>
      See Details
       </td>
      
      

     </tr>




     <tr className="spacer"></tr>
     <tr class="table__row">
     <td class=" UserTable__name table__cell table__cell--checkbox table__cell--no-wrap">
       <img src = {oda} alt = ""style = {{width : "40px", marginRight : "10px"}}/> Oda Dink
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        #JC-00150
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
         480/500
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
      185
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       75
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       125
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       75
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" style = {{color : "#2186F2", cursor : "pointer"}}
       onClick = {() => setRecruiterDetails(true)}>
      See Details
       </td>
      

     </tr>

   



     <tr className="spacer"></tr>
     <tr class="table__row">
     <td class=" UserTable__name table__cell table__cell--checkbox table__cell--no-wrap">
       <img src = {oda} alt = ""style = {{width : "40px", marginRight : "10px"}}/> Oda Dink
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        #JC-00150
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
         480/500
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
      185
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       75
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       125
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       75
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" style = {{color : "#2186F2", cursor : "pointer"}}>
      See Details
       </td>
      

     </tr>

   



     <tr className="spacer"></tr>
     <tr class="table__row">
     <td class=" UserTable__name table__cell table__cell--checkbox table__cell--no-wrap">
       <img src = {oda} alt = ""style = {{width : "40px", marginRight : "10px"}}/> Oda Dink
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        #JC-00150
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
         480/500
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
      185
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       75
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       125
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       75
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" style = {{color : "#2186F2", cursor : "pointer"}}>
      See Details
       </td>
      
      

     </tr>

     <tr className="spacer"></tr>
     <tr class="table__row">
     <td class=" UserTable__name table__cell table__cell--checkbox table__cell--no-wrap">
       <img src = {oda} alt = ""style = {{width : "40px", marginRight : "10px"}}/> Oda Dink
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        #JC-00150
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
         480/500
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
      185
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       75
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       125
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       75
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" style = {{color : "#2186F2", cursor : "pointer"}}>
      See Details
       </td>
      

     </tr>

     <tr className="spacer"></tr>
     <tr class="table__row">
     <td class=" UserTable__name table__cell table__cell--checkbox table__cell--no-wrap">
       <img src = {oda} alt = ""style = {{width : "40px", marginRight : "10px"}}/> Oda Dink
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        #JC-00150
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
         480/500
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
      185
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       75
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       125
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       75
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" style = {{color : "#2186F2", cursor : "pointer"}}>
      See Details
       </td>
      
      

     </tr>


     <tr className="spacer"></tr>
     <tr class="table__row">
     <td class=" UserTable__name table__cell table__cell--checkbox table__cell--no-wrap">
       <img src = {oda} alt = ""style = {{width : "40px", marginRight : "10px"}}/> Oda Dink
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        #JC-00150
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
         480/500
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
      185
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       75
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       125
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       75
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap" style = {{color : "#2186F2", cursor : "pointer"}}
       onClick = {() => setRecruiterDetails(true)}>
      See Details
       </td>
      

     </tr>
         
         {recruiterDetails && (
             <RecruiterDetails setRecruiterDetails={setRecruiterDetails}></RecruiterDetails>
         )} 
   
   </tbody>
 </table>

 <div className="table-footer">
         <div className="footer-left">
             Showing 10 from 160 data
         </div>
         <div className="footer-right">  

             <button className="btn btn-w btn-inactive">{`<< Previous`}</button>
             
             <button className="btn1  btn-inactive pages">1</button>
             <button className="btn1  btn-inactive pages">2</button>
             <button  className="btn1  btn-inactive pages">3</button>
          
             
             <button className="btn btn-w btn-inactive">{`Next >>`}</button>
         </div>


     </div>
</div>
</div>
  );
}
