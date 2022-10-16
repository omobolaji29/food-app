import React from 'react'
import Sidebar from '../component/Sidebar'

import food1 from '../Images/foodd1.svg'
import food2 from '../Images/foodd2.svg'
import food3 from '../Images/foodd3.svg'
import food4 from '../Images/foodd4.svg'
import food5 from '../Images/food5.svg'
import food6 from '../Images/food6.svg'
import DashboardContent from '../component/DashboardContent'

let timeDay = new Date().getHours()
let timeGreet = null;
if(timeDay < 12) {
  timeGreet = "Good Morning"
}else if(timeDay < 16) {
  timeGreet = "Good Afternoon"
}else if(timeDay < 21){
  timeGreet = "Good Evening"
}else {
  timeGreet = "Good Night"
}
const Dashboard = () => {

  const dashmenu = [
    {menuu:food1,title:'Hamburger'},
    {menuu:food2,title:'stir fry pasta'},
    {menuu:food3, title:'Meat Ball '},
    {menuu:food4,title:'Special Pasta'},
    {menuu:food5,title:'Pancake'},
    {menuu:food6,title:'Pepper Soup'}
  ]
  return (
    <div className='dashbody'>  
<div className='narbar-greet'>  
         <h2> {timeGreet},  Omobolaji!</h2> 
         <h4>What delicious meal are you craving today?</h4>
         </div>
<DashboardContent dashmenu={dashmenu} />
<Sidebar />


    </div>
  )
}

export default Dashboard