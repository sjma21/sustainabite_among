"use client";
import Link from "next/link";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";
import { motion } from "framer-motion";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Circle } from "rc-progress";

const highProteinMeals = [
  { 
    meal: "Breakfast", 
    food: "Protein Pancakes with Greek Yogurt 🥞", 
    description: "Fluffy protein-packed pancakes served with Greek yogurt and fresh berries.",
    nutrition: { calories: 400, protein: 35, carbs: 45, fat: 10 },
    benefits: ["Boosts muscle growth", "Rich in essential amino acids", "Keeps you full longer"],
    advice: "Ideal for muscle gain. Add honey for extra energy."
  },
  { 
    meal: "Lunch", 
    food: "Grilled Chicken Salad with Quinoa 🥗", 
    description: "A nutrient-rich salad with grilled chicken, quinoa, and a light lemon dressing.",
    nutrition: { calories: 550, protein: 50, carbs: 40, fat: 12 },
    benefits: ["High-quality lean protein", "Supports weight management", "Packed with vitamins and minerals"],
    advice: "A great post-workout meal for muscle recovery."
  },
  { 
    meal: "Dinner", 
    food: "Salmon with Roasted Vegetables 🍣", 
    description: "Omega-3-rich salmon served with roasted veggies and brown rice.",
    nutrition: { calories: 600, protein: 45, carbs: 50, fat: 20 },
    benefits: ["Great for brain health", "Reduces inflammation", "Supports heart health"],
    advice: "Best eaten at least 2 hours before sleep for proper digestion."
  }
];

const faqData = [
  { question: "Why is protein important?", answer: "Protein is essential for muscle repair, immune function, and energy production." },
  { question: "How much protein do I need daily?", answer: "It depends on activity level, but generally 0.8-1.2g per kg of body weight is recommended." },
  { question: "Can I get enough protein without supplements?", answer: "Yes! Lean meats, dairy, eggs, legumes, and nuts provide plenty of protein." }
];

const colors = ["#FF5733", "#33FF57", "#3399FF", "#FFD700"];

export default function HighProteinMealPlan() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white py-16 px-6 mt-2">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold text-blue-400 flex justify-center items-center gap-2 mb-4">
          💪 High-Protein Meal Plan
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          A protein-rich meal plan designed to fuel muscle growth and optimize health. 🥩🍳
        </p>

        <div className="space-y-6">
          {highProteinMeals.map((item, index) => (
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

              {/* Dietary Advice */}
              <p className="text-gray-400 text-sm mt-4">
                <span className="text-blue-300 font-semibold">⚠️ Advice:</span> {item.advice}
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
