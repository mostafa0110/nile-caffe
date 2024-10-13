"use client"; // Add this to ensure it's a client component
import { useState } from "react";
import Link from "next/link";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import firebaseApp from "../../lib/firebase"; // Firebase client initialization

const auth = getAuth(firebaseApp);
const SignUp = () => {
  const [name, setName] = useState(""); // Added state for name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null); // State for success messages

  const handleSignUp = async (event) => {
    event.preventDefault(); // Prevent default form submission

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Update Firebase profile with the name
      await updateProfile(user, { displayName: name });

      const idToken = await user.getIdToken(); // Get Firebase ID token

      // Send ID token and name to server to save user to MongoDB
      const response = await fetch("/api/storeUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idToken,
          name,
          email,
          password,
          isLogin: false,
        }), // Send name along with the token
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to store user in MongoDB");
      }

      console.log("MongoDB Response:", data.message);
      setSuccess("User signed up successfully!"); // Success message
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error("Error during sign-up:", error);
      setError(error.message);
      setSuccess(null); // Clear any previous success messages
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>
        {error && <p className="text-red-500 text-center">{error}</p>}{" "}
        {/* Display error message */}
        {success && (
          <p className="text-green-500 text-center">{success}</p>
        )}{" "}
        {/* Display success message */}
        <form onSubmit={handleSignUp} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
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
          <div className="relative">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
          >
            Create Account
          </button>
        </form>
        <div className="mt-4 text-center">
          <a
            href="/forgot-password"
            className="text-sm text-green-500 hover:underline"
          >
            Forgot Password?
          </a>
        </div>
        <div className="mt-6 flex justify-between text-sm text-gray-500">
          <Link href="/Login" className="hover:text-green-500">
            Already have an account?
          </Link>
          <a href="/help" className="hover:text-green-500">
            Need Help?
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
