import React, {useState,useEffect} from 'react';
import '../register/Regpage.css';

function Register() {
 
  const [user, setUser] = useState({
    name:"",
    email:"",
    password:"",
    reEnterPassword:""
  })
  
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
    
    if(!values.name) {
      errors.name = "Email is required!";
    }else if (values.name.length < 3){
      errors.name = "This name should be more then 3!!"
    }

    if(!values.reEnterPassword) {
      errors.reEnterPassword = "password is required!";
    }else if (values.reEnterPassword !== values.password){
      errors.reEnterPassword = "value is not same!!"
    }

    if(!values.password) {
      errors.password= "Password is required!";
    }else if (values.password.length < 6){
      errors.password = "password should more then 6 !!"
    }
    return errors;
  };

  return (
    <>
      <div  className='mainbox h-screen w-screen '>
      {console.log("User",user)}
      <div className='midlbox'>
         <h1 className='registertext'>Register</h1>
          
         {Object.keys(formerror).length === 0 && isSubmit ? 
         <div className="welcome">Register Succesfully!</div> : 
         <div className="welcome">Welcome </div>}

         <input 
         type="text" 
         className="feild" 
         name="name" 
         value={user.name} 
         placeholder='Name'  
         onChange={handleChange}
         />

          <div className="validate">
              {formerror.name}
          </div>

         <input 
         type="text" 
         className="feild" 
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

         <input 
         type="password" 
         className="feild" 
         name="reEnterPassword" 
         value={user.reEnterPassword} 
         placeholder='Re-Enter-Password' 
         onChange={handleChange}
         />

           <div className="validate">
              {formerror.reEnterPassword}
           </div>

         <div className="btn" onClick={ handlesubmite}>Register</div>
         <div className='ortext'>Or</div>
         <div className="btn">Login</div>

      </div>
       
    </div>
    </>
  );
}

export default Register;
