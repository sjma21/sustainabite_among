"use client";
import Link from "next/link";

const proteinMeals = [
  { meal: "Breakfast", food: "Oatmeal with Whey Protein & Almond Butter 🥣" },
  { meal: "Lunch", food: "Grilled Chicken Breast with Brown Rice 🍗" },
  { meal: "Dinner", food: "Beef Stir-Fry with Broccoli 🥩" },
  { meal: "Snack", food: "Cottage Cheese with Berries 🧀" },
];

export default function HighProteinMealPlan() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white py-16 px-6">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold text-green-400 flex justify-center items-center gap-2 mb-4">
          💪 High-Protein Meal Plan
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          A diet focused on muscle-building with high-protein meals.
        </p>

        <div className="space-y-6">
          {proteinMeals.map((item) => (
            <div key={item.meal} className="p-5 bg-gray-800 rounded-lg flex justify-between items-center hover:bg-green-300 hover:text-gray-900 transition">
              <h3 className="text-xl font-semibold">{item.meal}</h3>
              <p className="text-lg">{item.food}</p>
            </div>
          ))}
        </div>

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
