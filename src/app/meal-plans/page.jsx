"use client";
import Link from "next/link";

const mealCategories = [
  { name: "Vegetarian", emoji: "🍃", link: "/meal-plans/vegetarian", description: "Nutritious plant-based meals packed with flavor." },
  { name: "Vegan", emoji: "🥦", link: "/meal-plans/vegan", description: "Completely animal-free meals for a healthy lifestyle." },
  { name: "High-Protein", emoji: "💪", link: "/meal-plans/high-protein", description: "Protein-rich meals for muscle growth and fitness." },
  { name: "Keto & Low-Carb", emoji: "🏋️‍♂️", link: "/meal-plans/keto", description: "Low-carb, high-fat meals to fuel your body." },
  { name: "Budget-Friendly", emoji: "🏠", link: "/meal-plans/budget", description: "Affordable meal plans without compromising health." },
  { name: "Quick & Easy", emoji: "⏳", link: "/meal-plans/quick-easy", description: "Simple meals that take minimal time to prepare." },
];

export default function MealPlans() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-6 mt-2">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-green-400 mb-6">Meal Plans</h1>
        <p className="text-lg text-gray-300 mb-10">
          Explore personalized meal plans tailored to your lifestyle and diet.
        </p>
      </div>

      {/* Meal Plan Categories in Card Format */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6 mb-12">
        {mealCategories.map((category) => (
          <div
            key={category.name}
            className="flex items-center justify-between p-6 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition"
          >
            <div className="flex items-center space-x-4">
              <span className="text-4xl">{category.emoji}</span>
              <div>
                <h2 className="text-xl font-semibold">{category.name}</h2>
                <p className="text-gray-400">{category.description}</p>
              </div>
            </div>

            <Link href={category.link}>
              <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition shadow-md">
                Explore
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* 🚀 Plan Your Own Meals Section */}
      <div className="max-w-4xl mx-auto flex justify-between items-center bg-gray-800 text-white p-10 rounded-lg shadow-lg">
        <div className="w-2/3">
          <h2 className="text-4xl font-bold text-green-400">✨ Plan Your Own Meals</h2>
          <p className="mt-4 text-gray-300">
            Take control of your nutrition with custom meal plans designed just for you. Whether you're looking to 
            <span className="text-green-400 font-semibold"> lose weight</span>, 
            <span className="text-green-400 font-semibold"> build muscle</span>, 
            or simply maintain a <span className="text-green-400 font-semibold">healthy lifestyle</span>, 
            our flexible meal planner lets you create, save, and edit your plans effortlessly.
          </p>
        </div>

        <div className="w-1/3 flex justify-end">
          <Link href="/meal-plans/user-plans">
            <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition shadow-md">
              ➕ Create Your Own Plan
            </button>
          </Link>
        </div>
      </div>

      {/* 🤖 Auto-Generated Meal Plans */}
      <div className="max-w-4xl mx-auto mt-10 bg-gray-800 text-white p-10 rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-green-400">🤖 Auto-Generated Meal Plans</h2>
          <p className="mt-2 text-gray-300">
            Get personalized meal plans based on your diet, budget, and goals! Answer a few quick questions, 
            and we'll create a meal plan tailored just for you.
          </p>
        </div>

        <div className="flex justify-center">
          <Link href="/meal-plans/generator">
            <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition shadow-md">
              🛠️ Generate My Meal Plan
            </button>
          </Link>
        </div>
      </div>

      {/* 🍽️ Ingredient-Based Suggestions */}
      <div className="max-w-4xl mx-auto mt-10 bg-gray-800 text-white p-10 rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-green-400">🍽️ Ingredient-Based Suggestions</h2>
          <p className="mt-2 text-gray-300">
            Enter the ingredients you have, and we'll suggest meals you can make!  
            If something is missing, you can add it to your shopping list.
          </p>
        </div>

        <div className="flex justify-center">
          <Link href="/meal-plans/ingredient-suggestions">
            <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition shadow-md">
              📝 Try Ingredient-Based Suggestions
            </button>
          </Link>
        </div>
      </div>

      {/* Step 5: 🍎 Nutritional Information */}
      <div className="max-w-4xl mx-auto flex justify-between mt-10 items-center bg-gray-800 text-white p-8 rounded-lg shadow-lg mb-8">
        <div className="w-2/3">
          <h2 className="text-4xl font-bold text-green-400">🍎 Nutritional Information</h2>
          <p className="mt-4 text-gray-300">
            Get detailed nutritional insights for every meal in your plan, including:
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-400">
            <li>✅ Calories</li>
            <li>✅ Proteins, Carbs, Fats</li>
            <li>✅ Serving Size</li>
            <li>✅ Diet Suitability (e.g., Vegan, Keto, etc.)</li>
          </ul>
        </div>

        <div className="w-1/3 flex justify-end mt-10">
          <Link href="/meal-plans/nutrition-info">
            <button className="px-6 py-3 bg-green-500 mt-10 text-white rounded-lg hover:bg-green-600 transition shadow-md">
              📊 View Nutrition Info
            </button>
          </Link>
        </div>
      </div>

      {/* Step 6: 🛒 Shopping List */}
      <div className="max-w-4xl mx-auto mt-10 bg-gray-800 text-white p-10 rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-green-400">🛒 Shopping List</h2>
          <p className="mt-2 text-gray-300">
            Easily generate a shopping list based on your selected meal plans.  
            Stay organized and never forget an ingredient!
          </p>
        </div>

        <div className="flex justify-center">
          <Link href="/meal-plans/shopping-list">
            <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition shadow-md">
              🛍️ Create My Shopping List
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
