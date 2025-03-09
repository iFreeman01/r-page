import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1> WELCOME TO CASA KOBA </h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                        src="images/studio-6.jpg"
                        text="All About Me"
                        label='About Me'
                        path='/aboutme'
                    />

                    <CardItem 
                        src="images/studio-5.jpg"
                        text="Check out all my Social Media!"
                        label='Social Media'
                        path='/aboutme'
                    />

                </ul>

                <ul className="cards__items">
                    <CardItem 
                        src="images/studio-1.jpg"
                        text="Here is where the music starts..."
                        label='My Studio'
                        path='/aboutme'
                    />

                    <CardItem 
                        src="images/studio-2.jpg"
                        text="Check out this samples!"
                        label='My Work'
                        path='/services'
                    />

                    <CardItem 
                        src="images/studio-3.jpg"
                        text="Make your music a reality! Check my services!"
                        label='Services & Costs'
                        path='/services'
                    />
                </ul>   
            </div>
        </div>
    </div>
  )
}
 
export default Cards
