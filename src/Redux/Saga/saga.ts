//Saga = Action

import { ADD_TO_CART, REMOVE_TO_CART, RESET_CART } from "../constant";

export const addToCart = (data: { id:number; name: string; category: string; price: number; color: string; }) => {
    console.warn("action is called",data)
    return {
    type: ADD_TO_CART,
    data
    }
}

export const removeToCart = (id: number) => {
    console.warn("removed from cart", id);
    return {
        type: REMOVE_TO_CART,
        data: id
    };
};


export const emptyCart = () => {
    console.warn("DELETE ALL FROM cart")
    return {
    type: RESET_CART,
    
    }
}

