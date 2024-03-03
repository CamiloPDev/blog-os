import React from 'react';
import './CutCard.css'

export default function CutCard ({cardText}){

    const randomColor = () => '#' + Math.floor(Math.random()*16777215).toString(16);
    const style = {
        color:randomColor()
    }

    return (
        <div className='cut-card'>
            <h3 className='cut-card-title'>Corte</h3>
            <p style={style}>{cardText}</p>
        </div>
    );
}