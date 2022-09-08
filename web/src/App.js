import './App.css';
import Home from './OrderViews/Home';
import SignUp from './AuthViews/SignUp';
import { Routes, Route } from "react-router-dom";
import MyOrder from './OrderViews/MyOrder';
import Product from './OrderViews/Product.js'

function App() {
  return (
    <div className="App">
      <Product />
    </div>
  );
}

export default App;
