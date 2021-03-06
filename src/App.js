import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Doctor from "./pages/Doctor";
import Patient from "./pages/Patient";
import Header from "./components/Header";
import Prescription from "./pages/Prescription";
import PatientHistory from "./pages/PatientHistory";

import "./styles/utils.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/prescription" element={<Prescription />} />
          <Route path="/patientHistory" element={<PatientHistory />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
