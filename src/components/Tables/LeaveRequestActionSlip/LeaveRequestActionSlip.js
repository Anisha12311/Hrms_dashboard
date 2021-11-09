import React,{useState} from "react";
import AttendanceTableslip from "../../AttendanceTabeslip/AttendanceTableslip";

import './LeaveRequestActionSlip.scss'

const LeaveRequestActionSlip = ({ setAction }) => {

    const [actionslip , setActionslip] = useState()
  return (
    <div
      className="popup_container"
     
    >
      <div className="feedbackForm-popup1"
     >
      < div className="feedbackForm-popup-body"
      style={{height:"70rem"}}
     > 
     <div className="form-head">

     <h1>Leave Stats</h1>
     <br></br>

<h1 style={{fontWeight:"500"}}>Name: Abhishek  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  ID: #JT00150</h1>


<div className="leave-top">


<div className="leave-box" onClick = {() => setActionslip(true)}>
<h3>Total Leave</h3>
<h2>5 Days</h2>
<h4>Last Leave: 1 July, 2021</h4>
</div>



<div className="leave-box">
<h3>Last Leave</h3>
<h2>3 Days</h2>
<h4>Leave:  2 Mar-5 Mar, 2021</h4>
</div>




<div className="leave-box">
<h3>Remaining Leave</h3>
<h2>2 Days</h2>
<h4>Leave Update: 2 August, 2021</h4>
</div>



<div className="leave-box">
<h3>LOP</h3>
<h2>5 Days</h2>
<h4>Last Leave 2 August, 2021</h4>
</div>






</div>



     <br></br>
     <br></br>
<h1>Applied Leave</h1>
    


<div className="leave-top">




<div className="leave-box">
<h3>Total Days</h3>
<h2>3 Days</h2>
<h4> From 23 July, 2021 To: 25 July, 2021</h4>
</div>




<div className="leave-box">
<h3>Applied On</h3>
<h2>21 July, 2021</h2>

</div>



<div className="leave-box">
<h3>Applied For</h3>
<h2>Personal Leave</h2>

</div>


</div>



<div
            style={{
              marginTop: "2rem",
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "2rem",
              marginTop: "2rem",
            }}
          >
            <div style={{ minWidth: "0rem", display: "inline-block" }}>
              <div
                className="btn btn-w btn-cancel1 btn-active"
                style={{ minWidth: "0rem", display: "inline-block" }}
                onClick={() => setAction(false)}>
                Decline
              </div>
            </div>



            <div style={{ minWidth: "0rem", display: "inline-block" }}>
              <button
                className="btn btn-w btn-inactive reply1"
                // onClick={()=>{setSend(true);setPopupOpen(false)} }
                style={{fontSize:"2rem" , position:"relative",top:"-0.8rem"}}
              >
            Approve
              </button>
            </div>
          </div>


     </div>
     </div>
      </div>
      {actionslip &&(
          <AttendanceTableslip setActionslip = {setActionslip}></AttendanceTableslip>
      )}
    </div>
  );
};

export default LeaveRequestActionSlip;
