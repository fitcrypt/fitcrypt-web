import React from "react";
import logo from "../assets/space_logo_100.svg";
import { motion } from "framer-motion";
import { Sparkles, Clock, Rocket, Mail } from "lucide-react";

function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col justify-start md:justify-center items-center bg-gradient-to-br from-orange-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 md:p-8 pt-24 md:pt-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-orange-500 to-purple-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-500 to-green-500 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center space-y-8 md:space-y-12 max-w-3xl text-center w-full"
      >
        {/* Logo with Glow Effect */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse" />
          <img
            src={logo}
            className="h-20 w-20 md:h-32 md:w-32 relative z-10"
            alt="Logo"
            style={{ filter: "drop-shadow(0 8px 24px rgba(253, 105, 52, 0.3))" }}
          />
        </motion.div>

        {/* Heading with Gradient */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-4">
            <Sparkles className="w-5 h-5 md:w-8 md:h-8 text-orange-500 dark:text-orange-400" />
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black bg-gradient-to-r from-orange-600 via-purple-600 to-blue-600 dark:from-orange-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              Coming Soon
            </h1>
            <Sparkles className="w-5 h-5 md:w-8 md:h-8 text-orange-500 dark:text-orange-400" />
          </div>
          
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-base md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-medium max-w-2xl px-4"
          >
            We're working on something <span className="text-orange-600 dark:text-orange-400 font-bold">extraordinary</span>. 
            Get ready for an amazing experience!
          </motion.p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="grid md:grid-cols-3 gap-4 md:gap-6 w-full mt-4 md:mt-8"
        >
          {[
            { icon: Clock, title: "Launching Soon", desc: "Stay tuned for updates" },
            { icon: Rocket, title: "New Features", desc: "Built for you" },
            { icon: Sparkles, title: "Amazing UI", desc: "Modern & clean" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="card-modern p-6 md:p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col items-center space-y-3 md:space-y-4">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-purple-500 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Notify Button */}
        {/* <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mt-8"
        >
          <button className="btn-primary group">
            <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            Notify Me When It's Ready
          </button>
        </motion.div> */}

        {/* Progress Indicator */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="w-full max-w-md mt-4 md:mt-8 px-4"
        >
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">
            Development Progress
          </div>
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "75%" }}
              transition={{ delay: 1.7, duration: 1.2, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 rounded-full relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </motion.div>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-500 mt-2 text-right font-semibold">
            75% Complete
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ComingSoon;
