import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <div className="section-padding bg-white dark:bg-transparent transition-colors duration-500 relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[300px] bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto relative z-10 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
          Ready to Transform
          <br />
          <span className="gradient-text">Your Fitness Journey?</span>
        </h2>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
          Join thousands of athletes who train with complete privacy and security.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="mailto:fitcrypt.app@gmail.com">
            <button className="btn-primary flex items-center gap-2 group">
              <Mail className="w-4 h-4" />
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </a>
          <button className="btn-secondary">
            Learn More
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default CTA;
