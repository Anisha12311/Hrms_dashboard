import "./Auth.scss";
import Hero from "../../asserts/images/Login2.png";
import { useContext, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import { MyContext } from "../../App";
import { URL } from "../../config";


const Auth = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const data = useContext(MyContext);

  const history = useHistory();

  // login
  const login = async () => {
    try {
    
    
      // localStorage.setItem('litime',litm);
      const response = await axios({
        url: "http://13.233.247.187/api/dash/login",
        method: "POST",
        data: {
          userName,
          password,
        },
      });

       console.log(response.data);
       if(response.data.success){
        history.push("/dashboard");
       }
      // console.log(response);
      // console.log(response.data.data.user.loginTime);

      // const { token, user } = response.data.data;


      // localStorage.setItem('isOnline',"online")
      // let d = new Date();
      // let hr = d.getHours();
      // let mn = d.getMinutes();
      // let sec = d.getSeconds();
      // let dt = d.getDate();
      // let tnow = d.getTime();
      // localStorage.setItem('logintimeforactive',tnow);
      // let offtime = Math.abs(tnow - localStorage.getItem('louttime'))/1000;
      // offtime = offtime/60;
      // localStorage.setItem('offtimeis',offtime);
      // console.log(offtime);
      // let litm = hr +":"+mn+":"+sec;
      // if(localStorage.getItem('dt') === null)
      // localStorage.setItem('dt',dt);
      // if(localStorage.getItem('logintime') === null ||  dt != localStorage.getItem('dt'))
      // {
      //   localStorage.setItem('logintime',litm);
      // }
      // // if()
      // localStorage.setItem('dt',dt);






      // localStorage.setItem("token", token);
      // localStorage.setItem("user", JSON.stringify(user));
      // // localStorage.getItem("user1", JSON.parse(user));
      // localStorage.getItem("user");
      // // localStorage.getItem("user1");
      // if (token) {
      //   history.push("/dashboard");
      //   // localStorage.setItem("credits",JSON.parse(user.credits))
      //   data.setCredits({ type: "SET_CREDITS", payload: user.credits });
      //   localStorage.setItem("credits", user.credits);
      // } else {
      //   history.push("/");
      // }
    } catch (err) {
      // setError(err.response.data.message);
      // setError(err. )

      console.log(err.response);
    }
  };

  // handelForgotPassword

  return (
    <section className='login-container'>
      <div  className='left'>
      <div style={{marginBottom:'1rem'}} className="uppertext"> 
      <h3 style={{color:'dodgerblue',textAlign:'center'}}>A women should be two things ;</h3>
    <h3 style={{color:'dodgerblue',textAlign:'center'}}>WHO and WHAT she wants!!</h3>
      
      
      </div>
        <img style={{width:'100%',height:'80%'}}  className='hero-img' src={Hero} alt='hero' />
        <div style={{display:'flex',justifyContent:'center',marginTop:'3rem'}} className="lowertext"> 
   <h3 style={{color:'dodgerblue',textAlign:'center',marginRight:'2rem'}}>Engage</h3>
   <span class="dot"></span>
   <h3 style={{color:'dodgerblue',textAlign:'center',marginRight:'2rem'}}>Explore</h3>
   <span class="dot"></span>
   <h3 style={{color:'dodgerblue',textAlign:'center',marginRight:'2rem'}}>Empower</h3>
        </div>
      </div>
      <div className='right'>
        <h1 className='primary-heading'>Jobs Market.AI</h1>

        {/* login component */}

        <section className='auth-form'>
          <div className='input-container'>
            <label>User ID</label>
            <input
              type='text'
              value={userName}
              placeholder='User ID'
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div className={`input-container${error === "" ? "" : " error-div"}`}>
            <label>Password</label>
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className='forgot'>
            {<div className='wrong-pass'>{error}</div>}
            <Link
              style={{
                fontWeight: 600,
                cursor: "pointer",
                textDecoration: "none",
                color: "black",
              }}
              to='/forgot-password'>
              <div className='forgot-pass'>Forgot Password?</div>
            </Link>
          </div>
          <div className='input-container'></div>
          <button onClick={login}> Login </button>
         
        </section>

        {/* end of login component */}

        {/* end of reset password */}
      </div>
    </section>
  );
};

export default Auth;
