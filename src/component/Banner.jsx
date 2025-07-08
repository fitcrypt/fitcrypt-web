import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100 py-32 px-6">
      {/* Decorative blurred circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-24 -left-24 w-96 h-96 bg-orange-200 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 -right-32 w-96 h-96 bg-orange-300 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-orange-100 rounded-full filter blur-2xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Coming Soon Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center px-5 py-2 text-sm font-medium text-white bg-gray-700 rounded-full shadow mb-5 mr-2"
        >
          Coming Soon
        </motion.div>

        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-5 py-2 text-sm font-medium text-orange-700 bg-orange-100 rounded-full shadow mb-6"
        >
          <span className="relative flex h-3 w-3 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
          </span>
          Transform Your Fitness
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight drop-shadow-sm"
        >
          Private, Personalized <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-gray-700 to-orange-700 animate-gradient-x">
            Health Tracking
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl text-gray-700 max-w-2xl mx-auto mb-10"
        >
          Achieve your goals with technology that respects your privacy and
          adapts to your needs.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <Link to="/about-us" className="inline-block">
            <button className="px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:from-orange-600 hover:to-orange-700 hover:scale-105 transition-all duration-300 text-lg">
              Learn More
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
