import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="relative w-full bg-zinc-900 text-zinc-400">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <span>
              <svg
                width="30"
                height="30"
                viewBox="0 0 50 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* ... existing SVG path ... */}
              </svg>
            </span>
            <span className="font-bold text-lg">CryptoCurrent</span>
          </div>
          <div className="hidden grow items-start lg:flex">
            <ul className="ml-12 inline-flex space-x-8">
              <li>
                <Link
                  to="/"
                  className="text-sm font-semibold text-zinc-400 hover:text-zinc-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-sm font-semibold text-zinc-400 hover:text-zinc-200"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm font-semibold text-zinc-400 hover:text-zinc-200"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="lg:hidden" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 cursor-pointer"
            >
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden">
          <ul className="ml-4 mt-2 space-y-2">
            <li>
              <Link
                to="/"
                className="text-sm font-semibold text-zinc-400 hover:text-zinc-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/news"
                className="text-sm font-semibold text-zinc-400 hover:text-zinc-200"
              >
                News
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-sm font-semibold text-zinc-400 hover:text-zinc-200"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Sidebar;
