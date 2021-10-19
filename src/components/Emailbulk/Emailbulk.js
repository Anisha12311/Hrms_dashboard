import React from 'react'
import './Emailbulk.scss'
import close from '../../asserts/icons/close.png'
import downarrow from '../../asserts/icons/downarrow.png'
import { AiOutlineClose } from 'react-icons/ai';
import text from '../../asserts/icons/text.png'
import line from '../../asserts/icons/line.png'
import smile from '../../asserts/icons/smile.png'
import bold from '../../asserts/icons/bold.png'
import cross from '../../asserts/icons/cross.png'
import file from '../../asserts/icons/file.png'
import itlia from '../../asserts/icons/itlia.png'
import send from '../../asserts/icons/send.png'


export default function Emailbulk({setEmailBulk}) {
    return (
        <div className = "popup_container">
        <div className = "contain_email_box">
            <div className = "contain_email_box1">
               <h3> Bulk E-mail</h3>
               <img src = {close} alt = ""/>
            </div>
            <div className = "Popup_email">
            Choose Requirement
            
        </div>
        <div className = "popup_input_box">
            <div className = "bulk_box">Bulk</div>
            <img src = {downarrow} alt = ""/>
        </div>
       <div className = "To_contain"> To</div>
       <div className = "popup_input_box1">
            <div className = "bulk_box">haresh@jobsmarketai.com</div>
            <AiOutlineClose className = "close_contain"/>
            <div className = "bulk_box1">haresh@jobsmarketai.com</div>
            <AiOutlineClose className = "close_contain1"/>
            <div className = "bulk_box2">haresh@jobsmarketai.com</div>
            <AiOutlineClose className = "close_contain2"/>

        </div>

     <div className  = "subject_contain">Subject</div>
     <div className = "popup_input_box2">
         <div className = "happy_contain">
             Happy Diwali
         </div>
     </div>

     <div className = "mail_contain">Mail Content</div>

     <div className = "text_email">
       <img src = {text} alt = "" style = {{marginLeft : "-800px"}}/>
       <img src = {line} alt = ""/>
       <img src = {bold} alt = ""/>
       <img src = {itlia} alt = ""/>
       <img src = {cross} alt = ""/>
       <img src = {smile} alt = ""/>
       <img src = {file} alt = ""/>
     
       <div className = "email_container">Dear Team,</div>
       <div className = "email_dash">Jobs markets wishes you and your dear
        & near ones a very happy and prosperous Diwali</div>
       <div className = "email_dash1">Please note that on occasion of Diwali office work will remain closed on</div> 
       <div className = "email_dash_date">5th and 6th November 2021</div>

     </div>
     <div className = "template_box"></div>
      <div className = "new_template">Save This As New Template</div>
      <div className = "btns_cancel">Cancel</div>
      <div className = "btns_preview">Preview</div>
      <div className = "btns_send">
        <img src = {send} alt = ""/>
       SEND
      </div>
     <div className = "text_line"></div>
             {/* <div  className="popup_cancel btn-cancel btn-active"
        
                  onClick={() => setEmailBulk(false)} > cancel
               
             </div>
             <div className = "popup_Add">
                 <div className = "btn_popup_add"> Add </div>
            </div>
             */}
        
           </div>
        </div>
    )
}
