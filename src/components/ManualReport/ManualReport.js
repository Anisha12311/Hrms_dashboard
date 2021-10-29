import React from "react";
import "./ManualReport.scss";

export default function ManualReport({ setManualLogin }) {
  return (
    <div>
        <div
          className="popup_container"
        
        >
          <div className="feedbackForm-popup" >
            <div className="feedbackForm-popup-body" style={{height:"72rem"}}>
              <div className="form-head">
                <h2>Manual Login</h2>
                <br></br>

                <div className='createjob-adddoc-batch'>
          {/* first row */}
          <div>
            <label htmlFor='employeeID'>Employee ID </label>

          
            <input
              // onChange={handleEventChange}
              // value={jobRequirementDetails.jobID}
              placeholder="#JC-00150"
              name='employeeID'
              id='employeeID'
              type='text'
            />
          </div>
          <div>
            <label htmlFor='arrivalTime'>Arrival Time</label>
            <input
              // onChange={handleEventChange}
              // value={jobRequirementDetails.clientJobId}
              placeholder="10:00 AM"
              name='arrivalTime'
              id='arrivalTime'
              type='text'
            />
          </div>
          <div>
            <label htmlFor='purpose'>Purpose of Maual Login</label>

            <input
              name='purpose'
              // onChange={handleEventChange}
              // value={jobRequirementDetails.title}
              placeholder="Attendance Failed after Private Time"
              id='purpose'
              type='text'
            />
          </div>
          {/* end of first row */}

          {/* second row */}
        <div>
            <label htmlFor='breakFrom'>Break Time From</label>
            <input
              name='breakFrom'
              // value={jobRequirementDetails.nofPos}
              // onChange={handleEventChange}
              placeholder="01:20 PM"
              id='breakFrom'
              type='text'
            />
          </div>
          {/* end of second row */}

          {/* third row */}
          <div>
            <label htmlFor='breakTo'>Break Time To</label>
            <input
              name='breakTo'
              // value={jobRequirementDetails.nofPos}
              // onChange={handleEventChange}
              placeholder="02:20 PM"
              id='breakTo'
              type='text'
            />
          </div>
          <div>
            <label htmlFor='totalBreak'>Total Break Time</label>
            <input
              // onChange={handleEventChange}
              // value={jobRequirementDetails.skills}
              name='totalBreak'
              placeholder="1 Hour"
              id='totalBreak'
              type='text'
            />
          </div>
          
          <div>
            <label htmlFor='exitTime'>Exit Time</label>
            <input
              // onChange={handleEventChange}
              // value={jobRequirementDetails.skills}
              name='exitTime'
              id='exitTime'
              placeholder="06:00 PM"
              type='text'
            />
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
                  onClick={() => setManualLogin(false)}
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
                 
                >
              Apply
                </button>
              </div>
            </div>



              </div>
            </div>
          </div>
        </div>
    
    </div>
  );
}
