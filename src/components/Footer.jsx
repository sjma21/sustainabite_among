"use client"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

        {/* Column 1: Brand & Tagline */}
        <div>
          <h2 className="text-3xl font-bold text-green-400">SustainaBite 🌿</h2>
          <p className="text-gray-400 mt-2">Eat well, live sustainably. Your guide to eco-friendly meals.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-green-300">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/recipes" className="hover:text-white transition">Recipes</a></li>
            <li><a href="/sustainability" className="hover:text-white transition">Sustainability</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/team" className="hover:text-white transition">Team</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Support & Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-green-300">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/faq" className="hover:text-white transition">FAQs</a></li>
            <li><a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white transition">Terms of Service</a></li>
          </ul>
        </div>

        {/* Column 4: Newsletter Signup */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-green-300">Subscribe</h3>
          <p className="text-gray-400 text-sm mb-3">Get eco-friendly recipes & sustainability tips in your inbox!</p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full bg-gray-800 text-white rounded-l-md outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="p-2 bg-green-500 hover:bg-green-600 rounded-r-md"
            >
              Subscribe
            </motion.button>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-8 flex justify-center space-x-6 text-xl">
        <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-400 hover:text-green-400 transition">
          <FaFacebookF />
        </motion.a>
        <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-400 hover:text-green-400 transition">
          <FaInstagram />
        </motion.a>
        <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-400 hover:text-green-400 transition">
          <FaTwitter />
        </motion.a>
        <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-gray-400 hover:text-green-400 transition">
          <FaYoutube />
        </motion.a>
      </div>

      {/* Copyright Notice */}
      <div className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} SustainaBite. Eat well, live sustainably.
      </div>
    </footer>
  );
}
