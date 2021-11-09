import React,{useState} from 'react'
import './FormState.scss'
import deletetext from "../../../../../asserts/icons/delete.png"
import background from  "../../../../../asserts/icons/background.png"
import copy from "../../../../../asserts/icons/copy-text.png"
import toggle from "../../../../../asserts/icons/toggle.png"
import arrow1 from "../../../../../asserts/icons/arrow1.png"
export default function FormState() {
    const [hello , setHello] = useState("Multiple Choice")
    const [hello1 , setHello1] = useState("Check box")
    return (
        <div className = "Form-dash">
            <div className = "form-picture">
                <img src = {background} alt = "" style = {{width : "221rem",height : "40rem",marginTop : "50px"}}/>
                <div className = "Feedback_space">Feedback Form</div>
                <div className = "Feedback_des">Description: Lorem ipsum dolor sit amet,consectetur adipiscing elit. Aliquam in nibh vulputate, condimentum quam eget,lobortis mi.</div>
                

            </div>
            <div className = "Question-text">
            <div style = {{display: "flex"}}>
            <div className ="question-dot"> </div>
             <div className ="question-dot" style = {{marginLeft : "-5px"}}> </div>
              <div className ="question-dot" style = {{marginLeft : "21px"}}> </div>
             </div>
              <div style = {{display: "flex"}}>
              <div className ="question-dot"style = {{marginTop : "50px"}}> </div>
             <div className ="question-dot" style = {{marginLeft : "-5px",marginTop : "50px"}}> </div>
              <div className ="question-dot" style = {{marginLeft : "21px",marginTop : "50px"}}> </div>
             </div>
            <div className = "Question-plain">
            Question: Lorem ipsum dolor sot amet, consecteture
            </div>
            <div className = "custom_input_box1" style = {{marginLeft : "827px",marginTop : "-290px"}} onClick = {()=>{
                const batchArrow = document.querySelector(".custom_arrow_subject");
                batchArrow.classList.toggle("custom_rotate");
                const dropdown = document.querySelector(".custom_arrow_action");
                dropdown.classList.toggle("custom_visible_subject");
              }}> 
                  <div style={{paddingLeft:"2rem",paddingTop:"2rem",fontSize : "18px"}}>{hello}</div>
              <div style={{marginTop:"0.5rem",marginRight:"1rem"}}>
              <span className="custom_list">
                  <>
             
                    <ul className="custom_arrow_action" style = {{fontSize : " 18px"}}>
                      <div className="custom_arrow_square">&nbsp;</div>
                  <option value={hello} onClick={()=>setHello("Multiple Choice ")}>Multiple Choice </option>
                  <option value={hello} onClick={()=>setHello("Check Box ")}>Check Box </option>
                  <option value={hello} onClick={()=>setHello("Short Answer")}>Short Answer </option>
                  <option value={hello} onClick={()=>setHello("long Paragraph")}>long Paragraph </option>
                  <option value={hello} onClick={()=>setHello("Liner Scale")}>Liner Scale </option>
                    </ul>
                  </>
                </span>

                


                <img src = {arrow1} alt = "" style = {{width : "30px"}}className = "custom_arrow_subject"/>
      
            </div>
            </div>
            <div className = "option_radio">
            <input type="radio" value="Male" name="gender" />option 1</div>
            <div className = "option_radio1">
            <input type="radio" value="Female" name="gender" /> option 2
        </div>
        <div className = "more_option">Add more option </div>
       <div className = "desk-line"></div>
       
           <div className = "bottom-text">
               <img src = {copy} alt = ""/>
               <img src = {deletetext} alt = ""/>
               <img src = {toggle } alt = ""/>
               <div className = "make-madatory">Make Madatory</div>
           </div>
           </div>


            <div className = "Question-text1" >
            <div style = {{display: "flex"}}>
            <div className ="question-dot"> </div>
             <div className ="question-dot" style = {{marginLeft : "-5px"}}> </div>
              <div className ="question-dot" style = {{marginLeft : "21px"}}> </div>
             </div>
              <div style = {{display: "flex"}}>
              <div className ="question-dot"style = {{marginTop : "50px"}}> </div>
             <div className ="question-dot" style = {{marginLeft : "-5px",marginTop : "50px"}}> </div>
              <div className ="question-dot" style = {{marginLeft : "21px",marginTop : "50px"}}> </div>
             </div>
            <div className = "Question-plain">
            Question: Lorem ipsum dolor sot amet, consecteture
            </div>
            <div className = "custom_input_box1" style = {{marginLeft : "827px",marginTop : "-290px"}} onClick = {()=>{
                const batchArrow = document.querySelector(".custom_arrow_subject");
                batchArrow.classList.toggle("custom_rotate");
                const dropdown = document.querySelector(".custom_arrow_action");
                dropdown.classList.toggle("custom_visible_subject");
              }}> 
                  <div style={{paddingLeft:"2rem",paddingTop:"2rem",fontSize : "18px"}}>{hello1}</div>
              <div style={{marginTop:"0.5rem",marginRight:"1rem"}}>
              <span className="custom_list">
                  <>
             
                    <ul className="custom_arrow_action" style = {{fontSize : " 18px"}}>
                      <div className="custom_arrow_square">&nbsp;</div>
                  <option value={hello1} onClick={()=>setHello1("Multiple Choice ")}>Multiple Choice </option>
                  <option value={hello1} onClick={()=>setHello1("Check Box ")}>Check Box </option>
                  <option value={hello1} onClick={()=>setHello1("Short Answer")}>Short Answer </option>
                  <option value={hello1} onClick={()=>setHello1("long Paragraph")}>long Paragraph </option>
                  <option value={hello1} onClick={()=>setHello1("Liner Scale")}>Liner Scale </option>
                    </ul>
                  </>
                </span>

                


                <img src = {arrow1} alt = "" style = {{width : "30px"}}className = "custom_arrow_subject"/>
      
            </div>
            </div>
            <div className = "option_radio">
            <input type="radio" value="Male" name="gender" />option 1</div>
            <div className = "option_radio1">
            <input type="radio" value="Female" name="gender" /> option 2
        </div>
        <div className = "more_option">Add more option </div>
       <div className = "desk-line"></div>
       
           <div className = "bottom-text">
               <img src = {copy} alt = ""/>
               <img src = {deletetext} alt = ""/>
               <img src = {toggle } alt = ""/>
               <div className = "make-madatory">Make Madatory</div>
           </div>
           </div>
        </div>
    )
}
