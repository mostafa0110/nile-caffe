import React from "react";
import "./navbar.style.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="navbar fixed z-50  bg-black">
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
            className="menu menu-sm dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/Menu">Menu</Link>
              <ul className="p-2">
                <li>
                  <a className="hover:bg-gray-800">Submenu 1</a>
                </li>
                <li>
                  <a className="hover:bg-gray-800">Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/Order">Order</Link>
            </li>
            <li>
              <Link href="Reservations">Reservations</Link>
            </li>
            <li>
              <Link href="About-Us">About Us</Link>
            </li>
            <li>
              <Link href="Contact-Us">Contact Us</Link>
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
            <details>
              <summary>
                <Link href="/Menu">Menu</Link>
              </summary>
              <ul className="p-2 bg-black text-white ">
                <li className="hover:text-green-500">
                  <a className="hover:bg-gray-800">Submenu 1</a>
                </li>
                <li className="hover:text-green-500">
                  <a className="hover:bg-gray-800">Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li className="hover:text-green-500">
            <Link href="/Order">Order</Link>
          </li>
          <li className="hover:text-green-500">
            <Link href="Reservations">Reservations</Link>
          </li>
          <li className="hover:text-green-500">
            <Link href="About-Us">About Us</Link>
          </li>
          <li className="hover:text-green-500">
            <Link href="Contact-Us">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
