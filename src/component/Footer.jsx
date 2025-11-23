import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import spaceLogo from "../assets/space_logo_100.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 text-gray-600 dark:text-gray-400 py-16 px-6 transition-colors duration-300 border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={spaceLogo}
                alt="FitCrypt Logo"
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">FitCrypt</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Your private fitness journey—empowered by purpose, protected by
              encryption.
            </p>
            <div className="flex gap-4">
              <a href="https://x.com/fitcrypt_app" target="_blank" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <FaXTwitter className="text-lg" />
              </a>
              <a href="https://www.instagram.com/fitcrypt_app/" target="_blank" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <FaInstagram className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Product
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-sm hover:text-gray-900 dark:hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm hover:text-gray-900 dark:hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-sm hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/blog" className="text-sm hover:text-gray-900 dark:hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm hover:text-gray-900 dark:hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-sm hover:text-gray-900 dark:hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="text-sm">
                <a href="mailto:fitcrypt.app@gmail.com" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  fitcrypt.app@gmail.com
                </a>
              </li>
              <li className="text-sm">Delhi, IN</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-100 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div>© {new Date().getFullYear()} FitCrypt. All rights reserved.</div>
          <div className="flex gap-8">
            <Link to="/privacy-policy" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/terms-of-service" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

