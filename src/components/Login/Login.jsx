"use client"; // Add this to ensure it's a client component
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "../../lib/firebase"; // Firebase initialization

const auth = getAuth(firebaseApp);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const router = useRouter(); // Initialize useRouter

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevents form from submitting

    setError(null); // Clear previous errors
    setSuccess(null); // Clear previous success messages

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const idToken = await userCredential.user.getIdToken();

      // Send ID token to API route for MongoDB storage
      const response = await fetch("/api/storeUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idToken, isLogin: true }),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess("User Login success!"); // Success message
        setError(null);

        // Redirect to homepage after login
        router.push("/"); // Redirects the user to the home page
      } else {
        setError(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);

      // Improved error handling
      if (error.code === "auth/user-not-found") {
        setError("No account found with this email. Please register.");
      } else if (error.code === "auth/wrong-password") {
        setError("Incorrect password. Please try again.");
      } else {
        setError(error.message); // Other errors
      }

      setSuccess(null);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Responsive wrapper */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Welcome
        </h2>
        {error && (
          <div role="alert" className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{error}</span>
          </div>
        )}{" "}
        {/* Display error message */}
        {success && (
          <div role="alert" className="alert alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{success}</span>
          </div>
        )}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* email input */}
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          {/* Password input */}
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          {/* Login button */}
          <button
            type="submit"
            className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
          >
            GET STARTED
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link
            href="/forgot-password"
            className="text-sm text-green-500 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
        <div className="mt-6 flex justify-between text-sm text-gray-500">
          <Link href="/Sign-Up" className="hover:text-green-500">
            Create Account
          </Link>
          <a href="/help" className="hover:text-green-500">
            Need Help?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
