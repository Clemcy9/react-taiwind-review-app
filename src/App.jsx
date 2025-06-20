import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrainingFeedback from "./pages/TrainingFeedback";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/trainingfeedback" element={<TrainingFeedback />} />
      </Routes>
    </Router>
  );
}

export default App;
