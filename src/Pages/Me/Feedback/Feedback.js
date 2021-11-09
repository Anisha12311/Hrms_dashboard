import React,{useState} from 'react'
import Createform from './Createform/Createform';
import Receivedfeedback from './Receivedfeedback/Receivedfeedback';
export default function Feedback() {
    
    const [navClicked, setNavClicked] = useState("Create");
    return (
    <div>
             <div className="navOptions1">
                  
                  <div className ={`option1 ${
                      navClicked === "Create"? "option1-active" : ""
                  }`}                  

                  onClick = {() => setNavClicked("Create")}>
                      <h3>Create Form</h3>
                      </div>
                  <div className = {`option1 ${
                      navClicked ===  "Received" ? " option1-active" : "" }`}
                      onClick = {() => setNavClicked("Received")}>
                      <h3>Received Feedbacks</h3>
                      </div>
                   
                      
                
               </div>
               
               {navClicked === "Create" && <Createform> </Createform>}
               {navClicked === "Received" && <Receivedfeedback></Receivedfeedback>}
                
                
            </div>
         
           
    )
}
