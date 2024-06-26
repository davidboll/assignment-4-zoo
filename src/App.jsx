import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Mammals from "./pages/Mammals";
import Birds from "./pages/Birds";
import Reptiles from "./pages/Reptiles";
import "./App.css";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mammals" element={<Mammals />} />
          <Route path="/birds" element={<Birds />} />
          <Route path="/reptiles" element={<Reptiles />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
