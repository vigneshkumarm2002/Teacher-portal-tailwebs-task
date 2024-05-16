import React, { useState, useEffect } from "react";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const demoEmail = "admin@gmail.com";
  const demoPassword = "123456";

  useEffect(() => {
    setUser(localStorage.getItem("email"));
  }, []);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError("");
  };

  const handleLogin = (e) => {
    console.log("vlii");
    e.preventDefault();
    if (email === demoEmail && password === demoPassword) {
      setUser(email);
      localStorage.setItem("email", email);
    } else {
      if (email === demoEmail && password === demoPassword) {
        setError("Please enter your credentials");
      }
      if (email !== demoEmail) {
        setError("Incorrect email or password. Please try again.");
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-2">
      <div className="bg-white p-5 sm:p-8 rounded-lg w-[95%] sm:w-[400px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <h1 className="text-xl sm:text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              className="mt-1 p-2 border rounded w-full"
              required
            />
            <p className="text-red-500 text-xs pt-2">{error}</p>
          </div>
          <button
            type="submit"
            className="w-full bg-[#00a6fb] font-medium sm:font-semibold text-white py-2 rounded"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
