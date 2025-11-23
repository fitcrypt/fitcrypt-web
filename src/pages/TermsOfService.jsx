import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute top-0 -left-1/4 w-full h-full bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute bottom-0 -right-1/4 w-full h-full bg-orange-100/30 dark:bg-orange-900/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 md:pt-48 pb-24 relative z-10 text-gray-900 dark:text-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-black mb-12 tracking-tight">
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-orange-500">Service</span>
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="mb-8 text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light">
              Welcome to <strong>FitCrypt</strong>. These Terms of Service (“Terms”)
              govern your use of our app. By using it, you agree to these Terms.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">1. Eligibility</h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400 leading-relaxed">You must be at least 13 years old to use this app.</p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">
              2. Account Responsibilities
            </h2>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600 dark:text-gray-400">
              <li>Keep your login credentials secure</li>
              <li>Be responsible for all activity on your account</li>
              <li>We’re not liable for unauthorized access</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">
              3. Data Privacy and Security
            </h2>
            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">a. Client-Side Encryption</h3>
            <p className="mb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
              Your health data is encrypted on your device. We cannot access or
              decrypt this data.
            </p>

            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">b. Personal Information</h3>
            <p className="mb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
              We collect minimal personal info (e.g., name, email, phone) to support
              your experience. See our{" "}
              <Link to="/privacy-policy" className="text-primary-600 dark:text-primary-400 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>

            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">c. Anonymous Analytics</h3>
            <p className="mb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
              We track general usage (e.g., popular workouts) to improve the app — no
              personal identifiers are attached.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">
              4. Payments and Subscriptions
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
              Some features require payment. Payments are processed by secure third
              parties. Subscriptions renew automatically unless cancelled.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">5. Acceptable Use</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-400">You agree not to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600 dark:text-gray-400">
              <li>Use the app for illegal activity</li>
              <li>Reverse-engineer encrypted data</li>
              <li>Disrupt the app’s performance or security</li>
              <li>Upload spam or malicious content</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">
              6. Intellectual Property
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
              All content in the app is owned by us. You may not copy, reuse, or
              distribute it without permission.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">
              7. Service Availability
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
              While we aim for uptime, we can’t guarantee uninterrupted service.
              Features may change without notice.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">8. Termination</h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
              You can stop using the app anytime. We may suspend or delete accounts
              that break the rules. Encrypted data cannot be recovered after deletion.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">
              9. Changes to These Terms
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
              We may update these Terms. Continued use after changes means you accept
              them. Major updates will be communicated via the app or email.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">10. Contact Us</h2>
            <p className="mb-1">
              <strong>
                <a href="mailto:fitcrypt.app@gmail.com" className="text-primary-600 dark:text-primary-400 hover:underline">fitcrypt.app@gmail.com</a>
              </strong>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
