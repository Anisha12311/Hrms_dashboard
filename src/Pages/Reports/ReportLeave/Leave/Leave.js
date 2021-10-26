import React from 'react'

import { AiOutlineDownload } from 'react-icons/ai'
import { FaFilter } from 'react-icons/fa'
import LeaveQuickReport from '../../../../components/Tables/LeaveQuickReport/LeaveQuickReport';

function Leave(){

    const handleSort = () => {
        const dropdown = document.querySelector(".job-sort-batch-action2");
        const batchArrow = document.querySelector(".job-sort-batch-arrow");
    
        dropdown.classList.toggle("job-sort-batch-visible");
        batchArrow.classList.toggle("job-sort-batch-rotate");
      };

  return(
      <div className = "Container_use">
          <div className = "Contain_use">
             
              <div className = "Excel_contain">
              
              <div className = "Report_Icondow">
                  <AiOutlineDownload style = {{width : '40px',height : '30px'}}/>
              </div>
              
              <div className = "Report_files">
                  Excel File
              </div>
              </div>
             
            <div className="listings-bar-right-filter1_dash1">
              
            
       
              <button onClick={handleSort} className='btns btn-white'>
          <span className='job-sort-batch-action2-rel'>
            <>
            <FaFilter style = {{color :"#2186F2",marginRight : "10px"}}/>
            <span>Filter</span>
              <ul className='job-sort-batch-action2'>
                <div className='job-sort-batch-action2-square'>&nbsp;</div>
                
                <li><div>Recruiters</div> </li>
                <li><div>Mentors</div></li>
               

             </ul>
            </>
          </span>
  
          <svg
            width='16'
            className='job-sort-batch-arrow'
            height='12'
            viewBox='0 0 492 492'
            fill='#2186F2'>
            <path d='M484.13 124.99l-16.11-16.23a26.72 26.72 0 00-19.04-7.86c-7.2 0-13.96 2.79-19.03 7.86L246.1 292.6 62.06 108.55c-5.07-5.06-11.82-7.85-19.03-7.85s-13.97 2.79-19.04 7.85L7.87 124.68a26.94 26.94 0 000 38.06l219.14 219.93c5.06 5.06 11.81 8.63 19.08 8.63h.09c7.2 0 13.96-3.57 19.02-8.63l218.93-219.33A27.18 27.18 0 00492 144.1c0-7.2-2.8-14.06-7.87-19.12z'></path>
          </svg>
  
        </button>
              </div>
            
              <div>
              <LeaveQuickReport/>
              </div>
          </div>
      </div>
     
  )
}

export default Leave



