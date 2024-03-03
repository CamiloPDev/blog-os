import './Cut1.css';
import Presentation from '../../../components/presentation/Presentation';
import ActivityCard from '../../../components/cards/activity/ActivityCard'


export default function Cut1() {
    return (
        <>
            <Presentation activeLink={true}/>
            <div className='activities'>
                <ActivityCard
                cardTitle='Actividad 1'
                cardText='Línea de tiempo'
                urlEvidence="https://unidadestecno-my.sharepoint.com/:i:/g/personal/caperezquintanilla_uts_edu_co/ESXD9-K7jztNvdTBuuHQf7cBKCBppUic5M8r14gM5jtbag?e=PUtPOB"
                />
                <ActivityCard
                cardTitle='Actividad 2'
                cardText='Ciclo de vida de sistemas informáticos'
                urlEvidence="https://unidadestecno-my.sharepoint.com/:b:/g/personal/caperezquintanilla_uts_edu_co/EccM2OmTYAJCj8irrWKAob0BRQeE4jEmy-j5elJSlucEnQ?e=4RvDV3"
                />
                <ActivityCard
                cardTitle='Actividad 3'
                cardText='Tipos de kernel'
                urlEvidence="https://unidadestecno-my.sharepoint.com/:b:/g/personal/caperezquintanilla_uts_edu_co/Eb9z-Wf289BJmhgcGx5Vx4YBFE__am25Tu-4BBZdepse2Q?e=yd9Wep"
                />
                <ActivityCard
                cardTitle='Actividad 4'
                cardText='Sistemas operativos modernos'
                urlEvidence="https://unidadestecno-my.sharepoint.com/:b:/g/personal/caperezquintanilla_uts_edu_co/EUtcj7sOdpBOnDxMEQsNHHgBUeEBig-HEoyP2v0svI7v2w?e=5dSifq"
                />
            </div>
        </>
    );
}