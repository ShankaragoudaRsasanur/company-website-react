import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="bg-blue-700 text-white px-10 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Company Logo"
          className="w-12 h-12 rounded-full"
        />
        <h1 className="text-2xl font-bold">My Company</h1>
      </div>

      <ul className="flex gap-8 text-lg">
        <li className="cursor-pointer hover:text-yellow-300">Home</li>
        <li className="cursor-pointer hover:text-yellow-300">About</li>
        <li className="cursor-pointer hover:text-yellow-300">Contact</li>
        <li className="cursor-pointer hover:text-yellow-300">Login</li>
      </ul>
    </nav>
  );
}

export default Navbar;