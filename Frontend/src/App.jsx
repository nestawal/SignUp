import React from "react"
import { BrowserRouter as Router, Routes,Route ,Navigate } from 'react-router-dom';
import Signup from "./SignUp.jsx"
import Login from "./Login.jsx"
import Home from "./Home.jsx"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'  element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}