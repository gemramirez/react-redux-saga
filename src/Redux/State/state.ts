//State = Reducer
import { ADD_TO_CART, REMOVE_TO_CART, RESET_CART } from "../constant";
import RootSaga from "../Saga/RootSaga";

interface item {
  id: number;
  name: string;
  color: string;
  price: number;
  category: string;
  brand: string;
  photo: string;
}

export const cartData = (data: item[] = [], action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("ADD_TO_CART condition", action);
      return [action.data, ...data];
    case REMOVE_TO_CART:
      console.warn("REMOVE_TO_CART condition", action);
      
      const remainingItems = data.filter((item) => item.id !== action.data);
      return [...remainingItems];

    case RESET_CART:
      console.warn("RESET_CART condition", action);
      return [];

    default:
      return data;
  }
};
