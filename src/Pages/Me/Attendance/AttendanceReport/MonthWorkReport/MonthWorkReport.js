import React, { useEffect, useState } from 'react'

import { Line } from "react-chartjs-2"
import meChart from '../../../../../asserts/icons/meGraph.png'


const MonthWorkReport = () => {




  function formatAMPM() {
    const timeing = JSON.parse(localStorage.getItem('user'))
    let dat = new Date(timeing.loginTime)
    var hours = dat.getHours();
    var minutes = dat.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }


  



    const Chart = () =>{

        return(
            <Line
            data={{
              labels: ['Red', 'Blue', 'Green'],
              datasets: [
                {
                  label: '# of votes',
                  data: [12, 19, 8],
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    
                  ],
                  borderWidth: 1,
                },
           
              ],
            }}
            // height={400}
            width={218}
            options={{
              maintainAspectRatio: false,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
              legend: {
                labels: {
                  fontSize: 25,
                },
              },
            }}
          />
        )
    }

    const AttendenceData = [
        {
            id:1,
            name:"Arrival Time",
            Time:`${localStorage.getItem('logintime')}`
        },
       
        {
            id:2,
            name:"Active Time",
            Time:`${localStorage.getItem('activeTime')} ${localStorage.getItem('activeFormat')}`,
            average : "Average",
            avTime : "6h 38min"
           
        },
        {
            id:3,
            name:`Time at Work`,
            Time:`${localStorage.getItem('tatwork')} ${localStorage.getItem('activeFormat')}`,
            average : "Average",
            avTime : "8h 28min"
        
        },
        {
            id:4,
            name:"Effectiveness",
            Time:`${localStorage.getItem('effi')}%`
        },
        {
            id:5,
            name:"Productive",
            Time:`${Math.floor(localStorage.getItem('effi')/2.3)}%`
        },
        {
            id:6,
            name:"Logged Out Time",
            Time:`${localStorage.getItem('lotime')}`
        }
    ]

    return (
        <div className="Attendence-Container">
            {
                AttendenceData.map((val,ind)=>{
                    return(
                        <div className="Attendence-box" key={ind}>
                            <div className="attendence-stats">
                                <p>{val.name}</p>
                                <h4>{val.Time}</h4>
                                <h5>{val.average}</h5>
                                <h5>{val.avTime}</h5>
                            </div>
                            <div className="attendence-chart">
                                <img src={meChart} alt="chart" className="ChartImg" />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MonthWorkReport
