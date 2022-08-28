import React from 'react'
import signup from '../src/register.svg'
import { AiFillEyeInvisible } from 'react-icons/ai';
// import { FaBeer } from 'react-icons/fa';

const Register = () => {
  return (
    <div>
      <div className="register">
        <div className="registerimg">
          <img src={signup} alt='signup' id='imgregister'></img>
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
    <p>Already have an account. LOGIN</p></div>
 
    </div>
    </div>
  )
}

export default Register