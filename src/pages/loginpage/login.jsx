import React, { useState, useEffect} from 'react';
import "../loginpage/login.css"
import { Link ,useNavigate} from "react-router-dom";
// import {collection,getDocs,addDoc} from "firebase/firestore"
// import { db } from '../../firebase.file/firebase';
import { db,auth } from '../../firebase.file/firebase';
import {signInWithEmailAndPassword} from "firebase/auth";
import {UserStore,UserDet} from "../../pullstore/userInfo"

function Login() {
  var Uid = UserStore.Uid
 
  
  const [formerror,setvalidation] = useState("")
  const [user, setUser] = useState({
    email:"",
    password:"",
  });
  
  const validate = (values) =>{
     

    if(!values.email) {
      setvalidation("Email is required!");
      return false;
    }else if (!values.password){
        setvalidation("password is required!")
        return false;
    }else {
      return true;
    }
  };

   const handleChange = (e) => { 
    
    const {name, value} = e.target
    setUser({
      ...user,
      [name]:value
    })
   validate(user)
   }
   const {
    password,
    email,
    } = user;

  

   const navigate = useNavigate();
   const handleclick = () => {
    if (!validate(user)) {
        alert("error")
    } else if (validate(user)){
       signInWithEmailAndPassword(auth,user.email,user.password).then(
      (res) => {
         console.log(res)
         const userS = res.user;
          navigate("/")
      }).catch(err => {
          console.log(err)
      })
    }

    }

    useEffect(() => {
      UserDet()
    },[Uid])
  return (
    <div  className='mainbox1 h-screen w-screen '>
      {console.log(user)}
      <form className='midllbox1'>
         <h1 className='logintext1'>Login</h1>

         <div className="welcome1">Welcome </div>


         <input className="feild1" 
          type="text" 
          name="email" 
          value={user.email} 
          placeholder='Example@gmail.com'  
          onChange={handleChange}
          />




         <input 
         type="password" 
         className="feild1" 
         name="password" 
         value={user.password} 
         placeholder='Password'  
         onChange={handleChange}
         />
         <div className="validate1">
            {formerror}
            </div>


         <Link to=""><div className="btn1" onClick={handleclick}>Login</div></Link>
         <div className='ortext1'>or</div>
         <Link to="/register"><div className="btn1" >Register</div></Link>
      </form>
       
    </div>
  );
}

export default Login;
