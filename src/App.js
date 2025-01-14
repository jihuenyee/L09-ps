import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diplomas from "./pages/Diplomas";
import CourseDetails from "./components/Courses/CourseDetails";
import RegistrationForm from "./components/Registration/RegistrationForm";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diplomas" element={<Diplomas />} />
        <Route path="/diplomas/:diplomaId" element={<CourseDetails />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
}

export default App;