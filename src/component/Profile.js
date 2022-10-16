import React from 'react'
import dashimg from '../Images/dashimg.svg'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
const Profile = () => {
    let timeDay = new Date().getHours()
    let timeGreet = null;
    if(timeDay < 12) {
      timeGreet = "Good Morinng"
    }else if(timeDay < 16) {
      timeGreet = "Good Afternoon"
    }else if(timeDay < 21){
      timeGreet = "Good Evening"
    }else {
      timeGreet = "Good Night"
    }
  return (
    <div className='profile-body'>
      <div className="dash-board">
        <Dashboard/>
      </div>
     <div className="profileBg"></div>
       
      <div className='profile'>
          <Link to='/dashboard'><AiOutlineArrowLeft className='go-back'/></Link>
          <img src={dashimg} alt="" />
           <h3>{timeGreet}, Omobolaji!</h3>
          <p>Hello there, Thank you for eating with Bola's Cafe. see you soon my friend!</p>
      </div>
    </div>
  )
}

export default Profile