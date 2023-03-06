import React from "react";
import "../mid portion/midport.css";
import {useSelector} from "react-redux"
import MCard from "../../../components/mart-card/M-card";
 
export default function Midport() {
  const products = useSelector((state) => state);
  console.log(products);
    return(
        <>
          <div className="row2">
            <div className="r2">
              <MCard/>
              <MCard/>
              <MCard/>
              <MCard/>
              <MCard/>
              <MCard/>
              <MCard/>
              <MCard/>
              <MCard/>
              <MCard/>
              <MCard/>
              <MCard/>
              <MCard/>
              <MCard/>
              <MCard/>
            </div>
          </div>
        </>
    )
}