import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
var count= 0
// function add() {
//   count= count + 1
//   document.getElementById("demo").innerText=count
// }
// function sub() {
//   count= count - 1
//   document.getElementById("demo").innerText=count
// }
const Singlefood = ({foodItem, setshowModal}) => {

  return (
  <div>
        <div className="singleFoodBg" onClick={()=> setshowModal(false)} ></div>
    
     <div className="singleFoodItem" >
     <AiOutlineArrowLeft className='go-back' onClick={()=> setshowModal(false)}/>
         <img src={foodItem.menuu} alt= "all"/>
         <h2> {foodItem.title}</h2>
         <p> {foodItem.desp} </p>
         <p>{foodItem.price} <span className="addbtn">{foodItem.addbtn}</span> </p>
         {/* <button onClick={add()}>-</button>
         <span id="demo"> </span>
         <button onClick={sub()}>+</button> */}
         <button onClick={()=> count -= 1} >-</button>
         <span id="demo">{count} </span>
         <button onClick={()=> count += 1}>+</button>
     </div>

  </div>
  ) 
}

export default Singlefood