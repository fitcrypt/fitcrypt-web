import { ChevronRight, LockKeyhole } from "lucide-react";

function EncryptedJourney() {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header with animated gradient */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 text-sm font-medium bg-primary-600/20 text-primary-400 rounded-full mb-4">
            PRIVACY FIRST
          </span>
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-200">
              Your Data,
            </span>
            <br />
            Your Control
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-300 mx-auto rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 select-none">
          {/* Content */}
          <div className="lg:w-1/2 space-y-6">
            <div className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="flex-shrink-0 p-3 bg-primary-900/30 rounded-lg">
                <LockKeyhole className="h-6 w-6 text-primary-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Military-Grade Encryption
                </h3>
                <p className="text-gray-300">
                  Every rep, set, and health metric is encrypted before it
                  leaves your device. We physically can't access your data -
                  that's our promise.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="flex-shrink-0 p-3 bg-primary-900/30 rounded-lg">
                <svg
                  className="h-6 w-6 text-primary-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Zero-Knowledge Architecture
                </h3>
                <p className="text-gray-300">
                  Our servers never see your raw data. Everything is encrypted
                  with keys only you control.
                </p>
              </div>
            </div>

            <button className="mt-4 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-lg hover:shadow-lg transition-all flex items-center gap-2">
              Learn How It Works
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Workout Card */}
          <div className="lg:w-1/2 relative">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">
                  Today's Encrypted Workout
                </h3>
                <div className="p-2 bg-gray-700 rounded-full">
                  <LockKeyhole className="h-4 w-4 text-primary-400" />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg">
                  <div>
                    <p className="font-medium">Bench Press</p>
                    <p className="text-xs text-gray-400">Chest, Triceps</p>
                  </div>
                  <span className="px-3 py-1 bg-primary-900/30 text-primary-300 text-sm rounded-full">
                    4×8 @ 60kg
                  </span>
                </div>

                <div className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg">
                  <div>
                    <p className="font-medium">Shoulder Press</p>
                    <p className="text-xs text-gray-400">Shoulders</p>
                  </div>
                  <span className="px-3 py-1 bg-primary-900/30 text-primary-300 text-sm rounded-full">
                    3×10 @ 25kg
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-700 flex justify-between items-center">
                <p className="text-xs text-gray-400 font-mono">
                  Encrypted: AES-256
                </p>
                <p className="text-xs text-gray-400">Last synced: Just now</p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-4 left-4 w-full h-full rounded-xl border border-primary-400/20" />
            <div className="absolute -z-20 top-8 left-8 w-full h-full rounded-xl border border-primary-400/10" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EncryptedJourney;
