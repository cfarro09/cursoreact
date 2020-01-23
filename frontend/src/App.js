import React, { useEffect, useState } from 'react';
import Pacientes from './components/Pacientes';
import NuevaCita from './components/NuevaCita';
import Cita from './components/Cita';
import clienteaxios from './config/axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  const [citas, guardarCitas] = useState([]);
  const [consultar, guardarConsulta] = useState(true);

  useEffect(() => {
    const consultarAPI = () => {
      clienteaxios.get('/pacientes')
        .then(res => {
          guardarCitas(res.data.result);
          guardarConsulta(false);
        })
        .catch(e => {
          console.log(e)
        })
    }
    if (consultar)
      consultarAPI();
  }, [consultar])
  return (
    <Router>
      <Switch>

        <Route exact path="/" component={() => <Pacientes citas={citas} />} />
        <Route exact path="/nueva" component={() => <NuevaCita guardarConsulta={guardarConsulta} />} />
        <Route
          exact
          path="/cita/:id"
          render={(props) => {
            const cita = citas.filter(x => x._id == props.match.params.id)[0];
            
            return(
              <Cita cita={cita} guardarConsulta={guardarConsulta}/>
            )
            
          }}
         />

      </Switch>
    </Router>
  );
}

export default App;
