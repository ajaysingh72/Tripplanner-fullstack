import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PlanTrip from "./pages/PlanTrip";
import Trips from "./pages/Trips";
import Contact from "./pages/Contact";
import Destinations from "./pages/Destinations";
import About from "./pages/About";
import TestApi from "./components/TestApi";
import Footer from "./components/Footer"; // ✅ import footer

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plan" element={<PlanTrip />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/testapi" element={<TestApi />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/destinations" element={<Destinations />} />
        </Routes>
      </div>
      <Footer /> {/* ✅ Footer visible on all pages */}
    </Router>
  );
}

export default App;
