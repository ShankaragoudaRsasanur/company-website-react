import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 bg-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Company Logo"
            className="w-12 h-12 rounded-full"
          />
          <h1 className="text-2xl font-bold">My Company</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-bold"
                  : "hover:text-yellow-300"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-bold"
                  : "hover:text-yellow-300"
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-bold"
                  : "hover:text-yellow-300"
              }
            >
              Contact
            </NavLink>
          </li>

          {!isLoggedIn ? (
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300 font-bold"
                    : "hover:text-yellow-300"
                }
              >
                Login
              </NavLink>
            </li>
          ) : (
            <>
              <li className="text-yellow-300 font-semibold">
                Welcome, Shankaragouda
              </li>

              <li>
                <button
                  onClick={handleLogout}
                  className="hover:text-red-300"
                >
                  Logout
                </button>
              </li>
            </>
          )}

        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-blue-800 text-center py-4 space-y-4">

          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
          </li>

          {!isLoggedIn ? (
            <li>
              <NavLink
                to="/login"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </NavLink>
            </li>
          ) : (
            <>
              <li className="text-yellow-300">
                Welcome, Shankaragouda
              </li>

              <li>
                <button
                  onClick={() => {
                    setIsLoggedIn(false);
                    setMenuOpen(false);
                    navigate("/");
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          )}

        </ul>
      )}
    </nav>
  );
}

export default Navbar;