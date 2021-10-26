import React from 'react'
import './JoinedCandidate.scss'
import backarrow from '../../../../asserts/icons/downloadArrow.png'
import arrow1 from '../../../../asserts/icons/arrow1.png'
import check from '../../../../asserts/icons/checked.png'
import newest from '../../../../asserts/icons/downtab.png'
import TotalJoinedCandidate from '../TotalJoinedCandidate/TotalJoinedCandidate'
export default function JoinedCandidate() {
    return (
        <div className = "totalCandidate_dash">
            <div className = "recruiters_dashboard">
            <img src = {backarrow} alt = "" />
            </div>
            <div className = "batch">
            <div className = "action">Batch Actions</div>
             <img src = {arrow1} alt = ""/>
            </div>
            <input className = "search" placeholder="Search Job Title, Job ID, Tage"/>
            <div className = "checked">
                <img src = {check} alt = "" />
            </div>
            <div className = "newest">
                <img src = {newest} alt = ""/>
                <div className = "newest_contain">Newest</div>
                <img src = {arrow1} alt = ""/>
            </div>

            <div className = "detail_dash">
                <TotalJoinedCandidate/>
            </div>
        </div>
    )
}
