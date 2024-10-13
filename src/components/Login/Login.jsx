"use client"; // Add this to ensure it's a client component
import { useState } from "react";
import Link from "next/link";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "../../lib/firebase"; // Firebase initialization

const auth = getAuth(firebaseApp);
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
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
      console.log(data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen  bg-gray-100">
      {/* Responsive wrapper */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Welcome
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          {/* email input */}
          <div className="relative">
            <input
              type="text"
              placeholder=" Enter your E-mail"
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
          <a
            href="/forgot-password"
            className="text-sm text-green-500 hover:underline"
          >
            Forgot Password?
          </a>
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
