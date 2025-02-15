"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Signup() {
  return (
    <main className="relative min-h-screen bg-gradient-to-bl from-gray-900 to-gray-800 text-gray-100 flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-800 to-blue-700 opacity-20 blur-[120px]"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl bg-gray-800/70 backdrop-blur-md border border-gray-700 shadow-2xl rounded-2xl overflow-hidden">
        {/* Left Side - Rotating Logo */}
        <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-teal-700 to-gray-700 p-8 relative">
          <motion.div
            className="w-48 h-48 cursor-pointer coin-container z-50 mb-6"
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center rounded-full bg-gray-800 shadow-2xl coin">
              <Image
                src="/images/sustainabitelogo.jpg"
                alt="Sustainabite Logo"
                width={192}
                height={192}
                className="rounded-full"
              />
            </div>
          </motion.div>
          <h2 className="text-4xl font-bold text-white">Join Sustainabite</h2>
          <p className="mt-4 text-gray-300 text-center text-lg">
            Discover the joy of zero-waste cooking and smart meal planning with us!
          </p>
        </div>

        {/* Right Side - Signup Form with Proper Spacing */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 flex flex-col items-center justify-center bg-gray-800"
        >
          <h2 className="text-3xl font-bold mb-6 text-white">Sign Up</h2>
          <form className="space-y-6 w-full max-w-md">  {/* Increased the space between fields */}
            <div className="space-y-4">  {/* Added spacing wrapper */}
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full bg-gradient-to-r from-teal-500 to-green-400 text-white font-semibold py-3 rounded-md hover:from-teal-600 hover:to-green-500 transition"
            >
              Sign Up
            </motion.button>
            <p className="mt-4 text-gray-400 text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-teal-400 hover:underline">
                Log In
              </Link>
            </p>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
