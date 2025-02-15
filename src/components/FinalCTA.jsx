import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function FinalCTA() {
  // Countdown Timer (For limited-time meal plans)
  const [timeLeft, setTimeLeft] = useState(600);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="relative py-16 px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white text-center overflow-hidden">
      
      {/* Subtle Background Effects (Food Theme) */}
      <div className="absolute inset-0 opacity-10 bg-[url('/food-pattern.png')] bg-cover bg-center"></div>

      {/* CTA Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl font-extrabold mb-4 text-orange-400"
      >
        Discover Your Next Favorite Meal! 🍲
      </motion.h2>

      {/* CTA Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-gray-300 max-w-xl mx-auto mb-6"
      >
        Let us suggest the perfect meal for you. Explore delicious recipes, meal plans, and chef-recommended dishes!
      </motion.p>

      {/* Countdown Timer for Special Offer */}
      {timeLeft > 0 && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-gray-800 inline-block px-6 py-3 rounded-lg mb-6 text-lg font-bold text-orange-300"
        >
          Limited-time meal plan offer ends in: {formatTime(timeLeft)}
        </motion.div>
      )}

      {/* CTA Buttons */}
      <div className="flex justify-center space-x-4">
        <motion.a
          href="/explore-meals"
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 12px rgba(255,127,80,0.8)" }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="px-8 py-4 rounded-full text-lg font-bold bg-orange-500 hover:bg-orange-600 transition-all duration-300"
        >
          Explore Meals 🍛
        </motion.a>

        <motion.a
          href="/subscribe"
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 12px rgba(255,255,255,0.8)" }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="px-8 py-4 rounded-full text-lg font-bold bg-gray-700 hover:bg-gray-600 transition-all duration-300"
        >
          Subscribe Now 🥗
        </motion.a>
      </div>
    </div>
  );
}
