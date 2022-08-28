
import './App.css';
import Home  from './Home';

import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Register from './Register'
import Login from './Login'

function App() {
  return (
    
    
    <div className="App">
    
    
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      {/* <Route path="/Dashbord" element={<Dashboard/>} /> */}
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
