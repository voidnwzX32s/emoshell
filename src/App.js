import React,{useState,useEffect} from 'react';
import './App.css';
import { auth } from './firebase.file/firebase';
import {Route,Routes} from 'react-router-dom';
import Reg from './pages/home/Register/Register';
import Home from './pages/home/Home';
import Markit from './pages/mapmarkit/mapmarkit';
import Login from './pages/loginpage/login';
import Aboute from './pages/aboutus/about';
import UserEdit from './pages/home/userEdit/UserEdit';
import Notifi from './components/notify/Notifi';
import { useNavigate } from 'react-router-dom';

function App() {

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


  return (
     <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/notifi" element={<Notifi/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/markit" element={<Markit/>} />
      <Route exact path="/register" element={<Reg/>} />
      <Route exact path="/aboute" element={<Aboute/>} />
      <Route exact path="/userEdit" element={signIn ? <UserEdit/> : <Login/>} />
      {/* <Redirect to="/home" /> */}
     </Routes>
    
  );
}

export default App;
