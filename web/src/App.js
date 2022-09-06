import './App.css';
import Home from './OrderViews/Home';
import SignUp from './AuthViews/SignUp';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <SignUp></SignUp>
    </div>
  );
}

export default App;
