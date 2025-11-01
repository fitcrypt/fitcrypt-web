import { ChevronRight, LockKeyhole, Shield } from "lucide-react";
import { motion } from "framer-motion";

function EncryptedJourney() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-white transition-colors duration-300 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 text-sm font-semibold bg-primary-600/20 text-primary-400 rounded-full mb-6">
            PRIVACY FIRST
          </span>
          <h2 className="heading-lg mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-white to-primary-400">
              Your Data, Your Control
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Military-grade encryption meets intuitive design
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 hover:border-primary-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 p-4 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <LockKeyhole className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">
                    Military-Grade Encryption
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    Every rep, set, and health metric is encrypted before it
                    leaves your device. We physically can't access your data.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 hover:border-primary-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 p-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <Shield className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">
                    Zero-Knowledge Architecture
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    Our servers never see your raw data. Everything is encrypted
                    with keys only you control.
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-6 btn-primary bg-white text-gray-900 hover:bg-gray-100 flex items-center gap-2 text-lg group shadow-2xl">
              Learn How It Works
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Workout Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gray-800/80 backdrop-blur-sm p-10 rounded-3xl border border-gray-700/50 shadow-2xl">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold">
                  Today's Encrypted Workout
                </h3>
                <div className="p-3 bg-primary-900/30 rounded-2xl">
                  <LockKeyhole className="h-5 w-5 text-primary-400" />
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { name: "Bench Press", muscle: "Chest, Triceps", stats: "4×8 @ 60kg" },
                  { name: "Shoulder Press", muscle: "Shoulders", stats: "3×10 @ 25kg" },
                  { name: "Deadlifts", muscle: "Back, Legs", stats: "5×5 @ 100kg" }
                ].map((exercise, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + (i * 0.1) }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center p-5 bg-gray-700/50 rounded-2xl hover:bg-gray-700/70 transition-all duration-300 group cursor-pointer"
                  >
                    <div>
                      <p className="font-bold text-lg">{exercise.name}</p>
                      <p className="text-sm text-gray-400">{exercise.muscle}</p>
                    </div>
                    <span className="px-4 py-2 bg-gradient-to-r from-primary-900/40 to-primary-800/40 text-primary-300 rounded-full font-semibold group-hover:from-primary-800/50 group-hover:to-primary-700/50 transition-all">
                      {exercise.stats}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700/50 flex justify-between items-center">
                <p className="text-xs text-gray-400 font-mono bg-gray-900/50 px-3 py-2 rounded-lg">
                  🔒 Encrypted: AES-256
                </p>
                <p className="text-xs text-gray-400">Last synced: Just now</p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-6 left-6 w-full h-full rounded-3xl border-2 border-primary-400/20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default EncryptedJourney;
