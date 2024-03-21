//store will get all the data inside reducer so that it can be use in diffrernt componenet thru calling reducers inside the store
//send to react js app
 import {createStore} from 'redux';
import RootSaga from '../Saga/RootSaga'; 

 
 const store =createStore(RootSaga);

export default store;


