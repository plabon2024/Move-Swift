import React from "react";
import { Link } from "react-router";

const Logo = () => {
  return (
    <div>
      <Link to="/" className="flex items-end justify-end  text-xl font-bold">
        <img
          src="/assets/logo.png"
          alt="Logo"
          className="w-8 h-8 mb-1"
        />
        <p className="-ms-2.5">MoveSwift</p>
      </Link>
    </div>
  );
};

export default Logo;
