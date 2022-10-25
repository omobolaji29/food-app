import React , {useState} from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const Singlefood = ({foodItem, setshowModal}) => {

  const [counter, setCounter] = useState(0) 
  function handleCounter(action){
    if (action === "increase"){
      setCounter(counter+1)
    }else if(counter>0){
      setCounter(counter-1)
    }
  }
  return (
  <div>
        <div className="singleFoodBg" onClick={()=> setshowModal(false)} ></div>
    
     <div className="singleFoodItem" >
     <AiOutlineArrowLeft className='go-back' onClick={()=> setshowModal(false)}/>
         <img src={foodItem.menuu} alt= "all"/>
         <h2> {foodItem.title}</h2>
         <p> {foodItem.desp} </p>
         <p>{foodItem.price} 10-20 mins <span className="addbtn">{foodItem.addbtn}</span> </p>
      
         <button onClick={()=> handleCounter("descrease") } >-</button>
         <span id="demo">{counter} </span>
         <button onClick={()=> handleCounter("increase")}>+</button>
     </div>

  </div>
  ) 
}

export default Singlefood