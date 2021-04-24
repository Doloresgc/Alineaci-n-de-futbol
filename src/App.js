import React from 'react'
import Jugadores from './components/Jugadores';
import { Provider } from 'react-redux';
import store from './store'
import EquipoSeleccionado from './components/equiposeleccionado';

const App = () => (
  <Provider store={store}>
    <main>
      <h1>Plantilla de futbolistas</h1>
      <Jugadores/>
      <EquipoSeleccionado />
    </main>
  </Provider>
)

export default App

