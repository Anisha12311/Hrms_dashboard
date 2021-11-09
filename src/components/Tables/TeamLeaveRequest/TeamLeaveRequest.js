
import React, { useState } from "react";
import LeaveRequestActionSlip from "../LeaveRequestActionSlip/LeaveRequestActionSlip";




export default function TeamLeaveRequest() {
  const [action, setAction] = useState(false)
  const [PopUp, setPopUp] = useState(false)
  
if (PopUp === true) {
  return (
    <div onDoubleClick={()=>setPopUp(false)} className='email-popup-containerml1'>
      <div className='email-popupml1'>
        <div className='myDivAttendence'>
<div className="leftleave">

<div className="leftContent">
  <div className="timeatworkleave">
    Time At Work
  </div>
  <div className="detailsleave">
    <div className="nameleave">
Name:

    <div className="Ashuleave">
Ashu
</div>
    </div>
    <div className="idleave">
      ID:#JT0667
    </div>
   
    
  </div>
  <div className="gridBoxleave">
    <div className="sampleCardleave">
   <p>Total leave</p>
   <br />
<p>  5 Days</p>
<br />
<p>Last Leave: 22 July, 2021</p>

    </div>
    <div className="sampleCardleave">
   <p>Last leave</p>
   <br />
<p>  3 Days</p>
<br />
<p>Leave: 22 July - 25 July, 2021</p>

    </div>
    <div className="sampleCardleave">
   <p>Remaining leave</p>
   <br />
<p>  15 Days</p>
<br />
<p>Last Update: 22 July, 2021</p>

    </div>
    <div className="sampleCardleave">
   <p>LOP</p>
   <br />
<p>  5 Days</p>
<br />
<p>Last LOP: 22 July, 2021</p>

    </div>
    <div className="sampleCardleave">
<div style={{paddingBottom:'2rem',}}>
<h3 style={{textDecoration:'underline'}}>Applied leave</h3>
</div>
   <p>Total days</p>
   <br />
<p>  5 Days</p>
<br />
<p style={{fontSize:'1rem'}}> From: 22 July, 2021  To: 25 July, 2021</p>

    </div>
    <div className="sampleCardleave">
   <p>Applied On</p>
   <br />
   <p>22 July, 2021</p>

<br />


    </div>
    <div className="sampleCardleave">
   <p>Applied For</p>
   <br />
<p>  Personal Leave</p>
<br />


    </div>
 
   

    
  </div>
  
</div>

</div>

        </div>
<br />
        <>
     
        <div style={{visibility:'hidden'}} className="bottom">
      <div  className="decline">
     <p > Approve</p>
      
      </div>
      <div className="approve">Decline</div>
      </div>
         
       
        </>
      </div>
           
      

    </div>
  );
}
   
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
               Applied On
              </td>
              <td class="table__cell table__cell--no-wrap">
                Comments
              </td>
              <td class="table__cell table__cell--no-wrap">Leave Taken</td>
              <td class="table__cell table__cell--remaino-wrapnder">
                Applied Days
              </td>
              <td class="table__cell table__cell--no-wrap">LOP</td>
              <td class="table__cell table__cell--no-wrap">Status</td>
              <td class="table__cell table__cell--no-wrap">Action</td>
            </tr>
          </thead>
          
          <tbody class="table__body">

            {[...Array(10)].map((elementInArray, index) => {
                return (
                    <>
                     <tr className="spacer"></tr>
            <tr class="table__row">
            
            <td  class="UserTable__name table__cell table__cell--no-wrap">
                Avinash
              </td>


              <td class="UserTable__name table__cell table__cell--no-wrap">
            #J4521FFD
              </td>
         
              <td class="UserTable__name table__cell table__cell--no-wrap">
                22 July, 2021
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
                Lorem Ipsum
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
                5 Days
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
              3 Days
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap">
              4 Days
              </td>
              <td class="UserTable__name table__cell table__cell--no-wrap"
              style={{color:"red"}}
             
              >
               Pending
              </td>

              <td class="UserTable__name table__cell table__cell--no-wrap"
            
              >
               <button className="btn btn-w btn-active" style={{borderRadius:"1rem",fontSize:"2rem"}} onClick={()=>setAction(true)}>Take Action</button>
              </td>
            </tr>
          </>
                )
            } 
)}
                 </tbody>
        </table>

        {
  action&&(
    <LeaveRequestActionSlip setAction={setAction} ></LeaveRequestActionSlip>
  )
}
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
