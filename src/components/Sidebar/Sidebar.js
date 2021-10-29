import React, {useContext, useState} from 'react'
import { Link,  useLocation } from "react-router-dom";
import { MyContext } from "../../App";
import './Sidebar.scss'

const Sidebar = ({ setHeading }) => {

    const location = useLocation();
  const [active,setActive] = useState (location.pathname.substring(1)) 

  const heading = useContext(MyContext)

  const action=()=>{

    setActive("Home")
    console.log("job Listing from sidebar ")
  }
   return (

    
       <nav className = "hero-left">
         <div className = "heading-primary">Jobs Territory  </div>
             <ul>


          <Link to="/">
      <li className={active==="dashboard"?"activeTab":""} 
      onClick={()=>{setActive("dashboard");

      heading.changeHeading({type:"CHANGE_HEADING",payload:"Dashboard"})
      }} >      

      <svg
           width='22'
           height='22'
            viewBox='0 0 22 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M12.5746 0.603754C12.1419 0.215036 11.5808 0 10.9992 0C10.4176 0 9.8565 0.215036 9.42386 0.603754L0.781 8.36975C0.535264 8.59074 0.338744 8.86093 0.204195 9.16278C0.0696459 9.46464 7.56766e-05 9.79141 0 10.1219V21.2083C0 21.8335 0.248341 22.433 0.690391 22.8751C1.13244 23.3171 1.73199 23.5655 2.35714 23.5655H5.5C6.12515 23.5655 6.7247 23.3171 7.16675 22.8751C7.6088 22.433 7.85714 21.8335 7.85714 21.2083V14.9226C7.85714 14.7142 7.93992 14.5144 8.08727 14.367C8.23462 14.2197 8.43447 14.1369 8.64286 14.1369H13.3571C13.5655 14.1369 13.7654 14.2197 13.9127 14.367C14.0601 14.5144 14.1429 14.7142 14.1429 14.9226V21.2083C14.1429 21.8335 14.3912 22.433 14.8332 22.8751C15.2753 23.3171 15.8748 23.5655 16.5 23.5655H19.6429C20.268 23.5655 20.8676 23.3171 21.3096 22.8751C21.7517 22.433 22 21.8335 22 21.2083V10.1219C21.9999 9.79141 21.9304 9.46464 21.7958 9.16278C21.6613 8.86093 21.4647 8.59074 21.219 8.36975L12.5761 0.603754H12.5746Z'
              fill='white'
            />
          </svg>
          <span>Home</span>
        </li>
              </Link>



              <Link to="/employees">
      <li 
      className={active==="employees"?"activeTab":""} 
      onClick={ ()=>{setActive("employees");

      heading.changeHeading({type:"CHANGE_HEADING",payload:"Employees"})

    }}
    >
     
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
  <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
</svg>
          <span>Employees</span>
        </li>
              </Link>
               <Link to="/performance">
      <li  
      className={active==="performance"?"activeTab":""} 
      onClick={()=>{setActive("performance");

      heading.changeHeading({type:"CHANGE_HEADING",payload:"Performance"})
    }}
      >
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5z"/>
</svg>
          <span>Performance</span>
        </li>
              </Link>



              <Link to="/me">
      <li
      className={active==="me"?"activeTab":""} 
      onClick={()=>{setActive("me");

      heading.changeHeading({type:"CHANGE_HEADING",payload:"Me"})
    }}
      >
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-fill" viewBox="0 0 16 16">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z"/>
</svg>
          <span>Me</span>
        </li>
              </Link>



              <Link to="/email">
      <li
            className={active==="email"?"activeTab":""} 
            onClick={()=>{setActive("email");
 
            heading.changeHeading({type:"CHANGE_HEADING",payload:"Email"})
          }}
      >
       <svg
            width='30'
            height='24'
            viewBox='0 0 30 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M27 0H3C1.35 0 0.015 1.35 0.015 3L0 21C0 22.65 1.35 24 3 24H27C28.65 24 30 22.65 30 21V3C30 1.35 28.65 0 27 0ZM27 6L15 13.5L3 6V3L15 10.5L27 3V6Z'
              fill='white'
              />
          </svg>
          <span>Email</span>
        </li>
              </Link>


             
              <Link to="/messages">
      <li
       className={active==="messages"?"activeTab":""} 
       onClick={()=>{setActive("messages");

       heading.changeHeading({type:"CHANGE_HEADING",payload:"Messages"})
      }}
      >
      

          <svg
            width='30'
            height='30'
            viewBox='0 0 30 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M15.03 0C23.55 0 30 6.98548 30 14.9775C30 24.2464 22.44 30 15 30C12.54 30 9.81 29.339 7.62 28.0471C6.855 27.5814 6.21 27.2359 5.385 27.5063L2.355 28.4076C1.59 28.648 0.9 28.0471 1.125 27.2359L2.13 23.8708C2.295 23.4051 2.265 22.9094 2.025 22.5188C0.735 20.1452 0 17.5463 0 15.0225C0 7.12068 6.315 0 15.03 0ZM21.885 13.1147C20.82 13.1147 19.965 13.971 19.965 15.0376C19.965 16.0891 20.82 16.9604 21.885 16.9604C22.95 16.9604 23.805 16.0891 23.805 15.0376C23.805 13.971 22.95 13.1147 21.885 13.1147ZM14.97 13.1147C13.92 13.0996 13.05 13.971 13.05 15.0225C13.05 16.0891 13.905 16.9454 14.97 16.9604C16.035 16.9604 16.89 16.0891 16.89 15.0376C16.89 13.971 16.035 13.1147 14.97 13.1147ZM8.055 13.1147C6.99 13.1147 6.135 13.971 6.135 15.0376C6.135 16.0891 7.005 16.9604 8.055 16.9604C9.12 16.9454 9.975 16.0891 9.975 15.0376C9.975 13.971 9.12 13.1147 8.055 13.1147Z'
              fill='white'
            />
          </svg>
          <span>Messages</span>
        </li>
              </Link>
      

        


              <Link to="/feeds">
      <li
           className={active==="feeds"?"activeTab":""} 
           onClick={()=>{setActive("feeds");
  
           heading.changeHeading({type:"CHANGE_HEADING",payload:"Feeds"})
          }}
      >
      <svg
            width='28'
            height='32'
            viewBox='0 0 28 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M14 31.1111C14.9634 31.1123 15.9032 30.8134 16.6888 30.2558C17.4744 29.6982 18.0667 28.9098 18.3836 28H9.61644C9.93325 28.9098 10.5256 29.6982 11.3112 30.2558C12.0968 30.8134 13.0366 31.1123 14 31.1111ZM24.8889 19.5782V12.4444C24.8889 7.44022 21.49 3.22467 16.8856 1.95689C16.4298 0.808889 15.316 0 14 0C12.684 0 11.5702 0.808889 11.1144 1.95689C6.51 3.22622 3.11111 7.44022 3.11111 12.4444V19.5782L0.455779 22.2336C0.311046 22.3778 0.196265 22.5492 0.118044 22.7379C0.0398224 22.9267 -0.000294698 23.129 1.62971e-06 23.3333V24.8889C1.62971e-06 25.3014 0.16389 25.6971 0.455613 25.9888C0.747336 26.2806 1.143 26.4444 1.55556 26.4444H26.4444C26.857 26.4444 27.2527 26.2806 27.5444 25.9888C27.8361 25.6971 28 25.3014 28 24.8889V23.3333C28.0003 23.129 27.9602 22.9267 27.882 22.7379C27.8037 22.5492 27.689 22.3778 27.5442 22.2336L24.8889 19.5782Z'
              fill='white'
            />
          </svg>
 
          <span>Feeds</span>
        </li>
        
              </Link>

 
              <Link to="/reports">
      <li
             className={active==="reports"?"activeTab":""} 
             onClick={()=>{setActive("reports");
             setHeading("Reports");
             heading.changeHeading({type:"CHANGE_HEADING",payload:"Reports"})

            }}
      >
          <svg
            width='30'
            height='24'
            viewBox='0 0 30 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M27 0H3C1.35 0 0.015 1.35 0.015 3L0 21C0 22.65 1.35 24 3 24H27C28.65 24 30 22.65 30 21V3C30 1.35 28.65 0 27 0ZM27 6L15 13.5L3 6V3L15 10.5L27 3V6Z'
              fill='white'
              />
          </svg>
          <span>Reports</span>
        </li>
              </Link>



           <li 
               className={active==="logout"?"activeTab":""} 
               onClick={()=>{
                 setActive("logout");
                 }}
        >              <svg
                width='27'
                height='28'
                viewBox='0 0 27 28'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M21.3387 2.97448C24.7681 5.44863 27 9.49524 27 14.0752C27 21.5966 20.9686 27.694 13.5272 27.7105C6.09678 27.727 0.010897 21.6076 9.93536e-06 14.0972C-0.00543361 9.51723 2.22642 5.45963 5.65041 2.97998C6.28731 2.52363 7.1746 2.71607 7.55565 3.40333L8.41573 4.9483C8.7369 5.5256 8.58448 6.25685 8.05646 6.65272C5.79739 8.34614 4.35485 11.0292 4.35485 14.0697C4.3494 19.1444 8.41029 23.312 13.5 23.312C18.4863 23.312 22.6778 19.2324 22.6452 14.0147C22.6288 11.1667 21.3006 8.41761 18.9381 6.64722C18.4101 6.25136 18.2631 5.52011 18.5843 4.9483L19.4444 3.40333C19.8254 2.72157 20.7073 2.51814 21.3387 2.97448ZM15.6774 14.515V1.31955C15.6774 0.588298 15.095 0 14.371 0H12.629C11.905 0 11.3226 0.588298 11.3226 1.31955V14.515C11.3226 15.2463 11.905 15.8346 12.629 15.8346H14.371C15.095 15.8346 15.6774 15.2463 15.6774 14.515Z'
                  fill='white'
                />
              </svg>
              <span>Logout</span>
            </li>
            

      </ul>
    </nav>
  );
};

export default Sidebar