import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Feedbackpage from "./Pages/Feedbackpage";
import Studioform from "./Pages/Studioform";
import Landingpage from './Pages/Landingpage'
function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Feedbackpage />} />
        <Route path="/studio" element={<Studioform />} />
      </Routes>
    </Router>
    <Landingpage />
    </>
  );
}

export default App