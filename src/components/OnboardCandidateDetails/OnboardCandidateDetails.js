import React,{useState} from 'react';


import { BiErrorCircle } from 'react-icons/bi';
import Linked from '../../asserts/icons/linked.png';

import OfferLetter from '../OfferLetter/OfferLetter';

export default function OnboardCandidateDetails() {
    
    const [letter, setLetter] = useState()
        return (
        
              <div className = "candidate_dah1" >
                  
             
                  <div className =  "candi_general">GENERAL</div>
                  <div className = "candi_touch"/>
                  <div className = "Candi_form">
                            <div className = "Candi_id">
                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "390px",marginTop : "100px"}}/>
                            <div className = "Candi_employee">Employee ID</div>
                            <input placeholder = "#JC-00255"/>

                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "850px",marginTop : "90px"}}/>
                            <div className = "Candi_employee1">Employee Name</div>
                            <input placeholder = "Kalpana Bakshi"/>

                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "950px",marginTop : "90px"}}/>
                            <div className = "Candi_employee2">Current Designation</div>
                            <input placeholder = "Marketing Head"/>
                            
                            </div>
                         

                            <div className = "Candi_id1">
                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "390px",marginTop : "100px"}}/>
                            <div className = "Candi_employee">Current Company</div>
                            <input placeholder = "Cynex Global"/>

                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "850px",marginTop : "90px"}}/>
                            <div className = "Candi_employee1">Current CTC</div>
                            <input placeholder = "INR 21,05,886"/>

                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "950px",marginTop : "90px"}}/>
                            <div className = "Candi_employee2">Expected CTC</div>
                            <input placeholder = "INR 30,05,886" style = {{marginLeft : "-190px"}}/>
                            
                            </div>

                            <div className = "candi_other">OTHER DETAILS</div>
                            <div className = "candi_touch"/>
                            <div className = "Candi_id3">
                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "390px",marginTop : "100px"}}/>
                            <div className = "Candi_employee">Date of Birth</div>
                            <input placeholder = "01 February 1975"/>
                                
                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "850px",marginTop : "90px"}}/>
                            <div className = "Candi_employee1">Work Experience</div>
                            <input placeholder = "24 Years"/>

                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "950px",marginTop : "90px"}}/>
                            <div className = "Candi_employee2">Recruiter</div>
                            <input placeholder = "Oda Dink" style = {{marginLeft : "-120px"}}/>
                            
                            </div>
 
                            <div className = "Candi_id4">
                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "390px",marginTop : "100px"}}/>
                            <div className = "Candi_employee">Highest Educational Qualifiaction</div>
                            <input placeholder = "MBA"/>

                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "850px",marginTop : "90px"}}/>
                            <div className = "Candi_employee1">Institute</div>
                            <input placeholder = "IITM"/>

                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "950px",marginTop : "90px"}}/>
                            <div className = "Candi_employee2">Ready to Relocate</div>
                            <input placeholder = "Yes" />
                            
                            </div>

                            <div className = "Candi_id5">
                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "390px",marginTop : "100px"}}/>
                            <div className = "Candi_employee">Phone</div>
                            <input placeholder = "+91-219059226"/>

                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "850px",marginTop : "90px"}}/>
                            <div className = "Candi_employee1">Email</div>
                            <input placeholder = "kalpana568@gmail.com"/>

                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "950px",marginTop : "90px"}}/>
                            <div className = "Candi_employee2">Notice Period</div>
                            <input placeholder = "3 Months"style = {{marginLeft : "-180px"}}/>
                            
                            </div>

                            <div className = "Candi_id6">
                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "390px",marginTop : "100px"}}/>
                            <div className = "Candi_employee">Current Location</div>
                            <input placeholder = "Mumbai"/>

                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "800px",marginTop : "90px"}}/>
                            <div className = "Candi_employee1">Preferred Location</div>
                            <input placeholder = "Mumbai"/>

                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "900px",marginTop : "90px"}}/>
                            <div className = "Candi_employee2">Source</div>
                            <input placeholder = "Shine.com" style = {{marginLeft : "-100px"}}/>
                            
                            </div>

                            <div className = "Candi_id7">
                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "390px",marginTop : "100px"}}/>
                            <div className = "Candi_employee">Gender</div>
                            <input placeholder = "Female"/>

                            <BiErrorCircle style = {{width : "50px",height : "40px",color : "gray",marginLeft : "850px",marginTop : "90px"}}/>
                            <div className = "Candi_employee1">Languages Known</div>
                            <input placeholder = "English-Advanced,Hindi-Intermediate"/>
                            </div>

                            <div className = "candi_other">HEADLINE</div>
                            <div className = "candi_touch"/>
                            <div className = "candi_head">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed Euismod Libero Mangna, Et Semper Augue Sollicitudin Dapibus.</div>
                            <div className = "candi_other">SUMMARY</div>
                            <div className = "candi_touch"/>
                            <div className = "candi_head">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam in nibh vulputate, condimentum quam eget, lobortis mi.
                               <br/> Pellentesque convallis nulla a tellus dapibus, non posuere elit ultricies. 
                                Integer nec purus pulvinar, lacinia sem a,lacinia sem a, <br/> laoreet turpis. 
                                Duis at maximus magna. Sed maurics erat, blandit et orci ut, tempor ultricies elit.
                                 Vivamus id arcu et ante<br/> molesite condimentrum quis sit amet arcu.
                            </div>
                            <div className = "candi_other">SOCIALS</div>
                            <div className = "candi_touch"/>
                            <img src = {Linked} alt = "" style = {{marginLeft : "100px",marginTop : "50px"}}></img>
                            <div className = "View_video">View Video Resume</div>
                            <div className = "candi_other">WORK EXPERIENCE</div>
                            <div className = "candi_touch"/>
                            <div className = "candi_other">2018-PRESENT</div>
                            <div className = "candi_month">3 years 8 months</div>
                            <div className = "candi_auto">Automation Testing Analyst Intern at Soylent Corp</div>
                            <div className = "candi_head1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam in nibh vulputate, condimentum quam eget, lobortis mi.
                               <br/> Pellentesque convallis nulla a tellus dapibus, non posuere elit ultricies. 
                                Integer nec purus pulvinar, lacinia sem a,lacinia sem a, <br/> laoreet turpis. 
                                Duis at maximus magna. Sed maurics erat, blandit et orci ut, tempor ultricies elit.
                                 Vivamus id arcu et ante<br/> molesite condimentrum quis sit amet arcu.</div>
                            <div className = "candi_other">INTERNSHIPS</div>
                            <div className = "candi_other">JAN - JUN 2018</div>
                            <div className = "candi_auto1">Automation Testing Analyst Intern at Soylent Corp</div>
                            <div className = "candi_month">6 months</div>
                            <div className = "candi_head1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam in nibh vulputate, condimentum quam eget, lobortis mi.
                               <br/> Pellentesque convallis nulla a tellus dapibus, non posuere elit ultricies. 
                                Integer nec purus pulvinar, lacinia sem a,lacinia sem a, <br/> laoreet turpis. 
                                Duis at maximus magna. Sed maurics erat, blandit et orci ut, tempor ultricies elit.
                                 Vivamus id arcu et ante<br/> molesite condimentrum quis sit amet arcu.</div>
                                 <div className = "candi_other">PROJECTS</div>
                                 <div className = "candi_touch"/>
                                 <div className = "candi_other">Currency Software</div>
                                 <li className = "candi_list">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam in nibh vulputate, condimentum quam eget, lobortis mi.
                                  Pellentesque<br/> convallis nulla a tellus dapibus, non posuere elit ultricies.</li>
                                  <li className = "candi_list">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam in nibh vulputate, condimentum quam eget, lobortis mi.
                                  Pellentesque <br/>convallis nulla a tellus dapibus, non posuere elit ultricies.</li>
                                  <li className = "candi_list">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam in nibh vulputate, condimentum quam eget, lobortis mi.
                                  Pellentesque<br/> convallis nulla a tellus dapibus,non posuere elit ultricies.</li>
                                  <div className = "candi_other">CRETIFICATES</div>
                                  <div className = "candi_other">Lorem ipsum certificates</div>
                                  <div className = "candi_other">Lorem ipsum certificates</div>
                                  <div className = "candi_touch1"/>
                                  <div className = "candi_touch1"/>
                                  <div className = "candi_other">Volunteered for Lorem ipsum dolor sit amet</div>
                                  <div className = "candi_other">Volunteered for Lorem ipsum dolor sit amet</div>
                                  <div className = "candi_other">VOLOUNTEERED  EXPERIENCE</div>
                                  <div className = "candi_other">RESUME</div>
                                  <div className = "candi_touch"/>
                                  <div className = "candi_resume"> 
                                  <div className = "candi_other1">SUMMARY</div>
                                  <div className = "candi_automation">Automation Testing Analyst</div>
                                  <div className = "candi_elit">adipiscing elit. ALiquam in nibh vulputate, </div>
                                  <div className = "candi_elit2">condimentum quam eget, lobortiws mi, Pellentesque <br/>
                                  convallis nulla a tellus dapibus, non posuere elit ultricies. 
                                  Integer nec purus pulvinar,lacinia sem a, <br/> laoreet turpos. Duis at maximus magna.
                                  Sed mauris erat,blandit et orci ut, tempor ultices elit. <br/>Vivamus id arcu 
                                  et ante milestie condimentum quis sit amet arcu.</div>
                                  <div className = "candi_touch1"/>
                                  <div className = "candi_other1">EDUCATION</div>
                                  <div className = "candi_automation">Computer Engineering(B.Tech)</div>
                                  <div className = "candi_elit2">Indian Institute of Technology, Bombay</div>
                                  <div className = "candi_elit2">2005-2009</div>
                                  <div className = "candi_automation1">Senior Secondary (XII), Science</div>
                                  <div className = "candi_elit2">Indian Institute of Technology, Bombay</div>
                                  <div className = "candi_elit2">2005-2009</div>
                                  <div className = "candi_automation2">Secondary (X)</div>
                                  <div className = "candi_elit2">Indian Institute of Technology, Bombay</div>
                                  <div className = "candi_elit2">2005-2009</div>
                                  <div className = "candi_other1">SKILLS</div>
                                  <div className = "candi_bts">
                                     <div className = "candi_java">Java</div>
                                     <div className = "candi_python">Python</div>
                                     </div>
                                     <div className = "candi_touch1"/>
                                  <div className = "candi_other1">WORK EXPERIENCE</div>
                                   <div className = "candi_automation">3 Year 8 Months</div>
                                  </div>
                                  <div className = "candi_cancel">Cancel</div>
                                  <div className = "candi_Send" onClick = {() => setLetter(true)}>Send Offer Letter</div>
                                          {letter&&(
                                            <OfferLetter setLetter = {setLetter}></OfferLetter>)}
                                            
                                          
                       </div>

                    </div>
                   
    )
}
