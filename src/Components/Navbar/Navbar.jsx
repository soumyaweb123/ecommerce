import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../Assists/logo.png'
import cart from '../Assists/cart.jpg'
import { ShopContext } from '../../Context/ShopContext'

export default function Navbar() {
      const [menu,setMenu]=useState("shop");
      const {getTotalCartItems} =useContext(ShopContext)
  return (
    <div className='navabar'>
      <div className='nav-logo'>
        <img src={logo} alt="logo_image" width="70px"/>
        <p>ZEYVRA</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}}to='/' >Shop </Link>{menu === "shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}}to='/mens'>Men</Link>{menu === "mens" &&<hr/>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}}to='/womens'>Women</Link>{menu === "womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}}to='/kids'>Kids</Link>{menu === "kids"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        
        <Link to='/cart'><img src={cart} alt="cart_image" width="40px"/></Link>
     <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  )
}
