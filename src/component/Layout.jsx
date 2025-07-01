import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout() {
  const [scrollUp, setScrollUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollUp(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);    

  return (
    <>
      <div
        className={`sticky top-0 bg-background p4 z-50 transition-shadow duration 300 ${
          scrollUp ? "shadow-none" : "shadow"
        }`}
      >
        <div className="relative flex items-center h-12">
          {/* Logo */}
          <motion.div
            initial={false}
            animate={{
              left: scrollUp ? "50%" : "0%",
              x: scrollUp ? "-50%" : "0%",
              position: "absolute",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="text-xl font-bold"
          >
            Logo
          </motion.div>

          {/* Right Nav */}
          <AnimatePresence>
            {!scrollUp && (
              <motion.nav
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="ml-auto"
              >
                <ul className="flex gap-4">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>

      <Outlet />
    </>
  );
}
