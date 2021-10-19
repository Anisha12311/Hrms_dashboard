import React  from 'react'

import './SendMessage.scss'

import send from '../../asserts/icons/send.png'
export default function SendMessage() {


    return (
        <div className = "popup_container_sms">
         <div className = "sms_head">SMS</div>
         <input className = "sms_search" />
         <div className = "sms_text">
             <div className = "sms_abhi">Abhishek</div>
             <div className = "sms_time">2 minutes ago</div>
             <div className = "sms_team">Dear Team,</div>
             <div className = "sms_head_detail">
                 Request you all to login without fall as we are going to calculate your leaves from it for
               
                 payroll process. We could notice 13 of them are no leave today, can you pls confirm about your absence</div>
                 <div className = "text_archive" >From Archived</div>
          </div>
         

          <div className = "sms_text1">
             <div className = "sms_abhi">Abhishek</div>
             <div className = "sms_time">2 minutes ago</div>
             <div className = "sms_team">Dear Team,</div>
             <div className = "sms_head_detail">
                 Request you all to login without fall as we are going to calculate your leaves from it for
               
                 payroll process. We could notice 13 of them are no leave today, can you pls confirm about your absence</div>
                 <div className = "text_archive" >From Archived</div>
          </div>

          <div className = "sms_text2">
             <div className = "sms_abhi">Abhishek</div>
             <div className = "sms_time">2 minutes ago</div>
             <div className = "sms_team">Dear Team,</div>
             <div className = "sms_head_detail">
                 Request you all to login without fall as we are going to calculate your leaves from it for
               
                 payroll process. We could notice 13 of them are no leave today, can you pls confirm about your absence</div>
                 <div className = "text_archive" >From Archived</div>
          </div>

          <div className = "sms_text3">
             <div className = "sms_abhi">Abhishek</div>
             <div className = "sms_time">2 minutes ago</div>
             <div className = "sms_team">Dear Team,</div>
             <div className = "sms_head_detail">
                 Request you all to login without fall as we are going to calculate your leaves from it for
               
                 payroll process. We could notice 13 of them are no leave today, can you pls confirm about your absence.</div>
                 <div className = "text_archive" >From Archived</div>
          </div>


         <div className = "sms_chat">
             <div className = "sms_head_contain">
                 <div className = "sms_ats">ATS</div>
                 <div className = "sms_bulk">Bulk Message(Archived)</div>
             </div>
             <div className = "sms_today">Today</div>
             <div className = "sms_join">
             <div className = "sms_team1">Dear Team,</div>
             <div className = "sms_head_detail1">
                 Request you all to login without fall as we are going to calculate your leaves from it for
               
                 payroll process. We could notice 13 of them are no leave today, can you pls confirm about your absence.</div>
             </div>
             <div className = "sms_chat_date">2.32 pm</div>

             <div className = "sms_join1">
             <div className = "sms_team1">Dear Team,</div>
             <div className = "sms_head_detail1">
                 Request you all to login without fall as we are going to calculate your leaves from it for
               
                 payroll process. We could notice 13 of them are no leave today, can you pls confirm about your absence.</div>
             </div>
             <div className = "sms_chat_date1">2.32 pm</div>

             <div className = "sms_join2">
             <div className = "sms_team1">Dear Team,</div>
             <div className = "sms_head_detail1">
                 Request you all to login without fall as we are going to calculate your leaves from it for
               
                 payroll process. We could notice 13 of them are no leave today, can you pls confirm about your absence.</div>
             </div>
             <div className = "sms_chat_date2">2.32 pm</div>

             <div className = "sms_typing">
                 <input className = "sms_type_search" placeholder = "Type a message here">
                       
                 </input>
                 <img src = {send} alt = ""/>
             </div>
         </div>
        </div>
    )
}
