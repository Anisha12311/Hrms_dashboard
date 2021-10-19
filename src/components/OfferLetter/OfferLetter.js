import React, {useState} from 'react'
import close from '../../asserts/icons/close.png'
import close1 from '../../asserts/icons/close1.png'
import './OfferLetter.scss'
import '../../Pages/Employee/Archieved/Archieved.scss'
import AddMoreField from '../AddMoreField/AddMoreField'
import EmailLetter from '../EmailLetter/EmailLetter'



export default function OfferLetter() {

    const [addField, setAddField] = useState()
    const [emailLetter, setEmailLetter] = useState()
    const handleSort = () => {
        const dropdown = document.querySelector(".job-sort-batch-action");
        const batchArrow = document.querySelector(".job-sort-batch-arrow");
    
        dropdown.classList.toggle("job-sort-batch-visible");
        batchArrow.classList.toggle("job-sort-batch-rotate");
      };

    return (
        <div className = "OfferLetter_popup">
            <div className = "OfferLetter_box">
                <div className = "letter_contain">
                    <div className = "letter_offer">Offer Letter</div>
                    <img src = {close} alt = ""/>
                </div>
                <div className  = "select_letter">Select Offer Letter</div>
                <div className = "select_offer1"> Offer Letter-1</div>
                <div className = "select_offer2"> Offer Letter-2</div>
                <div className = "select_offer3"> 
                <img src = {close1} alt = ""/>
                <div className = "select_offers3">Offer Letter-3</div>
                </div>
               
                <div className="listings-bar-right-filter">
              
            
       
              <button onClick={handleSort} className='btns btn-white'>
          <span className='job-sort-batch-action-rel'>
            <>
          
            <span>Batch Actions</span>
              <ul className='job-sort-batch-action'>
                <div className='job-sort-batch-action-square'>&nbsp;</div>
                
                <li>
           
                  <span>Send Bulk Messages</span>
                </li>
            
  
                <li>
          
               
                  <span>Send Bulk E-mails</span>
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
               
                <div className = "candidate_name">
                 <div >
                 <div className = "letter_candidate">Candidate Name</div>
                <div className = "candidiate_asterisk">*</div>
                <img src = {close1} alt = ""/>
                <input placeholder = "Kalpana Bakshi"/>
                </div>
                <div>
                <div className = "letter_candidate">Date of Letter</div>
                <div className = "candidiate_asterisk1">*</div>
                <img src = {close1} alt = ""/>
                <input placeholder = "July 26,2021"/>
                </div>
               </div>

               <div className = "candidate_name">
                 <div>
                 <div className = "letter_candidate">Candidate Designation</div>  
                <div className = "candidiate_asterisk2">*</div>
                <img src = {close1} alt = ""/>
                <input placeholder = "Marketing Head"/>
                </div>
                <div>
                <div className = "letter_candidate">Date of joining</div>
                <div className = "candidiate_asterisk3">*</div>
                <img src = {close1} alt = ""/>
                <input placeholder = "August 2,2021"/>
                </div>
               </div>


               <div className = "candidate_name">
                 <div >
                 <div className = "letter_candidate">Employment Type</div>
                <div className = "candidiate_asterisk4">*</div>
                <img src = {close1} alt = ""/>
                <input placeholder = "Full Time"/>
               
                </div>
                <div>
                <div className = "letter_candidate">Employment Period</div>
                
                <img src = {close1} alt = ""/>
                <input placeholder = "1 Year"/>
               
                </div>
               </div>

               <div className = "full_check"/>
                <div className = "letter_full">With an opportunity of full-time based on performance</div>
                <img src = {close1} alt = "" style = {{marginLeft : "1150px", marginTop : "-30px",width : "60px"}}/>

                <div className = "candidate_name1">
                 <div>
                
                 <div className = "letter_candidate">Notice Period
                 <div className = "candidiate_asterisk5">*</div>
                 <img src = {close1} alt = ""/>
                
                 </div>
               
               
                <input placeholder = "2 months"/>
                </div>
                </div>
                <div className = "create_bts">
                <div className = "Add_bts" onClick = {()=> setAddField(true)} >+ Add More Fields</div>
                {addField&&(
                     <AddMoreField setAddField = {setAddField}></AddMoreField>
                )}
                <div className = "Add_bts1">Cancel</div>
                <div className = "Add_bts2">Preview</div>
                <div className = "Add_bts3" onClick = {() => setEmailLetter(true)}>Save</div>
                {emailLetter&&(
                    <EmailLetter setEmailLetter = {setEmailLetter}></EmailLetter>
                )}
                </div>
            </div>
        </div>
    )
}
