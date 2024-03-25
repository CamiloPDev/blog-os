import Presentation from '../../../components/presentation/Presentation';
import Accordion from '../../../components/accordion/Accordion';


export default function Cut2() {
    return (
        <>
            <Presentation activeLink={true}/>
            <Accordion title='Bloque de control de procesos (BCP)' pdfName='Bloque de control del proceso.pdf'/>
        </>
    );
}