import { createStore, applyMiddleware, compose ,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import examReducer from '../reducer/examReducer';

//import Reducers

 
const combinedReducers = combineReducers({
    examReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const composeEnhancers =  compose;
 
const store = createStore(combinedReducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk),
  ));


  export default store;