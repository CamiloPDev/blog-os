import './Cut1.css';
import Presentation from '../../../components/presentation/Presentation';
import ActivityCard from '../../../components/cards/activity/ActivityCard'


export default function Cut1() {
    return (
        <>
            <Presentation activeLink={true}/>
            <div className='activities'>
                <ActivityCard
                imageName='actividad1.jpg'
                cardTitle='Actividad 1'
                cardText='Linea de tiempo'
                urlEvidence="https://unidadestecno-my.sharepoint.com/:i:/g/personal/caperezquintanilla_uts_edu_co/ESXD9-K7jztNvdTBuuHQf7cBKCBppUic5M8r14gM5jtbag?e=PUtPOB"
                />
            </div>
        </>
    );
}