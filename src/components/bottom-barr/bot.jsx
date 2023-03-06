import React from "react";
import "../bottom-barr/bot.css";
import { motion } from "framer-motion";
import add from "../../assets/img/bottumnev/add.png"
import cart from "../../assets/img/bottumnev/cart.png"
import shop from "../../assets/img/bottumnev/shop.png"


export default function Bot(props) {
    return(
        <>
          <motion.div className="bux1" animate={{x: [-1000 , 100, 0]}}>
            <div className="b01" onClick={props.shopClk}>
                <img src={shop} alt=""  className="img09" />
            </div>
            <div className="b01" onClick={props.addClk}>
                <img src={add} alt=""  className="img09"/>
            </div>
            <div className="b01" onClick={props.cardClk}>
                <img src={cart} alt="" className="img09"/>
            </div>
          </motion.div>
        </>
    )
}