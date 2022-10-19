import React from 'react'
import  { useState } from 'react'
import register from '../Images/register.jpg'
import {AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link , useNavigate} from 'react-router-dom';
import {  toast,ToastContainer } from 'react-toastify';


const Register = () => {
  const [form, setForm] = useState({})
  const navigate = useNavigate() 
const [passwordType, setpasswordType] = useState("password");
const handleChange = (b) => {
  setForm ({...form, [b.target.name]: b.target.value})
    
}


const handleSubmit = (b) => {
 b.preventDefault();
//  sessionStorage.setItem('user', JSON.stringify(form))

//  toast.success("Sign Up Successful")

//  navigate('/signin')
}
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
      <ToastContainer />
        <div className="registerimg">
          <img src={register} alt='register' ></img>
        </div>
        <div className="formregister" >
          <h2> Welcome to Bola's Cafe!</h2>
       <form onSubmit={handleSubmit}>
         <input
         type ="text"
         onChange={handleChange}
         required
         placeholder="Your First Name:"
         name="name"
         /><br/><br/>
   
        <input
         type ="email"
         onChange={handleChange}
         required
         placeholder="Your Email Name:"
         name="email"
         /><br/><br/>
    
        <input
         required 
         placeholder="Your Password:"
         onChange={handleChange}
         id="password"
         type={passwordType}
         name="password"
         />{passwordType === "password" ?
         <AiFillEye className="btnShow" onClick={togglePassword}/> :
         <AiFillEyeInvisible className="btnShow" onClick={togglePassword}/>
       }
   </form>
   <buttton className='button' type="submit" value="Submit"> SIGN UP</buttton>
    <p className="p">Already have an account. <Link to="/Login">LOGIN</Link> </p></div>
 
    </div>
    </>
  )
}

export default Register