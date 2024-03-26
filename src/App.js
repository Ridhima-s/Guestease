import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Sign-in" element={<Signin />} />
      <Route path="/Sign-up" element={<Signup />} />
      <Route path="/Forgot-Password" element={<ForgotPassword />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
