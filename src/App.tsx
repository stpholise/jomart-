import Header from "./components/layout/Header";
import { Routes, Route, BrowserRouter } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/layout/Footer";
import Projects from "./pages/Projects";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
   AOS.init()
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
         <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
