import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import spaceLogo from "../assets/space_logo_100.svg";
import Button from "./Button";

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

  const handleMenuToggle = () => setIsNavVisible(!isNavVisible);

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
      className={`sticky top-0 w-full z-50 bg-background-200 transition-shadow duration-300 ${
        scrollUp ? "shadow-none" : "shadow"
      }`}
    >
      <div className="relative flex items-center justify-between h-16 px-4 sm:px-6 md:px-10 lg:px-20">
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
              src={spaceLogo}
              alt="logo"
              className="h-full object-contain p-2"
            />
            {!scrollUp && (
              <span className="font-bold text-lg text-gray-800 ml-2">
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
                    isActive ? "bg-background-50" : "bg-transparent"
                  }
                  textColor={isActive ? "text-black" : "text-onBackground"}
                  hoverClass="hover:bg-background-50 hover:text-black"
                />
              )}
            </NavLink>
          ))}
        </motion.nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={handleMenuToggle} className="text-primary-500 p-2">
            <FiMenu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isNavVisible && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 18 }}
            className="fixed inset-0 z-50 bg-background-200 md:hidden flex flex-col"
          >
            <div className="flex justify-between items-center h-16 px-4">
              <img src={spaceLogo} alt="logo" className="h-10 object-contain" />
              <button
                onClick={handleMenuToggle}
                className="text-primary-500 p-2"
              >
                <IoClose className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.slug}
                  to={item.slug}
                  onClick={() => setIsNavVisible(false)}
                >
                  {({ isActive }) => (
                    <Button
                      text={item.name}
                      backgroundColor={
                        isActive ? "bg-background-50" : "bg-background-200"
                      }
                      textColor={isActive ? "text-black" : "text-onBackground"}
                      hoverClass="hover:bg-background-50 hover:text-black"
                    />
                  )}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
