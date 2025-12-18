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
  { name: "About", slug: "/about-us" },
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
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-white/5" 
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-16 md:h-20 px-6 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src={Logo}
              alt="logo"
              className="h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="font-semibold text-base text-gray-900 dark:text-white tracking-tight">
              FitCrypt
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink 
                key={item.slug} 
                to={item.slug}
                className={({ isActive }) => 
                  `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive 
                      ? "text-gray-900 dark:text-white bg-gray-100 dark:bg-white/10" 
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle theme"
            >
              <motion.div
                key={isDark ? "dark" : "light"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isDark ? (
                  <FiSun className="w-[18px] h-[18px]" />
                ) : (
                  <FiMoon className="w-[18px] h-[18px]" />
                )}
              </motion.div>
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={handleMenuToggle} 
              className="md:hidden p-2.5 rounded-full text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <FiMenu className="w-5 h-5" />
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
              transition={{ duration: 0.2 }}
              onClick={handleMenuToggle}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[55] md:hidden"
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
              className="fixed inset-y-0 right-0 z-[60] w-full sm:w-80 bg-white dark:bg-[#0a0a0a] md:hidden border-l border-gray-100 dark:border-white/5"
            >
              <div className="flex justify-between items-center h-16 px-6 border-b border-gray-100 dark:border-white/5">
                <span className="font-semibold text-base text-gray-900 dark:text-white">Menu</span>
                <button
                  onClick={handleMenuToggle}
                  className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-all duration-300"
                >
                  <IoClose className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col p-4 gap-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.slug}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <NavLink
                      to={item.slug}
                      onClick={() => setIsNavVisible(false)}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                          isActive
                            ? "bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white"
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </motion.div>
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

