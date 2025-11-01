import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <div className="relative py-32 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 dark:from-primary-700 dark:via-primary-800 dark:to-primary-900 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto relative z-10 text-center"
      >
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
          Ready to Transform
          <br />
          Your Fitness Journey?
        </h2>
        <p className="text-xl md:text-2xl text-primary-100 dark:text-primary-200 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join thousands of athletes who train with complete privacy and security.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a href="mailto:fitcrypt.app@gmail.com">
            <button className="px-10 py-5 bg-white text-primary-700 font-bold rounded-2xl shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 text-lg flex items-center gap-3 group">
              <Mail className="w-5 h-5" />
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </a>
          <button className="px-10 py-5 border-3 border-white bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl hover:bg-white/20 transition-all duration-300 text-lg hover:scale-105">
            Learn More
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default CTA;
