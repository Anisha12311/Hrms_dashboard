import React , {useState} from "react";
import AttendanceTeamSlip from "../../AttendanceTeamSlip/AttendanceTeamSlip";



export default function AttendanceTeamTable() {
 
  const [attendance , setAttendance] = useState(false)
  return (
    <div>
      <div class="container">
        <table class="table table--shaded">
        <thead class="table__head1">
            <tr class="table__row">
            <td class="table__cell table__cell--no-wrap">
               Name
              </td>

              <td class="table__cell table__cell--no-wrap">
               ID
              </td>
              <td class="table__cell table__cell--no-wrap">
               Status
              </td>
              <td class="table__cell table__cell--no-wrap">
                Arrival Time
              </td>
            
              <td class="table__cell table__cell--remaino-wrapnder">
                Active Time
              </td>
              <td class="table__cell table__cell--no-wrap">Time at work</td>
              <td class="table__cell table__cell--no-wrap">Productive Time</td>
             
            </tr>
          </thead>
       
      
      
    
   

     <tbody class="table__body">
     <tr className="spacer"></tr>
     <tr class="table__row">
       <td class=" UserTable__name table__cell table__cell--checkbox table__cell--no-wrap" onClick = {() => setAttendance(true)}>
        Abhishek
       </td>
      
       <td class="UserTable__name table__cell table__cell--no-wrap">
        #JT-00150
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        Online
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       10:00 AM
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       1 hr 17 min
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       1 hr 27 min
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       1 hr 13 min
       </td>
      
      
      
      

     </tr>
   



     <tr className="spacer"></tr>
     <tr class="table__row">
     <td class=" UserTable__name table__cell table__cell--checkbox table__cell--no-wrap">
        Abhishek
       </td>
      
       <td class="UserTable__name table__cell table__cell--no-wrap">
        #JT-00150
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        Online
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       10:00 AM
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       1 hr 17 min
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       1 hr 27 min
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       1 hr 13 min
       </td>
      

     </tr>
   
   



     <tr className="spacer"></tr>
     <tr class="table__row">
     <td class=" UserTable__name table__cell table__cell--checkbox table__cell--no-wrap">
        Abhishek
       </td>
      
       <td class="UserTable__name table__cell table__cell--no-wrap">
        #JT-00150
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        Online
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       10:00 AM
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       1 hr 17 min
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       1 hr 27 min
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       1 hr 13 min
       </td>
      

     </tr>






     <tr className="spacer"></tr>
     <tr class="table__row">
     <td class=" UserTable__name table__cell table__cell--checkbox table__cell--no-wrap">
        Abhishek
       </td>
      
       <td class="UserTable__name table__cell table__cell--no-wrap">
        #JT-00150
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        Online
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       10:00 AM
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       1 hr 17 min
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       1 hr 27 min
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       1 hr 13 min
       </td>
      
     </tr>

   
   



     <tr className="spacer"></tr>
     <tr class="table__row">
     <td class=" UserTable__name table__cell table__cell--checkbox table__cell--no-wrap">
        Abhishek
       </td>
      
       <td class="UserTable__name table__cell table__cell--no-wrap">
        #JT-00150
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        Online
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       10:00 AM
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       1 hr 17 min
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       1 hr 27 min
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       1 hr 13 min
       </td>
      

     </tr>




     <tr className="spacer"></tr>
     <tr class="table__row">
     <td class=" UserTable__name table__cell table__cell--checkbox table__cell--no-wrap">
        Abhishek
       </td>
      
       <td class="UserTable__name table__cell table__cell--no-wrap">
        #JT-00150
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        Online
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       10:00 AM
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       1 hr 17 min
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       1 hr 27 min
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       1 hr 13 min
       </td>
      
      

     </tr>

   



     <tr className="spacer"></tr>
     <tr class="table__row">
     <td class=" UserTable__name table__cell table__cell--checkbox table__cell--no-wrap">
        Abhishek
       </td>
      
       <td class="UserTable__name table__cell table__cell--no-wrap">
        #JT-00150
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        Online
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       10:00 AM
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       1 hr 17 min
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       1 hr 27 min
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       1 hr 13 min
       </td>
      

     </tr>

   



     <tr className="spacer"></tr>
     <tr class="table__row">
     <td class=" UserTable__name table__cell table__cell--checkbox table__cell--no-wrap">
        Abhishek
       </td>
      
       <td class="UserTable__name table__cell table__cell--no-wrap">
        #JT-00150
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        Online
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       10:00 AM
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       1 hr 17 min
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       1 hr 27 min
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       1 hr 13 min
       </td>
      

     </tr>

     <tr className="spacer"></tr>
     <tr class="table__row">
     <td class=" UserTable__name table__cell table__cell--checkbox table__cell--no-wrap">
        Abhishek
       </td>
      
       <td class="UserTable__name table__cell table__cell--no-wrap">
        #JT-00150
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        Online
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       10:00 AM
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       1 hr 17 min
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       1 hr 27 min
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       1 hr 13 min
       </td>
      
     </tr>

     <tr className="spacer"></tr>
     <tr class="table__row">
     <td class=" UserTable__name table__cell table__cell--checkbox table__cell--no-wrap">
        Abhishek
       </td>
      
       <td class="UserTable__name table__cell table__cell--no-wrap">
        #JT-00150
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        Online
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       10:00 AM
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       1 hr 17 min
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       1 hr 27 min
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       1 hr 13 min
       </td>
      
     </tr>


     <tr className="spacer"></tr>
     <tr class="table__row">
     <td class=" UserTable__name table__cell table__cell--checkbox table__cell--no-wrap">
        Abhishek
       </td>
      
       <td class="UserTable__name table__cell table__cell--no-wrap">
        #JT-00150
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
        Online
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       10:00 AM
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       1 hr 17 min
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       1 hr 27 min
       </td>
       <td class="UserTable__name table__cell table__cell--no-wrap">
       1 hr 13 min
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
{attendance&& (
      <AttendanceTeamSlip setAttendance={setAttendance}></AttendanceTeamSlip>
    )}
</div>
  );
}
