import React from 'react'
import './CSS/LoginSingup.css'
function LoginSingup() {
  return (
    <div className='loginsingup'>
      <div className="loginsingup-container">
        <h1>
          Sing Up
        </h1>
        <div className="loginsingup-fieds">
          <input type="text"  placeholder='Your Name'/>
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='password' />
        </div>
        <button>Continue</button>
        <p className='loginsingup-login'>Already have an account <span>Login here</span></p>
        <div className="loginsingup-agree">
          <input type="checkbox" name='' id='' />
          <p>By Continuing, i agree to the terms of use & Privacu Policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSingup
