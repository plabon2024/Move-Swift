import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import Logo from "./Logo";
import { AuthContext } from "../context/Authcontext";

const Navbar = () => {
  const {user,logout}=useContext(AuthContext)
  const handlesignout=()=>{
    logout()
  }
  return (
    <div className="fixed top-2 left-0 w-full z-50  backdrop-blur-sm">
      <div className="navbar h-20 container mx-auto backdrop-blur-md px-4  rounded-2xl  shadow-md justify-between ">
        {/* Left: Logo & Name */}
        <Logo></Logo>
        {/* Center: Nav links (only visible on large screens) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex">
          <ul className="flex gap-5 px-1 text-lg ">
            <li>
              <NavLink
                className="hover:scale-105 hover:underline hover:underline-offset-4  hover:font-semibold transition-transform duration-300"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:scale-105 hover:underline hover:underline-offset-4  hover:font-semibold transition-transform duration-300"
                to="/features"
              >
                Features
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:scale-105 hover:underline hover:underline-offset-4  hover:font-semibold transition-transform duration-300"
                to="/pricing"
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:scale-110  hover:font-semibold transition-transform duration-300"
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right: Sign In + Mobile Dropdown */}
        <div className="flex items-center gap-2">
          {user ? (
            <button onClick={handlesignout} className="btn btn-sm btn-outline">Log out</button>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm btn-outline">Log In</button>
            </Link>
          )}

          {/* Mobile dropdown menu */}
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-sm btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-base-100 rounded-box w-40"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/features">Features</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
