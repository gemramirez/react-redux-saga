//function* = generation function
//prodsaga = productSaga 

import { put, takeEvery} from 'redux-saga/effects'
import { PRODUCT_LIST, SET_PRODUCT_LIST } from '../constant';


function* getProducts(): any{
    let data = yield fetch('http://localhost:3500/products');
    data = yield data.json();
    console.warn("action is called", data)
    yield put({type: SET_PRODUCT_LIST,data})
    
}

function* prodSaga()
{
    
yield takeEvery(PRODUCT_LIST,getProducts) //should be atleast() 2 args 

}

export default prodSaga; 