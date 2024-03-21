import { PRODUCT_LIST } from "../constant";

//State = Reducer

export const productData = (data = [], action: any) => {
  switch (action.type){
    case PRODUCT_LIST:
      console.warn("PRODUCT_LIST condition", action)
      return [action.data]
      default:
         return data;
  }
};
