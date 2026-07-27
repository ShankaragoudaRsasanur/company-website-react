import { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-700 text-white">
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
          <li className="cursor-pointer hover:text-yellow-300">Home</li>
          <li className="cursor-pointer hover:text-yellow-300">About</li>
          <li className="cursor-pointer hover:text-yellow-300">Services</li>
          <li className="cursor-pointer hover:text-yellow-300">Contact</li>
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
          <li className="cursor-pointer hover:text-yellow-300">Home</li>
          <li className="cursor-pointer hover:text-yellow-300">About</li>
          <li className="cursor-pointer hover:text-yellow-300">Services</li>
          <li className="cursor-pointer hover:text-yellow-300">Contact</li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;