import React from 'react';

function Presentation(){
    return (
        <div className='presentation'>
            <img src={`${process.env.PUBLIC_URL}/studenticon.png`} alt='ICON'/>
            <h2>Camilo Andres Perez Quintanilla</h2>
            <h3>E191</h3>
        </div>
    )
}

export default Presentation;