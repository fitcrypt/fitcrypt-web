import { GlobeLock } from "lucide-react";
import { motion } from "framer-motion";

export default function AccessAnywhereSection() {
  return (
    <section className="section-padding bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-1/2 order-2 lg:order-1"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl transform rotate-3"></div>
            <img 
              src="https://res.cloudinary.com/dyqibxntm/image/upload/v1751350075/mobile_ivjisv.jpg" 
              alt="Multi-device access"
              className="relative rounded-3xl shadow-xl"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:w-1/2 space-y-8 order-1 lg:order-2"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <GlobeLock className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight">
              Access <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-orange-500">Anywhere</span>
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Your fitness journey stays with you across all devices. Pick up where you left off whether you're on your phone, tablet, or computer.
          </p>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-600 dark:bg-primary-400"></div>
              <span className="text-gray-700 dark:text-gray-300">End-to-end encrypted sync between devices</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-600 dark:bg-primary-400"></div>
              <span className="text-gray-700 dark:text-gray-300">No installations needed - works in any browser</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-600 dark:bg-primary-400"></div>
              <span className="text-gray-700 dark:text-gray-300">Automatic updates with new features</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
