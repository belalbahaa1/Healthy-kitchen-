import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-5 sticky top-0 bg-light-bg/80 backdrop-blur-md z-50">
      <Link to="/" className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
          <span className="text-white text-xs">🌿</span>
        </div>
        <h1 className="text-xl font-bold tracking-tight text-primary">
          Healthy Kitchen
        </h1>
      </Link>

      <div className="hidden md:flex gap-10 text-sm font-medium text-text-main">
        <Link
          to="/"
          className="hover:text-primary border-b-2 border-transparent hover:border-primary pb-1 transition-all"
        >
          Home
        </Link>
        <Link
          to="/menu"
          className="hover:text-primary border-b-2 border-transparent hover:border-primary pb-1 transition-all"
        >
          Menu
        </Link>
      </div>

      <Link to="/menu">
        <button className="bg-primary text-white text-sm px-6 py-2.5 rounded-lg font-bold hover:opacity-90 active:scale-95 transition-all shadow-sm">
          Browse recipes
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
