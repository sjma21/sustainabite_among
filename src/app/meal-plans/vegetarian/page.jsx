"use client";
import Link from "next/link";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";
import { motion } from "framer-motion";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Circle } from "rc-progress";

const vegetarianMeals = [
  { 
    meal: "Breakfast", 
    food: "Avocado Toast with Scrambled Tofu 🥑🍞", 
    description: "A protein-rich breakfast with crispy toast, creamy avocado, and seasoned scrambled tofu.",
    nutrition: { calories: 350, protein: 15, carbs: 40, fat: 18 },
    benefits: ["Rich in healthy fats", "Great for digestion", "Boosts metabolism"],
    advice: "Good for weight management. Ideal portion: 2 slices for active individuals, 1 slice for low-calorie diets."
  },
  { 
    meal: "Lunch", 
    food: "Chickpea Salad Wrap 🌯", 
    description: "A whole-wheat wrap with chickpeas, fresh veggies, and tahini dressing.",
    nutrition: { calories: 450, protein: 20, carbs: 55, fat: 10 },
    benefits: ["High in plant protein", "Improves heart health", "Good for muscle recovery"],
    advice: "Rich in fiber. Keeps you full for longer."
  },
  { 
    meal: "Dinner", 
    food: "Vegetable Stir-Fry with Quinoa 🥦🍚", 
    description: "A delicious stir-fry with colorful veggies and quinoa in a garlic-ginger sauce.",
    nutrition: { calories: 400, protein: 18, carbs: 50, fat: 9 },
    benefits: ["Full of antioxidants", "Balances blood sugar", "Rich in essential minerals"],
    advice: "Perfect for post-workout recovery. Light yet fulfilling."
  }
];

const faqData = [
  { question: "Is a vegetarian diet nutritious?", answer: "Yes! A balanced vegetarian diet provides all essential nutrients like protein, fiber, and vitamins." },
  { question: "How can I get enough protein?", answer: "Plant-based sources like tofu, lentils, chickpeas, and quinoa are excellent protein sources." },
  { question: "Are vegetarian meals good for weight loss?", answer: "Absolutely! They are rich in fiber, keeping you full for longer and reducing calorie intake." }
];

const colors = ["#FF5733", "#33FF57", "#3399FF", "#FFD700"];

export default function VegetarianMealPlan() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white py-16 px-6 mt-2">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold text-green-400 flex justify-center items-center gap-2 mb-4">
          🍃 Vegetarian Meal Plan
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          A well-balanced vegetarian meal plan designed for nutrition, taste, and health benefits. 🌱
        </p>

        <div className="space-y-6">
          {vegetarianMeals.map((item, index) => (
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
                      percent={(value / 500) * 100} 
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
