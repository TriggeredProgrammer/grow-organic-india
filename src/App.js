// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About"; // Example additional page
import Contact from "./pages/Contact/Contact"; // Example additional page
import NotFound from "./pages/NotFound/NotFound"; // 404 Page
import TermsAndCondition from "./pages/TermsAndCondition/TermsAndCondition";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<TermsAndCondition />} />
        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
