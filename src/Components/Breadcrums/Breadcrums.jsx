import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../Assists/arrow.png'
const Breadcrums = (props) => {
    const {product} =props;
    if(!product) return null;

  return (
    <div className='breadcrums'>
      Home<img src={arrow_icon} width="10px"alt=""/>
      SHOP<img src={arrow_icon}width="10px" alt=""/>
      {product.category}
      <img src={arrow_icon}width="10px" alt=""/>
      {product.name}

    </div>
  )
}

export default Breadcrums
