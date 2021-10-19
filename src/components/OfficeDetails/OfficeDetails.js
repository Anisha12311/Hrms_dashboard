import React from 'react'
import './OfficeDetails.scss'
import { BiErrorCircle } from 'react-icons/bi';
export default function OfficeDetails() {
    return (
        <div className = "candidate_dah1">
               <div className =  "candi_general">GENERAL</div>
                  <div className = "candi_touch"/>
                  <div className = "Candi_form">
                            <div className = "Candi_id">
                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "390px",marginTop : "100px"}}/>
                            <div className = "Candi_employee">Employee ID</div>
                            <input placeholder = "JM526"/>

                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "850px",marginTop : "90px"}}/>
                            <div className = "Candi_employee1">Mentor Name</div>
                            <input placeholder = "Shishir Sharma"/>

                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "950px",marginTop : "100px"}}/>
                            <div className = "Candi_employee2">Designation</div>
                            <input placeholder = "Marketing Head" style = {{marginLeft : "-160px"}}/>
                            
                            </div>
                         

                            <div className = "Candi_id1">
                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "390px",marginTop : "100px"}}/>
                            <div className = "Candi_employee">Date of Joining</div>
                            <input placeholder = "01 August 2021"/>

                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "850px",marginTop : "90px"}}/>
                            <div className = "Candi_employee1">Work Type</div>
                            <input placeholder = "Full Time"/>

                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "950px",marginTop : "100px"}}/>
                            <div className = "Candi_employee2">Last Working Day</div>
                            <input placeholder = "N/A" style = {{marginLeft : "-230px"}}/>
                            
                            
                            </div>
                            <div className = "Candi_id1">
                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "390px",marginTop : "100px"}}/>
                            <div className = "Candi_employee">Department</div>
                            <input placeholder = "Marketing"/>

                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "850px",marginTop : "90px"}}/>
                            <div className = "Candi_employee1">Primary Team</div>
                            <input placeholder = "Marketing"/>

                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "950px",marginTop : "100px"}}/>
                            <div className = "Candi_employee2">Probation Start Date</div>
                            <input placeholder = "01 August 2021" style = {{marginLeft : "-270px"}}/>
                            
                            
                            </div>
                            <div className = "Candi_id1">
                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "390px",marginTop : "100px"}}/>
                            <div className = "Candi_employee">Probation End Date</div>
                            <input placeholder = "01 October 2021"/>

                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "850px",marginTop : "90px"}}/>
                            <div className = "Candi_employee1">ID Card Number</div>
                            <input placeholder = "JM_ID5985"/>

                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "950px",marginTop : "100px"}}/>
                            <div className = "Candi_employee2">Shift</div>
                            <input placeholder = "General Shift" style = {{marginLeft : "-60px"}}/>
                            
                            
                            </div>
                            <div className = "Candi_id1">
                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "390px",marginTop : "100px"}}/>
                            <div className = "Candi_employee">Employment Type</div>
                            <input placeholder = "Full Time"/>

                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "850px",marginTop : "90px"}}/>
                            <div className = "Candi_employee1">FFS Status</div>
                            <input placeholder = "--------"/>

                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "950px",marginTop : "100px"}}/>
                            <div className = "Candi_employee2">Salary</div>
                            <input placeholder = "Rs. 40,000/-" style = {{marginLeft : "-80px"}}/>
                            
                            
                            </div>
                           </div>


                           <div className =  "candi_general">COMMUNICATION DETAILS</div>
                  <div className = "candi_touch_office"/>
                  <div className = "Candi_form">
                            <div className = "Candi_id">
                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "390px",marginTop : "100px"}}/>
                            <div className = "Candi_employee">Work Email</div>
                            <input placeholder = "kalpana@jobsmarket.com"/>

                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "850px",marginTop : "90px"}}/>
                            <div className = "Candi_employee1">Work Phone</div>
                            <input placeholder = "+91-0215152014"/>

                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "950px",marginTop : "100px"}}/>
                            <div className = "Candi_employee2">Work Location</div>
                            <input placeholder = "Mumbai" style = {{marginLeft : "-180px"}}/>
                            
                            </div>
                         </div>

                         <div className = "candi_cancel">Cancel</div>
                        <div className = "candi_Reliving" >Send Reliving Letter</div>
                      
                         
        </div>
    )
}
