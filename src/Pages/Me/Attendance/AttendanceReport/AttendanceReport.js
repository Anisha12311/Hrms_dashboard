import React, { useEffect, useState } from "react";
import ManualReport from "../../../../components/ManualReport/ManualReport";
import './AttendanceReport.scss'
import MonthWorkReport from "./MonthWorkReport/MonthWorkReport";
import TodayWorkReport from "./TodayWorkReport/TodayWorkReport";
import WeekWorkReport from "./WeekWorkReport/WeekWorkReport";


export default function AttendanceReport() {



  const [time, setTime] = useState("Today");
  const [ltime, setltime] = useState("")
  const [manualLogin, setManualLogin] = useState(false);
  const [mousePisition, setmousePisition] = useState({
    x: null,
    y: null
  })


  const logintime = () => {
    if(localStorage.getItem('token'))
    {
      let d = new Date();

      setltime(d.getHours()+" ",d.getMinutes(),+" ",d.getSeconds());

    }
  }






  // { "notifications": [], "credits": 475, "unlockedProfiles":
  //  ["6134b60f8cce4a752d83f15c", "61335adb562ea057d3999ac8", "61335adb562ea057d3999ac8",
  //   "61418ad32a4be83ccc18c653", "61418ad32a4be83ccc18c653", "61418ad32a4be83ccc18c653", 
  //   "61418ad32a4be83ccc18c653", "61418ad32a4be83ccc18c652", "61418ad32a4be83ccc18c652"], 
  //   "permissions": [], "deleted": false, "_id": "6103c267e2a409395c0c1e30", "userName": 
  //   "hemkov", "email": "hemanth@applore.in", "password": "$2b$10$anoMpbiCIiTydjf8a1uTCeEFMsJBeZf3KQDhl2ZF2U1o5.5XGGH1W"
  //   "createdAt": "2021-07-30T09:12:07.526Z", "updatedAt": "2021-10-08T19:01:26.442Z", "__v": 1, "firstName": " bhhgggghvgg", 
  //   "lastName": "dghhhr", "middleName": "gbghh", "passwordResetExpires": "2021-10-07T19:34:15.435Z", "passwordResetToken":
  //    "90f8087ec4f0bf99020f900d22ecb7796e8acec646992a7eaf91f9dd51d6f638", "logOutTime": "2021-10-08T19:01:26.442Z", "loginTime": 
  //    "2021-10-11T03:29:11.153Z" }














  useEffect(() => {
    logintime();
  }, [])

  return (
    <div >
      <div className="att-head">
        <h1>My Work Hour</h1>
        <button className="btn btn-w btn-active"
          onClick={() => setManualLogin(true)}
        >Manual Login</button>
      
        <div className="btn-group">
          <button
            className={`btn btn-w btn-${time === "Today" ? "active" : "inactive"
              }`}
            onClick={() => setTime("Today")}
          >
            Today
          </button>
          <button
            className={`btn btn-w btn-${time === "Week" ? "active" : "inactive"
              }`}
            onClick={() => setTime("Week")}
          >
            Week
          </button>
          <button
            className={`btn btn-w btn-${time === "Month" ? "active" : "inactive"
              }`}
            onClick={() => setTime("Month")}
          >
            Month
          </button>

           


        </div>

      </div>

       {manualLogin&&(
                 <ManualReport setManualLogin={setManualLogin} ></ManualReport>
             )}
      {time === "Today" && (
     <TodayWorkReport></TodayWorkReport>
    
   )}

{time === "Week" && (
     <WeekWorkReport></WeekWorkReport>
    
   )}

{time === "Month" && (
     <MonthWorkReport></MonthWorkReport>
    
   )}

      {/* <Chart
  width={'500px'}
  height={'300px'}
  chartType="AreaChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Year', 'Sales', 'Expenses'],
    ['2013', 1000, 400],
    ['2014', 1170, 460],
    ['2015', 660, 1120],
    ['2016', 1030, 540],
  ]}
  options={{
    title: 'Company Performance',
    hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
    vAxis: { minValue: 0 },
    // For the legend to fit, we make the chart area smaller
    chartArea: { width: '50%', height: '70%' },
    // lineWidth: 25
  }}
  // For tests
  rootProps={{ 'data-testid': '1' }}
/> */}
    </div>
  );
}
