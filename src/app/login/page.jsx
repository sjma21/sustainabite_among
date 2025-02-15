"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Login() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 flex items-center justify-center overflow-hidden">
      {/* Animated Circular Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-green-900 to-teal-800 opacity-20 blur-[120px]"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl bg-gray-800/70 backdrop-blur-md border border-gray-700 shadow-2xl rounded-2xl overflow-hidden">
        {/* Left Side - Abstract Illustration */}
        <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-green-800 to-gray-800 p-8 relative">
          <Image
            src="/images/sustainabitelogo.jpg"
            alt="Sustainabite Logo"
            width={200}
            height={200}
            className="mb-6 rounded-full shadow-lg"
          />
          <h2 className="text-4xl font-bold text-white">Welcome Back!</h2>
          <p className="mt-4 text-gray-300 text-center text-lg">
            Transform your leftover ingredients into culinary masterpieces.
          </p>
          <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full blur-3xl opacity-40"></div>
        </div>

        {/* Right Side - Login Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 flex flex-col items-center justify-center bg-gray-800"
        >
          <h2 className="text-3xl font-bold mb-6 text-white">Login</h2>
          <form className="space-y-5 w-full max-w-md">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full bg-gradient-to-r from-green-500 to-teal-400 text-white font-semibold py-3 rounded-md hover:from-green-600 hover:to-teal-500 transition"
            >
              Log In
            </motion.button>
          </form>
          <p className="mt-4 text-gray-400 text-sm">
            Don't have an account?{" "}
            <Link href="/signup" className="text-green-400 hover:underline">
              Sign Up
            </Link>
          </p>
        </motion.div>
      </div>
    </main>
  );
}
