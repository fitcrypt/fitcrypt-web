import { GlobeLock } from "lucide-react";
import { motion } from "framer-motion";

export default function AccessAnywhereSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-1/2 order-2 lg:order-1"
        >
          <img 
            src="https://res.cloudinary.com/dyqibxntm/image/upload/v1751350075/mobile_ivjisv.jpg" 
            alt="Multi-device access"
            className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:w-1/2 space-y-6 order-1 lg:order-2"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary-500/10 dark:bg-primary-500/20 rounded-xl">
              <GlobeLock className="h-7 w-7 text-primary-500 dark:text-primary-400" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Access Anywhere</h2>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Your fitness journey stays with you across all devices. Pick up where you left off whether you're on your phone, tablet, or computer.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 group">
              <div className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400 group-hover:scale-150 transition-transform"></div>
              <span className="text-gray-700 dark:text-gray-300">End-to-end encrypted sync between devices</span>
            </li>
            <li className="flex items-start gap-3 group">
              <div className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400 group-hover:scale-150 transition-transform"></div>
              <span className="text-gray-700 dark:text-gray-300">No installations needed - works in any browser</span>
            </li>
            <li className="flex items-start gap-3 group">
              <div className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400 group-hover:scale-150 transition-transform"></div>
              <span className="text-gray-700 dark:text-gray-300">Automatic updates with new features</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}