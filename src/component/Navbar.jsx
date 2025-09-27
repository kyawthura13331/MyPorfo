import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import "./navicss.css";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <nav className="navi animate-fade-in fixed p-1 w-full h-auto  z-100">
      <div className="flex items-center justify-between ">
        <div className="text-2xl font-bold text-[#EAF6FF]">
          <div>
            <Logo  />
          </div>
        </div>
        <button
          className="md:hidden text-white "
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"}
            />
          </svg>
        </button>
        <ul className="hidden md:flex gap-8">
          <li>
            <Link to="/" className=" text-center">
              <p className="button">Home</p>{" "}
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-center">
              <p className="button">About</p>{" "}
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-center">
              <p className="button">Projects</p>
            </Link>
          </li>
          <li>
            <Link to="/content" className="text-center">
              <p className="button">Contant</p>
            </Link>
          </li>
        </ul>
      </div>

      {open && (
        <ul className="flex flex-col md:hidden bg-black/20 px-6 pb-4 gap-4">
          <li>
            <Link to="/" className="hover:text-emerald-400 text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-emerald-400 text-white">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-emerald-400 text-white">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/content" className="hover:text-emerald-400 text-white">
              Contact
            </Link>
          </li>
        </ul>
      )}
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 1.2s cubic-bezier(.4,0,.2,1) both;
          }
          .animate-slide-in {
            animation: slideIn 1.2s cubic-bezier(.4,0,.2,1) 0.3s both;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95);}
            to { opacity: 1; transform: scale(1);}
          }
          @keyframes slideIn {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 3; transform: translateY(2);}
          }
        `}
      </style>
    </nav>
  );
};

export default NavBar;
