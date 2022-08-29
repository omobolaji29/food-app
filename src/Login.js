import React from 'react'
import login from '../src/login.jpg'
import { Link } from 'react-router-dom';
const Login = () => {
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
         /><br/><br/>
     
        <input
         type ="password" 
         placeholder="Your Password: "
         required
         /><br/>
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