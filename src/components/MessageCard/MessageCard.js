import React from "react";
import "./MessageCard.scss";
import marina from '../../asserts/images/marina.png'
 
import vector from '../../asserts/icons/vector.png'
import star from '../../asserts/icons/star.png'
import attach from '../../asserts/icons/attach.png'

const MessageCard = () => {
  return (
      <div className='email-box1'>
     
        
      <div className='email-box1-top'>
        <div className='email-box1-nt'>
        <img style={{height:'10rem',width:'10rem',marginTop:'1rem',marginRight:'0.8rem'}} src={marina} alt="" />
          <div className='email-box1-name'>Marina Paul </div>
          <div className='email-box1-time'> <p> 5 minutes ago </p></div>
       
        </div>
      </div>
      <div className='email-box1-info'>
        <p className='msg'>
          A warm welcome and lots of good wishes on becoming part of our growing
          team. Congratulations and on behalf of all the members. Lets all
          welcome
        </p>
        
      </div>
      <div className="attachedfile1">
        
       1
      </div>
    
    </div>
  );
};

export default MessageCard;
