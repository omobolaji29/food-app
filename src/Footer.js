import React from 'react'
import iphone from "../src/iphone.svg"
import android from "../src/android.svg"
import linkedin from '../src/linkedin.svg'
import twitter from '../src/twitter.svg'
const Footer = () => {
  return (
    <div>  
         <footer>
    <div className="footer">
    <div className="company"> 
    <h3>COMPANY</h3>
    <p> About Us</p>
    <p> Career</p>
    <p> Contact Us</p>
  </div>
  <div className="support">
    <h3> Support</h3>
    <p> Help Center </p>
    <p> Safety Center</p>
  </div>
  <div className="legal">
    <h3> Legal</h3>
    <p>Cookie Policy </p>
    <p>Privacy Policy</p>
    <p> Terms of Services</p>
  </div>
  <div>
    <h3> Install App</h3>
    <img src={android} alt ="android"></img><br/>
    <img src={iphone} alt ="iphone"></img>
  </div>
  </div>  
  <div className="foot">
  © 2022 BOLA'S CAFE, All rights reserved
  <div className='icon'>
  <a href='https://www.linkedin.com/in/omobolagee/' ><img className='img' src={linkedin} alt='linkedin icon'></img></a>
  <a href='https://twitter.com/OmobolajiEsther'><img className='img' src={twitter} alt='twitter icon'></img></a>
 </div>
  
</div>
</footer></div>
  )
}

export default Footer