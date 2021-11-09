import React from 'react'
import './AttendanceTableslip.scss'
export default function AttendanceTableslip() {
    return (
        <div className = " popup_container">
               <div className='email-popup-containermt2'>
      <div className='email-popupmt2'>
    <div className="leaveContent">
      <div className="leaveHead">
        Total Leave: 5 Days
      </div>
      <div className="leaveTable">
        <table>
          <tr>
            <td>Date</td>
            <td>No. Of days</td>
            <td>Comment</td>
          </tr>
          <tr>
            <td>
          <div className="tabCnt">
         <div>   1 July, 2021</div><br />
         <div>   29 May, 2021</div><br />
         <div>   2 April, 2021</div>
          </div>
            </td>
          
            <td>
              <div className="tabCnt">
               <div className="test"> 1</div><br />
               <div className="test"> 2</div><br />
              <div className="test">  3</div>
              </div>
            </td>
            <td>
              <div className="tabCnt">
               <div className="test"> LOP</div><br />
               <div className="test"> Sick Leave</div><br />
              <div className="test">  Personal Leave</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>Total Leave</td>
            <td>5 Days</td>
            <td></td>
          </tr>
          <tr>
            <td>Re. Leave</td>
            <td>2 Days</td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>

        </div>
    </div>
        </div>
    )
}
