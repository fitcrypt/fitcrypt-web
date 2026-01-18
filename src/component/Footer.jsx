import { Instagram, Twitter } from "lucide-react";
import Logo from "../assets/new-logo.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-white/[0.01] text-gray-500 dark:text-gray-400 py-16 px-6 sm:px-8 lg:px-16 transition-colors duration-500 border-t border-gray-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img
                src={Logo}
                alt="FitCrypt Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                Fit<span className="text-primary-500">Crypt</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Your private fitness journey—empowered by purpose, protected by
              encryption.
            </p>
            <div className="flex gap-3">
              <a href="https://x.com/fitcrypt_app" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/fitcrypt_app/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-sm hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-5">
            <h3 className="text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/blog" className="text-sm hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-sm hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h3 className="text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="text-sm">
                <a href="mailto:fitcrypt.app@gmail.com" className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                  fitcrypt.app@gmail.com
                </a>
              </li>
              <li className="text-sm">Delhi, IN</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div>© {new Date().getFullYear()} FitCrypt. All rights reserved.</div>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
              Privacy
            </Link>
            <Link to="/terms-of-service" className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

