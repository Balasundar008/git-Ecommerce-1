
import './App.css';
import Home from "./components/home";
import Cart from "./components/cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Routes , Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route path="cart" element={<Cart />}/>
  </Routes>
  );
}

export default App;
