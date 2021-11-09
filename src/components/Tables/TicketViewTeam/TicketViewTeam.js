
import React, { useState } from "react";
import LeaveRequestActionSlip from "../LeaveRequestActionSlip/LeaveRequestActionSlip";




export default function TicketViewTeam() {
  const [action, setAction] = useState(false)
  const [PopUp, setPopUp] = useState(false)
  


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
              Requester mail
              </td>
              <td class="table__cell table__cell--no-wrap">
               Applied On
              </td>
              <td class="table__cell table__cell--no-wrap">
               Subject
              </td>
              <td class="table__cell table__cell--no-wrap">Priority </td>
              <td class="table__cell table__cell--remaino-wrapnder">
                Assigned To
              </td>
              <td class="table__cell table__cell--no-wrap">File Attached</td>
              <td class="table__cell table__cell--no-wrap">Status</td>
            
            </tr>
          </thead>
          
          <tbody class="table__body">

            {[...Array(10)].map((elementInArray, index) => {
                return (
                    <>
                     <tr className="spacer"></tr>
            <tr class="table__row">
            
            <td  class="UserTable__name table__cell table__cell--no-wrap">
                Abhishek
              </td>


              <td class="UserTable__name table__cell table__cell--no-wrap">
            recruiter@ats.in
              </td>
         
              <td class="UserTable__name table__cell table__cell--no-wrap">
                22 July, 2021
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
               Personal Grivances
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
                Medium
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
             ABC
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
              Application.pdf
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
              Approved
              </td>
            </tr>
          </>
                )
            } 
)}
                 </tbody>
        </table>

        
        <div className="table-footer">
                <div className="footer-left">
                    Showing 10 from 100 data
                </div>
                <div className="footer-right">  

                    <button className="btn btn-w btn-inactive">{`<< Previous`}</button>
                    
                    <button  className="btn btn-inactive pages">1</button>
                    <button  className="btn  btn-inactive pages">2</button>
                 
                    
                    <button className="btn btn-w btn-inactive">{`Next >>`}</button>
                </div>
            </div>
      </div>
    </div>
  );
}
