import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import SEO from "../component/SEO";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] flex items-center justify-center p-4 relative overflow-hidden transition-colors duration-300">
      <SEO 
        title="Page Not Found - FitCrypt"
        description="The page you are looking for does not exist. Return to FitCrypt home."
        keywords="404, page not found"
      />
      {/* Subtle Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/5 to-primary-500/5 rounded-full blur-3xl" />
      </div>

      <div className="text-center relative z-10 max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative"
        >
          <h1 className="text-[150px] md:text-[200px] font-bold text-gray-100 dark:text-white/5 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl md:text-5xl font-bold gradient-text bg-white dark:bg-[#0a0a0a] px-4">
              Oops!
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-primary-600 to-orange-500 hover:from-primary-700 hover:to-orange-600 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-primary-500/30"
            >
              <Home className="w-4 h-4" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-900 dark:text-white rounded-full font-medium transition-all border border-transparent dark:border-white/10"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
  