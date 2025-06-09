import React from 'react'
import './CSS/Login.css'

const LoginSign = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>

        <button>Continue</button>

        {/* Correctly placed below the button */}
        <p className='loginsignup-login'>
          Already have an account? <span>Login</span>
        </p>

        <div className='loginsignup-agree'>
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSign
