// "use client"; // Required for using Framer Motion in Next.js App Router

// import Head from "next/head";
// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Sustainabite - Zero-Waste Recipe Generator</title>
//         <meta name="description" content="Reduce food waste with AI-driven recipes & meal planning." />
//       </Head>

//       <main className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-gray-900">
//         {/* Background Grid */}
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>

//         {/* Hero Section with Floating Animation */}
//         <section className="relative flex h-screen items-center justify-center text-center px-6">
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="z-10 bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-xl p-10 max-w-2xl"
//           >
//             <motion.h1
//               className="text-5xl font-extrabold text-white leading-tight"
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 0.8, ease: "easeInOut" }}
//             >
//               Reduce Food Waste with <span className="text-green-400">AI-Powered Recipes</span>
//             </motion.h1>
//             <p className="mt-4 text-lg text-gray-200">
//               Enter your leftover ingredients and get personalized recipes.
//             </p>
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 transition-all"
//             >
//               Get Started
//             </motion.button>
//           </motion.div>
//         </section>

//         {/* Animated Sections */}
//         <AnimatedSection title="Our Mission" description="Sustainabite is committed to reducing food waste by providing AI-driven recipe suggestions, meal planning, and food donation solutions. Our goal is to promote sustainability and help communities reduce their environmental impact." />

//         <motion.section className="py-20 px-6 text-center z-10">
//           <motion.h2
//             className="text-4xl font-extrabold text-white"
//             initial={{ opacity: 0, y: -30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             How <span className="text-green-400">It Works</span>
//           </motion.h2>
//           <div className="mt-10 grid md:grid-cols-3 gap-8">
//             <FeatureCard title="1. Enter Ingredients" description="List leftover ingredients you have at home." />
//             <FeatureCard title="2. Get Recipes" description="AI suggests delicious recipes based on your ingredients." />
//             <FeatureCard title="3. Plan & Donate" description="Create meal plans or donate surplus food nearby." />
//           </div>
//         </motion.section>

//         <Testimonials />

//         <motion.section className="py-20 px-6 text-center z-10">
//           <motion.h2 className="text-4xl font-extrabold text-white">
//             Sustainability <span className="text-green-400">Tips</span>
//           </motion.h2>
//           <ul className="mt-6 text-gray-300">
//             <li>✅ Store fruits & veggies properly to extend freshness.</li>
//             <li>✅ Use leftover peels & scraps for composting.</li>
//             <li>✅ Plan meals in advance to avoid overbuying.</li>
//           </ul>
//         </motion.section>

//         {/* Call to Action */}
//         <motion.section className="py-10 text-center">
//           <motion.h2 className="text-3xl font-bold text-white">Join the Movement!</motion.h2>
//           <p className="text-gray-300 mt-2">Subscribe for exclusive recipes & sustainability tips.</p>
//           <motion.input
//             type="email"
//             placeholder="Enter your email"
//             className="mt-4 px-4 py-2 w-1/3 rounded-lg text-black"
//           />
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             className="ml-2 px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600"
//           >
//             Subscribe
//           </motion.button>
//         </motion.section>
//       </main>
//     </>
//   );
// }

// // Reusable Animated Section
// function AnimatedSection({ title, description }) {
//   return (
//     <motion.section
//       className="py-20 px-6 text-center z-10"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: true }}
//     >
//       <motion.h2 className="text-4xl font-extrabold text-white">{title}</motion.h2>
//       <p className="mt-4 text-lg text-gray-300">{description}</p>
//     </motion.section>
//   );
// }

// // Feature Card Component with Hover Effect
// function FeatureCard({ title, description }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//       whileHover={{ scale: 1.05 }}
//       className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg p-6 rounded-xl"
//     >
//       <h3 className="text-xl font-semibold text-white">{title}</h3>
//       <p className="mt-2 text-gray-300">{description}</p>
//     </motion.div>
//   );
// }

// // Testimonials Component
// function Testimonials() {
//   return (
//     <motion.section className="py-20 px-6 text-center z-10">
//       <motion.h2 className="text-4xl font-extrabold text-white">What People Say</motion.h2>
//       <div className="mt-10 grid md:grid-cols-2 gap-8">
//         <Testimonial name="Rahul S." text="Sustainabite has completely changed the way I use leftovers. Amazing recipes!" />
//         <Testimonial name="Ayesha K." text="I love the food donation integration. It's so easy to help my community!" />
//       </div>
//     </motion.section>
//   );
// }

// // Testimonial Card Component
// function Testimonial({ name, text }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -50 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//       className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg p-6 rounded-xl"
//     >
//       <p className="text-gray-300">"{text}"</p>
//       <h3 className="mt-4 text-lg font-semibold text-green-400">{name}</h3>
//     </motion.div>
//   );
// }



// new updated  code :

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
      <Head>
        <title>Sustainabite - Zero-Waste Recipe Generator</title>
        <meta name="description" content="Reduce food waste with AI-driven recipes & meal planning." />
      </Head>

      <main className="relative min-h-screen bg-gradient-to-br from-green-900 to-gray-900 text-gray-100">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>

        {/* Hero Section */}
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
              strings: ["Sustainabite", "AI-Powered Recipes", "Zero Food Waste"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Discover creative recipes based on your leftover ingredients and take a step towards sustainable living.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600"
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* Right Side - Beautifully Designed Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl p-8 w-full max-w-lg text-center md:text-left"
      >
        <h2 className="text-3xl font-bold text-white">Why Choose Sustainabite?</h2>
        <ul className="mt-4 space-y-4 text-gray-300">
          <li className="flex items-center gap-3">✅ AI-powered recipe suggestions</li>
          <li className="flex items-center gap-3">✅ Reduce food waste and save money</li>
          <li className="flex items-center gap-3">✅ Easy-to-follow, delicious recipes</li>
        </ul>
        <p className="mt-4 text-gray-400 text-sm">
          Join thousands of users making a difference in food sustainability!
        </p>
      </motion.div>

      {/* Coin Flip Logo */}
      <motion.div
        className="absolute bottom-4 right-4 w-32 h-32 cursor-pointer coin-container z-50"
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-center rounded-full bg-gray-800 shadow-2xl coin">
          <Image src="/images/sustainabitelogo.jpg" alt="SustainaBite Logo" width={128} height={128} className="rounded-full" />
        </div>
      </motion.div>
    </section>


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
