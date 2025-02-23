"use client";
import Link from "next/link";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";
import { motion } from "framer-motion";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Circle } from "rc-progress";

const ketoLowCarbMeals = [
  { 
    meal: "Breakfast", 
    food: "Avocado & Egg Scramble 🥑🍳", 
    description: "Scrambled eggs cooked in butter, served with avocado and cheese.",
    nutrition: { calories: 450, protein: 20, carbs: 6, fat: 38 },
    benefits: ["Keeps you full longer", "Great source of healthy fats", "Supports brain function"],
    advice: "Add some spinach for extra fiber and vitamins."
  },
  { 
    meal: "Lunch", 
    food: "Grilled Salmon with Asparagus 🍣", 
    description: "Omega-3-rich grilled salmon with buttered asparagus.",
    nutrition: { calories: 600, protein: 45, carbs: 8, fat: 40 },
    benefits: ["Anti-inflammatory benefits", "Boosts heart health", "High in essential omega-3s"],
    advice: "Use grass-fed butter for extra flavor and nutrition."
  },
  { 
    meal: "Dinner", 
    food: "Keto Chicken Alfredo 🍗🧀", 
    description: "Creamy Alfredo sauce with grilled chicken and zoodles (zucchini noodles).",
    nutrition: { calories: 500, protein: 40, carbs: 7, fat: 35 },
    benefits: ["Low in carbs", "High in protein", "Rich in healthy fats"],
    advice: "Replace heavy cream with coconut milk for a dairy-free version."
  }
];

const faqData = [
  { question: "Is keto good for weight loss?", answer: "Yes! The keto diet helps burn fat for energy, leading to weight loss." },
  { question: "Can I eat fruits on keto?", answer: "Only low-carb fruits like berries in moderation." },
  { question: "Do I need to count calories on keto?", answer: "Not necessarily, but keeping track of carbs is crucial." }
];

const colors = ["#FF5733", "#33FF57", "#3399FF", "#FFD700"];

export default function KetoLowCarbMealPlan() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white py-16 px-6 mt-2">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold text-green-400 flex justify-center items-center gap-2 mb-4">
          🥑 Keto & Low-Carb Meal Plan
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          A low-carb, high-fat meal plan designed for ketosis and sustained energy. 🍳🥓
        </p>

        <div className="space-y-6">
          {ketoLowCarbMeals.map((item, index) => (
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
                <h4 className="text-green-400 font-semibold">Nutrition Breakdown</h4>
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
                <h4 className="text-green-400 font-semibold">Health Benefits</h4>
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

              {/* Dietary Advice */}
              <p className="text-gray-400 text-sm mt-4">
                <span className="text-green-300 font-semibold">⚠️ Advice:</span> {item.advice}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Frequently Asked Questions */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">🤔 Frequently Asked Questions</h2>
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
            <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
              ← Back to Meal Plans
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
