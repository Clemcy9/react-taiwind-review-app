import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Feedbackpage from "./Pages/Feedbackpage";
import Studioform from "./Pages/Studioform";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Feedbackpage />} />
        <Route path="/studio" element={<Studioform />} />
      </Routes>
    </Router>
  );
}

export default App;
