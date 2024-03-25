//Saga = Action


import { PRODUCT_LIST } from "../constant";

export const productList = () => {
    // let data = "hellop"
    // let data=fetch("https://fakestoreapi.com/products/1");
    // data = (await data).json();
    // console.warn("action is called",data)
    return {
        type: PRODUCT_LIST,
    }
}
