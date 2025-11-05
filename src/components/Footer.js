import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">TripPlanner 🌍</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Explore beautiful destinations, plan perfect trips, and make memories that last a lifetime.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-indigo-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-indigo-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/destinations" className="hover:text-indigo-400 transition">
                Destinations
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-indigo-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Connect With Me</h3>
          <div className="flex justify-center md:justify-start gap-6 text-2xl">
            <a
              href="mailto:ajaysinghmaharajganj@gmail.com"
              className="hover:text-blue-400"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://www.linkedin.com/in/ajay-singh-623932237"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/ajaysingh72"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://wa.me/7238950582"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} TripPlanner. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
