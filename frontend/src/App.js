import React, {useEffect, useState} from 'react';
import Pacientes from './components/Pacientes';
import NuevaCita from './components/NuevaCita';
import Cita from './components/Cita';
import clienteaxios from './config/axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  const [citas, guardarCitas] = useState([]);
  
  useEffect(() => {
    const consultarAPI = () => {
      clienteaxios.get('/pacientes')
        .then(res => {
          guardarCitas(res.data.result);
        })
        .catch(e => {
          console.log(e)
        })
    }
    consultarAPI();
  }, [])
  return (
    <Router>
      <Switch>
        
        <Route exact path="/" component={() => <Pacientes citas={citas} />} />
        <Route exact path="/nueva" component={NuevaCita}/>
        <Route exact path="/cita/:id" component={Cita}/>

      </Switch>
    </Router>
  );
}

export default App;
