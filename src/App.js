import './App.css';
import Home  from './Pages/Home';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Register from './Pages/Register'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import Profile from './component/Profile';
import Singlefood from './component/Singlefood';
function App() {
  return (
    
    
    <div className="App">
    
    
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard/>}  />
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/single" element={<Singlefood/>} />
      {/* <Route path="/Order" element={<Order/>} /> */}
      {/* <Route path="/Cart" element={<Cart/>} /> */}
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
