import Dashboard from "./Pages/Dashboard";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn && (
        <Navbar
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}

      <Routes>
        {!isLoggedIn ? (
          <>
            <Route
              path="/"
              element={<Login setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route
              path="/login"
              element={<Login setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route
              path="/register"
              element={<Register />}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
    <>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<AboutUs />} />
  <Route path="/contact" element={<ContactUs />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="*" element={<Navigate to="/dashboard" />} />
</>
        )}
      </Routes>
    </>
  );
}

export default App;