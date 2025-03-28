import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'


const Login = () => {

  const [signup,setsignup] = useState(false);

  return (
    <div className='login-pg'>
      <img src={logo} alt="" className='logo' />
      {signup?(
            <div className="sigin-form">
            <h3>Sign In</h3>
            <input type="text" placeholder='UserName'/>
            <input type="password" placeholder='Password'/>
            <button className='sign-upbtn'>Login</button>
          </div>
      ):(
        <div className="signup-form">
        <h3>Sign Up</h3>
        <input type="text" placeholder='Your Name'/>
        <input type="email" placeholder='Email'/>
        <input type="password" placeholder='Password'/>
        <button className='sign-upbtn' onClick={()=>{setsignup(true)}} >Sign Up</button>
        <div className="remember">
        <input type="checkbox"/>
        <label htmlFor="">Remember Me</label>
        </div>
        <p className='already'>Already have an account <span className='signin'>Sign In Now</span></p>
      </div>
      )
}
    </div>
  )
}

export default Login