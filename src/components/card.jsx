import React from 'react'
import './card.css'
import myImage from './github-social-preview.png';

export const Card = () => {
    return (
        <div className='card-container'>
            <a href="learn-websockets">
                <img src={myImage} className='card-img'/>
            </a>
        </div>
        
    )
}