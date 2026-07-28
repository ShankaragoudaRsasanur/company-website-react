import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Services */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Services</h2>

          <ul className="space-y-2 text-gray-300">
            <li>Web Development</li>
            <li>App Development</li>
            <li>Cloud Solutions</li>
            <li>AI Solutions</li>
            <li>UI/UX Design</li>
            <li>Cyber Security</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>

          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-blue-400">
                About
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-blue-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact</h2>

          <div className="space-y-3 text-gray-300">
            <p className="flex items-center gap-3">
              <FaPhoneAlt />
              +91 9876543210
            </p>

            <p className="flex items-center gap-3">
              <FaEnvelope />
              info@mycompany.com
            </p>

            <p className="flex items-center gap-3">
              <FaMapMarkerAlt />
              Bengaluru, India
            </p>
          </div>
        </div>

      </div>

      <hr className="border-gray-700" />

      <div className="text-center py-5 text-gray-400 text-sm">
        © 2026 All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;