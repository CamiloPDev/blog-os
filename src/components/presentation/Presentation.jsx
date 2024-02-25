import './Presentation.css'
import React from 'react';
import { Link } from "react-router-dom";

function Presentation({activeLink = false}){
    return (
        <div className='presentation'>
            <img src={`${process.env.PUBLIC_URL}/studenticon.png`} alt='ICON'/>
            <h2>Camilo Andres Perez Quintanilla</h2>
            <h3>E191</h3>
            {activeLink ? <Link to='/blog-os' className="btn btn-primary">Volver</Link> : null}
        </div>
    );
}

export default Presentation;