import React from "react";
import "../slides/slides.css";
import { motion } from "framer-motion";


export default function Slides2(props) {



    return(
       <motion.div  initial={{x: -100 }} animate={{ x: 0}} exit={{x: 100}}>
            
               <div className="slider-range1">
                   <div className="title1">
                    <input 
                     type="text" 
                     className="feild4" 
                     name="title" 
                     value={props.title} 
                     placeholder='title'  
                     onChange={props.handleChange}/>
                      <input 
                     type="number" 
                     className="feild4" 
                     name="price" 
                     value={props.price} 
                     placeholder='price'  
                     onChange={props.handleChange}/>
                   </div>
                   <div className="disc">
                   <textarea 
                     type="text" 
                     className="feild5" 
                     name="disc" 
                     value={props.disc} 
                     placeholder='Discriptions'  
                     onChange={props.handleChange}/>
                   </div>
                   <div className="num1">
                   <input 
                     type="number" 
                     className="feild4" 
                     name="phnnum" 
                     value={props.phnnum} 
                     placeholder='Phone - number'  
                     onChange={props.handleChange}/>
                      <input 
                     type="number" 
                     className="feild4" 
                     name="phnnum" 
                     value={props.phnnum} 
                     placeholder='Phone - number'  
                     onChange={props.handleChange}/>
                     
                   </div>
                   
               </div>
               <div className="nextox">
                     <button className="bEtn" onClick={props.next}>{props.text}</button>
                 </div>
         </motion.div>
    )
}