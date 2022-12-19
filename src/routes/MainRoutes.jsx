import React from "react";
import { Routes, Route } from "react-router-dom";
import AddToCart from "../features/add-to-cart/AddToCart";




const MainRoutes = () => {

  return (
    <Routes>
      {/* home */}
      <Route path="/" element={<AddToCart />} />
    </Routes>
  );
};

export default MainRoutes;
