//store will get all the data inside reducer so that it can be use in diffrernt componenet thru calling reducers inside the store
//send to react js app

//this the one na working PROPS LANG YUNG ROOTSTATE
import { combineReducers } from "redux";
import { cartData } from "../State/state";
import { productData } from "../State/productReducer";

export default combineReducers({
   cartData,
   productData
 })



