import './App.css';
import Home from './OrderViews/Home';
import SignUp from './AuthViews/SignUp';
import Login from './AuthViews/Login';
import Landing from './AuthViews/Landing';
import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import MyOrder from './OrderViews/MyOrder';
import Product from './OrderViews/Product.js'
import Filter from './OrderViews/Filter.js'

function App() {
  return (
    <div className="App">
    <Routers>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/MyOrder" element={<MyOrder />} />
        <Route exact path="/Product" element={<Product />} />
        <Route exact path="/Filter" element={<Filter  />} />
      </Routes>
    </Routers>
     </div>
  );
}

export default App;
