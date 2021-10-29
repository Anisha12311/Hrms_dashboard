import React from "react";


export default function ApplyReport({ setApply }) {
  return (
    <div>
        <div
          className="popup_container"
        >
          <div className="feedbackForm-popup" >
            <div className="feedbackForm-popup-body" style={{height:"72rem"}}>
              <div className="form-head">
                <h2>Apply for Leave Request</h2>
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
            <label htmlFor='arrivalTime'>Employee Name </label>
            <input
              // onChange={handleEventChange}
              // value={jobRequirementDetails.clientJobId}
              placeholder="ABC"
              name='arrivalTime'
              id='arrivalTime'
              type='text'
            />
          </div>
          <div>
            <label htmlFor='purpose'>Employee designation</label>

            <input
              name='purpose'
              // onChange={handleEventChange}
              // value={jobRequirementDetails.title}
              placeholder="Recruiter"
              id='purpose'
              type='text'
            />
          </div>
          {/* end of first row */}

          {/* second row */}
        <div>
            <label htmlFor='breakFrom'>Number of leaves required</label>
            <input
              name='breakFrom'
              // value={jobRequirementDetails.nofPos}
              // onChange={handleEventChange}
              placeholder="4 Days"
              id='breakFrom'
              type='text'
            />
          </div>
          {/* end of second row */}

          {/* third row */}
          <div>
            <label htmlFor='breakTo'>Leave from</label>
            <input
              name='breakTo'
              // value={jobRequirementDetails.nofPos}
              // onChange={handleEventChange}
              placeholder="2 August, 2021"
              id='breakTo'
              type='text'
            />
          </div>
          <div>
            <label htmlFor='totalBreak'>Leave Till</label>
            <input
              // onChange={handleEventChange}
              // value={jobRequirementDetails.skills}
              name='totalBreak'
              placeholder="5 August, 2021"
              id='totalBreak'
              type='text'
            />
          </div>
          
          <div>
            <label htmlFor='exitTime'>Purpose of leave</label>
            <input
              // onChange={handleEventChange}
              // value={jobRequirementDetails.skills}
              name='exitTime'
              id='exitTime'
              placeholder="Personal Leave"
              type='text'
            />
          </div>

          <div>
            <label htmlFor='exitTime'>Contact Number </label>
            <input
              // onChange={handleEventChange}
              // value={jobRequirementDetails.skills}
              name='exitTime'
              id='exitTime'
              placeholder="999 999 9999"
              type='text'
            />
          </div>

          <div>
            <label htmlFor='exitTime'>Emergency Contact</label>
            <input
              // onChange={handleEventChange}
              // value={jobRequirementDetails.skills}
              name='exitTime'
              id='exitTime'
              placeholder="999 999 9999"
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
                  onClick={() => setApply(false)}
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
