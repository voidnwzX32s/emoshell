import React from 'react'
import  "../../../index.css"
import '../midsite/mids.css'
import search from "../../../assets/img/Search2.png";
import locationicon from "../../../assets/img/location.png";
import Pill from "../../../assets/img/pil.gif";

export default function Midside() {
 
  return (

    <div className='main h-screen w-screen'>
      <div className="topnev">
        <div className="emo">EMO </div>
        <div className="emoXpln">- Emergency online medicine</div>
      </div>

 {/* --------------top nev end - ---------------0 */}
     <div className="midbox w-screen">
       <div className="textbox">
        <div className="h1text">Search Nearest madical Products hear</div>
        <div className="h0text">Now find More then Million + medical stores around you!</div>
       </div>
       <form className='Searchbox'>
        <div className='locationbox'>
        <img src={locationicon} alt="" className="locationicon" />
        <select className="locationList" id="language">
           <option value="kashmire">kashmire</option>
           <option value="mumbai">mumbai</option>
           <option value="gujrat">gujrat</option>
           <option value="delhi" selected>delhi</option>
        </select>
        </div>
        <input type="text" placeholder='Search medical products ,from nearest location' className="Search" />
          <div className='iconbox1'>
            <div className="icongool">
              <img src={search} alt="Search" className="iconin" />
            </div>
           </div>
       </form>
     </div>

      
        <div className="cardscrool">
        <div className="card">
          <div className="card-imgbox">
            <img src={Pill} alt="medical" className="mgif" />
          </div>
            <div className="textbox1">
               <h1 className="cardtext1">Medical product</h1>
               <h2 className="cardtext2">Find nearest medical, fast as soon as u need!</h2>
           </div> 
        </div>


        <div className="card">
          <div className="card-imgbox"></div>
        </div>
        <div className="card">
          <div className="card-imgbox"></div>
        </div>
       </div>
       
    <div className="contectbar">
      <div className="line1">© 2022 Design EMO web. Made by NwzXvoid32s</div>
    </div>
   </div>
  )
}
