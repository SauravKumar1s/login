import React, { useState } from "react";
import SignUp from "../../pages/SignUp";
import Login from "../../pages/Login";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    setIsLoggedIn(true);
    setIsAuthenticated(true);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic here
    setIsRegistered(true);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Handle logout logic here
    setIsLoggedIn(false);
    setIsAuthenticated(false);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <NavLink className="font-semibold text-xl tracking-tight text-[#FFA800] text-bold uppercase" to="/">
            colosseum
          </NavLink>
        </div>
        <div className="block lg:hidden">
          
        </div>
        <div className="text-sm lg:flex-grow"></div>
        <div>
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          ) : (
            <>
              
              {!isLoggedIn && (
                <Login handleSubmit={handleLogin} />
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
