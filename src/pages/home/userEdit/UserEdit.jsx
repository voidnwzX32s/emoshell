import React, { useState,useEffect, useLayoutEffect} from 'react'
import "../userEdit/useredit.css"
import { useNavigate } from 'react-router-dom'
import Topnev from '../topnev/topnev'
import Footer from '../footer/footer'
import Bck from "../../../assets/img/nes/back.png"
import { auth } from '../../../firebase.file/firebase'
import userimg from "../../../assets/img/imgsbnr/m_bnr.jpg"
import { updateProfile } from 'firebase/auth'
import Sidenev from '../sidenev/sidenev'
import { db } from '../../../firebase.file/firebase'
import { collection, onSnapshot ,doc,setDoc ,addDoc,getDoc,getDocs, query, updateDoc} from 'firebase/firestore'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import {UserStore,UserDet} from "../../../pullstore/userInfo"



export default function UserEdit(props) {

  const Uid = UserStore.Uid
  
  
  const nevigate = useNavigate();
  const [data,setData] = useState([])
  const [usar, setUser] = useState({
    username:"",
    img:"",
    firstName:"",
    LastName:"", 
    email:"",
    phnnum:"",
    add:"",
    city:"",
    state: "",
    zip:"",
    country:"",
    password:"",
  });

  const sub = () => {
    data.map(u => {
      const mot = u.usar;
      setUser({
        username:mot.username,
        img: mot.img,
        firstName: mot.firstName,
        LastName: mot.LastName, 
        email: mot.email,
        phnnum: mot.phnnum,
        add: mot.add,
        city: mot.city,
        state:  mot.state,
        zip: mot.zip,
        country: mot.country,
        password: mot.password
      })
     })
  }
 
const submituser = () => {
  setDoc(doc(db,Uid,"Register"), {usar});
  toast.success("Successfully Add your store")
  setDoc(doc(db,Uid,"StoreAuth"),{isAuth:true})
}

useLayoutEffect(()  => { 
  
    const reg_Ref = doc(db,Uid,"Register");
    getDoc(reg_Ref).then(res => {
      let Detu = [];
        Detu.push({
          ...res.data(),
          id:res.id
      });
      console.log(Uid)
       setData(Detu)
    }).catch(err => console.log(err))
  },[Uid,UserStore])

  useEffect(() => {
    UserDet()
    sub()
  },[data])


  const [formerror, setvalidation] = useState("");

  const handleChange = (e) => {
   
    const {name, value} = e.target
    setUser({
      ...usar,
      [name]:value
    })
  }
  
  const { 
    username,
    img,
    firstName,
    LastName, 
    email,
    phnnum,
    add,
    city,
    state,
    zip,
    country,
    password
  } = usar;

    const validate = (values) =>{
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.email) {
          setvalidation("Email is required!");
          return false;
        }else if (!regex.test(values.email)){
            setvalidation("This is not valid Email!!")
            return false;
        }else if(!values.password) {
            setvalidation("Password is required!");
            return false;
        }else if (values.password.length < 6){
            setvalidation("password should more then 6 !!")
            return false;
        }else if (!values.phnnum) {
            setvalidation("phone-number is required!");
            return false;
        }else if (values.phnnum.length < 9) {
            setvalidation("phone-number is not valid");
            return false;
        }else {
            return true;
        }
      };



      

      //final api 
  const senddata =  (e) => {
    e.preventDefault();
    if (!validate(usar)) {
       alert("it is not valid")
    } else if (validate(usar)) {
      submituser();
      
    }


}
 
// db setup

     
  

    const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}

    return(
        <div className='FSJA1 flex'>
            <Sidenev/>
        <div className='main1  h-screen w-screen'>
        <Topnev/>
         <div className="Edit1">
            {data.map((u) => {
             
              return (
                <div className="midEdit1" key={!Uid ? nevigate("/login"): Uid}>
                <div className="topNv1">
                    <div className="bckbtn1" onClick={goBack}>
                        <img src={Bck} className='img1231'/>
                    </div>
                </div>
                <div className="midl1">
                    <div className="txt1">
                        <div className="txt0">Edit Profile {formerror}</div>
                        <div className="savebtb" onClick={senddata}>Save</div>
                    </div>
                    <div className="userFeild1">
                       <div className="prPic1">
                          <img src={usar.img} className='imguser1' />
                       </div>
                       <ToastContainer
                       position="top-right"
                       autoClose={2000}
                       hideProgressBar={false}
                       newestOnTop={false}
                       closeOnClick
                       pauseOnFocusLoss
                       draggable
                       pauseOnHover
                       />
                    </div>
                    <div className="userNameF1">
                      <div className="FName1">
                        First Name
                         <input 
                         value={usar.firstName}
                         type="text1"
                         className='infid1'
                         name="firstName"
                         onChange={handleChange}
                          /> 
                      </div>
                      <div className="FName2">
                        Last Name
                        <input 
                        name='LastName'
                         value={usar.LastName}
                         type="text" 
                         onChange={handleChange}
                         className='infid2'/>
                      </div>
                      
  
                    </div>
                    <div className="EmailF1">
                        Email Edit / Varify
                        <input 
                        name='email'
                        value={usar.email}
                        type="email" 
                        onChange={handleChange}
                        className='infid3'/>
                    </div>
                    <div className="EmailF1">
                        Contact - Number
                        <input 
                        name='phnnum'
                        value={usar.phnnum}
                        type="number" 
                        onChange={handleChange}
                        className='infid3'/>
                    </div>
                    <div className="EmailF1">
                        Address
                        <input 
                        name='add'
                        value={usar.add}
                        type="text" 
                        onChange={handleChange}
                        className='infid3'/>
                    </div>
  
                    <div className="userNameF1">
                      <div className="FName1">
                        City
                         <input 
                         name='city'
                         value={usar.city}
                         type="text1" 
                         onChange={handleChange}
                         className='infid1'/>
                      </div>
                      <div className="FName2">
                        State
                        <input 
                        name='state'
                        value={usar.state}
                        type="text" 
                        onChange={handleChange}
                        className='infid2'/>
                      </div>
                    
                    </div>
                    <div className="userNameF1">
                      <div className="FName1">
                        Zip - Code
                         <input 
                         name='zip'
                         value={usar.zip}
                         type="number" 
                         onChange={handleChange}
                         className='infid1'/>
                      </div>
                      <div className="FName2">
                        Country
                        <input 
                        name='country'
                        value={usar.country}
                        type="text"
                        onChange={handleChange}
                        className='infid2'/>
                      </div>  
  
                    </div>
                    <div className="userNameF1">
                      <div className="FName1">
                        Password
                         <input 
                         value={usar.password}
                         type="password"
                         className='infid1'
                         name="password"
                         onChange={handleChange}
                          /> 
                      </div>
                      <div className="FName2">
                        Username
                        <input 
                        name='username'
                         value={usar.username}
                         type="text" 
                         onChange={handleChange}
                         className='infid2'/>
                      </div>
                      
  
                    </div>
  
                </div>
            </div>
              )
            })} 
              
          </div>
        <Footer/>
        </div></div>
        
        
    )
};
