import React from 'react'
import register from '../Images/register.jpg'
import { AiFillEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Register = () => {
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
         /><br/><br/>
   
        <input
         type ="email"
         required
         placeholder="Your Email Name:"
         /><br/><br/>
    
        <input
         type ="password"
         required 
         placeholder="Your Password:"
         
         /><AiFillEyeInvisible/><br/><br/>
   </form>
   <buttton className='button'> SIGN UP</buttton>
    <p className="p">Already have an account. <Link to="/Login">LOGIN</Link> </p></div>
 
    </div>
    </>
  )
}

export default Register