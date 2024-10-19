"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import firebaseApp from "../../lib/firebase"; // Firebase setup

const auth = getAuth(firebaseApp);

const Navbar = () => {
  const [user, setUser] = useState(null); // State to hold the logged-in user
  const [isHovered, setIsHovered] = useState(false); // State to track hover effect

  // Listen for changes in the authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({ name: currentUser.displayName || "User" }); // Set the user state
      } else {
        setUser(null); // No user is signed in
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      setUser(null); // Reset user state after logout
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="navbar fixed z-50 bg-black">
      <div className="navbar-start lg:px-60">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content items-center bg-black text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/Menu">Menu</Link>
            </li>
            <li>
              <Link href="/OrderPage">Order</Link>
            </li>

            <li>
              <Link href="/About-Us">About Us</Link>
            </li>
            <li>
              <Link href="/Contact-Us">Contact Us</Link>
            </li>
            <li className="flex items-center space-x-2">
              {user ? (
                <button
                  onMouseEnter={() => setIsHovered(true)} // Set hover state
                  onMouseLeave={() => setIsHovered(false)} // Reset hover state
                  onClick={handleLogout} // Logout when clicked
                  className={`text-white font-bold   ${
                    isHovered ? "btn btn-error" : "btn btn-outline btn-success"
                  }`}
                >
                  {isHovered ? "Logout" : `Welcome, ${user.name}!`}
                </button>
              ) : (
                <Link href="/Login" className="btn btn-success">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
        <a>
          <img
            src="/assets/images/nile_cafe_logo.png"
            className="max-h-28" // Use max-height to control size without overflow
            alt="Nile Cafe Logo"
          />
        </a>
      </div>
      <div className="navbar-end hidden lg:flex text-white font-bold">
        <ul className="menu menu-horizontal pr-11 ">
          <li className="hover:text-green-500">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-green-500">
            <Link href="/Menu">Menu</Link>
          </li>
          <li className="hover:text-green-500">
            <Link href="/OrderPage">Order</Link>
          </li>

          <li className="hover:text-green-500">
            <Link href="/About-Us">About Us</Link>
          </li>
          <li className="hover:text-green-500">
            <Link href="/Contact-Us">Contact Us</Link>
          </li>
          <li className="flex items-center space-x-2">
            {user ? (
              <button
                onMouseEnter={() => setIsHovered(true)} // Set hover state
                onMouseLeave={() => setIsHovered(false)} // Reset hover state
                onClick={handleLogout} // Logout when clicked
                className={`text-white font-bold   ${
                  isHovered ? "btn btn-error" : "btn btn-outline btn-success"
                }`}
              >
                {isHovered ? "Logout" : `Welcome, ${user.name}!`}
              </button>
            ) : (
              <Link href="/Login" className="btn btn-success">
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
