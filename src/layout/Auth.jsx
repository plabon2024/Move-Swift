import React from "react";
import Logo from "../components/Logo";
import { Outlet } from "react-router";

const Auth = () => {
  return (
    <div className="px-4  min-h-screen bg-base-100">
      {/* Logo Top Left */}
      <div className="absolute top-1 left-2 m-10">
        <Logo />
      </div>
      {/* Auth Content */}
      <div className="flex flex-col lg:flex-row-reverse items-stretch min-h-screen rounded-xl overflow-hidden ">
        {/* Right: Image section with semi-transparent primary background */}
        <div className="hidden lg:flex flex-1  items-center justify-center bg-primary/10 py-10">
          <img
            src="/assets/authImage.png"
            alt="Authentication"
            className="w-full max-w-md rounded-xl shadow-xl bg-white"
          />
        </div>

        {/* Left: Form Section */}
        {/* Left: Form Section */}
        <div className="flex-1 flex flex-col justify-center bg-base-100 px-6">
          {/* Logo Top Left inside form section */}

          {/* Form */}
          <div className="w-full max-w-sm py-20 mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
