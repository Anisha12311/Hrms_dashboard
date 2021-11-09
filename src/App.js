import React, {createContext, useState,useReducer} from 'react';
import './App.css';
import {BrowserRouter, Route,Switch} from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard';
import Employees from './Pages/Employee/Employees';

import Performance from './Pages/Performance/Performance';
import Me from './Pages/Me/Me';
import Email from './Pages/Email/Email';
import Message from './Pages/Messages/Message';
import Feeds from './Pages/Feeds/Feeds';
import Logout from './Pages/Logout/Logout';
import reducer from './Reducer/reducer';
import Sidebar from './components/Sidebar/Sidebar';
import NavBar from './components/NavBar/NavBar';
import Reports from './Pages/Reports/Reports';
import Auth from '../src/Pages/Auth/Auth'
import ForgotPassword from "../src/Pages/Auth/ForgotPassword"
import ResetPassword from "../src/Pages/Auth/ResetPassword";

export const MyContext = createContext()

const iState = {
  heading : "Dashboard",
  credits: "",
}



function App() {
   
  const [data,dispatch] = useReducer(reducer,iState)
  const [heading, setHeading] = useState("Dashboard")

  
  return (
    <MyContext.Provider value = {{heading:data,changeHeading:dispatch,credits: data }}>
    <div className="App">
    <BrowserRouter>
         <Switch>
         <Route exact path='/' component={Auth} />
        <Route exact path='/forgot-password' component={ForgotPassword} />
        <Route exact path='/reset-password/:id' component={ResetPassword} />
         <div >
        
          <Sidebar setHeading={setHeading} />
          <section className="hero-container">
           
        
              <NavBar heading={heading} />
           <Route exact path = "/dashboard" render = {() => <Dashboard/>}/>
               <Route exact path = "/employees" component = {Employees}/>
               <Route exact path = "/performance" component = {Performance}/>
               <Route exact path = "/me" component = { Me }/>
               <Route exact path = "/email" component = {Email}/>
               <Route exact path = "/messages" component = {Message}/>
               <Route exact path = "/feeds" component = {Feeds}/>
               <Route exact path = "/reports" component = {Reports}/>
               <Route exact path = "/" component = {Logout}/>
        
            </section>
            </div>
         </Switch> 
         </BrowserRouter>
    </div>
    </MyContext.Provider>
  );
}

export default App;
