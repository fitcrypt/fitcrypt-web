import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import spaceLogo from "../assets/space_logo_100.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

function Header() {
  const [scrollUp, setScrollUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(false);
  function handleMenu() {
    setIsNavVisible(!isNavVisible);
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollUp(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItemsList = [
    { name: "Home", slug: "/" },
    { name: "About Us", slug: "/about-us" },
    { name: "Challenges", slug: "/challenges" },
    { name: "Inspiration", slug: "/inspiration" },
  ];

  const navItems = navItemsList.map((navItem) => (
    <NavLink key={navItem.slug} to={navItem.slug}>
      {({ isActive }) => (
        <Button
          text={navItem.name}
          backgroundColor={isActive ? "bg-background-50" : "bg-background-200"}
          textColor={isActive ? "text-black" : "text-onBackground"}
          hoverClass="hover:bg-background-50 hover:text-black"
        />
      )}
    </NavLink>
  ));

  return (
    <>
      <header
        className={`sticky top-0 w-full z-50 h-16 sm:h-16 md:h-16 lg:h-16 xl:h-18 bg-background-200 transition-shadow duration-300 ${
          scrollUp ? "shadow-none" : "shadow"
        } `}
      >
        <div className="relative flex items-center justify-between h-full  px-2  sm:px-4 md:px-8 ">
          {/* LOGO */}

          <motion.div
            initial={{ x: 0 }}
            animate={
              scrollUp ? { left: "50%", x: "-50%" } : { left: "0%", x: "0%" }
            }
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 20,
            }}
            className={`h-full absolute`}
          >
            <div className="flex justify-center items-center h-full">
              <img
                src={spaceLogo}
                alt="logo"
                className="h-full object-contain p-2"
              />
              <p
                className={`font-serif font-bold text-lg text-gray-800  ${
                  scrollUp ? "hidden" : "block"
                }`}
              >
                FitCrypt
              </p>
            </div>
          </motion.div>

          {/* Nav Items */}

          <AnimatePresence>
            <motion.nav
              initial={{ x: 0, opacity: 0 }}
              animate={
                scrollUp
                  ? { right: "50%", x: "50%", opacity: 0 }
                  : { right: "0%", x: "0%", opacity: 1 }
              }
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 20,
              }}
              className={` absolute h-full flex me-2 items-center justify-center      ${
                scrollUp ? "pointer-events-none" : "pointer-events-auto"
              }
              `}
            >
              <div>
                <div className="gap-4 hidden md:flex ">{navItems}</div>

                <button
                  className="p-2 md:hidden text-primary-500"
                  onClick={handleMenu}
                >
                  <FiMenu className="w-6 h-6" />
                </button>
              </div>
            </motion.nav>
          </AnimatePresence>
        </div>
        <div
          id="nav-dialog"
          className={`fixed w-full h-full bg-background-200 ${
            isNavVisible ? "" : "hidden"
          } md:hidden inset-0 flex flex-col ${
            scrollUp ? "pointer-events-none" : "pointer-events-auto"
          }`}
        >
          <div
            id="nav-bar"
            className="flex justify-between top-0 w-full z-50 h-16  bg-background-200 "
          >
            <Link href="#" id="brand">
              <img
                src={spaceLogo}
                alt="logo"
                className="h-full object-contain p-2"
              />
            </Link>
            <button
              className="p-2 me-2 md:hidden text-primary-500"
              onClick={handleMenu}
            >
              <IoClose className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-12 grow justify-center items-center">
            {navItems}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
