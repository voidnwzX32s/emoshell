import React from 'react'
import  "../../../index.css"
import '../midsite/mids.css'
import Middata from '../middatabox/middata';
import * as iconpark from '@icon-park/react';

export default function Midside() {
  return (

    <div className='main h-screen w-screen'>
     <div className="midbox w-screen">
       <div className="textbox">
        <div className="h1text">Search Nearest madical Products hear</div>
       </div>
       <form className='Searchbox'>
        <input type="text" className="Search" />
        <div className='iconbox1'>
        <iconpark.Search className='iconin' theme="filled" size="24"/>
        </div>
       </form>
     </div>
      <Middata/>
    <div className="contectbar"></div>
   </div>
  )
}
