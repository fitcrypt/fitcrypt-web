import React from "react";
import { Link } from "react-router-dom";

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-900">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>

      <p className="mb-6">
        Welcome to <strong>FitCrypt</strong>. These Terms of Service (“Terms”)
        govern your use of our app. By using it, you agree to these Terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Eligibility</h2>
      <p className="mb-4">You must be at least 13 years old to use this app.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        2. Account Responsibilities
      </h2>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Keep your login credentials secure</li>
        <li>Be responsible for all activity on your account</li>
        <li>We’re not liable for unauthorized access</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        3. Data Privacy and Security
      </h2>
      <h3 className="text-lg font-semibold mb-2">a. Client-Side Encryption</h3>
      <p className="mb-4">
        Your health data is encrypted on your device. We cannot access or
        decrypt this data.
      </p>

      <h3 className="text-lg font-semibold mb-2">b. Personal Information</h3>
      <p className="mb-4">
        We collect minimal personal info (e.g., name, email, phone) to support
        your experience. See our{" "}
        <Link to="/privacy-policy" className="text-blue-400 underline">
          Privacy Policy
        </Link>
        .
      </p>

      <h3 className="text-lg font-semibold mb-2">c. Anonymous Analytics</h3>
      <p className="mb-4">
        We track general usage (e.g., popular workouts) to improve the app — no
        personal identifiers are attached.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        4. Payments and Subscriptions
      </h2>
      <p className="mb-4">
        Some features require payment. Payments are processed by secure third
        parties. Subscriptions renew automatically unless cancelled.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Acceptable Use</h2>
      <p className="mb-2">You agree not to:</p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Use the app for illegal activity</li>
        <li>Reverse-engineer encrypted data</li>
        <li>Disrupt the app’s performance or security</li>
        <li>Upload spam or malicious content</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        6. Intellectual Property
      </h2>
      <p className="mb-4">
        All content in the app is owned by us. You may not copy, reuse, or
        distribute it without permission.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        7. Service Availability
      </h2>
      <p className="mb-4">
        While we aim for uptime, we can’t guarantee uninterrupted service.
        Features may change without notice.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">8. Termination</h2>
      <p className="mb-4">
        You can stop using the app anytime. We may suspend or delete accounts
        that break the rules. Encrypted data cannot be recovered after deletion.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        9. Changes to These Terms
      </h2>
      <p className="mb-4">
        We may update these Terms. Continued use after changes means you accept
        them. Major updates will be communicated via the app or email.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
      <p className="mb-1">
        <strong>
          <a href="mailto:fitcrypt.app@gmail.com">fitcrypt.app@gmail.com</a>
        </strong>
      </p>
    </div>
  );
}
