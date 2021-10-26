import React,{useState,useEffect} from 'react'
import './JoinedOnboarded.scss'
import whatsup from '../../../../asserts/icons/whatsup.png';
import message1 from '../../../../asserts/icons/message1.png'
import email1 from '../../../../asserts/icons/Email1.png'

export default function JoinedOnboarded() {


    const [checkBox,setCheckBox] = useState(false)
    const [listData,setListData] = useState([])
  
  useEffect(() => {
   console.log(listData)
  }, [listData])
  
  
  const handleAdd=(data)=>{
  
  setListData([...listData,data])
  
  }
  
  const handleRemove=(data)=>{
  let temp=listData.filter(list=>{
    return list.name!==data.name
  })
  setListData(temp)
  }
  
  
  const dummyData = [{
    name:"Abhishek",
   employess : "#JC-00150",
   contact : "558-887-9645",
   email : "avi07@gmail.com",
   joined : "3 July, 2021",
   Designation : "Automation Testing Analyst"
  },
  
  {
    name:"Abhishek",
    employess : "#JC-00150",
    contact : "558-887-9645",
    email : "avi07@gmail.com",
    joined : "3 July, 2021",
    Designation : "Automation Testing Analyst"
  },
  
  
  {
    name:"Abhishek",
    employess : "#JC-00150",
    contact : "558-887-9645",
    email : "avi07@gmail.com",
    joined : "3 July, 2021",
    Designation : "Automation Testing Analyst"
  },
  
  
  {
    name:"Abhishek",
    employess : "#JC-00150",
    contact : "558-887-9645",
    email : "avi07@gmail.com",
    joined : "3 July, 2021",
    Designation : "Automation Testing Analyst"
  },
  {
    name:"Abhishek",
   employess : "#JC-00150",
   contact : "558-887-9645",
   email : "avi07@gmail.com",
   joined : "3 July, 2021",
   Designation : "Automation Testing Analyst"
  },
  {
    name:"Abhishek",
   employess : "#JC-00150",
   contact : "558-887-9645",
   email : "avi07@gmail.com",
   joined : "3 July, 2021",
   Designation : "Automation Testing Analyst"
  },
  {
    name:"Abhishek",
    employess : "#JC-00150",
    contact : "558-887-9645",
    email : "avi07@gmail.com",
    joined : "3 July, 2021",
    Designation : "Automation Testing Analyst"
  },
  
  
  ]
  
    return (
      <div>
        <div class="container_ondash">
          <table class="table_ondash table--shaded_ondash">
            <thead class="table__head_ondash">
              <tr class="table__row_ondash">
               
  
                <td class="table__cell_ondash table__cell--no-wrap_ondash">
                  Name
                </td>
                <td class="table__cell_ondash table__cell--no-wrap_ondash">Employee ID</td>
                <td class="table__cell_ondash table__cell--no-wrap_ondash">
                  Contact
                </td>
                <td class="table__cell_ondash table__cell--no-wrap_ondash">Email</td>

                <td class="table__cell_ondash table__cell--no-wrap_ondash">
                 Joined On
                </td>
                <td class="table__cell_ondash table__cell--no-wrap_ondash">Designation</td>
                <td class="table__cell_ondash table__cell--no-wrap_ondash">Actions</td>
              </tr>
            </thead>
            
            <tbody class="table__body_ondash">
  
  
              {dummyData.map((ele, index) => {
  
                 
                  return ( 
                  <>
            <tr className="spacer_ondash"></tr>
              <tr class="table__row_ondash" key={index} >
               
                <td class="UserTable__name table__cell_ondash table__cell--no-wrap_ondash">
                  {ele.name}
                </td>
                <td class="UserTable__name table__cell_ondash table__cell--no-wrap_ondash">
                  {ele.employess}
                </td>
                <td class="UserTable__name table__cell_ondash table__cell--no-wrap_ondash">
                {ele.contact}
                </td>
                <td class="UserTable__name table__cell_ondash table__cell--no-wrap_ondash">
                {ele.email}
                </td>
                <td class="UserTable__name table__cell_ondash table__cell--no-wrap_ondash">
                {ele.joined}
                </td>
                <td class="UserTable__name table__cell_ondash table__cell--no-wrap_ondash">
                {ele.Designation}
                </td>
                
                <td class="UserTable__name table__cell_ondash table__cell--no-wrap_ondash">
                 <div style={{display: "flex",
      justifyContent: "center",
      alignItems: "center"}}>
                   <img src={whatsup} style={{position: "relative", width : "40px",
      top: "0.5rem"}} alt = ""></img>
                   <img src={message1} style={{marginRight:"1.5rem", width : "40px"}} alt = ""></img>
                   <img src={email1} alt = ""  style={{ width : "40px"}}></img>
                 </div>
                </td>
              </tr>
              </>
                  )})}
          
            
            </tbody>
          </table>
  
          <div className="table-footer">
                  <div className="footer-left">
                      Showing 10 from 100 data
                  </div>
                  <div className="footer-right">  
  
                      <button className="btn1 btn1-w btn-inactive">{`<< Previous`}</button>
                      
                      <button  className="btn1 btn-inactive pages">1</button>
                      <button  className="btn1  btn-inactive pages">2</button>
                      <button  className="btn1  btn-inactive pages">3</button>
                      
                      <button className="btn1 btn1-w btn-inactive">{`Next >>`}</button>
                  </div>
              </div>
        </div>
      </div>
    );
  }
  