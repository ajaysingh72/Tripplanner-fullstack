import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 flex flex-col items-center justify-center py-12 px-6">
      <motion.div
        className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-extrabold text-indigo-700 text-center mb-8">
          Contact Me 📩
        </h1>

        <p className="text-center text-gray-600 mb-10 text-lg">
          Have a question, feedback, or collaboration idea? We’d love to hear
          from you! Fill out the form below or connect through social platforms.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@gmail.com"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Your Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              required
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            ></textarea>
          </div>

          <div className="text-center">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-indigo-700 transition-all"
            >
              Send Message
            </motion.button>
          </div>
        </form>

        {/* Social Links */}
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">
            Connect with me 🤝
          </h2>
          <div className="flex justify-center gap-8 text-3xl text-gray-700">
            {/* Email */}
            <a
              href="mailto:ajaysinghmaharajganj@gmail.com"
              className="hover:text-red-500 transition"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ajay-singh-623932237"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/ajaysingh72"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/7238950582"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
