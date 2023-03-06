import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import  "../../../index.css"
import "../topnev/topnev.css"
import search from "../../../assets/img/search.png";
import  dark from "../../../assets/img/mode/dark.png"
import  lightimg from "../../../assets/img/mode/light.png"
import { auth } from '../../../firebase.file/firebase';
import Loading from '../../../components/loding/loading';
import {UserStore,UserDet} from "../../../pullstore/userInfo"


export default function Topnev(props) {
 
 const [signIn,setSignIn] = useState(false);
 const [click,setClick] = useState(false); 
 var Uid = UserStore.Uid
  useEffect(() => {
    UserDet()
    auth.onAuthStateChanged((user) =>{
      if (user) {
        setSignIn(true);
      }
    })

  }, [Uid])

   
  return (
    <>
    <div className="topnev">
        <div className="emo">EMO </div>

         <div className="nevigaters">
         </div>
         <div className="nevicons2">
         <form className='Searchbx'>
          <input type="text" placeholder='Search ' className="search" />
          <div className='iconbx1'>         
              <img src={search} alt="Search" className="icnin" />
           </div>
        </form>
        
         <div className="nextlogin">
          {signIn ?  <img src={lightimg} alt="icnbx" className="prsn" /> :  <Link className='nxtpg' to="/login"><div className="nxtpg ">Login</div></Link>}
         </div>
         </div>
      </div> 
      </>
      
  )
}