import './ActivityCard.css';
import React from 'react';

export default function ActivityCard({cardTitle, cardText, urlEvidence}){
    return(
        <div className='container-activity' style={{width: '18rem'}}>
            <img src={`${process.env.PUBLIC_URL}/card-images/actividades.png`} alt='...'/>
            <div className='activity-text'>
                <h5 className='activity-title'>{cardTitle}</h5>
                <p className="activity-text">{cardText}</p>
                <a href={`${urlEvidence}`} className="activity-button" target="_blank" rel="noopener noreferrer">Entrar</a>
            </div>
        </div>
    )
}
