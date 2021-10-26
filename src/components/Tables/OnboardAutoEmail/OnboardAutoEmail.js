import React, {useState} from 'react'
import './OnboardAutoEmail.scss'
import arrow1 from '../../../asserts/icons/arrow1.png'
import ReportAddNewEmail from '../../ReportAddNewEmail/ReportAddNewEmail'

export default function OnboardAutoEmail() {
    const [email , setEmail] = useState("Daily")
    const [addEmail, setAddEmail] = useState(false)
    
    const Topping = [
      {
        emailadd: "sarun@jobsterritory.com"
        
      },
      {
        emailadd: "rajesh@jobsterritory.com"
       
      },
      {
        emailadd: "rajpal@jobsterritory.com"
      
      },]

    return (
        <div>
            <form>
        <div className = "auto_contain">
          <h2>Set Regularity</h2>
          <div className = "custom_input_box1" onClick = {()=>{
                const batchArrow = document.querySelector(".custom_arrow_subject1");
                batchArrow.classList.toggle("custom_rotate1");
                const dropdown = document.querySelector(".custom_arrow_action1");
                dropdown.classList.toggle("custom_visible_subject1");
              }}> 
                  <div style={{paddingLeft:"2rem",paddingTop:"2rem",fontSize : "18px"}}>{email}</div>
              <div style={{marginTop:"0.5rem",marginRight:"1rem"}}>
              <span className="custom_list1">
                  <>
             
                    <ul className="custom_arrow_action1">
                      <div className="custom_arrow_square1">&nbsp;</div>
                  <option value={email} onClick={()=>setEmail("Daily ")}>Daily </option>
                  <option value={email} onClick={()=>setEmail("Weekly")}>Weekly </option>
                  <option value={email} onClick={()=>setEmail("Monthly")}>Monthly </option>
                 
                    </ul>
                  </>
                </span>
      <downarrow  />
      <img src = {arrow1} alt = ""className= "custom_arrow_subject1" />
            </div>
            </div>
        </div>
           <div className = "custom_add_email">
           <h2>Select Email to get Reports: </h2>
           </div>
          
           <div className="btn-add_email"onClick = {()=> setAddEmail(true)}>+ Add Email</div>
           {addEmail&&(
             <ReportAddNewEmail setAddEmail={ setAddEmail}></ReportAddNewEmail>
           )}
        
      <div className = "email_format" > 
      <ul className="email_format_list" style = {{marginTop :"150px"}}>
        {Topping.map(({ emailadd }, index) => {
          return (
            <li key={index}  >
              <div className="email_format_listitems" >
                <div className="left-section">
                  <input
                  style = {{marginLeft :"300px"}}
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={emailadd}
                    value={emailadd}
                  />
                  <label htmlFor={`custom-checkbox-${index}`} style = {{marginLeft :"350px"}}>{emailadd}</label>
                </div>
              
              </div>
            </li>
          );
        })}
      
      </ul>
      </div>
           <div>
                <div className = "btn-generate_email">Save</div>
              </div> 
     
        </form>
        </div>
    )
}
