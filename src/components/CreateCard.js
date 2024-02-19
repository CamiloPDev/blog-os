import React from 'react';

function CreateCard({imageName, cardTitle, cardText, urlEvidence}){
    return(
        <div className='card' style={{width: '18rem'}}>
            <img src={`${process.env.PUBLIC_URL}/card-images/${imageName}`} className='card-img-top' alt='...'/>
            <div className='card-body'>
            <h5 className='card-title'>{cardTitle}</h5>
            <p className="card-text">{cardText}</p>
            <a href={`${urlEvidence}`} className="btn btn-primary">Entrar</a>
            </div>
        </div>
    )
}

export default CreateCard;