import React from 'react'
import food from "../Images/food.svg"
import dashimg from '../Images/dashimg.svg'


const SidebarItem = ({image, imageAlt, text, itemNotify}) => {
  return (
    <div className='sidebar-link'>
      <img src={image}  alt={imageAlt}/>
      <p>{text} </p>
      <span className='itemNotify'>{itemNotify}</span>
      
    </div>
  );
}
const Sidebar = ({data}) => {
  
   return (
     <div> 
   
    <div className="navbarr">
      <div className="navbar-color">
         <img src={food} alt ="food logo"/><br/>
         <h1> Bola's Cafe</h1></div>
   
         <img src={dashimg} alt= 'dashimg' className='dashimg'/>
    
     </div>
     
    
       
     {
      data && data?.map((item) => ( 
        <SidebarItem image={item.side} imageAlt='Side bar Item' text={item.text} itemNotify={item.itemNotify}/>
      ))
     }
     
</div>
  )
}

export default Sidebar