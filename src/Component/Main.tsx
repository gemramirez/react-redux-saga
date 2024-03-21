import React from "react";
// import logo from './logo.svg';
import { addToCart, emptyCart, removeToCart } from "../Redux/Saga/saga";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../Redux/Saga/productSaga";
import { UseSelector } from "react-redux";

const Main: React.FC = () => {
  const dispatch = useDispatch();
  let data = useSelector((state)=> state)
  

  const product = {
    name: "iPhone",
    category: "mobile",
    price: 1,
    color: "black",
  };
  return (
    <div>
      <button
        className="bg-blue-300 rounded-full m-2 px-2"
        onClick={() => dispatch(addToCart(product))}
      >
        Add to cart
      </button>
      <button className="bg-blue-300 rounded-full m-2 px-2"
        onClick={()=>dispatch(removeToCart(product))}>Remove from Cart

        </button>
        <button className="bg-blue-300 rounded-full m-2 px-2"
        onClick={()=>dispatch(emptyCart())}>Empty Cart

        </button>
        
        <button className="bg-blue-300 rounded-full m-2 px-2"
        onClick={()=>dispatch(productList())}>Product List

        </button>
        
    </div>
  );
};

export default Main;
