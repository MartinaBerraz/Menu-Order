import './App.css';
import Home from './OrderViews/Home';
import SignUp from './AuthViews/SignUp';
import Login from './AuthViews/Login';
import Landing from './AuthViews/Landing';
import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import MyOrder from './OrderViews/MyOrder';
import Product from './OrderViews/Product.js'
import Filter from './OrderViews/Filter.js'
import { useEffect, useState } from "react";
import RestClient from "./RestClient.ts";

function App() {

  const [food, setFood] = useState([])

  useEffect(()=> {
    RestClient.getProducts().then((res) =>{
    setFood(res)
    console.log("res",res)
  })
  },[]);

  return (
    <div className="App">
    <Routers>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route exact path="/Home" element={<Home food={food} />} />
        <Route exact path="/MyOrder" element={<MyOrder />} />
        <Route exact path="/Product" element={<Product />} />
        <Route exact path="/Filter" element={<Filter food={food} />} />
      </Routes>
    </Routers>
     </div>
  );
}

export default App;
