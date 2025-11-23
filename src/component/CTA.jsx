import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <div className="relative py-24 px-6 sm:px-8 lg:px-12 bg-transparent overflow-hidden transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto relative z-10 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Ready to Transform
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-orange-500">Your Fitness Journey?</span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Join thousands of athletes who train with complete privacy and security.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="mailto:fitcrypt.app@gmail.com">
            <button className="px-8 py-4 bg-primary-600 text-white font-medium rounded-full hover:bg-primary-700 transition-all duration-300 text-lg flex items-center gap-2 group shadow-lg shadow-primary-600/20">
              <Mail className="w-5 h-5" />
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </a>
          <button className="px-8 py-4 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-medium rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 text-lg">
            Learn More
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default CTA;
