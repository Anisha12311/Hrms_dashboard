import React, {useState} from 'react'
import './RecruiterDetails.scss'
import backarrow from '../../asserts/icons/downloadArrow.png'
import odaDink from '../../asserts/images/oda_dink.png'
import design from '../../asserts/icons/dashboardCard.png'
import JoinedCandidate from '../Tables/PerformanceRecruiters/JoinedCandidiate/JoinedCandidate'
export default function RecruiterDetails() {

    const [details, setDetails] = useState(false)


    return (
        <div className = "generate_box_performance">
            <div className = "recruiters_dashboard">
            <img src = {backarrow} alt = "" />
            <div className = "details_oda">
                <img src = {odaDink} alt = ""/>
                <div className = "details_head">
                    oda Dink
                </div>
                <div className = "recruiter_head">Recruiter</div>
                <div className = "credit_btn">Credit : 485/500</div>

                </div>
                <div className = "vacancy_status">

                </div>

                <div className = "candidate_dashbox">
                    <div className = "candidate_contains">
                        <div className = "contain_box">
                        <h3 onClick = {() => setDetails(true)}>Total Candidates Joined</h3>
                        <h1>185</h1>
                        <img alt ='text' src={design}/>
                        </div>

                        <div className = "contain_box1">
                        <h3>Candidates Joined this Month</h3>
                        <h1>75</h1>
                        <img alt ='text' src={design}/>
                        </div>

                        <div className = "contain_box2">
                        <h3>Total Candidates Yet to Join</h3>
                        <h1>75</h1>
                        <img alt ='text' src={design}/>
                        </div>

                        <div className = "contain_box3">
                        <h3>No of Profiles tagged</h3>
                        <h1>125</h1>
                        <img alt ='text' src={design}/>
                        </div>

                        <div className = "contain_box4">
                        <h3>Candidates Dropped</h3>
                        <h1>75</h1>
                        <img alt ='text' src={design}/>
                        </div>

                        <div className = "contain_box5">
                        <h3>Pending Candidate Applications</h3>
                        <h1>05</h1>
                        <img alt ='text' src={design}/>
                        </div>
                    </div>

                {
                    details&&(
                        <JoinedCandidate setDetails = {setDetails}></JoinedCandidate>
                    )
                }
                    </div>
                 
                    <div className="table-footer" style = {{marginTop : "1500px"}}>
         <div className="footer-left">
             Showing 10 from 160 data
         </div>
         <div className="footer-right">  

             <button className="btn btn-w btn-inactive">{`<< Previous`}</button>
             
             <button className="btn1  btn-inactive pages">1</button>
             <button className="btn1  btn-inactive pages">2</button>
             <button  className="btn1  btn-inactive pages">3</button>
             <button className="btn btn-w btn-inactive">{`Next >>`}</button>
        


     </div>
                  
                </div>
            </div>
        </div>
    )
}
