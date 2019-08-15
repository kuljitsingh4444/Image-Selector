import React from 'react';
import image from '../assets/one.png';

export default function(){
    return(
        <div className='img-container'>
            <img className='image-content' src={image}/>
        </div>
    )
}