import React from 'react'
import './Dashboard.scss'
import Aarav from '../../asserts/images/Aarav.png'
import Vritika from '../../asserts/images/Vritika.png'
import Nishant from '../../asserts/images/Nishant.png'
import Akhil from '../../asserts/images/Akhil.png'
import Olivia from '../../asserts/images/Olivia.png'
import samarth from '../../asserts/images/samarth.png'
 function Dashboard() {
    return (
        <div className="dashboard-container">
      <div className = "dasbord">
          <div className = "Leave_session">
              <h1>Leaves Today</h1>
              <div className = "View_text">View More</div>

              <div className = "box">
                  <div className = "dashCard">
                      <img src = {Aarav} alt = ""/>
                        <div className = "User_detail">Aarav Subramanian</div>
                        <div className = "User_base">Associate Product Marketing Manager</div>
                        <div className = "User_address">Location : Hyderabad<br/>
                        Department : Engineering<br/>
                        Email : aarav@mail.com<br/>
                        Mobile : +91-58620526</div>
                        <div className = "Leave_today"> On Leave Today</div>
                    <div className = "View_Point"> View</div>
                  </div>

                  <div className = "dashCard1">
                      <img src = {Vritika} alt = ""/>
                        <div className = "User_detail">Vritika Bhalla</div>
                        <div className = "User_base">HR Executive</div>
                        <div className = "User_address">Location : Hyderabad<br/>
                        Department : Engineering<br/>
                        Email : vb@mail.com<br/>
                        Mobile : +91-58620526</div>
                        <div className = "Leave_today"> On Leave Today</div>
                    <div className = "View_Point"> View</div>
                  </div>

                  <div className = "dashCard2">
                      <img src = {Nishant} alt = ""/>
                        <div className = "User_detail">Nishant Samra</div>
                        <div className = "User_base">Design Intern</div>
                        <div className = "User_address">Location : Hyderabad<br/>
                        Department : Engineering<br/>
                        Email : aarav@mail.com<br/>
                        Mobile : +91-58620526</div>
                        <div className = "Leave_today"> On Leave Today</div>
                    <div className = "View_Point"> View</div>
                  </div>

                  <div className = "dashCard3">
                      <img src = {Akhil} alt = ""/>
                        <div className = "User_detail">Akhil Bassi</div>
                        <div className = "User_base">Development Intern</div>
                        <div className = "User_address">Location : Hyderabad<br/>
                        Department : Engineering<br/>
                        Email : aarav@mail.com<br/>
                        Mobile : +91-58620526</div>
                        <div className = "Leave_today"> On Leave Today</div>
                    <div className = "View_Point"> View</div>   
                  </div>
              </div>
          </div>

          <div className = "Job_Posting">
          <h1>Job Postings</h1>
          <div className = "Job_more">View More</div>

          <div className = "Job_box">
            <div className = "Job_dash">
                <div className = "Job_dash-olivia">
                    Olivia & Pope
                </div>
                <div className = "Job_dash-external">External</div>
                <div className = "Job_dash-address">Delhi, India</div>
                <img src = {Olivia} alt = ""/>
                <div className = "Job_dash-data"> Database Progammer</div>
                <div className = "Job_dash-prize"> $14,000 - $25,000</div>
                <div className = "Job_dash-discription"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, set do eiusmod tempor incididuct ut 
                labore et dolor magna alique. Ut enim ad minim veniam.
                </div>
            </div>

            <div className = "Job_dash1">
                <div className = "Job_dash-olivia">
                    Olivia & Pope
                </div>
                <div className = "Job_dash-external">External</div>
                <div className = "Job_dash-address">Delhi, India</div>
                <img src = {Olivia} alt = ""/>
                <div className = "Job_dash-data"> Database Progammer</div>
                <div className = "Job_dash-prize"> $14,000 - $25,000</div>
                <div className = "Job_dash-discription"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, set do eiusmod tempor incididuct ut 
                labore et dolor magna alique. Ut enim ad minim veniam.
                </div>
            </div>

            <div className = "Job_dash2">
                <div className = "Job_dash-olivia">
                    Olivia & Pope
                </div>
                <div className = "Job_dash-external">External</div>
                <div className = "Job_dash-address">Delhi, India</div>
                <img src = {Olivia} alt = ""/>
                <div className = "Job_dash-data"> Database Progammer</div>
                <div className = "Job_dash-prize"> $14,000 - $25,000</div>
                <div className = "Job_dash-discription"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, set do eiusmod tempor incididuct ut 
                labore et dolor magna alique. Ut enim ad minim veniam.
                </div>
            </div> 
          </div>
           
           <div className = "dash_pending">
           <h1>Pending Leave Requests</h1>
           <div className = "pending_view">View More</div>
           <div className = "pending_box">
             <div className = "pending_dash">
               <div className = "samarth_head">
                 Samarth Mody
               </div>
               <div className = "Leave_address">Bereavemetn Leave</div>
               <div className = "date_address">July 28, 2021 - August 01,2021</div>
               <img src  = {samarth} alt = ""/>
               <div className = "Family_member"> Demise of a family member</div>
               <div className = "Leave_view"> View </div>
             </div>

             <div className = "pending_dash1">
               <div className = "samarth_head">
                 Samarth Mody
               </div>
              
               <div className = "Leave_address">Bereavemetn Leave</div>
               <div className = "date_address">July 28, 2021 - August 01,2021</div>
               <img src  = {samarth} alt = ""/>
               <div className = "Family_member"> Demise of a family member</div>
               <div className = "Leave_view"> View </div>
             </div>

             <div className = "pending_dash2">
               <div className = "samarth_head">
                 Samarth Mody
               </div>
               <div className = "Leave_address">Bereavemetn Leave</div>
               <div className = "date_address">July 28, 2021 - August 01,2021</div>
               <img src  = {samarth} alt = ""/>
               <div className = "Family_member"> Demise of a family member</div>
               <div className = "Leave_view"> View </div>
             </div>
           </div>
           </div>
        
          </div>
         
      </div>
                  </div>
    )
}
export default Dashboard