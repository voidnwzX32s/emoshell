import React, { useState,useEffect } from 'react'
import "../notify/notifi.css"
import { useNavigate } from 'react-router-dom'
import Topnev from '../../pages/home/topnev/topnev';
import Footer from '../../pages/home/footer/footer';
import Bck from "../../assets/img/nes/back.png";
import Sidenev from '../../pages/home/sidenev/sidenev';

export default function Notifi(props) {
    

   


    const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}

    return(
        <div className="dfdf flex">
            <Sidenev/>
        <div className='main  h-screen w-screen'>
        <Topnev/>
         <div className="Edit">
            {/* {console.log(userBook.image)} */}
            <div className="midEdit">
                <div className="topNv">
                    <div className="bckbtn" onClick={goBack}>
                        <img src={Bck} className='img123'/>
                    </div>
                </div>
                <div className="midl">
                    <div className="txt">Notifications</div>
                   {/* editing box */}


                </div>
            </div>
              
          </div>
        <Footer/>
        </div>
        </div>
        
        
    )
};
