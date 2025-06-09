import React from 'react'
import './Hero.css'
import hand_icon from '../Assists/new_arrivals.jpg';
import arrow_icon from '../Assists/arrow_image.jpg';
import hero_image from '../Assists/womenn.webp';
const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
<h2>NEW ARRIVALS ONLY</h2>
<div>
    <div className='hero-hand-icon'>
        <p>new</p>
        <img src={hand_icon} className='images-hand' alt=""/>
    </div>
    <p>collections</p>
    <p>for everyone</p>
</div>
<div className='hero-latest-btn'>
    <div>Latest Collection</div>
    {/* <img src={arrow_icon} width="260px" alt=""/> */}
</div>
      </div>
      <div className='hero-right'>
<img src={hero_image} width="460px" alt=""/>
      </div>
    </div>
  )
}

export default Hero
