import React from 'react'
import './ReimbursementSlip.scss'

export default function ReibursementSlip({setShowSlip}) {
    return (
        <div className = " popup_container" onClick = {() =>setShowSlip(false)}>
               <div className='email-popup-containermt2'>
      <div className='email-popupmt3'>
    <div className="leaveContent">
      <div className="leaveHead">
        Reimbursed Amount
      </div>
      <div className="leaveTable">
        <table>
          <tr>
            <td>Earnings</td>
           
            <td>Amount</td>
          </tr>
          <tr>
            <td>
          <div className="tabCnt">
         <div>Basic</div><br />
         <div className="test"> Recharge</div><br />
         <div className="test">Fuel</div><br />
         <div className="test">Phone Allowance</div><br />
         <div>   </div>
          </div>
            </td>
          
            <td>
              <div className="tabCnt">
              
               <div className="test"> xxxxxx</div><br />
               <div className="test"> xxxxxx</div><br />
               <div className="test"> xxxxxx</div><br />
               <div className="test"> xxxxxx</div><br />
              </div>
            </td>
           

          
          </tr>
          <tr>
            <td>Total Leave</td>
            <td>5 Days</td>
          
          </tr>
        
        </table>
        <div className = "Received_total"> Total Received: Rs. 1,000/- </div>
        <div className = "Received_total"> In Words: One Thousand Only.</div>
      </div>
    </div>

        </div>
    </div>
        </div>
    )
}
