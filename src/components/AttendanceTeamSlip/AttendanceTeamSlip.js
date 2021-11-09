import React,{useState} from 'react'
import './AttendanceTeamSlip.scss'
import { FaFilter } from 'react-icons/fa'
import AttendanceTableslip from '../AttendanceTabeslip/AttendanceTableslip'
export default function AttendanceTeamSlip() {

    const [Popup2, setPopup2] = useState(false)
    return (
        <div className = " popup_container">
            <div className = "popupstate">
            <div className="left">

<div className="leftContent">
  <div className="timeatwork">
    Time At Work
  </div>
  <div className="details">
    <div className="name">
Name:

    <div className="Ashu">
Ashu
</div>
    </div>
    <div className="id">
      ID:#JT0667
    </div>
    <div className="department">
      Department: 
      <div className="developer">
        Developer
      </div>
    </div>
    
  </div>
  <div className="gridBox">
    <div className="sampleCard">
   <p>Average Login Time</p>
   <br />
  <p>10:32 AM</p>

    </div>
    <div className="sampleCard">
   <p>Average Time at Work</p>
   <br />
      <p>12 hours</p>

    </div>
    <div className="sampleCard">
   <p>Average Active Time</p>
   <br />
   <p>7 hr 15 min</p>

    </div>
    <br/>
    <div className="sampleCard">
   <p>Average Productivity</p>
   <br />
    <p> 89%</p>

    </div>
    <div className="sampleCard">
   <p>Average Effectivness</p>
   <br />
       <p>65%</p>

    </div>
    <div className="sampleCard">
   <p>Average Logout Time</p>
   <br />
    <p>09:32 PM</p>

    </div>
    <div onClick={()=>setPopup2(true)} style={{cursor:'pointer'}}  className="sampleCard">
   <p>Total Leave</p>
   <br />
    <p>5 Days</p>

    </div>
    <div className="sampleCard">
   <p>Remaining Leave</p>
   <br />
    <p>2 Days</p>

    </div>
  </div>
</div>
</div>

<div  className="right1">

<div className="Myfilter">
              
            
       
              <button>
          <span >
            <>
    
      <FaFilter style={{color:'dodgerblue',alignItems:'center', height : '2rem'}} />
    
            <span style={{paddingRight:'0.4rem',fontSize : '3rem'}} >Filters</span>
       
       
            </>
          </span>
     </button>
        <input style={{width:'6rem',display:'inline-block',position:'absolute',left:'8.4rem',top:'1.2rem'}}  className="date" type="date" />
       
          </div>
</div>
            </div>
            {Popup2 && <AttendanceTableslip setPopup2 = {setPopup2}></AttendanceTableslip>}
        </div>
    )
}
