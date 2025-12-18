/* eslint-disable no-unused-vars */
import { ChevronRight, LockKeyhole, Shield, FileKey, ServerOff } from "lucide-react";
import { motion } from "framer-motion";

function EncryptedJourney() {
  return (
    <section className="section-padding bg-gray-50/50 dark:bg-white/[0.01] transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Your Data, <span className="gradient-text">Your Control</span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            End-to-end encryption meets intuitive design. Privacy is a fundamental right, not a feature.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="group">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 p-3.5 bg-primary-500/10 dark:bg-primary-500/20 rounded-xl border border-primary-500/20 dark:border-primary-500/30">
                  <FileKey className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    End-to-End Encryption
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
                    Every workout is encrypted on your device before it touches our servers. We cannot access your data.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 p-3.5 bg-orange-500/10 dark:bg-orange-500/20 rounded-xl border border-orange-500/20 dark:border-orange-500/30">
                  <ServerOff className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    Zero-Knowledge Architecture
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
                    Our systems are designed so that we know nothing about your fitness journey. Your keys, your data.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button className="btn-primary flex items-center gap-2 group">
                Learn How It Works
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>

          {/* Workout Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-white dark:bg-white/[0.03] rounded-2xl p-6 sm:p-8 border border-gray-100 dark:border-white/5 shadow-xl shadow-gray-200/50 dark:shadow-none">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Today's Workout
                </h3>
                <div className="flex items-center gap-2 text-xs font-mono text-primary-600 dark:text-primary-400 bg-primary-500/10 dark:bg-primary-500/20 px-3 py-1.5 rounded-full border border-primary-500/20 dark:border-primary-500/30">
                  <LockKeyhole className="h-3 w-3" />
                  ENCRYPTED
                </div>
              </div>

              <div className="space-y-2.5">
                {[
                  { name: "Bench Press", stats: "4×8 @ 60kg" },
                  { name: "Shoulder Press", stats: "3×10 @ 25kg" },
                  { name: "Deadlifts", stats: "5×5 @ 100kg" }
                ].map((exercise, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center p-4 bg-gray-50 dark:bg-white/[0.02] rounded-xl border border-gray-100 dark:border-white/5"
                  >
                    <span className="font-medium text-gray-900 dark:text-gray-200 text-sm">{exercise.name}</span>
                    <span className="text-sm text-gray-400 dark:text-gray-500 font-mono">
                      {exercise.stats}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-gray-100 dark:border-white/5 flex justify-between items-center text-xs text-gray-400 dark:text-gray-500 font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse"></div>
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

