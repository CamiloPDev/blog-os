import './Presentation.css'
import React from 'react';
import { Link } from "react-router-dom";

function Presentation({activeLink = false}){
    const presentation = (
        <div className='presentation'>
            <img src={`${process.env.PUBLIC_URL}/studenticon.png`} alt='ICON'/>
            <h2>Camilo Andres Perez Quintanilla</h2>
            <h3>E191</h3>
        </div>
    );

    return activeLink ? (
        <Link to='/blog-os' className='presentation-link'>
            {presentation}
        </Link>
    ) :
    presentation;
}

export default Presentation;