import React from 'react';
import './CutCard.css'

export default function CutCard ({imageName,cardText}){
    return (
        <div className='card cut-card'>
            <img src={`${process.env.PUBLIC_URL}/cut-images/${imageName}`} className='card-img-top' alt='...'/>
            <div className='card-body'>
                <p className='card-text'>{cardText}</p>
            </div>
        </div>
    );
}