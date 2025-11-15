/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiMoon, FiSun } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/space_logo_100.svg";
import Button from "./Button";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { name: "Home", slug: "/" },
  { name: "About Us", slug: "/about-us" },
  { name: "Challenges", slug: "/challenges" },
  { name: "Inspiration", slug: "/inspiration" },
];

function Header() {
  const [scrollUp, setScrollUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const handleMenuToggle = () => setIsNavVisible((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollUp(currentY > lastScrollY && currentY > 30);
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`sticky top-0 w-full z-50 glass-effect transition-all duration-300 ${
        scrollUp ? "shadow-none" : "shadow-lg"
      }`}
    >
      <div className="relative flex items-center justify-between h-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="">
          <motion.div
            initial={{ x: 0 }}
            animate={
              scrollUp ? { left: "50%", x: "-50%" } : { left: "0%", x: "0%" }
            }
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="absolute h-full flex items-center top-0"
          >
            <img
              src={Logo}
              alt="logo"
              className="h-full object-contain p-2"
            />
            {!scrollUp && (
              <span className="font-black text-xl text-gray-900 dark:text-white ml-2 tracking-tight">
                FitCrypt
              </span>
            )}
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={scrollUp ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.4 }}
          className={`hidden md:flex items-center gap-6 `}
        >
          {navItems.map((item) => (
            <NavLink key={item.slug} to={item.slug}>
              {({ isActive }) => (
                <Button
                  text={item.name}
                  backgroundColor={
                    isActive ? "bg-primary-500/10 dark:bg-primary-500/20" : "bg-transparent"
                  }
                  textColor={isActive ? "text-primary-600 dark:text-primary-400" : "text-gray-700 dark:text-gray-300"}
                  hoverClass="hover:bg-primary-500/10 dark:hover:bg-primary-500/20 hover:text-primary-600 dark:hover:text-primary-400"
                />
              )}
            </NavLink>
          ))}
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-3 rounded-2xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg"
            aria-label="Toggle theme"
          >
            <motion.div
              initial={false}
              animate={{ rotate: isDark ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isDark ? (
                <FiSun className="w-6 h-6 text-yellow-400" />
              ) : (
                <FiMoon className="w-6 h-6 text-gray-700" />
              )}
            </motion.div>
          </button>
        </motion.nav>

        {/* Mobile Menu Toggle & Theme Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-3 rounded-2xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-md"
            aria-label="Toggle theme"
          >
            <motion.div
              initial={false}
              animate={{ rotate: isDark ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isDark ? (
                <FiSun className="w-5 h-5 text-yellow-400" />
              ) : (
                <FiMoon className="w-5 h-5 text-gray-700" />
              )}
            </motion.div>
          </button>
          <button 
            onClick={handleMenuToggle} 
            className="p-3 rounded-2xl bg-primary-500 hover:bg-primary-600 transition-all duration-300 shadow-md"
            aria-label="Toggle menu"
          >
            <FiMenu className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isNavVisible && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleMenuToggle}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 z-50 w-full sm:w-80 bg-white dark:bg-gray-900 md:hidden shadow-2xl"
            >
              {/* Header */}
              <div className="flex justify-between items-center h-20 px-6 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-3">
                  <img src={Logo} alt="logo" className="h-10 w-10 object-contain" />
                  <span className="font-black text-xl text-gray-900 dark:text-white tracking-tight">
                    FitCrypt
                  </span>
                </div>
                <button
                  onClick={handleMenuToggle}
                  className="p-3 rounded-2xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 relative z-50"
                  aria-label="Close menu"
                >
                  <IoClose className="w-6 h-6 text-gray-900 dark:text-white" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="flex flex-col p-6 gap-3">
                {navItems.map((item, index) => (
                  <NavLink
                    key={item.slug}
                    to={item.slug}
                    onClick={() => setIsNavVisible(false)}
                  >
                    {({ isActive }) => (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`w-full px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                          isActive
                            ? "bg-primary-500 text-white shadow-lg shadow-primary-500/30"
                            : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                        }`}
                      >
                        {item.name}
                      </motion.div>
                    )}
                  </NavLink>
                ))}
              </div>

              {/* Footer Section */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 dark:border-gray-800">
                <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                  © 2025 FitCrypt
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
