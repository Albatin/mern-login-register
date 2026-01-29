import { Link } from "react-router-dom";

const Home = ({ user, error }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg text-center">
        {error && (
          <p className="text-red-500 mb-4 font-bold text-sm text-center">
            {error}
          </p>
        )}
        {user ? (
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900">
              Welcome, <span className="text-blue-600">{user.username}</span>
            </h2>

            <div className="text-sm text-gray-500">
              <span className="uppercase tracking-wider text-xs text-gray-400">
                Email
              </span>
              <p className="text-gray-700 font-medium mt-1">{user.email}</p>
            </div>
          </div>
        ) : (
          <div className="space-y-4 text-center">
            <h2 className="text-2xl font-semibold text-gray-900">Welcome 👋</h2>

            <p className="text-gray-500">
              Please log in or create an account to continue
            </p>

            <div className="flex justify-center gap-4 mt-4">
              <Link
                to="/login"
                className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
