import React from 'react'
import './comp.css'
import logo from "../../../assets/img/emo.png"
import  "../../../index.js"
import * as iconpark from '@icon-park/react';


export default function Sidebar() {
  return (
    <>
      <nav className="colums">
          <div className="midcol">
           
              <div className="logobox">
                <img src={logo} className="logo" alt="logo"/>
              </div>
               <text className='text'>Menus</text>
{/* ===============================logo list 2========================= */}
              
              <div className="navlist2">
               
                <div className="iconbox-l2">
                  <iconpark.AllApplication className='iconin' theme="filled" size="24"/>
                </div>

                <div className="iconbox-l2">
                 
                   <iconpark.Pills className='iconin' theme="filled" size="24"/>
                </div>

                <div className="iconbox-l2">
                   <iconpark.BookmarkOne className='iconin' theme="filled" size="24"/>
                </div>

                <div className="iconbox-l2">
                   <iconpark.Permissions className='iconin' theme="filled" size="24"/>
                </div>

                

              </div>
              <text className='text'>List</text>
{/* =====================================logo list 3 ==============================              */}
              <div className="navlist3">
                 

                <div className="iconbox-l3">
                   <iconpark.Comments className='iconin' theme="filled" size="24"/>
                </div>

                <div className="iconbox-l3">
                   <iconpark.ReduceUser className='iconin' theme="filled" size="24"/>
                </div>

                <div className="iconbox-l3">
                   <iconpark.AddUser className='iconin' theme="filled" size="24"/> 
                </div>

              </div>
          </div>
      </nav>
    </>
  )
}
