import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = ({ setUser }) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/users/register", formData);
      localStorage.setItem("token", res.data.token);
      setUser(res.data);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Register failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Register
        </h2>
        {error && (
          <p className="text-red-500 mb-4 font-bold text-sm text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-1">
              Username
            </label>
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200 outline-none focus:border-blue-400"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-1">
              Email
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200 outline-none focus:border-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-600 text-sm font-medium mb-1">
              Password
            </label>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="off"
              type="password"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200 outline-none focus:border-blue-400"
              placeholder="Enter your password"
              required
            />
          </div>
          <button className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 font-medium cursor-pointer">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
