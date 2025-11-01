import CTA from "./CTA";
import { motion } from "framer-motion";

export default function AboutUsSection() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background image with subtle overlay */}
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dyqibxntm/image/upload/v1751349693/barbell_nfbpd8.jpg"
            alt="Fitness background"
            className="w-full h-full object-cover brightness-75 dark:brightness-50"
          />
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-base font-semibold text-white tracking-wide uppercase bg-primary-700/80 dark:bg-primary-800/80 px-4 py-1 rounded-full shadow">
              About Us
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            Fitness, Reimagined for Privacy
          </h1>
          <p className="text-lg md:text-xl text-gray-200 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            We empower you to own your health journey—no compromises, no data
            selling, just results. Experience fitness technology that puts your
            privacy first.
          </p>
        </motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-400 rounded-full mb-4">
            Our Philosophy
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Redefining Fitness Technology
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-300 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're building a fitness platform that respects your privacy while
            delivering exceptional results. Your data never leaves your control.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              ),
              title: "End-to-End Encryption",
              description: "Your data is encrypted before it leaves your device. Not even our team can access your private information."
            },
            {
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              ),
              title: "Smart Training Plans",
              description: "AI-powered programs adapt to your progress, preferences, and feedback for optimal results."
            },
            {
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                />
              ),
              title: "Zero Data Sharing",
              description: "We don't sell, share, or monetize your information. Your privacy is our product promise."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 card-hover"
            >
              <div className="w-16 h-16 bg-primary-50 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-primary-600 dark:text-primary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {item.icon}
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-900 dark:bg-gray-950 py-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: "10K+", label: "Active Users" },
              { value: "99.9%", label: "Uptime Reliability" },
              { value: "0", label: "Data Breaches" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6"
              >
                <p className="text-5xl font-bold text-primary-400 dark:text-primary-300 mb-2">{stat.value}</p>
                <p className="text-gray-300 dark:text-gray-400 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CTA />
    </div>
  );
}
