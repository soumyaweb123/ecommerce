import React from 'react'
import './CSS/Login.css'
const LoginSign = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button className=''>Continue</button>
        <p className='loginsignup-login'
>Already have an account?
<span>Login</span>
<div className='loginsignup-agree'>
  <input type="checkbox" name="" id=""/>
  <p>By continuing ,i agree to the trems of use & privacy policy.</p>
</div>
</p>      
</div>
      
    </div>
  )
}

export default LoginSign
