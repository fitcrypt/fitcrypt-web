/* eslint-disable no-unused-vars */
import { ChevronRight, LockKeyhole, Shield, FileKey, ServerOff } from "lucide-react";
import { motion } from "framer-motion";

function EncryptedJourney() {
  return (
    <section className="py-24 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
            Your Data, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-orange-500">Your Control</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Military-grade encryption meets intuitive design. We believe privacy is a fundamental right, not a feature.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-2xl border border-primary-100 dark:border-primary-800">
                  <FileKey className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    End-to-End Encryption
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Every rep, set, and health metric is encrypted on your device before it ever touches our servers. We physically cannot access your data.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-2xl border border-orange-100 dark:border-orange-800">
                  <ServerOff className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    Zero-Knowledge Architecture
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Our systems are designed so that we know nothing about your fitness journey. Your keys, your data.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 group shadow-lg shadow-gray-900/20 dark:shadow-white/10">
                Learn How It Works
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Workout Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>

            <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-2xl shadow-gray-200/50 dark:shadow-black/50">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Today's Workout
                </h3>
                <div className="flex items-center gap-2 text-xs font-mono text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-3 py-1.5 rounded-full border border-green-100 dark:border-green-800">
                  <LockKeyhole className="h-3 w-3" />
                  ENCRYPTED
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { name: "Bench Press", stats: "4×8 @ 60kg" },
                  { name: "Shoulder Press", stats: "3×10 @ 25kg" },
                  { name: "Deadlifts", stats: "5×5 @ 100kg" }
                ].map((exercise, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700/50"
                  >
                    <span className="font-medium text-gray-900 dark:text-gray-200">{exercise.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                      {exercise.stats}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center text-xs text-gray-400 dark:text-gray-500 font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  AES-256 Encryption
                </div>
                <span>Synced just now</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default EncryptedJourney;

