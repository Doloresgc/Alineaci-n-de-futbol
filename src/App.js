import React from 'react'
import Jugadores from './components/Jugadores';
import { Provider } from 'react-redux';
import store from './store'

const App = () => (
  <Provider store={store}>
    <main>
      <h1>Plantilla de futbolistas</h1>
      <Jugadores/>
    </main>
  </Provider>
)

export default App

