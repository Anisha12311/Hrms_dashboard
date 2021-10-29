import React from 'react'
import { Chart } from "react-google-charts";
import './LeaveStatsChat.scss'

export default function LeaveStatsChart() {
    return (
        <div className = "summary_chart">
          <Chart
  width={'100rem'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
   
    ['Task', 'Hours per Day'],
    ['Public Holidays', 38],
    ['Sick Days', 6],
    ['Personal Leave', 34],
    ['Miscellanous Leave', 12],
    ['LOP', 10],

  ]}
  options={{
    
    backgroundColor:"#f2f2f2",
    width:600,  
   
  }}
  rootProps={{ 'data-testid': '1' }}
/>  
        </div>
    )
}
