import React from 'react';
import Footer from '../home/footer/footer';
import Topnev from '../home/topnev/topnev';
import "../aboutus/aboute.css";
import Sidenev from '../home/sidenev/sidenev';


export default function Midside() {
 
  return (
    <div className="dfd flex">
      <Sidenev/>
       <div className='clss h-screen w-screen '>
      <Topnev/>
       <div className="abuteus">
         <div className="textbox1">
          <div className="h1text4">Contact Us</div>
          <div className="h0text1">
            Get in touch and let us know we can help!
            </div>
         </div>

      </div>
      <div className="aboutebox w-screen">
    
          <div className="Acrd"></div>
          {/* <div className="Acrd"></div>
          <div className="Acrd"></div> */}
      
      </div>
     <Footer/>
    </div>
    </div>

   
  )
}
