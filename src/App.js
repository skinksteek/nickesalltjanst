import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./assets/styles/styles.css";
import Hem from "./pages/Hem";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Om from "./pages/Om";
import Kontakt from "./pages/Kontakt";
import NoPage from "./pages/NoPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SuccessPage from "./pages/SuccessPage";

function App() {
  return (
    <div>
      <Navbar />
      <div className="main-content">
        <BrowserRouter>
          <Routes>
            <Route index element={<Hem />} />
            <Route path="/hem" element={<Hem />} />
            <Route path="/tjanster" element={<Services />} />
            <Route path="/galleri" element={<Gallery />} />
            <Route path="/om" element={<Om />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/success" element={<SuccessPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
