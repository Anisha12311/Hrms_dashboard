import React, { useState } from "react";
import "./ExitForm.scss";
import background from "./../../asserts/icons/background.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {URL} from '../../config'

const ExitForm = ({ setOpenFeedbackForm, setSend }) => {

  const[feedback,setFeedback] = useState({
    fullname:"",
    phone:"",
    email:"",
    dept:"",
    mentor:"",
    joinData:"",
    ResignDate:"",
    Q1:"",
    Q2:"",
    Q3:"",
    Q4:"",
    Q5:"",
    Q6:"",
    Q7:"",
    Q8:"",
    Q9:"",
    Q10:""
  })

  let name; let value;
  const handleChange = (e) =>{
    name = e.target.name;
    value = e.target.value;
    setFeedback({...feedback,[name]:value})
  }

  console.log(feedback);

  const handleSubmit = async () =>{
    const {fullname,phone,email,dept,mentor,joinData,ResignDate,Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10} = feedback;
    if(!fullname || !phone || !email || !dept || !mentor || !joinData || !ResignDate){
      toast.warn("Please Check All The Fields ⚠️", {
        position: "top-center",
        autoClose: 3000,
      });
    }else{
      const req = await fetch(`${URL}/api/dash/Feedback/Addfeedback`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Accept":"application/json"
        },
        body: JSON.stringify({fullname,phone,email,dept,mentor,joinData,ResignDate,Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10})
      })
      const res = await req.json();
      if(res){
        toast.success("Form Submitted Successfully", {
          position: "top-center",
          autoClose: 3000,
        });
      }else{
        toast.warn("Please Check All The Fields ⚠️", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    }
    
  }

  return (
   
      <div className="feedbackForm-popup4">
        <div className="feedbackForm-popup4-body">
        <div style={{height:"30rem",position:"sticky",top:"0"}}>
          <img src={background} style={{height:"100%",width:"100%"}} ></img> 
        </div>
        <div className="form-div">
          <div className="createjob-adddoc-batch" style={{ display: "block" }}>
            <div>
              <label htmlFor="fullName" style={{ color: "#515151" }}>
                Full Name{" "}
              </label>
              <input
                onChange={handleChange}
                value={feedback.fullname}
                name="fullname"
                id="fullName"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="contactNumber" style={{ color: "#515151" }}>
                Contact Number{" "}
              </label>
              <input
                onChange={handleChange}
                value={feedback.phone}
                name="phone"
                id="contactNumber"
                type="number"
              />
            </div>
            <div>
              <label htmlFor="email" style={{ color: "#515151" }}>
                Email Address{" "}
              </label>
              <input
                onChange={handleChange}
                value={feedback.email}
                name="email"
                id="email"
                type="email"
              />
            </div>
            <div>
              <label htmlFor="department" style={{ color: "#515151" }}>
                Department
              </label>
              <input
                  onChange={handleChange}
                  value={feedback.dept}
                name="dept"
                id="department"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="mentor" style={{ color: "#515151" }}>
                Mentor{" "}
              </label>
              <input
                  onChange={handleChange}
                  value={feedback.mentor}
                name="mentor"
                id="mentor"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="joiningDate" style={{ color: "#515151" }}>
                Join Date{" "}
              </label>

              <input
                  onChange={handleChange}
                  value={feedback.joinData}
                name="joinData"
                id="joiningDate"
                type="date"
              />
            </div>
            <div>
              <label htmlFor="resigningDate" style={{ color: "#515151" }}>
                Resigning Date
              </label>

              <input
                  onChange={handleChange}
                  value={feedback.ResignDate}
                name="ResignDate"
                id="resigningDate"
                type="date"
              />
            </div>
            <div>
              <label htmlFor="enjoy" style={{ color: "#515151" }}>
                What did you enjoy most about your job? Why?
              </label>

              <input
                  onChange={handleChange}
                  value={feedback.Q1}
                name="Q1"
                id="enjoy"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="leastLike" style={{ color: "#515151" }}>
                What did you like least about your job? Why?
              </label>

              <input
                onChange={handleChange}
                value={feedback.Q2}
                name="Q2"
                id="leastLike"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="better" style={{ color: "#515151" }}>
              What could have been better about your job? Please give an example.

              </label>

              <input
                onChange={handleChange}
                value={feedback.Q3}
                name="Q3"
                id="better"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="duties" style={{ color: "#515151" }}>
              Were your duties clearly defined? Did you work to set objectives?


              </label>

              <input
                  onChange={handleChange}
                  value={feedback.Q4}
                name="Q4"
                id="duties"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="role" style={{ color: "#515151" }}>
              Did you feel/understand how your role contributed to the delivery of the Company’s aim?


              </label>

              <input
                onChange={handleChange}
                value={feedback.Q5}
                name="Q5"
                id="role"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="training" style={{ color: "#515151" }}>
              Did you receive adequate training both on-the-job and specialised?
              </label>
              <input
                  onChange={handleChange}
                  value={feedback.Q6}
                name="Q6"
                id="training"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="lastTraining" style={{ color: "#515151" }}>
              When was your last training and what did it involve?
              </label>
              <input
                  onChange={handleChange}
                  value={feedback.Q7}
                name="Q7"
                id="lastTraining"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="safety" style={{ color: "#515151" }}>
              Were health and safety requirements met? Please give examples.
              </label>
              <input
                  onChange={handleChange}
                  value={feedback.Q8}
                name="Q8"
                id="safety"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="pay" style={{ color: "#515151" }}>
              How do you feel about the pay and benefits provided by the Trust?
              </label>
              <input
                  onChange={handleChange}
                  value={feedback.Q9}
                name="Q9"
                id="pay"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="morale" style={{ color: "#515151" }}>
              How would you describe morale in the Company? Please explain it with an example.
              </label>
              <input
                  onChange={handleChange}
                  value={feedback.Q10}
                name="Q10"
                id="morale"
                type="text"
              />
            </div>
            <div
            style={{
              marginTop: "2rem",
              display: "flex",
              justifyContent: "center",
              marginBottom: "2rem",
            }}
          >
            <div style={{ minWidth: "0rem", display: "inline-block" }}>
              <div
                className="btn btn-w btn-cancel btn-active"
                style={{ minWidth: "0rem", display: "inline-block" }}
                onClick={()=>setOpenFeedbackForm(false)}   
              >
                Cancel
              </div>
            </div>

            <div style={{ minWidth: "0rem", display: "inline-block" }}>
              <button onClick={handleSubmit}
                className="btn btn-w btn-inactive reply"
                // onClick={()=>{setSend(true);setPopupOpen(false)} }
                style={{fontSize:"2rem" , position:"relative",top : "1rem"}}
              >
            Submit
              </button>
            </div>
            </div>
          </div>
        </div>
        </div>
      
      <ToastContainer />
    </div>
  );
};

export default ExitForm;
