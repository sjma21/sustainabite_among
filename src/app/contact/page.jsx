"use client";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-green-50 text-gray-900 py-16 px-6 mt-3">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-green-600">Get in Touch 🌿</h1>
        <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
          Have questions, feedback, or partnership ideas? Reach out to us and let's build a more sustainable world together.
        </p>
      </div>

      {/* Contact Form & Info */}
      <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.form 
          whileHover={{ scale: 1.02 }}
          className="bg-white p-6 rounded-lg shadow-lg text-left"
        >
          <h2 className="text-xl font-semibold text-green-700 mb-4">Send Us a Message</h2>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium">Full Name</label>
            <input type="text" placeholder="Enter your name" className="mt-1 w-full p-2 border rounded-lg bg-gray-100 focus:ring focus:ring-green-400" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium">Email Address</label>
            <input type="email" placeholder="Enter your email" className="mt-1 w-full p-2 border rounded-lg bg-gray-100 focus:ring focus:ring-green-400" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium">Your Message</label>
            <textarea placeholder="Write your message here..." rows="4" className="mt-1 w-full p-2 border rounded-lg bg-gray-100 focus:ring focus:ring-green-400"></textarea>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="w-full p-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Contact Information */}
        <div className="flex flex-col justify-center items-center text-center space-y-6">
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-green-600 text-2xl" />
            <p className="text-gray-700 text-lg">contact@sustainabite.com</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-green-600 text-2xl" />
            <p className="text-gray-700 text-lg">123 Green Street, Eco City, Earth</p>
          </div>
          
          {/* Social Media Links */}
          <div className="mt-6 flex space-x-6 text-xl">
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-500 hover:text-green-600 transition">
              <FaFacebookF />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-500 hover:text-green-600 transition">
              <FaInstagram />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-500 hover:text-green-600 transition">
              <FaTwitter />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}
