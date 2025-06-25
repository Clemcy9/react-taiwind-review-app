import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./Pages/Landingpage";
import CoworkingForm from "./Pages/Coworkingform";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="cowork" element={<CoworkingForm/>}/>
      </Routes>
    </Router>
  );
}

export default App;
