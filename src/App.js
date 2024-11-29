import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from "./components/Sidebar";
import Card from "./pages/Card";
import Project from "./pages/Project";
// CSS
import "./assets/css/style.css";

function App() {
  return (
    <main>
      <Sidebar />
      <Router>
          <Routes>
            <Route path="/" element={<Project />} />
            <Route path="/card" element={<Card />} />
          </Routes>
      </Router>
    </main>
  );
}

export default App;
