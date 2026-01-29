import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";
  const isHomePage = location.pathname === "/";

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  return (
    <div className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          MERN Auth
        </Link>
        <div>
          {user ? (
            <button
              onClick={handleLogout}
              className="text-white bg-red-500 px-4 cursor-pointer py-2 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : isHomePage ? null : (
            <div className="flex gap-4">
              {!isLoginPage && (
                <Link
                  to="/login"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Login
                </Link>
              )}

              {!isRegisterPage && (
                <Link
                  to="/register"
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                >
                  Register
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
