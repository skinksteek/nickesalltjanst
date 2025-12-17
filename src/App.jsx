import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/styles.css";
import "./components/motion/motion.css";
import Hem from "./pages/Hem";
import Services from "./pages/Services";
import Om from "./pages/Om";
import Kontakt from "./pages/Kontakt";
import NoPage from "./pages/NoPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SuccessPage from "./pages/MessageSuccess";
import MessageFailed from "./pages/MessageFailed";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route index element={<Hem />} />
          <Route path="/hem" element={<Hem />} />
          <Route path="/tjanster" element={<Services />} />
          <Route path="/om" element={<Om />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/kontakt/skickat-meddelande" element={<SuccessPage />} />
          <Route
            path="/kontakt/meddelande-misslyckat"
            element={<MessageFailed />}
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
