import React,{useEffect, useLayoutEffect, useState} from 'react';
import Footer from '../home/footer/footer';
import Topnev from '../home/topnev/topnev';
import "../mapmarkit/mapmart.css"
import Leftnev from './leftnev/leftnev';
import Midport from './mid portion/midport';
import Sidenev from '../home/sidenev/sidenev';
import Bot from '../../components/bottom-barr/bot';
import AddProd from '../../components/addprod/addProd';
import { useTransition,animated } from 'react-spring';
import {UserStore} from "../../pullstore/userInfo"
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase.file/firebase';


  
 
export default function Markit() {
  const Uid = UserStore.Uid;
  const [addclk,setaddClk] = useState(false)
  const [Strtr,setStrtr] = useState(false)
  
  useLayoutEffect(() => {
     const reg = doc(db,Uid,"StoreAuth");
     getDoc(reg).then(res => {
      let isAuth = {...res.data()}
      console.log(isAuth.isAuth)
      setStrtr(isAuth.isAuth)
     }).catch(err => {
      console.log(err)
     })
     console.log(Strtr)
  },[Strtr])

  const addClk = () => { 
    setaddClk(!addclk)
  }
  return (
    <div className="dfdf flex">
      <Sidenev/>
      <div className='Xmain h-screen w-screen'>
      <Topnev/>
     <div className="Xmidbox w-screen">
      <div className="toparea">
       
      </div>
      <div className="ymidbox w-screen">
       <Midport/> 
       <Leftnev/>
      </div>
        {addclk ?  <AddProd clk={addClk}/> : ""}
      {Strtr ? <Bot
        addClk={addClk}
      /> : ""}
      </div> 
    <Footer/>
   </div>
    </div>

    
  )
}