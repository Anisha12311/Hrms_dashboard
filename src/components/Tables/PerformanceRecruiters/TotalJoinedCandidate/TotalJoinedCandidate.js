import React,{useState} from 'react'
import './TotalJoinedCandidate.scss'
import search1 from '../../../../asserts/icons/search1.png'
import JoinedOnboarded from '../JoinedOnboarded/JoinedOnboarded';
import CurrentJoined from '../CurrentJoined/CurrentJoined';
import ProfileTagged from '../ProfileTagged/ProfileTaged';
import Dropped from '../Dropped/Dropped';
export default function TotalJoinedCandidate() {
    
    const [navClicked, setNavClicked] = useState("TotalJoined");
    return (
    <div> 
        <div>
             <div className="navOptions2">
                  
                  <div className ={`option2 ${
                      navClicked === "TotalJoined"? "option2-active" : ""
                  }`}                  

                  onClick = {() => setNavClicked("TotalJoined")}>
                      <h3>Total Joined</h3>
                      </div>
                  <div style = {{marginLeft : "350px"}} className = {`option2 ${
                      navClicked ===  "CurrentJoined" ? " option2-active" : "" }`}
                      onClick = {() => setNavClicked("CurrentJoined")}>
                      <h3>Total Yet to Join</h3>
                      </div>
                  <div style = {{marginLeft : "350px"}} className ={`option2 ${
                      navClicked === "ProfileTagged" ? "option2-active" : ""}`}
                      onClick  ={() => setNavClicked("ProfileTagged")}>
                      <h3>Profile Tagged</h3> </div>

                  <div style = {{marginLeft : "350px"}} className ={`option2 ${
                      navClicked === "Dropped" ? "option2-active" : ""}`}
                      onClick  ={() => setNavClicked("Dropped")}>
                      <h3>Dropped</h3> </div>
                </div>
                </div>
                    
                    <div className = "onboard_test">
                        Total Onboarded : 128
                    </div>
                    <div className = "search_dash">
                    <input className = "search_test" placeholder='Search something here'/>
                    <img src = {search1} alt = ""/>
                    </div>

                    {navClicked === "TotalJoined" && (<JoinedOnboarded></JoinedOnboarded> )}
                    {navClicked === "CurrentJoined" && (<CurrentJoined></CurrentJoined> )}
                    {navClicked === "ProfileTagged" && (<ProfileTagged></ProfileTagged> )}
                    {navClicked === "Dropped" && (<Dropped></Dropped> )}
            </div>
         
           
    )
}
