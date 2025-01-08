import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/AboutUs.jsx";
import  Services from "./Pages/Services.jsx";

import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"


const App = () => {
  return (
    <>
      <Router>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/layanan" element={<Services />} />

        </Routes>
        
        <Footer />
      </Router>
    </>
    
  );
};

export default App;
