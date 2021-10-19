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
        <div class="container">
          <table class="table table--shaded">
            <thead class="table__head">
              <tr class="table__row">
                <td class="table__cell table__cell--checkbox table__cell--no-wrap">
                  <input type="checkbox" onClick={()=>setCheckBox(!checkBox)}  />
                </td>
  
                <td class="table__cell table__cell--no-wrap">
                  Name
                </td>
                <td class="table__cell table__cell--no-wrap">
                  Contact No.
                </td>
                <td class="table__cell table__cell--no-wrap">Email</td>
                <td class="table__cell table__cell--no-wrap">Mentor</td>
                <td class="table__cell table__cell--remaino-wrapnder">
                 Department
                </td>
                <td class="table__cell table__cell--no-wrap">Comments</td>
                <td class="table__cell table__cell--no-wrap">Actions</td>
              </tr>
            </thead>
            
            <tbody class="table__body">
  
  
              {dummyData.map((ele, index) => {
  
                 
                  return ( 
                  <>
            <tr className="spacer"></tr>
              <tr class="table__row" key={index} >
                <td class="table__cell table__cell--checkbox table__cell--no-wrap">
                  <input type="checkbox"   onChange={(e)=>e.target.checked===true?handleAdd(ele):handleRemove(ele)} />
                 
                </td>
                <td class="UserTable__name table__cell table__cell--no-wrap">
                  {ele.name}
                </td>
                <td class="UserTable__name table__cell table__cell--no-wrap">
                  {ele.contactNo}
                </td>
                <td class="UserTable__name table__cell table__cell--no-wrap">
                {ele.email}
                </td>
                <td class="UserTable__name table__cell table__cell--no-wrap">
                {ele.mentor}
                </td>
                <td class="UserTable__name table__cell table__cell--no-wrap">
                {ele.department}
                </td>
                <td class="UserTable__name table__cell table__cell--no-wrap">
                {ele.comments}
                </td>
                <td class="UserTable__name table__cell table__cell--no-wrap">
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
  