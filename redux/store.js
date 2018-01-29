import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'

// TODO: add middleWare
let finalCreateStore = compose(
    applyMiddleware(logger())
)(createStore)

export default function configureStore(initialState = { todos: [] }) {
    return createStore(reducer, initialState)
}