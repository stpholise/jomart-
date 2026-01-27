import Header from "./components/layout/Header";
import { Routes, Route, BrowserRouter } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
         <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
