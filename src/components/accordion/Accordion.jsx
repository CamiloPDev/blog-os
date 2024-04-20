import './Accordion.css';
import React, { useState } from "react";

export default function AcordeonCard({title, type, pdfName=null, imageName=null}){
    const [accordionOpen, setAccordionOpen] = useState(false);

    var object_accordeon;

    if(type === "pdf"){
        object_accordeon = <object className="pdfview" type="application/pdf" data={`${process.env.PUBLIC_URL}/documents/${pdfName}`}>Actividad</object> ;
    }
    else if(type === "image"){
        object_accordeon = <img className='imageview' src={`${process.env.PUBLIC_URL}/documents/${imageName}`} alt='evidences'></img>
    }
    else{
        object_accordeon = <h1>Tipo no disponible.</h1>
    }

    return(
       <div className='container'>
            <button
                onClick={() => setAccordionOpen(!accordionOpen)}
                className="main-button"
            >
                <span><h1>{title}</h1></span>
                <svg
                    className="svg-g"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`rect-1 ${
                        accordionOpen && "rotate-180"
                        }`}
                    />
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`rect-2 ${
                        accordionOpen && "rotate-180"
                        }`}
                    />
                    </svg>
            </button>
            <div
                className={`content ${
                accordionOpen
                    ? "content-activate"
                    : "content-disable"
                }`}
            >
                <div className="content-hidden">
                    {object_accordeon}
                </div>
            </div>
       </div>
    )
}