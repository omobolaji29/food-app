import React from 'react'
import Sidebar from '../component/Sidebar'
import dashboardicon from '../Images/dashboardicon.svg'
import yourprofile from '../Images/yourprofile.svg'
import order from '../Images/order.svg'
import yourcart from '../Images/yourcart.svg'
import food1 from '../Images/foodd1.svg'
import food2 from '../Images/foodd2.svg'
import food3 from '../Images/foodd3.svg'
import food4 from '../Images/foodd4.svg'
import food5 from '../Images/food5.svg'
import food6 from '../Images/food6.svg'
import DashboardContent from '../component/DashboardContent'
const Dashboard = () => {
  const data = [
    {side:dashboardicon,text:'Dashboard'},
    {side:yourprofile, text:'Your Profile' },
    {side:order, text:'Order', itemNotify: 6},
    {side:yourcart, text:'Your Cart', itemNotify:5}
  ]
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
         <h2> Good morning, Omobolaji!</h2> 
         <h4>What delicious meal are you craving today?</h4>
         </div>
<DashboardContent dashmenu={dashmenu} />
<Sidebar data={data} />


    </div>
  )
}

export default Dashboard