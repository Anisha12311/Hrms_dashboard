import React, { useContext, useEffect, useState } from "react";
import "./NavBar.scss";
import {AiOutlineSearch } from 'react-icons/ai';
import { MyContext } from "../../App";
import Abha from '../../asserts/images/Abha.png'
const NavBar = () => {

 const data = useContext(MyContext)
 const heading = data.heading.heading

 

console.log(data.heading)
 return (
    <div className="navbar-container">
      <div className="navbar-inside">
        <div className="navbar-info">
    {heading}
      </div>
        <div className="navbar-search-box">
          <input type="text" placeholder="Search Candidate" />
          <AiOutlineSearch/>
 
          </div>
          <div className="navbar-user">
              <img className="user-img" src = {Abha} alt = ""/>
              <div className="users-name">Oda Dink</div>
              <div className="users-type">Recruiter</div>
          </div>
        
        </div>
        </div>
  )}
  export default NavBar