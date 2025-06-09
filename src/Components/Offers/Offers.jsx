import React from 'react'
import './Offers.css'
import exclusive_image  from '../Assists/exclusive1-removebg-preview.png'
const Offers = () => {
  return (
    <div className='offers'>
      <div className='offers-left'>
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className='offers-right'>
        <img src={exclusive_image }  width="450px" height="350px"alt=""/>
      </div>
    </div>
  )
}

export default Offers
