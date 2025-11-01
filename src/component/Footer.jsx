import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import spaceLogo from "../assets/space_logo_100.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 dark:text-gray-400 py-16 px-6 transition-colors duration-300 border-t border-gray-800 dark:border-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={spaceLogo}
                alt="FitCrypt Logo"
                className="w-10 h-10 rounded-md"
              />
              <span className="text-2xl font-black text-white dark:text-white tracking-tight">FitCrypt</span>
            </div>
            <p className="text-sm text-gray-400 dark:text-gray-500 leading-relaxed">
              Your private fitness journey—empowered by purpose, protected by
              encryption.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://x.com/fitcrypt_app" target="_blank" className="p-3 rounded-xl bg-gray-800 dark:bg-gray-900 text-gray-400 hover:text-white hover:bg-primary-600 dark:hover:bg-primary-600 transition-all duration-300">
                <FaXTwitter className="text-xl" />
              </a>
              <a href="https://www.instagram.com/fitcrypt_app/" target="_blank" className="p-3 rounded-xl bg-gray-800 dark:bg-gray-900 text-gray-400 hover:text-white hover:bg-primary-600 dark:hover:bg-primary-600 transition-all duration-300">
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm hover:text-primary-400 dark:hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm hover:text-primary-400 dark:hover:text-primary-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-sm hover:text-primary-400 dark:hover:text-primary-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-sm hover:text-primary-400 dark:hover:text-primary-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm hover:text-primary-400 dark:hover:text-primary-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-sm hover:text-primary-400 dark:hover:text-primary-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="text-sm">
                <a href="mailto:fitcrypt.app@gmail.com" className="hover:text-primary-400 dark:hover:text-primary-400 transition-colors">
                  fitcrypt.app@gmail.com
                </a>
              </li>
              <li className="text-sm">Delhi, IN</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 dark:border-gray-900 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between
         items-center text-sm text-gray-500 dark:text-gray-600">
          <div>© {new Date().getFullYear()} FitCrypt. All rights reserved.</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-primary-400 dark:hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-primary-400 dark:hover:text-primary-400 transition-colors">
              Terms of Service
            </Link>

          </div>
        </div>
      </div>
    </footer>
  );
}
