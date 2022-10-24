import React, { useState, useEffect} from 'react';
import "../loginpage/login.css"


function Login() {
 

  const [user, setUser] = useState({
    email:"",
    password:"",
  });

  const [formerror, setvalidation] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


  const handleChange = e => {
    const {name, value} = e.target
    setUser({
      ...user,
      [name]:value
    })
  }
  
  const handlesubmite = (c) =>{
    c.preventDefault();
    setvalidation(validate(user));
    setIsSubmit(true);

  }
  
  useEffect(() => {
    console.log(formerror);
    if(Object.keys(formerror).length === 0 && isSubmit){
      console.log(user)
    }
  }, [formerror]);

  const validate = (values) =>{
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.email) {
      errors.email = "Email is required!";
    }else if (!regex.test(values.email)){
      errors.email = "This is not valid Email!!"
    }

    if(!values.password) {
      errors.password= "Password is required!";
    }else if (values.password.length < 6){
      errors.password = "password should more then 6 !!"
    }
    return errors;
  };
    
  return (
    <div  className='mainbox h-screen w-screen '>
     
      <form className='midllbox' onSubmit={handlesubmite}>
         <h1 className='logintext'>Login</h1>

         {Object.keys(formerror).length === 0 && isSubmit ? 
         <div className="welcome">Login Succesfully!</div> : 
         <div className="welcome">Welcome </div>}


         <input className="feild" 
          type="text" 
          name="email" 
          value={user.email} 
          placeholder='Example@gmail.com'  
          onChange={handleChange}
          />


          <div className="validate">
              {formerror.email}
          </div>


         <input 
         type="password" 
         className="feild" 
         name="password" 
         value={user.password} 
         placeholder='Password'  
         onChange={handleChange}
         />
         <div className="validate">
            {formerror.password}
            </div>


         <div className="btn" onClick={handlesubmite}>Login</div>
         <div className='ortext'>Or</div>
         <div className="btn">Register</div>
      </form>
       
    </div>
  );
}

export default Login;
