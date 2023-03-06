
import React, {useState} from 'react';
import "../Register/register.css";
import {collection,getDocs,addDoc,doc, setDoc} from "firebase/firestore"
import { Navigate, useNavigate} from "react-router-dom";
import { db,auth } from '../../../firebase.file/firebase';
import { createUserWithEmailAndPassword,updateProfile,sendSignInLinkToEmail } from "firebase/auth"
import Reg1 from './Reg1';
import Reg2 from './Reg2';


export default function Register() {
 
const nevigate = useNavigate();

  const [usar, setUser] = useState({
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
  
  const [formerror, setvalidation] = useState("");
 
  const handleChange = (e) => {
   
    const {name, value} = e.target
    setUser({
      ...usar,
      [name]:value
    })
  }
 
  const { 
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

function insertData () {
  createUserWithEmailAndPassword(auth,usar.email,usar.password)
  .then((res) => {
     const userS = res.user;
    updateProfile(userS, {
      displayName: usar.username,
    })  
    const reg_Ref = doc(db,userS.uid,"Register");
    setDoc(reg_Ref,{usar}).then(res => {
      console.log(res)
    }).catch(err => console.log(err))

   
   alert("done"); 
   
   nevigate("/login")
 }).catch(err => {
  console.log(err)
    if (err) {
    setvalidation("Email already in use")
    } 
 })


}
    
      

      //final api 
  const senddata =  (e) => {
    e.preventDefault();
    if (!validate(usar)) {
       alert("jaldi kar kal sham panwell nikalna hian")
    } else if (validate(usar)) {
        // sendSignInLinkToEmail(auth, usar.email)
        //    .then(() => {
        //     alert("varification send succesfully")
        //     window.localStorage.setItem('emailForSignIn', email);
        // }).catch((error) => {
        //    console.log(error)
        // });
     insertData();
      
      
       
    }


}
 
// db setup

const [Reg,setReg] = useState(true)

const toggle = () => {
    setReg(!Reg)
}
  return (
    <>
     <div  className='mainbox h-screen w-screen ' >
    
        {Reg ?  <Reg1 
           formerror={formerror}
           handleChange={handleChange}
           email={usar.email}
           password={usar.password}
           user={usar}
           toggle={toggle}
           /> : <Reg2 
           senddata={senddata}
           formerror={formerror}
           handleChange={handleChange}
           username={usar.username}
           phnnum={usar.phnnum}
           user={usar}
           toggle={toggle}
           /> }
       
     </div>
    </>
  );
}

