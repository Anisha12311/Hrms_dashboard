import React, { useState } from 'react'
import './RaiseTicket.scss'

export default function RaiseTicket() {

const [subject , setSubject] = useState("")
const [priority , setPriority] = useState("")

    const handleBatch = () => {
        // window.location.reload(true)
       
       
      };
    
    return (
        <div>
            
        <form>

            <div className="field">
        <h3>Requester</h3>
        <div className="input-box">
            <input type="email" placeholder="sajal@gmail.com"></input>
        </div>
            </div>



            <div className="field">
        <h3>Subject</h3>
   
            <div className="input-box-dropdown" style={{height:"3.4rem"}} onClick={()=>{

const batchArrow = document.querySelector(".ticket-batch-arrow-subject");
batchArrow.classList.toggle("ticket-batch-rotate");
const dropdown = document.querySelector(".ticket-batch-action-subject");

dropdown.classList.toggle("ticket-batch-visible-subject");

                }}>
              <div style={{paddingLeft:"1rem",paddingTop:"0.5rem"}}>{subject}</div>
              <div style={{marginTop:"0.5rem",marginRight:"1rem"}}>
             
                <span className="ticket-batch-action-subject-rel">
                  <>
             
                    <ul className="ticket-batch-action-subject">
                      <div className="ticket-batch-action-subject-square">&nbsp;</div>
                  <option value={subject} onClick={()=>setSubject("Personal Grievance")}>Personal Grievance</option>
                  <option value={subject} onClick={()=>setSubject("Salary not Recieved")}>Salary not Recieved</option>
                  <option value={subject} onClick={()=>setSubject("Change Contact Details")}>Change Contact Details</option>
                  <option value={subject} onClick={()=>setSubject("Training Request")}>Training Request</option>
                  
                    </ul>
                  </>
                </span>
                
                <svg width="16" className="ticket-batch-arrow-priority" height="12" viewBox="0 0 492 492" fill="#2186F2">
<path d="M484.13 124.99l-16.11-16.23a26.72 26.72 0 00-19.04-7.86c-7.2 0-13.96 2.79-19.03 7.86L246.1 292.6 62.06 108.55c-5.07-5.06-11.82-7.85-19.03-7.85s-13.97 2.79-19.04 7.85L7.87 124.68a26.94 26.94 0 000 38.06l219.14 219.93c5.06 5.06 11.81 8.63 19.08 8.63h.09c7.2 0 13.96-3.57 19.02-8.63l218.93-219.33A27.18 27.18 0 00492 144.1c0-7.2-2.8-14.06-7.87-19.12z"/>
</svg>
            </div>
            </div>
        </div>
           

        

        <div className="field">
        <h3>Priority</h3>
   
            <div className="input-box-dropdown" style={{height:"3.4rem",width:"24rem"}} onClick={()=>{

const batchArrow = document.querySelector(".ticket-batch-arrow-priority");
batchArrow.classList.toggle("ticket-batch-rotate");
const dropdown = document.querySelector(".ticket-batch-action-priority");
        
dropdown.classList.toggle("ticket-batch-visible-priority")

                }}>
              <div style={{paddingLeft:"1rem",paddingTop:"0.5rem"}}>{priority}</div>
              <div style={{marginTop:"0.5rem",marginRight:"1rem"}}>
             
                <span className="ticket-batch-action-priority-rel">
                  <>
             
                    <ul className="ticket-batch-action-priority">
                      <div className="ticket-batch-action-priority-square">&nbsp;</div>
                  <option value={priority} onClick={()=>setPriority("Low")}>Low</option>
                  <option value={priority} onClick={()=>setPriority("Medium")}>Medium</option>
                  <option value={priority} onClick={()=>setPriority("High")}>High</option>
                  <option value={priority} onClick={()=>setPriority("Urgent")}>Urgent</option>
                  
                    </ul>
                  </>
                </span>
             

                <svg width="16" className="ticket-batch-arrow-priority" height="12" viewBox="0 0 492 492" fill="#2186F2">
<path d="M484.13 124.99l-16.11-16.23a26.72 26.72 0 00-19.04-7.86c-7.2 0-13.96 2.79-19.03 7.86L246.1 292.6 62.06 108.55c-5.07-5.06-11.82-7.85-19.03-7.85s-13.97 2.79-19.04 7.85L7.87 124.68a26.94 26.94 0 000 38.06l219.14 219.93c5.06 5.06 11.81 8.63 19.08 8.63h.09c7.2 0 13.96-3.57 19.02-8.63l218.93-219.33A27.18 27.18 0 00492 144.1c0-7.2-2.8-14.06-7.87-19.12z"/>
</svg>
           
            </div>
            </div>
        </div>
           





        <div className="field">
        <h3>Description</h3>
   
            <div className="input-box-dropdown" style={{height:"28rem",width:"62rem"}} onClick={()=>{


                }}>
                  <input type="text" height="2rem"></input>
       
             
              
           
            </div>
            </div>

           








        <div className="field">
        <h3>File</h3>
   
            <div className="input-box-dropdown" style={{height:"3.4rem",width:"24rem"}} onClick={()=>{

const batchArrow = document.querySelector(".ticket-batch-arrow-file");
batchArrow.classList.toggle("ticket-batch-rotate");
const dropdown = document.querySelector(".ticket-batch-action-file");
        
dropdown.classList.toggle("ticket-batch-visible-file")

                }}>
              <div style={{paddingLeft:"1rem",paddingTop:"0.5rem"}}>Attach</div>
              <div style={{marginTop:"0.5rem",marginRight:"1rem"}}>
             
                <span className="ticket-batch-action-file-rel">
                  <>
             
                    <ul className="ticket-batch-action-file">
                      <div className="ticket-batch-action-file-square">&nbsp;</div>
                  <option >Attach From Computer</option>
                  <option >Attach From  One Drive</option>
             
                  
                    </ul>
                  </>
                </span>

                <svg width="16" className="batch-arrow" height="12" viewBox="0 0 492 492" fill="#2186F2">
<path d="M484.13 124.99l-16.11-16.23a26.72 26.72 0 00-19.04-7.86c-7.2 0-13.96 2.79-19.03 7.86L246.1 292.6 62.06 108.55c-5.07-5.06-11.82-7.85-19.03-7.85s-13.97 2.79-19.04 7.85L7.87 124.68a26.94 26.94 0 000 38.06l219.14 219.93c5.06 5.06 11.81 8.63 19.08 8.63h.09c7.2 0 13.96-3.57 19.02-8.63l218.93-219.33A27.18 27.18 0 00492 144.1c0-7.2-2.8-14.06-7.87-19.12z"/>
</svg>
           
            </div>
            </div>
        </div>
           




        <div className="field">
        <h3>Signature</h3>
   
            <div className="input-box-dropdown" style={{height:"3.4rem",width:"24rem"}} onClick={()=>{

const batchArrow = document.querySelector(".ticket-batch-arrow-sign");
batchArrow.classList.toggle("ticket-batch-rotate");
const dropdown = document.querySelector(".ticket-batch-action-sign");
        
dropdown.classList.toggle("ticket-batch-visible-sign")

                }}>
              <div style={{paddingLeft:"1rem",paddingTop:"0.5rem"}}>Attach</div>
              <div style={{marginTop:"0.5rem",marginRight:"1rem"}}>
             
                <span className="ticket-batch-action-sign-rel">
                  <>
             
                    <ul className="ticket-batch-action-sign">
                      <div className="ticket-batch-action-sign-square">&nbsp;</div>
                  <option >Attach From Computer</option>
                  <option >Attach From  One Drive</option>
             
                  
                    </ul>
                  </>
                </span>
                
                <svg width="16" className="ticket-batch-arrow-priority" height="12" viewBox="0 0 492 492" fill="#2186F2">
<path d="M484.13 124.99l-16.11-16.23a26.72 26.72 0 00-19.04-7.86c-7.2 0-13.96 2.79-19.03 7.86L246.1 292.6 62.06 108.55c-5.07-5.06-11.82-7.85-19.03-7.85s-13.97 2.79-19.04 7.85L7.87 124.68a26.94 26.94 0 000 38.06l219.14 219.93c5.06 5.06 11.81 8.63 19.08 8.63h.09c7.2 0 13.96-3.57 19.02-8.63l218.93-219.33A27.18 27.18 0 00492 144.1c0-7.2-2.8-14.06-7.87-19.12z"/>
</svg>
           
            </div>
            </div>
        </div>
           





        <div
            style={{
              marginTop: "2rem",
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "2rem",
            }}
          >
            <div style={{ minWidth: "0rem", display: "inline-block" }}>
              <div
                className="btn btn-w btn-cancel btn-active"
                style={{ minWidth: "0rem", display: "inline-block" }}
              >
                Cancel
              </div>
            </div>

            <div style={{ minWidth: "0rem", display: "inline-block" }}>
              <div
                className="btn btn-w btn-cancel btn-active"
                style={{ minWidth: "0rem", display: "inline-block" , color:"#2186f2",border:"1px solid #2186f2"}}
              >
                Preview
              </div>
            </div>

            <div style={{ minWidth: "0rem", display: "inline-block" }}>
              <button
                className="btn btn-w btn-inactive reply"
                // onClick={()=>{setSend(true);setPopupOpen(false)} }
                style={{fontSize:"2rem" , position:"relative",top:"-0.8rem"}}
              >
            Send
              </button>
            </div>
          </div>



    
        </form>

        
        </div>
    )
}
