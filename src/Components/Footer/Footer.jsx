import React from 'react'
import './Footer.css'
import logo from '../Assists/logo.png'
import insta from '../Assists/instagram.jpg';
import whatsupp from '../Assists/whatsupp.png';
import pint from '../Assists/pintt.png';

const Footer = () => {
  return (
    <div className='footer'>
<div className='footer-logo'>
    <img src={logo} width="100px" alt=""/>
    <p>SHOPPER</p>

</div>
    <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
        </ul> 
        <div className='footer-social-icon'>
           <div className='footer-icon-container'>
            <img src={insta} width="109px" alt=""/>
           
            </div>
            <div className='footer-icon-container'>
            <img src={whatsupp} width="150px" alt=""/>
           
            </div>
            <div className='footer-icon-container'>
            <img src={pint} width="180px" alt=""/>
           
            </div>

            </div>
            <div className='footer-copyright'>
                <hr/>
                <p>Copyright @ 2025 - All Right Reserved. </p>
                </div> 
    </div>
  )
}

export default Footer
