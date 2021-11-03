import React from "react";
import "./EmailCard.scss";
import ellipse from '../../asserts/icons/ellipse.png'
 
import vector from '../../asserts/icons/vector.png'
import star from '../../asserts/icons/star.png'
import attach from '../../asserts/icons/attach.png'

const EmailCard = () => {
  return (
      <div className='email-box'>
        <h5>Ajit Balakrishnan</h5>
      <div className='email-box-top'>
        <div className='email-box-nt'>
        <img style={{height:'0.9rem',width:'0.9rem',marginTop:'1rem',marginRight:'0.8rem'}} src={ellipse} alt="" />
          <div className='email-box-name'>New Candidate Profile <img style={{width:'3rem',height:'2rem',marginLeft:'1rem',paddingTop:'0.5rem'}} src={vector} alt="" />      <img src={star} alt="" /></div>
         
       
        </div>
      </div>
      <div className='email-box-info'>
        <p className='msg'>
          A warm welcome and lots of good wishes on becoming part of our growing
          team. Congratulations and on behalf of all the members. Lets all
          welcome
        </p>
        
      </div>
      <div className="attachedfile">
        <img className="attach" src={attach} alt="" />
        <div className='email-box-time'> <p> 5 minutes ago </p></div>
      </div>
    
    </div>
  );
};

export default EmailCard;
