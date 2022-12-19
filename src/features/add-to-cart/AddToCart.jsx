// eslint-disable-next-line
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PriceCard from "./components/PriceCard";
import { GetProducts } from "./config/CartApi";

const AddToCart = () => {
  const dispatch = useDispatch();
  const { productsList } = useSelector(
    (state) => state.CartSlice
  );
  console.log(productsList)


  useEffect(() => {
    if (productsList.length !== 0) {
      dispatch(GetProducts())
    }
  }, [dispatch, productsList.length])

  return (
    <>
      {
        productsList?.slice(0, 5).map(item => (
          <PriceCard singleProduct={item} key={item?.id} />
        ))
      }
    </>
  );
};

export default AddToCart;
