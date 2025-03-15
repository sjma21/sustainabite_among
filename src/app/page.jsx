"use client"; // Needed for Framer Motion in Next.js

import Head from "next/head";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

import Image from "next/image";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import SustainabilityTips from "@/components/SustainabilityTips";
import CommunityContributions from "@/components/CommunityContributions";
import Partners from "@/components/Partners";
import FinalCTA from "@/components/FinalCTA";
import HeroSection from "@/components/HeroSection";

const floatingVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>Sustainabite - Zero-Waste Recipe Generator</title>
        <meta name="description" content="Reduce food waste with AI-driven recipes & meal planning." />
      </Head> */}

      <main className="relative min-h-screen bg-gradient-to-br from-green-900 to-gray-900 text-gray-100">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>

        {/* Hero Section */}
        {/* <section className="flex flex-col md:flex-row items-center justify-between h-screen px-6 max-w-7xl mx-auto">
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
              Discover creative recipes based on your leftover ingredients and
              take a step towards sustainable living.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600"
            >
              Get Started
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl p-8 w-full max-w-lg text-center md:text-left"
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
              Join thousands of users making a difference in food
              sustainability!
            </p>
          </motion.div>

          
          <motion.div
            className="absolute bottom-4 right-4 w-32 h-32 cursor-pointer coin-container z-50"
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center rounded-full bg-gray-800 shadow-2xl coin">
              <Image
                src="/images/sustainabitelogo.jpg"
                alt="SustainaBite Logo"
                width={128}
                height={128}
                className="rounded-full"
              />
            </div>
          </motion.div>
        </section> */}

        <HeroSection></HeroSection>

        <HowItWorks></HowItWorks>

        <Features></Features>

        <Testimonials></Testimonials>
        <SustainabilityTips></SustainabilityTips>
        <CommunityContributions></CommunityContributions>
        <Partners></Partners>
        <FinalCTA></FinalCTA>
      </main>
    </>
  );
}
