import React,{useState} from 'react'
import './Shortlist.scss'
import message from '../../../asserts/icons/message.png'
import email from '../../../asserts/icons/emial.png'

import Emailbulk from '../../../components/Emailbulk/Emailbulk';
import Shortlisted from './Shortlisted/ShortlistContent';
import SendMessage from '../../../components/SendMessage/SendMessage';
export default function Shortlist() {


  const [emailBulk, setEmailBulk] = useState(false);
  const [sendMessage, setSendMessage] = useState(false);
         
    const handleSort = () => {
        const dropdown = document.querySelector(".job-sort-batch-action");
        const batchArrow = document.querySelector(".job-sort-batch-arrow");
                   
        dropdown.classList.toggle("job-sort-batch-visible");
        batchArrow.classList.toggle("job-sort-batch-rotate");
      };
    return (
        <div>
            
          



            <div className="listings-bar-right-filter1">
              
            
       
              <button onClick={handleSort} className='btns btn-white'>
          <span className='job-sort-batch-action-rel'>
            <>
          
            <span>Batch Actions</span>
              <ul className='job-sort-batch-action'>
                <div className='job-sort-batch-action-square'>&nbsp;</div>
                
                <li>
           <img src = {message} alt = ""/>
                  <div onClick = {() => setSendMessage(true)}>Send Bulk Messages</div>
                </li>
            {sendMessage&&(
              <SendMessage setSendMessage = {setSendMessage}></SendMessage>
            )}
  
                <li>
           <img src = {email} alt = ""/>
               
                  <div onClick={()=>setEmailBulk(true)} >Send Bulk E-mails </div>
                  {emailBulk&&(
          <Emailbulk setEmailBulk={setEmailBulk}></Emailbulk>
      )}
                </li>
  
            
  
              </ul>
            </>
          </span>
  
          <svg
            width='16'
            className='job-sort-batch-arrow'
            height='12'
            viewBox='0 0 492 492'
            fill='#2186F2'>
            <path d='M484.13 124.99l-16.11-16.23a26.72 26.72 0 00-19.04-7.86c-7.2 0-13.96 2.79-19.03 7.86L246.1 292.6 62.06 108.55c-5.07-5.06-11.82-7.85-19.03-7.85s-13.97 2.79-19.04 7.85L7.87 124.68a26.94 26.94 0 000 38.06l219.14 219.93c5.06 5.06 11.81 8.63 19.08 8.63h.09c7.2 0 13.96-3.57 19.02-8.63l218.93-219.33A27.18 27.18 0 00492 144.1c0-7.2-2.8-14.06-7.87-19.12z'></path>
          </svg>
  
        </button>
       
          </div>
             <Shortlisted/>
        </div>
    )
}
