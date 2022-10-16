import React from 'react'

const DashItem = ({image, imageAlt, title, desp, price, addbtn}) => {
  return (
    <div className="dashitem">
        <img src={image} alt= {imageAlt}/>
        <h2> {title}</h2>
        <p> {desp} </p>
        <p>{price} <span className="addbtn" >{addbtn}</span> </p>
        
    </div>
  );
    
}

const DashboardContent = ({dashmenu}) => {

  return (
    <div>
      
    
         {
          dashmenu && dashmenu?.map((item,index) => (
         <DashItem image={item.menuu} imageAlt ="image for all" title={item.title} desp="The in-house pasta and chicken by chef Moose" price='$10' addbtn="Add to cart" />
           ))
          }  
        </div>
  )
}

export default DashboardContent