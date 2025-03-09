import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/sample-1.mp4' autoPlay loop muted />
        <h1> Your Next Music, Awaits... </h1>
        <p> What are you waiting for?</p>
        <div className='hero-btns'>
            <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
            >
            GET STARTED
            </Button>
            <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
            >
            CHECK OUT MY STUDIO! <i className='far-fa-play-circle'/>
            </Button>
        </div>
    </div>
  )
}

export default HeroSection
