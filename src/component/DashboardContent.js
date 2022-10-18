import React from 'react'

const DashboardContent = ({dashmenu, setFood,setshowModal,setCart,cart}) => {
  function updateCart(item) {
    setCart([...cart,item])
    console.log(cart,"bola")
  }
  return (
    <div> 
         {
          dashmenu && dashmenu?.map((item,index) => (
         <div className="dashitem" key={index} onClick={()=>{setshowModal(true); setFood(item) }}>
         <img src={item.menuu} alt= "all"/>
         <h2> {item.title}</h2>
         <p> {item.desp} </p>
         <p>{item.price} <button className="addbtn" onClick={()=>{updateCart(item);console.log(item)}}>{item.addbtn}</button> </p>
         </div>
          )) }  
        </div>
  )
  
}
export default DashboardContent