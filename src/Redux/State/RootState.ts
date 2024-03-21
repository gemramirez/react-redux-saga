//store will get all the data inside reducer so that it can be use in diffrernt componenet thru calling reducers inside the store
//send to react js app
import { combineReducers } from "redux";
import { cartData } from "./state";
import { productData } from "./productReducer";

export default combineReducers({
   cartData,
   productData
 })


