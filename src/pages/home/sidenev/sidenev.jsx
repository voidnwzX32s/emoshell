import React, { useState ,useEffect} from "react"
import {motion} from "framer-motion"
import "../sidenev/sidenev.css"
import {signOut} from "firebase/auth"
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase.file/firebase";
import Dailog from "../../../components/dialogBox/dialog";
import Slogo from "../../../assets/img/sidenev/EmoS.png";
import Home from "../../../assets/img/sidenev/home.png";
import mart from "../../../assets/img/sidenev/markit.png";
import aboute from "../../../assets/img/sidenev/aboute.png"
import img from "../../../assets/img/userDetails/user.png"
import userAdd from "../../../assets/img/userDetails/userAdd.png"
import editUser from "../../../assets/img/userDetails/userEdit.png"
import logoutUser from "../../../assets/img/userDetails/logout.png"
import noti from "../../../assets/img/sidenev/noti.png"
import 'react-toastify/dist/ReactToastify.css';
import { toast ,ToastContainer} from "react-toastify";


export default function Sidenev(props) {
    const navigate = useNavigate();
    const [sizeis ,setSize] = useState("sideNev_close");
    const [open,close] = useState(true)



    const [isClick,setIsClick] = useState(false);
const CLICKX = () => {
     if (CLICKX) {
        setIsClick(false)
     }
}
const CLICKY = () => {
    if (CLICKY) {
       LogOut();
       toast.success("logout Successfully")
    }
}
const oncllk = () => {
    navigate("/userEdit")
    window.location.reload(true)
}
const clickLogout = () => {
    if (!isClick) {
        setIsClick(true); 
       
    }
}
const LogOut = () => {
    signOut(auth).then(() => {
        localStorage.setItem("Uid","")
        window.location.reload(true)
      }).catch((error) => {
         console.log(error)
      });
}
const nevigate = useNavigate()
const [signIn ,setSignIn] = useState(false)
useEffect(() => {
 
  auth.onAuthStateChanged((user) =>{
    if (user) {
      setSignIn(true);
    } else {
      setSignIn(false)
    }
  })
}, [])
    const [userBook,setUserBook] = useState({
        username: "",
        email:"",
        image:""
    })
    const [Accept,setAccept] = useState("")
     useEffect(() => {
     auth.onAuthStateChanged((user) =>{
      if (user) {
        setAccept(user.displayName);
        setUserBook({
            username:user.displayName,
            email:user.email,
            image:user.photoURL
        })
      } 
    })
  },[])
    
     
    return (
        <motion.div className={sizeis} animate={{width: open ? 83 : 290}}>
           <div className="logo0" onClick={() =>{
            if (sizeis === "sideNev_close") {
                setSize("sideNev_open")
                close(false)
            }else {
                setSize("sideNev_close")
                close(true)
            }
           }} >
           {open ?  <img className="img1234" src={Slogo} alt="" /> : <>
           <img className="img1234" src={Slogo} alt="" />
           <div className="etxt">EMO - </div>
           </>}
           
           </div> 
           
           <div className="nevtix">
            <div className="UserMode">
            </div> 
            <div className="userLogs">

             
            
             <div className="side2">
             
            <div className="editUser"  onClick={() => navigate("/")}>
                    {open ? <img src={Home} className='Add'/> : 
                    <>
                    <img src={Home} className='Add'/>
                    <div className="etxt">Home</div>
                    </>}          
            </div>
            <div className="editUser"  onClick={() => navigate("/markit")}>
                    {open ? <img src={mart} className='Add'/> : 
                    <>
                    <img src={mart} className='Add'/>
                    <div className="etxt">Markit - Place</div>
                    </>}          
            </div>
            <div className="editUser"  onClick={() => navigate("/aboute")}>
                    {open ? <img src={aboute} className='Add'/> : 
                    <>
                    <img src={aboute} className='Add'/>
                    <div className="etxt">About Us</div>
                    </>}          
            </div>
           {signIn ?  <div className="editUser"  onClick={oncllk}>
                    {open ? <img src={editUser} className='Add'/> : 
                    <>
                    <img src={editUser} className='Add'/>
                    <div className="etxt">Add store</div>
                    </>}          
            </div> : ""}
            <div className="editUser"  onClick={() => navigate("/notifi")}>
                    {open ? <img src={noti} className='Add'/> : 
                    <>
                    <img src={noti} className='Add'/>
                    <div className="etxt">Notification</div>
                    </>}          
            </div>
            <div className="editUser"  onClick={() => navigate("/login")}>
                    {open ? <img src={userAdd} className='Add'/> : 
                    <>
                    <img src={userAdd} className='Add'/>
                    <div className="etxt">Add New Account</div>
                    </>}          
            </div>
            {signIn ? <div className="editUser"  onClick={clickLogout}>
                    {open ? <img src={logoutUser} className='Add'/> : 
                    <>
                    <img src={logoutUser} className='Add'/>
                    <div className="etxt">Logout</div>
                    </>}          
            </div> : ""}
                 
                 {isClick ? <Dailog
                                   text="Are you sure? You will Logout from this Account"
                                   ClickX={CLICKX}
                                   ClickY={CLICKY}
                                   /> : ""}
             </div>
            </div>
          
            <div className="accInfo">
             

            </div>
           
           
 
          </div>
        </motion.div>
    )
};
