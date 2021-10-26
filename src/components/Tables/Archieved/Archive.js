import React,{useState,useEffect} from 'react'
import './Archive.scss'
import whatsup from '../../../asserts/icons/whatsup.png';
import message1 from '../../../asserts/icons/message1.png'
import email1 from '../../../asserts/icons/Email1.png'

export default function Archive() {
    const data=[];

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
    contactNo:"558 887 9645",
    email:"avi07@gmail.com",
    mentor:"Raj",
    department:"Design",
    comments: "Lorem ipsum dolor sit amet",
  },
  
  {
    name:"Abhishek",
    contactNo:"558 887 9645",
    email:"avi07@gmail.com",
    mentor:"Raj",
    department:"Design",
    comments: "Lorem ipsum dolor sit amet",
  },
  
  
  {
    name:"Abhishek",
    contactNo:"558 887 9645",
    email:"avi07@gmail.com",
    mentor:"Raj",
    department:"Design",
    comments: "Lorem ipsum dolor sit amet",
  },
  
  
  {
    name:"Abhishek",
    contactNo:"558 887 9645",
    email:"avi07@gmail.com",
    mentor:"Raj",
    department:"Design",
    comments: "Lorem ipsum dolor sit amet",
  },
  {
    name:"Abhishek",
    contactNo:"558 887 9645",
    email:"avi07@gmail.com",
    mentor:"Raj",
    department:"Design",
    comments: "Lorem ipsum dolor sit amet",
  },
  {
    name:"Abhishek",
    contactNo:"558 887 9645",
    email:"avi07@gmail.com",
    mentor:"Raj",
    department:"Design",
    comments: "Lorem ipsum dolor sit amet",
  },
  {
    name:"Abhishek",
    contactNo:"558 887 9645",
    email:"avi07@gmail.com",
    mentor:"Raj",
    department:"Design",
    comments: "Lorem ipsum dolor sit amet",
  },
  
  
  ]
  
    return (
      <div>
        <div class="container1">
          <table class="table1 table--shaded1">
            <thead class="table__head1">
              <tr class="table__row1">
                <td class="table__cell1 table__cell--checkbox1 table__cell--no-wrap1">
                  <input type="checkbox" onClick={()=>setCheckBox(!checkBox)}  />
                </td>
  
                <td class="table__cell1 table__cell--no-wrap1">
                  Name
                </td>
                <td class="table__cell1 table__cell--no-wrap1">
                  Contact No.
                </td>
                <td class="table__cell1 table__cell--no-wrap1">Email</td>
                <td class="table__cell1 table__cell--no-wrap1">Mentor</td>
                <td class="table__cell1 table__cell--remaino-wrapnder1">
                 Department
                </td>
                <td class="table__cell1 table__cell--no-wrap1">Comments</td>
                <td class="table__cell1 table__cell--no-wrap1">Actions</td>
              </tr>
            </thead>
            
            <tbody class="table__body1">
  
  
              {dummyData.map((ele, index) => {
  
                 
                  return ( 
                  <>
            <tr className="spacer1"></tr>
              <tr class="table__row1" key={index} >
                <td class="table__cell1 table__cell--checkbox1 table__cell--no-wrap1">
                  <input type="checkbox"   onChange={(e)=>e.target.checked===true?handleAdd(ele):handleRemove(ele)} />
                 
                </td>
                <td class="UserTable__name table__cell1 table__cell--no-wrap1">
                  {ele.name}
                </td>
                <td class="UserTable__name table__cel1 table__cell--no-wrap1">
                  {ele.contactNo}
                </td>
                <td class="UserTable__name table__cell1 table__cell--no-wrap1">
                {ele.email}
                </td>
                <td class="UserTable__name table__cell1 table__cell--no-wrap1">
                {ele.mentor}
                </td>
                <td class="UserTable__name table__cell1 table__cell--no-wrap1">
                {ele.department}
                </td>
                <td class="UserTable__name table__cell1 table__cell--no-wrap1">
                {ele.comments}
                </td>
                <td class="UserTable__name table__cell1 table__cell--no-wrap1">
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
  