import React, {useState} from 'react'
import  './Onboarded.scss'
import Aarav from '../../../../asserts/images/Aarav.png'
import Lavanya from '../../../../asserts/images/Lavanya.png'
import Nila from '../../../../asserts/images/Nila.png'
import Dhriti from '../../../../asserts/images/Dhriti.png'
import Aniket from '../../../../asserts/images/Aniket.png'
import Gauri from '../../../../asserts/images/Gauri.png'
import Sanjit from '../../../../asserts/images/Sanjit.png'
import Rajnish from '../../../../asserts/images/Rajnish.png'
import Gauriahuja from '../../../../asserts/images/Gauriahuja.png'
import Aditya from '../../../../asserts/images/Aditya.png'
import Prasad from '../../../../asserts/images/Prasad.png'
import Anusha from '../../../../asserts/images/Anusha.png'
import Akash from '../../../../asserts/images/Akash.png'
import Gita from '../../../../asserts/images/Gita.png'
import Ravindra from '../../../../asserts/images/Ravindra.png'
import InfoOnboardDetails from '../../../../components/OnboardCandidateDetails/InfoOnboardDetails'


export default function Onboarded() {
  const [action, setAction] = useState()
    return (
        <div>
            <div className = "onboard_dash">
            <div className = "onboard_head">Sidhharth's Team </div>
            <div className = "onboard_active">(Active Count-120) </div>
                <div className = "onboard_box">
                  <img src = {Aarav} alt = "" />
                  <div className = "contain_head" onClick = {() => setAction(true)}>Aarav Subramanian</div>
                  <div className = "contain_associate">Associate Product Marketing Manager</div>
                </div>

                <div className = "onboard_box1">
                  <img src = {Lavanya} alt = "" />
                  <div className = "contain_head" onClick = {() => setAction(true)}>Lavanya Bajwa</div>
                  <div className = "contain_associate">HR Manager</div>
                </div>

                <div className = "onboard_box2">
                  <img src = {Nila} alt = "" />
                  <div className = "contain_head" onClick = {() => setAction(true)}>Nila Chandra</div>
                  <div className = "contain_associate">Associate Product Marketing Manager</div>
                </div>

                <div className = "onboard_box3">
                  <img src = {Dhriti} alt = "" />
                  <div className = "contain_head" onClick = {() => setAction(true)}>Dhriti Bhalla</div>
                  <div className = "contain_associate">Associate Product Marketing Manager</div>
                </div>

                <div className = "onboard_box4">
                  <img src = {Aniket} alt = "" />
                  <div className = "contain_head" onClick = {() => setAction(true)}>Ankit Sule</div>
                  <div className = "contain_associate">Associate Product Marketing Manager</div>
                </div>
                   
        </div>
             

      
            <div className = "onboard_head1" onClick = {() => setAction(true)}>Vishakha's Team </div>
            <div className = "onboard_active1">(Active Count-120) </div>
                <div className = "onboard_box_team">
                  <img src = {Gauri} alt = "" />
                  <div className = "contain_head">Gauri Prabhu</div>
                  <div className = "contain_associate">Associate Product Marketing Manager</div>
                </div>

                <div className = "onboard_box1_team">
                  <img src = {Sanjit} alt = "" />
                  <div className = "contain_head">Sanjit Nath</div>
                  <div className = "contain_associate">Associate Product Marketing Manager</div>
                </div>

                <div className = "onboard_box2_team">
                  <img src = {Rajnish} alt = "" />
                  <div className = "contain_head" onClick = {() => setAction(true)}>Rajnish Mander</div>
                  <div className = "contain_associate">Associate Product Marketing Manager</div>
                </div>

                <div className = "onboard_box3_team">
                  <img src = {Gauriahuja} alt = "" />
                  <div className = "contain_head" onClick = {() => setAction(true)}>Aditya Das</div>
                  <div className = "contain_associate">Associate Product Marketing Manager</div>
                </div>

                <div className = "onboard_box4_team">
                  <img src = {Aditya} alt = "" />
                  <div className = "contain_head" onClick = {() => setAction(true)}>Gauri Ahuja</div>
                  <div className = "contain_associate">Associate Product Marketing Manager</div>
                </div>
                   


                <div className = "onboard_head1_sooraj" onClick = {() => setAction(true)}>Sooraj's Team </div>
            <div className = "onboard_active1_sooraj">(Active Count-120) </div>
                <div className = "onboard_box_team1">
                  <img src = {Prasad} alt = "" />
                  <div className = "contain_head">prasad Bhattacharyya</div>
                  <div className = "contain_associate">Associate Product Marketing Manager</div>
                </div>

                <div className = "onboard_box1_team2">
                  <img src = {Anusha} alt = "" />
                  <div className = "contain_head" onClick = {() => setAction(true)}>Anusha Sidhu</div>
                  <div className = "contain_associate">Associate Product Marketing Manager</div>
                </div>

                <div className = "onboard_box2_team3">
                  <img src = {Akash} alt = "" />
                  <div className = "contain_head" onClick = {() => setAction(true)}>Akash Dhingra</div>
                  <div className = "contain_associate">Associate Product Marketing Manager</div>
                </div>

                <div className = "onboard_box3_team4">
                  <img src = {Gita} alt = "" />
                  <div className = "contain_head" onClick = {() => setAction(true)}>Gita Narasimhan</div>
                  <div className = "contain_associate">Associate Product Marketing Manager</div>
                </div>

                <div className = "onboard_box4_team5">
                  <img src = {Ravindra} alt = "" />
                  <div className = "contain_head" onClick = {() => setAction(true)}>Ravindra Sani</div>
                  <div className = "contain_associate">Associate Product Marketing Manager</div>
                </div>
                   
                {action&&(
      <InfoOnboardDetails setAction = {setAction}></InfoOnboardDetails>
    )} 
        </div>
    )
}
