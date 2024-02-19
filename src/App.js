import './App.css';
import Presentation from './components/Presentation'
import CreateCard from './components/CreateCard'

function App() {
  return (
    <div className="app">
      <Presentation/>
      <div className='activities'>
        <CreateCard
          imageName='actividad1.jpg'
          cardTitle='Actividad 1'
          cardText='Linea de tiempo'
          urlEvidence="https://unidadestecno-my.sharepoint.com/:i:/g/personal/caperezquintanilla_uts_edu_co/ESXD9-K7jztNvdTBuuHQf7cBKCBppUic5M8r14gM5jtbag?e=PUtPOB"
        />
      </div>
      

    </div>
  );
}

export default App;
