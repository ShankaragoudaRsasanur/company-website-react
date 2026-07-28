import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "" || password === "") {
      alert("Please enter Email and Password");
    } else {
      alert("Login Successful");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">

        <h1 className="text-4xl font-bold text-center text-blue-600 mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Login to continue
        </p>

        {/* Email */}
        <div className="mb-5">
          <label className="block mb-2 font-semibold">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="mb-5">
          <label className="block mb-2 font-semibold">
            Password
          </label>

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Show Password */}
        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            Show Password
          </label>

          <a href="#" className="text-blue-600 hover:underline text-sm">
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>

        {/* Register */}
        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            Register
          </span>
        </p>

      </div>
    </div>
  );
}

export default Login;