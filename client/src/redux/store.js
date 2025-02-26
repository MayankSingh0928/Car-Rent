import { createStore,applyMiddleware, combineReducers,compose } from 'redux';
//import { configureStore } from '@reduxjs/toolkit'; 
//import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk';
import { carsReducer } from './reducers/carsReducer';
import { alertsReducer } from './reducers/alertsReducer';
import { bookingsReducer } from './reducers/bookingsReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    carsReducer,
    alertsReducer,
    bookingsReducer
})

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);




export default store