import React, { useEffect, useState } from "react";
// import logo from './logo.svg';
import { addToCart, emptyCart, removeToCart } from "../Redux/Saga/saga";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../Redux/Saga/productSaga";

interface Product {
  id: number;
  name: string;
  color: string;
  price: number;
  category: string;
  brand: string;
  photo: string; // Include the photo property
}

interface RootState {
  productData: Product[]; // Update to reflect the type of productData
}
// interface item{
//   id:string;
//   name:string;
//   color:string;
//   price:number;
//   category:string;
//   brand:string;
//   photo:string;

// }
const Main: React.FC = () => {


  const dispatch = useDispatch();
  let data = useSelector((state: RootState) => state.productData)
  console.log("data in main component", data);


  const product = {
    name: "iPhone",
    category: "mobile",
    price: 1,
    color: "black",
  };


  React.useEffect(() => {
    dispatch(productList());
  }, [dispatch]);

  return (
    <div>
      {/* <button
        className="bg-blue-300 rounded-full m-2 px-2"
        onClick={() => dispatch(addToCart(product))}
      >
        Add to cart
      </button> */}
      {/* <button className="bg-blue-300 rounded-full m-2 px-2"
        onClick={() => dispatch(removeToCart(product))}>Remove from Cart

      </button> */}
      <button className="bg-blue-300 rounded-full m-2 px-2"
        onClick={() => dispatch(emptyCart())}>Empty Cart

      </button>
{/* 
      <button className="bg-blue-300 rounded-full m-2 px-2"
        onClick={ () => dispatch(productList())}>Product List

      </button> */}
      <div className="flex justify-center items-center p-[20px] flex-wrap">
        {
          data.map((productData) => <div className="border border-rose-400 m-2">
            <div className="p-[20px] items-center">Brand: {productData.brand}</div>
            <img src={productData.photo} alt="" className=" items-center w-20 h-30 ml-[40px]" />
            <div className="p-[20px] items-center">Name: {productData.name}</div>
            <div className="p-[20px] items-center">Color: {productData.color}</div>
            <div className="p-[20px] items-center">Category: {productData.category}</div>
            <div className="p-[20px] items-center">Price: {productData.price}</div>
            <br /><br />
            <div className="flex text-[10px]">
              <div>
                <button className="bg-blue-300 rounded-full m-2 px-2"   onClick={() => dispatch(addToCart(productData))}>Add to Cart</button>
              </div>
              <div>
                <button className="bg-blue-300 rounded-full m-2 px-2"  onClick={() => dispatch(removeToCart(productData.id))}>Remove to Cart</button>
              </div>
            </div>
          </div>)
        }
      </div>
    </div >
  );
};

export default Main;
