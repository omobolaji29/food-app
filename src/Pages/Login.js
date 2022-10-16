import React from 'react'
import login from '../Images/login.jpg'
import { Link } from 'react-router-dom';
import  { useState } from 'react'
import {AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';




const Login = () => {
  const [passwordType, setpasswordType] = useState("password");
const togglePassword = (e) => {
  e.preventDefault();
  if (passwordType === "password") {
    setpasswordType("text");
    return;
  }
  setpasswordType("password");
};
  return (
    <div>
      <div className="login">
<div className="imglogin"><img src={login} alt='login'></img></div>
   <div className="formlogin">
    <h2> Welcome Back!</h2>
   <form>
    
        <input
         type ="email"
         required 
         placeholder="Your Email Name:"
         name="email"
         /><br/><br/>
     
        <input
      name="password"
         placeholder="Your Password: "
         type={passwordType}
         required
         />
            {passwordType === "password" ?
                  <AiFillEye className="btnSho" onClick={togglePassword}/> :
                  <AiFillEyeInvisible className="btnSho" onClick={togglePassword}/>
                }<br/>
   </form><br/>
   <buttton className='button'> LOGIN</buttton>
    <div className="para"><p className="p">  <Link to="/Register">Create Account</Link></p>
    <p >Forget Password</p></div>
    </div>
    </div>
    </div>



  )
}

export default Login