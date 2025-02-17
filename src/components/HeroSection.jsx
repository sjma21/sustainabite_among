"use client"; // Needed for Framer Motion in Next.js

import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between h-screen px-6 max-w-7xl mx-auto">
      {/* Left Side - Typing Effect & Intro */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl text-center md:text-left"
      >
        <h1 className="text-6xl font-extrabold text-white leading-tight">
          <Typewriter
            options={{
              strings: [
                "Sustainabite",
                "AI-Powered Recipes",
                "Zero Food Waste",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Discover creative recipes based on your leftover ingredients and take
          a step towards sustainable living.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600"
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* Right Side - Full Width & Height */}
      <div className="relative h-screen w-full flex flex-col justify-center items-center p-4">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl p-8 max-w-lg text-center md:text-left"
        >
          <h2 className="text-3xl font-bold text-white">
            Why Choose Sustainabite?
          </h2>
          <ul className="mt-4 space-y-4 text-gray-300">
            <li className="flex items-center gap-3">
              ✅ AI-powered recipe suggestions
            </li>
            <li className="flex items-center gap-3">
              ✅ Reduce food waste and save money
            </li>
            <li className="flex items-center gap-3">
              ✅ Easy-to-follow, delicious recipes
            </li>
          </ul>
          <p className="mt-4 text-gray-400 text-sm">
            Join thousands of users making a difference in food sustainability!
          </p>
        </motion.div>

        {/* Image at Bottom Right */}
        <motion.div
          className="absolute bottom-4 right-1 w-32 h-32 cursor-pointer coin-container"
          whileHover={{ rotateY: 180 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center rounded-full bg-gray-800 shadow-2xl coin">
            <img
              src="/images/sustainabitelogo.jpg"
              alt="SustainaBite Logo"
              width={128}
              height={128}
              className="rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
