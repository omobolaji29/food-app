 import React from 'react'
import iphone from '../Images/iphone.svg'
import android from "../Images/android.svg"
import backimg from "../Images/backimg.jpg"
import food1 from '../Images/food1.svg'
import food2 from '../Images/food2.svg'
import food3 from '../Images/food3.svg'
import food4 from '../Images/food4.jpg' 
import Menu from '../component/Menu'
import Footer from '../component/Footer'
 

export const Home = () => {
  return (

   
    <div className='menupage'>
         <Menu/>
         <h1 className='head'> Order <span>food </span> anytime,<br/> anywhere</h1>
         <p className='browse'>Browse from our list of specials to place your order and have food delivered<br/>
          to you in no time. Affordable, tasty and fast!</p>
       <div className="android"><img src={android} alt ="android"></img>
        <img src={iphone} alt ="iphone"></img></div>
        <img src ={backimg} alt ="backgroud" className='backimg'></img><br/>
        <h3 className='special'>Special Meals of the day!</h3>
        <p className='spec'>Check our sepecials of the day and get discounts on all our meals and swift delivery to what ever location within Canada.</p>
        <div className="container">
    <div className='foods' > 
<div className="food1">
 <img src={food1} alt='food1' ></img>
     <h2>Stir fry Pasta</h2>
      <p>Stir fry pasta yada yada <br/>yada because of Sesan</p>
      </div>
      <div className="food2">
     <img src={food2} alt='food2'></img>
     <h2>Meat Balls</h2>
     <p> Stir fry pasta yada yada <br/>yada because of Sesan</p>
     </div>
     <div className="food3">
     <img src={food3} alt='food3'></img>
         <h2>Burger Meal</h2>
     <p> Stir fry pasta yada yada<br/> yada because of Sesan</p></div>
     
     <div className="food4"><img src={food4} alt='food4' className='food4'></img>
          <h2>Ice Cream</h2>
          <p> Stir fry pasta yada yada<br/> yada because of Sesan</p></div>
          </div>
        
    </div>
   <Footer/>
    </div>
   
  )
}
export default Home ;
