import React from "react";
import { FaXTwitter } from "react-icons/fa6";

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-900">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-6">
        Thank you for choosing to use <strong>FitCrypt</strong> (“we”, “our”, or
        “us”). Your privacy is critically important to us. This Privacy Policy
        explains how we collect, use, store, and protect your information when
        you use our fitness app.
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Data We Collect</h2>

      <h3 className="text-lg font-semibold mb-2">
        a. Personally Identifiable Information (PII):
      </h3>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Time zone</li>
        <li>Payment information (if applicable)</li>
      </ul>

      <h3 className="text-lg font-semibold mb-2">
        b. Encrypted Health Data (Client-Side Encrypted):
      </h3>
      <p className="mb-4">
        All your health-related data — including workout logs, training plans,
        goals, progress, etc. — is encrypted <strong>on your device</strong>{" "}
        using <strong>client-side encryption</strong>. We cannot read this data
        and cannot recover it if you lose access to your credentials.
      </p>

      <h3 className="text-lg font-semibold mb-2">c. Anonymized Usage Data:</h3>
      <p className="mb-4">
        We collect aggregated, anonymous data like program popularity and
        feature usage to improve our app. This data cannot be linked to you.
      </p>

      {/* Section 2 */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        2. How We Use Your Data
      </h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>To provide core app functionality</li>
        <li>To personalize your experience</li>
        <li>To offer support and handle account issues</li>
        <li>To analyze anonymized patterns for improvement</li>
        <li>To process payments (if applicable)</li>
      </ul>

      {/* Section 3 */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        3. Client-Side Encryption Explained
      </h2>
      <p className="mb-4">
        Client-side encryption ensures that your health data is encrypted before
        it leaves your device. Only you can decrypt it using your credentials.
        We cannot read or recover this data.
      </p>

      {/* Section 4 */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        4. Data Sharing and Third Parties
      </h2>
      <p className="mb-4">
        We do not sell or share your personal or encrypted data. We may use
        secure third-party services for storage, analytics (aggregated only),
        and payment processing.
      </p>

      {/* Section 5 */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Rights</h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Access your stored personal data</li>
        <li>Delete your account and encrypted data</li>
        <li>Export your encrypted data (on request)</li>
      </ul>
      <p className="mb-4 text-sm italic">
        Note: Encrypted data is unrecoverable without your decryption
        credentials.
      </p>

      {/* Section 6 */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        6. Security Practices
      </h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>End-to-end encryption of health data</li>
        <li>HTTPS-only communication</li>
        <li>Regular security audits</li>
        <li>Client-side key management</li>
      </ul>

      {/* Section 7 */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">7. Payment Data</h2>
      <p className="mb-4">
        Payments are processed through PCI-compliant third-party providers. We
        do not store your payment details on our servers.
      </p>

      {/* Section 8 */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        8. Children’s Privacy
      </h2>
      <p className="mb-4">
        Our app is not intended for children under 13. We do not knowingly
        collect personal data from minors.
      </p>

      {/* Section 9 */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        9. Changes to This Policy
      </h2>
      <p className="mb-4">
        We may update this policy as necessary. You will be notified of
        significant changes via email or in-app notification.
      </p>

      {/* Section 10 */}
      <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
      <p className="mb-2">If you have any questions, contact us at:</p>
      <p className="mb-1">
        <strong>
          <a href="mailto:fitcrypt.app@gmail.com">fitcrypt.app@gmail.com</a>
        </strong>
      </p>
    </div>
  );
}
