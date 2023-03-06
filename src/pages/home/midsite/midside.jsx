import React,{useState} from 'react'
import "../../../../src/App.css"
import  "../../../index.css"
import '../midsite/mids.css'
import search from "../../../assets/img/Search2.png";
import locationicon from "../../../assets/img/location.png";
import Topnev from '../topnev/topnev';
import Footer from '../footer/footer';
import Popuplist from '../../../components/popuplist/popup';
import Card from '../../../components/card/card';
import Pill from "../../../assets/img/card/prod.png";
import prod from "../../../assets/img/card/prod2.png";
import cont from "../../../assets/img/card/cont.png";
import Sidenev from '../sidenev/sidenev.jsx';
import { motion } from 'framer-motion';



export default function Midside(props) {
 

  const [popup,setpop] = useState(false);

    const handlemyclick =()=> {
        setpop(!popup)
    }
 

  const mode = () => {
    let body1 = document.getElementsByClassName('lightmode');
    // body1.classList.toggle("darkmode");
  }


  return (
    <div className='FSJA1'>
     <Sidenev/>
    <div className='main h-screen w-screen'>
      {/* <media query="(min-width: 500px)">
        {matches => {
          return (
           matches ? "hello" : "nye"
          )
        }}

      </media> */}
      <Topnev onclick={mode()} />

 {/* --------------top nev end - ---------------0 */}
     <div className="midbox w-screen ">
       <motion.div className="textbox" animate={{x:[-1000,300,0]}}>
        <h1 className="h1text">Search Nearest Medical Products here</h1>
        <h2 className="h0text">Now find More then Million + medical stores around you!</h2>
       </motion.div>
       <motion.form className='Searchbox'  animate={{x:[-1000,300,0]}}>
        <div className='locationbox' onClick={handlemyclick}>
        <img src={locationicon} alt="" className="locationicon bg-transparent" />
         Locations
        </div>
        <input type="text" placeholder='Search medical products ,from nearest location' className="Search" />
          <div className='iconbox1'>
            <div className="icongool">
              <img src={search} alt="Search" className="iconin" />
            </div>
           </div>
       </motion.form>
       {popup?<Popuplist 
                 localarea="Auto-Detect Current Location"
                 area1="mumbai"
                 area2="gujrat"
                 area3="delhi"
                 clkme={handlemyclick}
                 
           />:""}
           <div className="boxy h-20"></div>
     </div>
     
      
        <div className="cardscrool">
          <Card 
             img={prod}
             title="Popular Products"
             disc="Find Popular and famous medical Products!"
          />
          <Card 
             img={Pill}
             title="Medical Markit"
             disc="Find nearest medical, fast as soon as u need!"
          />
          <Card 
             img={cont}
             title="Contact Card"
             disc="Contact us if any problem with website or any consumer violence!"
          />

       </div>
       
    <Footer/>
   </div>
   </div>

    
  )
}
