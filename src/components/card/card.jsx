import React from "react"
import "../card/card.css"
import {motion} from "framer-motion"

export default function Card(props) {


    return(
        <>
          <motion.div className="card" animate={{x: [-1000 ,300, 0]}}>
          <div className="card-imgbox">
            <img src={props.img} alt="medical" className="mgif" />
          </div>
            <div className="textbox21">
               <h1 className="cardtext1">{props.title}</h1>
               <h2 className="cardtext2">{props.disc}</h2>
               <div className="NWZbtn">Explore</div>
           </div> 
        </motion.div>
        </>
    ) 
}