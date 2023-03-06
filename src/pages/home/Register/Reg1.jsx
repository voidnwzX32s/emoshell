import React from "react";
import "../Register/register.css"

export default function Reg1(props) {
    return (
        <>
       
     
       <form className='midllbox' >
         {console.log(props.user)}
        <h1 className='logintext'>Login</h1>

       
        <div className="welcome">Welcome </div>


        <input className="feild" 
         type="text" 
         name="username" 
         value={props.username} 
         placeholder='Username'  
         onChange={props.handleChange}
         />

         

        <input 
        type="password" 
        className="feild" 
        name="password" 
        value={props.password} 
        placeholder='Password'  
        onChange={props.handleChange}
        />
        <div className="validate">
             {props.formerror}
         </div>

         <div onClick={props.toggle} className="toggle1">
            <div className="togglemove1 toggle">Next</div>
         </div>
        </form>
      
        </>
    );
};
