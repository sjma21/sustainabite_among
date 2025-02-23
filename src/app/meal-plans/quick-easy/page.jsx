"use client";
import Link from "next/link";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";
import { motion } from "framer-motion";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Circle } from "rc-progress";

const quickEasyMeals = [
  { 
    meal: "Breakfast", 
    food: "Avocado Toast with Eggs 🥑🍞", 
    description: "Crispy whole grain toast topped with mashed avocado and a fried egg.",
    nutrition: { calories: 350, protein: 15, carbs: 30, fat: 18 },
    benefits: ["Quick to prepare (under 10 mins)", "High in healthy fats", "Keeps you full longer"],
    advice: "Add red pepper flakes for an extra kick!"
  },
  { 
    meal: "Lunch", 
    food: "Grilled Chicken Salad 🥗🍗", 
    description: "Fresh salad with grilled chicken, cherry tomatoes, cucumber, and light dressing.",
    nutrition: { calories: 420, protein: 40, carbs: 12, fat: 20 },
    benefits: ["Takes less than 15 mins", "Packed with protein", "Refreshing and light"],
    advice: "Use Greek yogurt instead of mayo for a healthier dressing."
  },
  { 
    meal: "Dinner", 
    food: "One-Pan Garlic Shrimp & Veggies 🍤🥦", 
    description: "Shrimp stir-fried with broccoli, bell peppers, and garlic in olive oil.",
    nutrition: { calories: 480, protein: 35, carbs: 10, fat: 28 },
    benefits: ["Ready in 15 mins", "Loaded with antioxidants", "Low-carb and filling"],
    advice: "Pair with quinoa for extra fiber."
  }
];

const faqData = [
  { question: "How can I make quick meals?", answer: "Use simple ingredients and one-pan cooking techniques." },
  { question: "What's a high-protein quick meal?", answer: "Eggs, grilled chicken, shrimp, or cottage cheese-based meals." },
  { question: "How do I save time cooking?", answer: "Prep ingredients ahead of time and use quick-cooking proteins like shrimp or eggs." }
];

const colors = ["#FF5733", "#33FF57", "#3399FF", "#FFD700"];

export default function QuickEasyMeals() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white py-16 px-6 mt-2">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold text-blue-400 flex justify-center items-center gap-2 mb-4">
          ⚡ Quick & Easy Meal Ideas
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Healthy meals you can make in 15 minutes or less! 🍽️⏳
        </p>

        <div className="space-y-6">
          {quickEasyMeals.map((item, index) => (
            <motion.div 
              key={item.meal} 
              className="p-5 bg-gray-800 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h3 className="text-xl font-semibold">{item.meal}</h3>
              <p className="text-lg font-medium">{item.food}</p>
              <p className="text-gray-300 text-sm mt-2">{item.description}</p>

              {/* Nutritional Chart */}
              <div className="mt-4">
                <h4 className="text-blue-400 font-semibold">Nutrition Breakdown</h4>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart 
                    data={[
                      { name: "Calories", value: item.nutrition.calories },
                      { name: "Protein", value: item.nutrition.protein },
                      { name: "Carbs", value: item.nutrition.carbs },
                      { name: "Fats", value: item.nutrition.fat }
                    ]}
                    margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
                  >
                    <XAxis dataKey="name" stroke="#ddd" />
                    <YAxis stroke="#ddd" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: "#222", color: "#fff", borderRadius: "8px", padding: "5px" }} 
                      cursor={{ fill: "rgba(255, 255, 255, 0.1)" }} 
                    />
                    <Legend wrapperStyle={{ color: "#fff" }} />
                    <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                      {["Calories", "Protein", "Carbs", "Fats"].map((_, i) => (
                        <Cell key={i} fill={colors[i]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Health Benefits Section */}
              <div className="mt-4">
                <h4 className="text-blue-400 font-semibold">Health Benefits</h4>
                <div className="grid grid-cols-2 gap-4">
                  {item.benefits.map((benefit, idx) => (
                    <motion.div 
                      key={idx} 
                      className="p-3 bg-gray-700 rounded-lg text-sm text-white flex items-center gap-2"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      ✅ {benefit}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Nutritional Progress Circles */}
              <div className="mt-6 flex justify-around">
                {Object.entries(item.nutrition).map(([key, value], i) => (
                  <div key={i} className="text-center">
                    <Circle 
                      percent={(value / 600) * 100} 
                      strokeWidth="8" 
                      strokeColor={colors[i]} 
                      trailWidth="4" 
                      className="mb-2"
                    />
                    <p className="text-sm text-gray-300">{key}: {value}</p>
                  </div>
                ))}
              </div>

              {/* Quick Tip */}
              <p className="text-gray-400 text-sm mt-4">
                <span className="text-blue-300 font-semibold">💡 Quick Tip:</span> {item.advice}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Frequently Asked Questions */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">🤔 Frequently Asked Questions</h2>
          <Accordion className="bg-gray-800 text-white rounded-lg">
            {faqData.map((faq, idx) => (
              <AccordionItem key={idx} title={faq.question} className="p-3 bg-gray-700 rounded-lg">
                {faq.answer}
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Back Button */}
        <div className="mt-10">
          <Link href="/meal-plans">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              ← Back to Meal Plans
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
