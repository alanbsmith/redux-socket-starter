import { createStore, applyMiddleware, } from 'redux'
import reducers from '../reducers'
import socketMiddleware from '../middlewares/socket';

function configureStore(initialState) {
  return createStore(
    reducers,
    applyMiddleware(socketMiddleware)
  )
}

export default configureStore;
