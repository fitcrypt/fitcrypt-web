/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";
import { Timer, Bell, ArrowRight } from "lucide-react";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] flex items-center justify-center p-4 pt-24 md:pt-32 relative overflow-hidden transition-colors duration-300">
      {/* Subtle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/5 to-primary-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl w-full relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 dark:bg-white/5 text-primary-600 dark:text-primary-400 font-medium text-sm mb-8 border border-white/10">
            <Timer className="w-4 h-4" />
            <span>Coming Soon</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Something <span className="gradient-text">Extraordinary</span>
            <br /> Is In The Works
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            We're crafting a new challenge experience that will push your limits. 
            Get ready to transform your fitness journey with community-driven competitions.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto relative">
              <div className="relative flex items-center">
                <Bell className="absolute left-4 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-36 py-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-lg text-gray-900 dark:text-white placeholder-gray-400 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 bg-primary-600 hover:bg-primary-700 text-white px-6 rounded-full font-medium transition-colors flex items-center gap-2"
                >
                  Notify Me
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
                We respect your privacy. No spam, ever.
              </p>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-8 py-6 rounded-2xl inline-block border border-green-100 dark:border-green-800/30"
            >
              <p className="text-lg font-bold mb-1">You're on the list!</p>
              <p className="text-sm opacity-90">We'll let you know when we launch.</p>
            </motion.div>
          )}
        </motion.div>

        {/* Feature Teasers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {[
            { title: "Global Leaderboards", desc: "Compete with athletes worldwide" },
            { title: "Exclusive Rewards", desc: "Earn badges and premium perks" },
            { title: "Team Challenges", desc: "Form squads and win together" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (i * 0.1) }}
              className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-100 dark:border-white/5"
            >
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
