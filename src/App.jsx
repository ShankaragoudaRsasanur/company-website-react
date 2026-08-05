import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";

function App() {
  // Login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Navbar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutUs />} />

        <Route path="/contact" element={<ContactUs />} />

        <Route
          path="/login"
          element={
            <Login
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />

        <Route
          path="/register"
          element={<Register />}
        />
      </Routes>
    </>
  );
}

export default App;