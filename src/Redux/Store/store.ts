//store will get all the data inside reducer so that it can be use in diffrernt componenet thru calling reducers inside the store
//send to react js app
//  import {createStore} from 'redux';
import RootSaga from '../Saga/RootSaga'; 
import { configureStore } from '@reduxjs/toolkit';
import prodSaga from '../Saga/prodSaga'
import createSagaMiddleware from "redux-saga"

//  const store =createStore(RootSaga);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer:RootSaga,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware) //try
});

sagaMiddleware.run(prodSaga);
export default store;


