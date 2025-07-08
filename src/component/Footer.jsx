import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import spaceLogo from "../assets/space_logo_100.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={spaceLogo}
                alt="FitCrypt Logo"
                className="w-10 h-10 rounded-md"
              />
              <span className="text-2xl font-bold text-white">FitCrypt</span>
            </div>
            <p className="text-sm text-gray-400">
              Your private fitness journey—empowered by purpose, protected by
              encryption.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://x.com/fitcrypt_app" target="_blank" className="text-gray-400 hover:text-white transition">
                <FaXTwitter className="text-xl" />
              </a>
              <a href="https://www.instagram.com/fitcrypt_app/" target="_blank" className="text-gray-400 hover:text-white transition">
                <FaInstagram className="text-xl" />
              </a>
              {/* <a href="#" target="_blank" className="text-gray-400 hover:text-white transition">
                <FaLinkedin className="text-xl" />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm hover:text-white transition">
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-sm hover:text-white transition"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-sm hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="text-sm">
                <a href="mailto:fitcrypt.app@gmail.com">fitcrypt.app@gmail.com</a>
              </li>
              <li className="text-sm">Delhi, IN</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between
         items-center text-sm text-gray-500">
          <div>© {new Date().getFullYear()} FitCrypt. All rights reserved.</div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-white transition">
              Terms of Service
            </Link>

          </div>
        </div>
      </div>
    </footer>
  );
}
