//State = Reducer
import { ADD_TO_CART, REMOVE_TO_CART, RESET_CART } from "../constant";
import RootState from "./RootState";

export const cartData = (data = [], action: any) => {
  switch (action.type){
    case ADD_TO_CART:
      console.warn("ADD_TO_CART condition", action)
      return [action.data, ...data]
      case REMOVE_TO_CART:
        console.warn("REMOVE_TO_CART condition", action)
        data.length = data.length ? data.length-1:0
        return [...data] 
        case RESET_CART:
        console.warn("RESET_CART condition", action)
        data=[]
        return [...data]
      default:
         return [];
  }
};
