import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages";
import About from "./pages/about";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} exact/>
        <Route path='about' element={<About />} exact/>
      </Routes>
    </Router>
  );
}

export default App;
