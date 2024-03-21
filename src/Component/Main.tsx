import React from "react";
// import logo from './logo.svg';
import { addToCart, emptyCart, removeToCart } from "../Redux/Saga/saga";
import { useDispatch } from "react-redux";

const Main: React.FC = () => {
  const dispatch = useDispatch();

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
    </div>
  );
};

export default Main;
