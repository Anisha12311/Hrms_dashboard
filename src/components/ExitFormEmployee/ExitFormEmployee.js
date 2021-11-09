import React, {useState} from 'react'
import close from '../../asserts/icons/close.png'
import close1 from '../../asserts/icons/close1.png'
import ExitForm from '../ExitForm/ExitForm'
import './ExitFormEmployee.scss'





export default function ExitFormEmployee({setExitForm}) {

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
                    <div className = "letter_offer">Exit Form</div>
                    <img src = {close} alt = ""/>
                </div>
                <div className  = "select_letter">Select Exit Form</div>
                <div className = "select_offer1"> Exit Letter-1</div>
                <div className = "select_offer2"> Exit Letter-2</div>
                <div className = "select_offer3"> 
                <img src = {close1} alt = ""/>
                <div className = "select_offers3">Exit Letter-3</div>
                </div>
             
  
              <ExitForm></ExitForm>
       
        
              
            
               
                <div className = "Add_bts5" onClick = {()=> setExitForm(false)}>Cancel</div>
                
                <div className = "Add_bts6" >Continue</div>
                </div>
                </div>
            
      
    )
}
