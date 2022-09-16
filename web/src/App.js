import './App.css';
import Home from './OrderViews/Home';
import Landing from './AuthViews/Landing';
import { Routes, Route } from "react-router-dom";
import MyOrder from './OrderViews/MyOrder';
import Product from './OrderViews/Product.js'

function App() {
  return (
    <div className="App">
      <Landing />
    </div>
  );
}

export default App;
