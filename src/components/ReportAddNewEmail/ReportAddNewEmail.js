import React from 'react'
import './ReportAddNewEmail.scss'
import close1 from '../../asserts/icons/close.png'
import { AiOutlineCloseCircle } from 'react-icons/ai'
export default function ReportAddNewEmail({setAddEmail}) {

    return (
        <div className = "popup_container">
        <div className = "contain_email_box">
            <div className = "contain_email_box1">
               <h3> Add New Email ID</h3>
               <img src = {close1} alt = ""/>
            </div>
            <div className = "Popup_email">
            Enter Email ID
            <input type = "text"/>
        </div>
       
             <div  className="popup_cancel btn-cancel btn-active"
        
                  onClick={() => setAddEmail(false)} > cancel
               
             </div>
             <div className = "popup_Add">
                 <div className = "btn_popup_add"> ADD </div>
            </div>
          
           </div>
        </div>
    )
}
