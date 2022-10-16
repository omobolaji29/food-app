import React from 'react'
import  { useState } from 'react'
import register from '../Images/register.jpg'
import {AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Register = () => {
  
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
    <>
      <div className="register">
        <div className="registerimg">
          <img src={register} alt='register' ></img>
        </div>
        <div className="formregister" >
          <h2> Welcome to Bola's Cafe!</h2>
       <form>
         <input
         type ="text"
         required
         placeholder="Your First Name:"
         name="name"
         /><br/><br/>
   
        <input
         type ="email"
         required
         placeholder="Your Email Name:"
         name="email"
         /><br/><br/>
    
        <input
         required 
         placeholder="Your Password:"
         id="password"
         type={passwordType}
         name="password"
         />{passwordType === "password" ?
         <AiFillEye className="btnShow" onClick={togglePassword}/> :
         <AiFillEyeInvisible className="btnShow" onClick={togglePassword}/>
       }
   </form>
   <buttton className='button'> SIGN UP</buttton>
    <p className="p">Already have an account. <Link to="/Login">LOGIN</Link> </p></div>
 
    </div>
    </>
  )
}

export default Register