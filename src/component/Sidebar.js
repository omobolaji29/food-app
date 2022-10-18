import React from 'react'
import food from "../Images/food.svg"
import dashimg from '../Images/dashimg.svg'
import dashboardicon from '../Images/dashboardicon.svg'
import yourprofile from '../Images/yourprofile.svg'
import order from '../Images/order.svg'
import yourcart from '../Images/yourcart.svg'
import { Link } from 'react-router-dom';


const Sidebar = () => {
  
   return (
     <div> 
     <div className="lefts">
        <div className="navbarr">
         <img src={food} alt ="food logo"/>
         <br/><h1> Bola's Cafe</h1></div>
         <div className='sidebar-link'>
         <ul>
          <li><div id ="active" className='sidebar-links'><Link to="/dashboard">< img src= {dashboardicon} alt="img" /><button>Dashboard</button></Link></div><br/></li>
          <li><div className='sidebar-links'><Link to="/Profile">< img src= {yourprofile} alt="img"/><button>Your Profile</button></Link></div><br/></li>
          <li><div className='sidebar-links'><Link to="/orders">< img src= {order} alt="img"/><button>Orders</button></Link><span className="five">5</span></div><br/></li>
          <li><div className='sidebar-links'><Link to="/cart">< img src= {yourcart} alt="img" /><button>Your Cart</button></Link><span className='count'>9</span></div><br/></li>
          </ul>
          </div>
         
        </div> 
         <img src={dashimg} alt= 'dashimg' className='dashimg'/>
    </div>
  )
}

export default Sidebar