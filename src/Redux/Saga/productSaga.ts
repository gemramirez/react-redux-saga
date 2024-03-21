//Saga = Action


import { PRODUCT_LIST } from "../constant";

export const productList = () => {
    let data ="hello"
    console.warn("action is called",data)
    return {
    type: PRODUCT_LIST,
    data
    }
}
