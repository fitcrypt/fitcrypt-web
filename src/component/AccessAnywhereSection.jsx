import { GlobeLock } from "lucide-react";
import { motion } from "framer-motion";

export default function AccessAnywhereSection() {
  return (
    <section className="section-padding bg-gray-50/50 dark:bg-white/[0.01] transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-1/2 order-2 lg:order-1"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-orange-500/10 dark:from-primary-500/5 dark:to-orange-500/5 rounded-2xl transform rotate-2"></div>
            <img 
              src="https://res.cloudinary.com/dyqibxntm/image/upload/v1751350075/mobile_ivjisv.jpg" 
              alt="Multi-device access"
              className="relative rounded-2xl shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-white/5"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:w-1/2 space-y-6 order-1 lg:order-2"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/10">
              <GlobeLock className="h-5 w-5 text-primary-600 dark:text-primary-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
              Access <span className="gradient-text">Anywhere</span>
            </h2>
          </div>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
            Your fitness journey stays with you across all devices. Pick up where you left off whether you're on your phone, tablet, or computer.
          </p>
          <ul className="space-y-4 pt-2">
            <li className="flex items-start gap-3">
              <div className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-500"></div>
              <span className="text-gray-600 dark:text-gray-300 text-sm">End-to-end encrypted sync between devices</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-500"></div>
              <span className="text-gray-600 dark:text-gray-300 text-sm">No installations needed - works in any browser</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-500"></div>
              <span className="text-gray-600 dark:text-gray-300 text-sm">Automatic updates with new features</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
