import Presentation from '../../../components/presentation/Presentation';
import Accordion from '../../../components/accordion/Accordion';

export default function Cut3() {
    return (
        <>
            <Presentation activeLink={true}/>
            <Accordion 
                title='IPV4 / IPV6' 
                type='pdf' 
                pdfName='IPV4eIPV6.pdf'
            />
            <Accordion 
                title='Protocolos de red' 
                type='pdf' 
                pdfName='Protocolos de red.pdf'
            />
            <Accordion 
                title='Partición de discos' 
                type='pdf' 
                pdfName='Partición de discos.pdf'
            />
        </>
    );
}