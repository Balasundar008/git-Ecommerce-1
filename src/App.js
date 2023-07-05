
import './App.css';
import Home from "./components/home";
import Cart from "./components/cart";
import Checkout from './components/checkout';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Routes , Route } from 'react-router-dom';
import React, { useState } from 'react';

function App() {

  
  const [cartItems , setCartItems] = useState("");
    <Cart cartItems={cartItems} setCartItems={setCartItems} />
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route exact path="/checkout" element={<Checkout cartItems={cartItems} />} />
      </Routes>
    );
    
}

export default App;
