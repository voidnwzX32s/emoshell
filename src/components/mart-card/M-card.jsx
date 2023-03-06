import React from "react"
import "../mart-card/M-card.css"
import {motion} from "framer-motion"

export default function MCard(props) {


    return(
         <motion.div className="mcard2" animate={{x: [-1000 ,300, 0]}}>
             hi
         </motion.div>
    ) 
}