import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Catalog from "./pages/Catalog";

function App() {
  return (
    <Router>
      <nav>
        <div>
          <Link to="/">SkillSwap</Link>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/catalog">Catalog</Link>
        </div>
      </nav>

      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
