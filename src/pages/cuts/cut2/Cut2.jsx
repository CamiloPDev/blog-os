import Presentation from '../../../components/presentation/Presentation';
import Accordion from '../../../components/accordion/Accordion';


export default function Cut2() {
    return (
        <>
            <Presentation activeLink={true}/>
            <Accordion 
                title='Bloque de control de procesos (BCP)' 
                type='pdf' 
                pdfName='Bloque de control del proceso.pdf'
            />
            <Accordion 
                title='Planificación De Procesos' 
                type='pdf' 
                pdfName='Algoritmos.pdf'
            />
            <Accordion 
                title='Mapa Mental Memoria' 
                type='image' 
                imageName='corte2_mapa_mental_memoria.jpeg'
            />
        </>
    );
}