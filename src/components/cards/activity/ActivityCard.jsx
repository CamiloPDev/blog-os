import './ActivityCard.css';
import React from 'react';

export default function ActivityCard({imageName, cardTitle, cardText, urlEvidence}){
    return(
        <div className='card activity-card' style={{width: '18rem'}}>
            <img src={`${process.env.PUBLIC_URL}/card-images/${imageName}`} className='card-img-top' alt='...'/>
            <div className='card-body'>
                <h5 className='card-title'>{cardTitle}</h5>
                <p className="card-text">{cardText}</p>
                <a href={`${urlEvidence}`} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Entrar</a>
            </div>
        </div>
    )
}
