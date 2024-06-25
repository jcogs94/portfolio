import React from 'react'
import heroImage from './heroImg.jpg'

import './Hero.css'

const Hero = () => {
    return <>
        <div id="hero">
            <img src={heroImage} alt="hero-img" />
        </div>
    </>
}

export default Hero
