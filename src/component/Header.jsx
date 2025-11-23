/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiMoon, FiSun } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/space_logo_100.svg";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { name: "Home", slug: "/" },
  { name: "About Us", slug: "/about-us" },
  { name: "Challenges", slug: "/challenges" },
  { name: "Inspiration", slug: "/inspiration" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const handleMenuToggle = () => setIsNavVisible((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={Logo}
              alt="logo"
              className="h-8 w-8 object-contain transition-transform group-hover:scale-105"
            />
            <span className="font-bold text-lg text-gray-900 dark:text-white tracking-tight">
              FitCrypt
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink 
                key={item.slug} 
                to={item.slug}
                className={({ isActive }) => 
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive 
                      ? "text-gray-900 dark:text-white" 
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <FiSun className="w-5 h-5" />
              ) : (
                <FiMoon className="w-5 h-5" />
              )}
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-500 dark:text-gray-400"
            >
              {isDark ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>
            <button 
              onClick={handleMenuToggle} 
              className="p-2 text-gray-900 dark:text-white"
              aria-label="Toggle menu"
            >
              <FiMenu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isNavVisible && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleMenuToggle}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[55] md:hidden"
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 z-[60] w-full sm:w-80 bg-white dark:bg-gray-900 md:hidden border-l border-gray-100 dark:border-gray-800"
            >
              <div className="flex justify-between items-center h-20 px-6 border-b border-gray-100 dark:border-gray-800">
                <span className="font-bold text-lg text-gray-900 dark:text-white">Menu</span>
                <button
                  onClick={handleMenuToggle}
                  className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                >
                  <IoClose className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col p-6 gap-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.slug}
                    to={item.slug}
                    onClick={() => setIsNavVisible(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;

