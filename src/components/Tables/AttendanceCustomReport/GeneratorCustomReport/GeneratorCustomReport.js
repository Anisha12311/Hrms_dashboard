import React from 'react'
import Backarrow from "../../../../asserts/icons/downloadArrow.png";
import { AiOutlineDownload } from 'react-icons/ai'


import GeneratorCustomReport1 from './GeneratorCustomReport1';

export default function GeneratorCustomReport() {
    return (
        <div className = "generate_box">
        
                <img src={Backarrow} className = "backarrow"alt="backarrow icon" />
               
              
             <div className = "Jobposting_head">Customized Reports (30)</div>
             <div className = "Custom_contain">
        
        <div className = "Report_Icondow">
            <AiOutlineDownload style = {{width : "30px",height : "30px"}}/>
        </div>
        
        <div className = "Report_files">
            Excel File
        </div>
        </div>
       <GeneratorCustomReport1/>
        </div>
    )
}
