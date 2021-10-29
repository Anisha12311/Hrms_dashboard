import React, {useState} from 'react'
import ApplyReport from '../../../../components/ApplyReport/ApplyReport'

import LeaveRequestReport from '../../../../components/Tables/LeaveRequest/LeaveRequestReport'
import './LeaveRequest.scss'
export default function LeaveRequest() {

    const [apply , setApply] = useState(false)
    return (
        <div>
        <div className = "btn_apply" onClick = {() => setApply(true)}> + Apply </div>
       {apply &&(
           <ApplyReport  setApply={setApply} ></ApplyReport>
       )}
          <LeaveRequestReport/>
        </div>
    )
}
