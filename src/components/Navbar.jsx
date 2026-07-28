import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
            <Link to="/" className="hover:text-yellow-300">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-yellow-300">
              About
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-yellow-300">
              Contact
            </Link>
          </li>
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
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-300"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;