import React, { useState} from 'react';
import "../dialogBox/dialog.css"
import { motion } from 'framer-motion';


export default function Dailog(props) {
    return(
            <div className="Dailog">
              <motion.div className="dai_box" animate={{x:[-400,0 ]}}>
                <div className="up">{props.text}</div>
                <div className="down">
                    <button className='btn01' onClick={props.ClickX}>Cancle</button>
                    <button className='btn02' onClick={props.ClickY}>Yes</button>
                </div>
              </motion.div>
            </div>
    )
}