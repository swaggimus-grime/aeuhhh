import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from "./pages";
import SendPage from "./pages/sendPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} exact/>
        <Route path="/send" element={<SendPage />} exact/>
      </Routes>
    </Router>
  );
}

export default App;
