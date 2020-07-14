import React from "react";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Cart />
      <Products />
    </div>
  );
}

export default App;
