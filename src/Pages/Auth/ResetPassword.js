import "./Auth.scss";
import Hero from "../../asserts/icons/forgotpass22.png";
import { useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { URL } from "../../config";

const ResetPassword = (props) => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  console.log(props.match.params.id);
  let { resetToken } = useParams();

  const resetPassword = async () => {
    if (password !== confirmPassword) return;

    try {
      let url = `${URL}/api/dash/resetPassword/${resetToken}`;

      const response = await axios({
        url: url,
        method: "POST",
        data: { password },
      });
      console.log(response);

      if (response.data.status === "success") {
        console.log("Password Reset");
        history.push("/");
      }

      console.log(response.data);
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <section className='login-container'>
      <div className='left'>
        <img style={{width:'100%',height:'80%'}} className='hero-img' src={Hero} alt='hero' />
        <div style={{display:'flex',justifyContent:'center',marginTop:'3rem'}} className="lowertext"> 
   <h3 style={{color:'dodgerblue',textAlign:'center',marginRight:'2rem'}}>Engage</h3>
   <span class="dot"></span>
   <h3 style={{color:'dodgerblue',textAlign:'center',marginRight:'2rem'}}>Explore</h3>
   <span class="dot"></span>
   <h3 style={{color:'dodgerblue',textAlign:'center',marginRight:'2rem'}}>Empower</h3>
        </div>
        
      </div>
      <div className='right'>
        <h1 className='primary-heading'>Jobs Territory</h1>

        {/* start of reset password */}

        <section className='auth-form'>
          <div className='pass-reset'>Reset Your Password</div>
          <p className='pass-text2'>
            Please enter your new password that you can remember easily and
            proceed
          </p>
          <div className='input-container'>
            <label>Enter Password</label>
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className='input-container'>
            <label>Confirm Password</label>
            <input
              type='password'
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>

          <div className='input-container'>
            <button onClick={resetPassword}> Reset Password </button>
          </div>
        </section>

        {/* end of reset password */}
      </div>
    </section>
  );
};

export default ResetPassword;
