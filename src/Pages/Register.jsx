import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Please fill all fields");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      // Save user in localStorage
      const user = {
        name,
        email,
        password,
      };

      localStorage.setItem("user", JSON.stringify(user));

      alert("Registration Successful");

      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">

        <h1 className="text-4xl font-bold text-center text-green-600 mb-2">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Register to continue
        </p>

        {/* Full Name */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">
            Password
          </label>

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">
            Confirm Password
          </label>

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* Show Password */}
        <div className="mb-5">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            Show Password
          </label>
        </div>

        {/* Register Button */}
        <button
          onClick={handleRegister}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
        >
          Register
        </button>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?
        </p>

        <Link
          to="/login"
          className="block w-full mt-3 bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700"
        >
          Login
        </Link>

      </div>
    </div>
  );
}

export default Register;