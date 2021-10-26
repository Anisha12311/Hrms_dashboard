
import React,{useState} from 'react';

import kalpana from '../../asserts/images/Kalpana.png';

import edit from '../../asserts/icons/edit.png';
import more from '../../asserts/icons/more.png';
import OfficeDetails from '../OfficeDetails/OfficeDetails';
import Documents from '../Documents/Documents';
import OnboardCandidateDetails from './OnboardCandidateDetails';

export default function InfoOnboardDetails() {

    const [navClicked, setNavClicked] = useState("OnboardCandidateDetails");
    return (
    
              <div className = "candidate_details">
          <div className = "candidate_dash">
              <div className = "candidate_head">
                  Shortlisted
              </div>
              <div className = "candidate_Det">
                  <img src = {kalpana} alt = ""/>
                  <div className = "kal_head">Kalpana Bakshi</div>
                  <div className = "kal_apply">Applied for : </div>
                  <div className = "kal_marketing">Marketing Head </div>
                  <div className = "kal_status"> Status :</div>
                  <div className = "kal_short">Shortlisted</div>
                  <div className = "kal_commit">Comments:</div>
                  <div className = "kal_commits">Communicates openly with team</div>
              </div>
              <div className="navOptions" style={{    justifyContent: "space-between"
}}>
              <div className = "candidate_dah">
                  <div className ={`option ${
                      navClicked === "OnboardCandidateDetails"? "option-active" : ""
                  }`}
                  onClick = {() => setNavClicked("OnboardCandidateDetails")}>
                      <h3>Candidate Details</h3>
                  </div>
                  <div className = {`option ${
                      navClicked ===  "OfficeDetails" ? " option-active" : "" }`}
                      onClick = {() => setNavClicked("OfficeDetails")}>
                          <h3>Office Details</h3>
                      </div>
                  <div className ={`option ${
                      navClicked === "Documents" ? "option-active" : ""}`}
                      onClick  ={() => setNavClicked("Documents")}>
                      <h3>Documents</h3> </div>
                  <div  className ="edit_bts"> 
                <img src = {edit} alt = "" />
                  <div>Edit</div>

                  </div>
                <img className = "more_contain" src = {more} alt = "" />
               
        </div>
        </div>
       
        </div>
        {navClicked === "OnboardCandidateDetails" && <OnboardCandidateDetails> </OnboardCandidateDetails>}
        {navClicked === "OfficeDetails" &&  <OfficeDetails></OfficeDetails>}
        {navClicked === "Documents" && <Documents></Documents>}
        </div>
    )
}
