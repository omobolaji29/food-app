
import './App.css';
import Home  from './Pages/Home';

import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Register from './Pages/Register'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
function App() {
  return (
    
    
    <div className="App">
    
    
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard/>} />
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
