import { applyMiddleware, createStore, compose } from 'redux'
// import thunk from 'redux-thunk'
import rootReducer from './rootReducer';


// const middleware = [thunk]

const store = createStore(rootReducer)

export default store;