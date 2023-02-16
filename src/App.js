import Nav from "./components/Nav/Nav";
import './App.css';
import {useState} from "react";
import InteresSimple from "./components/InteresSimple/InteresSimple";
import InteresComplejo from "./components/InteresComplejo/InteresComplejo";



const App = () => {
    const [seccion, setSeccion] = useState({
        interesSimple: true,
        interesComplejo: false,
    });
    const renderSeccion = () => {
        setSeccion({...seccion, interesSimple: !seccion.interesSimple, interesComplejo: !seccion.interesComplejo })
    }

  return(
      <div>
          <Nav renderSeccion={renderSeccion} seccion={seccion}/>
          <main className="container mt-3">
              {
                  seccion.interesSimple ? <InteresSimple/> : <InteresComplejo/>
              }

          </main>
      </div>
  )
}
export default App;