import React from "react";
import logo from "../assets/space_logo_100.svg";
import { motion } from "framer-motion";

function ComingSoon() {
  return (
    <div className="-mt-16 min-h-screen flex flex-col justify-center items-center bg-white p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center space-y-6 max-w-md text-center"
      >
        <img
          src={logo}
          className="h-20 w-20"
          alt="Logo"
          style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.05))" }}
        />

        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl font-bold bg-gradient-to-r from-gray-500 to-gray-900 bg-clip-text text-transparent tracking-tight"
        >
          Coming Soon
        </motion.h1>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-gray-500 text-lg"
        >
          We're working on something amazing. Stay tuned!
        </motion.p>
      </motion.div>
    </div>
  );
}

export default ComingSoon;
