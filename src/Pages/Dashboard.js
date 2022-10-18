import React, {useState} from 'react'
import Sidebar from '../component/Sidebar'
import Singlefood from '../component/Singlefood'
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
  const [food, setFood] = useState({})
  const [cart, setCart] = useState([])
  const [showModal, setshowModal] = useState(false)
  const dashmenu = [
    {menuu:food1,title:'Hamburger', desp:"The in-house Hamburger by chef Bolagee", price:'$10', addbtn:"Add to cart"},
    {menuu:food2,title:'stir fry pasta',desp:"The Stir Fry pasta and chicken by chef Bolagee", price:'$10', addbtn:"Add to cart"},
    {menuu:food3, title:'Meat Ball ', desp:"The in-house Meat Ball  by chef Bolagee", price:'$10', addbtn:"Add to cart"},
    {menuu:food4,title:'Special Pasta',desp:"The Special pasta  by chef Bolagee", price:'$10', addbtn:"Add to cart"},
    {menuu:food5,title:'Pancake',desp:"The in-house Pancake  by chef Bolagee", price:'$10', addbtn:"Add to cart"},
    {menuu:food6,title:'Pepper Soup',desp:"The Pepper Soup by chef Bolagee", price:'$10', addbtn:"Add to cart"}
  ]
  return (
    <div className='dashbody'>  
<div className='narbar-greet'>  
         <h2> {timeGreet},  Omobolaji!</h2> 
         <h4>What delicious meal are you craving today?</h4>
         </div>
         {showModal && <Singlefood foodItem={food} setshowModal={setshowModal}/>}
<DashboardContent dashmenu={dashmenu} setFood={setFood} setshowModal={setshowModal} cart={cart} setCart={setCart}/>
<Sidebar />

  </div>
  )
}

export default Dashboard