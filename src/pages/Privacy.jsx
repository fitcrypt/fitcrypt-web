/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";
import SEO from "../component/SEO";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300 relative overflow-hidden">
      <SEO
        title="Privacy Policy - FitCrypt"
        description="Read FitCrypt's Privacy Policy. We use client-side encryption to ensure we cannot access your health data. Your privacy is our priority."
        keywords="privacy policy, data privacy, encrypted health data, client-side encryption"
        url="https://fitcrypt.app/privacy-policy"
      />
      {/* Subtle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/5 to-primary-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 md:pt-48 pb-24 relative z-10 text-gray-900 dark:text-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
            Privacy <span className="gradient-text">Policy</span>
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="mb-8 text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light">
              Thank you for choosing to use <strong>FitCrypt</strong> (“we”,
              “our”, or “us”). Your privacy is critically important to us. This
              Privacy Policy explains how we collect, use, store, and protect
              your information when you use our fitness app.
            </p>

            {/* Section 1 */}
            <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-900 dark:text-white">
              1. Data We Collect
            </h2>

            <h3 className="text-lg font-medium mb-3 text-gray-800 dark:text-gray-200">
              a. Personally Identifiable Information (PII):
            </h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600 dark:text-gray-400">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Time zone</li>
              <li>Payment information (if applicable)</li>
            </ul>

            <h3 className="text-lg font-medium mb-3 text-gray-800 dark:text-gray-200">
              b. Encrypted Health Data (Client-Side Encrypted):
            </h3>
            <p className="mb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
              All your health-related data — including workout logs, training
              plans, goals, progress, etc. — is encrypted{" "}
              <strong>on your device</strong> using{" "}
              <strong>client-side encryption</strong>. We cannot read this data
              and cannot recover it if you lose access to your credentials.
            </p>

            <h3 className="text-lg font-medium mb-3 text-gray-800 dark:text-gray-200">
              c. Anonymized Usage Data:
            </h3>
            <p className="mb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
              We collect aggregated, anonymous data like program popularity and
              feature usage to improve our app. This data cannot be linked to
              you.
            </p>

            {/* Section 2 */}
            <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-900 dark:text-white">
              2. How We Use Your Data
            </h2>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600 dark:text-gray-400">
              <li>To provide core app functionality</li>
              <li>To personalize your experience</li>
              <li>To offer support and handle account issues</li>
              <li>To analyze anonymized patterns for improvement</li>
              <li>To process payments (if applicable)</li>
            </ul>

            {/* Section 3 */}
            <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-900 dark:text-white">
              3. Client-Side Encryption Explained
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
              Client-side encryption ensures that your health data is encrypted
              before it leaves your device. Only you can decrypt it using your
              credentials. We cannot read or recover this data.
            </p>

            {/* Section 4 */}
            <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-900 dark:text-white">
              4. Data Sharing and Third Parties
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
              We do not sell or share your personal or encrypted data. We may
              use secure third-party services for storage, analytics (aggregated
              only), and payment processing.
            </p>

            {/* Section 5 */}
            <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-900 dark:text-white">
              5. Your Rights
            </h2>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600 dark:text-gray-400">
              <li>Access your stored personal data</li>
              <li>Delete your account and encrypted data</li>
              <li>Export your encrypted data (on request)</li>
            </ul>
            <p className="mb-6 text-sm italic text-gray-500">
              Note: Encrypted data is unrecoverable without your decryption
              credentials.
            </p>

            {/* Section 6 */}
            <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-900 dark:text-white">
              6. Security Practices
            </h2>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600 dark:text-gray-400">
              <li>End-to-end encryption of health data</li>
              <li>HTTPS-only communication</li>
              <li>Regular security audits</li>
              <li>Client-side key management</li>
            </ul>

            {/* Section 7 */}
            <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-900 dark:text-white">
              7. Payment Data
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
              Payments are processed through PCI-compliant third-party
              providers. We do not store your payment details on our servers.
            </p>

            {/* Section 8 */}
            <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">
              8. Children’s Privacy
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
              Our app is not intended for children under 13. We do not knowingly
              collect personal data from minors.
            </p>

            {/* Section 9 */}
            <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-900 dark:text-white">
              9. Changes to This Policy
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
              We may update this policy as necessary. You will be notified of
              significant changes via email or in-app notification.
            </p>

            {/* Section 10 */}
            <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-900 dark:text-white">
              10. Contact Us
            </h2>
            <p className="mb-2 text-gray-600 dark:text-gray-400">
              If you have any questions, contact us at:
            </p>
            <p className="mb-1">
              <strong>
                <a
                  href="mailto:fitcrypt.app@gmail.com"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  fitcrypt.app@gmail.com
                </a>
              </strong>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
