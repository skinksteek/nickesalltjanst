import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./assets/styles/styles.css";
import Hem from "./pages/Hem";
import Nyheter from "./pages/Nyheter";
import Om from "./pages/Om";
import Kontakt from "./pages/Kontakt";
import NoPage from "./pages/NoPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="main-content">
        <BrowserRouter>
          <Routes>
            <Route index element={<Hem />} />
            <Route path="/hem" element={<Hem />} />
            <Route path="/nyheter" element={<Nyheter />} />
            <Route path="/om" element={<Om />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
