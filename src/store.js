
import {createStore} from 'redux';

const estadoInicial = {
    jugadores : [],
    titulares : [],
    suplentes : []
}
const reducerEntrenador  = (state = estadoInicial, action) => {
    return state
}

export default createStore(reducerEntrenador)
