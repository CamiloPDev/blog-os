import './Home.css'
import Presentation from '../../components/presentation/Presentation';
import CutCard from '../../components/cards/cut/CutCard';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <Presentation/>
            <div className='cuts'>
                <Link to='cut-1' className='cut-link'>
                    <CutCard
                        imageName='cut1.png'
                        cardText='Corte 1'
                    />
                </Link>
                <Link to='cut-2' className='cut-link'>
                    <CutCard
                        imageName='cut2.png'
                        cardText='Corte 2'
                    />
                </Link>
                <Link to='cut-3' className='cut-link'>
                    <CutCard
                        imageName='cut3.png'
                        cardText='Corte 3'
                    /> 
                </Link>
            </div>
        </>
    )
}
