import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
            <nav className="navbar">
        <div className="logo">skillSwap</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Explore ▾</li>
          <li>Help</li>
          
        </ul>
        <button className="contact-btn">Sign up / Log in</button>
      </nav>

      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
