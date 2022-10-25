import React from 'react'
import login from '../Images/login.jpg'
import { Link , useNavigate} from 'react-router-dom';
import  { useState } from 'react'
import {AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { toast , ToastContainer} from 'react-toastify';
const Login = () => {
  const [loginData, setLoginData] = useState({})
  const navigate = useNavigate() 
const handleChange = (b) => {
  setLoginData ({...loginData, [b.target.name]: b.target.value})
    
}
const handleSubmit = (b) => {
  b.preventDefault();
 let user = JSON.parse(sessionStorage.getItem('user'))
 if (loginData?.email === user?.email && loginData?.password === user?.password){
   toast.success("welcome to chop life gang")
   navigate('/Dashboard')
 }else{
   toast.error("Wrong email or password")
 }
 }
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
      <ToastContainer />
<div className="imglogin"><img src={login} alt='login'></img></div>
   <div className="formlogin">
    <h2> Welcome Back!</h2>
   <form onSubmit={handleSubmit}>
    
        <input
         type ="email"
         required 
         placeholder="Your Email Name:"
         name="email"
         onChange={handleChange}
         /><br/><br/>
     
        <input
      name="password"
         placeholder="Your Password: "
         type={passwordType}
         required
         onChange={handleChange}
         />
            {passwordType === "password" ?
                  <AiFillEye className="btnSho" onClick={togglePassword}/> :
                  <AiFillEyeInvisible className="btnSho" onClick={togglePassword}/>
                }<br/>
   </form><br/>
   <buttton className='button' type="submit" value="Submit"> LOGIN</buttton>
    <div className="para"><p className="p">  <Link to="/Register">Create Account</Link></p>
    <p >Forget Password</p></div>
    </div>
    </div>
    </div>



  )
}

export default Login