"use client";

import { motion } from "framer-motion";

const recipes = [
  { id: 1, name: "Avocado Toast", category: "Vegan", image: "/images/avocado-toast.jpg" },
  { id: 2, name: "Pasta Primavera", category: "Vegetarian", image: "/images/pasta.jpg" },
];

export default function RecipesSection() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📖 Saved Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recipes.map((recipe) => (
          <motion.div key={recipe.id} whileHover={{ scale: 1.05 }} className="bg-white p-4 rounded-lg shadow-md">
            <img src={recipe.image} alt={recipe.name} className="w-full h-32 object-cover rounded-md mb-2" />
            <h3 className="text-lg font-bold">{recipe.name}</h3>
            <p className="text-gray-500">{recipe.category}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
