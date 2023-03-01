import Header from "../Header/Header";
import React from "react";
import CartPage from "../../page/CartPage";
import Products from "../porducts/Products";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
};

export default App;
