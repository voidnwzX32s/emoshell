import React from 'react'
import '../components/comp.css'
import logo from "../assets/img/emo.png"
import  "../index.css"
import * as iconpark from '@icon-park/react';


export default function Sidebar() {
  return (
    <>
      <nav className="colums text-center ">
          <div className="midcol">
           
              <div className="logobox">
                <img src={logo} className="logo" alt="logo"/>
              </div>
              <div className="navlist1">
{/* ==========================logo list 1====================================== */}

                <div className="iconbox-l1">
                   <iconpark.AllApplication className='iconin' theme="filled" size="24"/>
                </div>

                <div className="iconbox-l1">
                   <iconpark.AllApplication className='iconin' theme="filled" size="24"/>
                </div>

                <div className="iconbox-l1">
                <iconpark.AllApplication className='iconin' theme="filled" size="24"/>
                </div>

{/* ===============================logo list 2========================= */}
              </div>
              <div className="navlist2">
               
                <div className="iconbox-l1">
                  <iconpark.AllApplication className='iconin' theme="filled" size="24"/>
                </div>

                <div className="iconbox-l1">
                   <iconpark.AllApplication className='iconin' theme="filled" size="24"/>
                </div>

                <div className="iconbox-l1">
                   <iconpark.AllApplication className='iconin' theme="filled" size="24"/>
                </div>

                <div className="iconbox-l1">
                   <iconpark.AllApplication className='iconin' theme="filled" size="24"/>
                </div>

                

              </div>
{/* =====================================logo list 3 ==============================              */}
              <div className="navlist3">
                 

                <div className="iconbox-l1">
                   <iconpark.AllApplication className='iconin' theme="filled" size="24"/>
                </div>

                <div className="iconbox-l1">
                   <iconpark.AllApplication className='iconin' theme="filled" size="24"/>
                </div>

                <div className="iconbox-l1">
                   <iconpark.AllApplication className='iconin' theme="filled" size="24"/>
                </div>

              </div>
          </div>
      </nav>
    </>
  )
}
