"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-green-50 text-gray-900 py-16 px-6 mt-3">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-green-600">About SustainaBite 🌿</h1>
        <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
          Eat well, live sustainably. Your guide to eco-friendly meals.
        </p>
      </div>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-12 items-center">

        {/* Image Section */}
        <div className="relative">
          <img
            src="/images/about-us.png"
            alt="SustainaBite Mission"
            className="rounded-lg shadow-lg"
          />
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10 rounded-lg"
          ></motion.div>
        </div>

        {/* Text Content */}
        <div className="text-gray-700 space-y-6">
          <h2 className="text-2xl font-semibold text-green-700">Our Mission</h2>
          <p>
            At <span className="font-semibold text-green-600">SustainaBite</span>, we inspire sustainable eating habits by providing delicious, eco-friendly recipes that minimize food waste, reduce carbon footprints, and support ethical sourcing.
          </p>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-12">

        {/* Section 1 */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-green-700">What We Do</h3>
          <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
            <li>🍽️ Eco-Friendly Recipes with locally sourced ingredients</li>
            <li>🌍 Sustainability Tips to reduce waste and carbon footprint</li>
            <li>🛒 Smart Consumption advice for conscious grocery shopping</li>
            <li>📖 Educational Content on sustainable living & food habits</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-green-700">Why It Matters</h3>
          <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
            <li>✅ Reduces carbon footprint with plant-based meals</li>
            <li>✅ Minimizes food waste and encourages mindful cooking</li>
            <li>✅ Supports ethical farming and organic sourcing</li>
            <li>✅ Promotes healthier, nutrient-rich diets</li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold text-green-700">Join Us on Our Journey! 🌱</h2>
        <p className="text-gray-600 mt-2">
          Follow us for inspiring recipes, sustainability challenges, and a community passionate about making a difference.
        </p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="/contact"
          className="inline-block mt-6 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition"
        >
          Get Involved
        </motion.a>
      </div>
    </div>
  );
}
