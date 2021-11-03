import React, { useState } from "react";
import "./EmailTemplate.scss";
import Cross from "./../../asserts/icons/close.svg";


const EmailTemplate = ({
  setChatPopupOpen,

  jobSuccess,
  addNewJob,
}) => {
  const [nextClicked, setNextClicked] = useState(false);
  const [createClicked, setCreateClicked] = useState(false);
  const createGroup =()=>{
    setCreateClicked(true)
    setNextClicked(false)
  }
   return (
    <div className="email-template-container">
   
        <div className="email-template">
          <div className="email-template-top">
            <div className="email-template-title">Email Template</div>
            <img
              onClick={() => {
                setChatPopupOpen(false);
              }}
              src={Cross}
              alt="close icon"
            />
          </div>
             <div className="chat-popup-body">

             <div className="input-container">
                <label>Subject</label>
                <div className="input-box">
                  <input type="text" />
                </div>
              </div>


              <div className="input-container" style={{marginTop:"3rem",height:"30rem"}}>
                <label>Mail Content</label>
                <div className="input-box" style={{border:"1px solid #EBE9E9",height:"30rem"}}>
                  <textarea type="text"  style={{borderRadius:"1rem",width:"100%",height:"15rem",padding:"1rem",marginTop:"2rem"}} value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec felis tincidunt, vehicula nisl vitae, ornare erat. Quisque lobortis felis at sollicitudin 
viverra. Vestibulum placerat eleifend lectus, id iaculis lectus tristique ac. Cras placerat lacus vel pretium luctus. Nullam non congue sem, 
scelerisque vehicula lacus. Etiam in aliquam velit, in placerat nunc. Sed non egestas ex."/>
                 <div className="company-email-footer">
              <div className="left-text">JOBS MARKET.AI</div>
              <div className="right-text">
                  <p style={{fontWeight:"600",fontSize:"2rem"}}>Oda Dink</p>
              
              <p>Recruiter</p>
              <p>+91 998877556</p>
              <p>odadink@gmail.com</p>
              </div>
              </div>
           
             </div>
                </div>
              </div>

           
             

   </div>


    </div>
   )}
;

export default EmailTemplate;
