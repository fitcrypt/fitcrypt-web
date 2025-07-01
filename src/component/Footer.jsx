import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import spaceLogo from "../assets/space_logo_100.svg";

export default function Footer() {
  return (
    <footer className="bg-primary-200 py-10 px-4 mt-10 ">
      <div className="max-w-7xl mx-auto px-8 py-4 flex flex-col md:flex-row md:justify-between gap-10">
        {/* Logo and About */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <img
              src={spaceLogo}
              alt="FitCrypt Logo"
              className="w-10 h-10 rounded-md"
            />
            <span className="text-2xl font-bold text-primary-500 font-serif">
              FitCrypt
            </span>
          </div>
        
          <p className="text-sm text-gray-700">
            Grow with clarity. Your private fitness journey—empowered by
            purpose, protected by encryption.
          </p>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Follow Us
          </h3>
          <div className="flex flex-col space-y-3 text-sm text-gray-700">
            <a
              href="#"
              className="flex items-center space-x-2 hover:text-black transition"
            >
              <FaXTwitter className="text-lg" />
              <span>Twitter</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 hover:text-black transition"
            >
              <FaInstagram className="text-lg" />
              <span>Instagram</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 hover:text-black transition"
            >
              <FaLinkedin className="text-lg" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-400 mt-10 pt-4 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} FitCrypt. All rights reserved.
      </div>
    </footer>
  );
}
