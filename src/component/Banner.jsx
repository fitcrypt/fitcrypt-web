import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Lock, Eye, Smartphone } from "lucide-react";

// Calculate time remaining until launch
const calculateTimeLeft = () => {
  const launchDate = new Date("2026-01-26T00:00:00+05:30");
  const now = new Date();
  const difference = launchDate - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, launched: true };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    launched: false,
  };
};

export default function Banner() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Launch Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-primary-500/10 dark:bg-primary-500/20 border border-primary-500/20 dark:border-primary-500/30"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
              {timeLeft.launched ? "We're Live!" : "Launching January 26"}
            </span>
          </motion.div>

          {/* Countdown Timer */}
          {!timeLeft.launched && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex justify-center gap-3 sm:gap-4 mb-10"
            >
              {[
                { value: timeLeft.days, label: "Days" },
                { value: timeLeft.hours, label: "Hours" },
                { value: timeLeft.minutes, label: "Mins" },
                { value: timeLeft.seconds, label: "Secs" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center px-3 sm:px-5 py-3 sm:py-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10"
                >
                  <span className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white tabular-nums">
                    {String(item.value).padStart(2, "0")}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>
          )}

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight leading-[1.05]"
          >
            Your Fitness.
            <br />
            <span className="gradient-text">Truly Private.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Track workouts, achieve goals, and maintain complete privacy with
            end-to-end encryption. Your data stays yours.
          </motion.p>

          {/* Mobile App Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-10 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10"
          >
            <Smartphone className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-300">Mobile App Coming Soon</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/about-us">
              <button className="btn-primary flex items-center gap-2 group">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
            <button className="btn-secondary">
              Learn More
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-12 text-sm text-gray-400 dark:text-gray-500"
          >
            <div className="flex items-center gap-2.5">
              <Lock className="w-4 h-4 text-primary-500/70" />
              <span>End-to-End Encrypted</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Eye className="w-4 h-4 text-primary-500/70" />
              <span>Zero Data Selling</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Shield className="w-4 h-4 text-primary-500/70" />
              <span>Privacy First</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

