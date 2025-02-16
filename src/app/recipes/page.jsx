"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Intro Section Component
const IntroSection = () => (
  <section className="min-h-screen bg-gradient-to-br from-green-900 to-gray-900 text-gray-100 flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4ade802e_1px,transparent_1px),linear-gradient(to_bottom,#4ade802e_1px,transparent_1px)] bg-[size:14px_24px] opacity-20"></div>
    <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 100, damping: 10 }} className="text-6xl mb-4">
      🥦🍳🥗
    </motion.div>
    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl font-extrabold text-white">
      Welcome to <span className="text-green-400">Sustainabite</span> Recipes!
    </motion.h1>
    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} className="mt-4 text-lg text-gray-300 max-w-2xl">
      Discover delicious recipes while reducing food waste. Upload ingredients, explore AI-powered meal ideas, and cook sustainably! 🍽️♻️
    </motion.p>
  </section>
);

// Recipe Data
const recipes = [
  { id: 1, title: "Avocado Toast 🥑", image: "/images/recipe1.jpg", steps: ["🛒 Gather ingredients", "🔪 Slice avocado", "🍞 Toast bread", "🥄 Scoop avocado", "🥣 Mash with spices", "🫒 Drizzle oil", "🍅 Add tomato slices", "🥚 Optional egg", "🌿 Garnish", "😋 Serve", "📸 Snap a pic!", "🍽️ Enjoy!"] },
  { id: 2, title: "Pasta Primavera 🍝", image: "/images/recipe2.jpg", steps: ["🛒 Gather ingredients", "💧 Boil water", "🍝 Add pasta", "🥦 Chop veggies", "🍳 Sauté garlic", "🍅 Add tomatoes", "🥕 Toss in veggies", "🧂 Season well", "🥄 Mix pasta", "🧀 Add cheese", "🍽️ Serve hot", "📸 Share with friends!"] },
  { id: 3, title: "Smoothie Bowl 🥣", image: "/images/recipe3.jpg", steps: ["🛒 Gather fruits", "🍌 Slice banana", "🍓 Add berries", "🥛 Pour almond milk", "⚡ Blend till smooth", "🥄 Pour in bowl", "🍯 Drizzle honey", "🌾 Add granola", "🥥 Sprinkle coconut", "🍫 Add chocolate chips", "📸 Snap your bowl", "😋 Enjoy chilled!"] },
  { id: 4, title: "Veggie Salad 🥗", image: "/images/recipe5.jpg", steps: ["🛒 Gather veggies", "🔪 Chop lettuce", "🍅 Dice tomatoes", "🥒 Slice cucumber", "🧄 Add minced garlic", "🥄 Drizzle dressing", "🧂 Season lightly", "🌾 Add croutons", "🥑 Add avocado", "🌿 Garnish with herbs", "📸 Take a photo", "🍽️ Serve fresh!"] },
  { id: 5, title: "Chocolate Cake 🍫", image: "/images/recipe7.jpg", steps: ["🛒 Gather ingredients", "🥣 Mix flour & cocoa", "🥚 Add eggs", "🧈 Melt butter", "🧂 Add sugar", "🥄 Stir till smooth", "🧁 Pour in tin", "🔥 Bake at 350°F", "🕒 Cool for 30 min", "🍫 Frost with chocolate", "📸 Snap the cake", "😋 Serve slices!"] },
  { id: 6, title: "Mango Lassi 🥭", image: "/images/recipe10.jpg", steps: ["🛒 Grab ingredients", "🥭 Peel mangoes", "⚡ Blend mango chunks", "🥛 Add yogurt", "🍯 Pour honey", "🥄 Add cardamom", "🧊 Add ice cubes", "⚡ Blend till smooth", "🍹 Pour in glass", "🌿 Garnish with mint", "📸 Click a picture", "🍽️ Sip & enjoy!"] },
  { 
    id: 7, 
    title: "Caprese Salad 🍅", 
    image: "/images/recipe12.jpg", 
    steps: [
      "🛒 Gather ingredients", 
      "🍅 Slice fresh tomatoes", 
      "🧀 Slice mozzarella cheese", 
      "🌿 Pick fresh basil leaves", 
      "🍶 Drizzle olive oil", 
      "🧂 Add salt and pepper", 
      "🍋 Optional balsamic glaze", 
      "🍽️ Layer tomato, mozzarella, and basil", 
      "🌿 Garnish with extra basil", 
      "📸 Take a photo", 
      "😋 Serve fresh and enjoy!"
    ] 
  },
  { 
    id: 8, 
    title: "Banana Pancakes 🍌🥞", 
    image: "/images/recipe8.jpg", 
    steps: [
      "🛒 Gather ingredients", 
      "🍌 Mash bananas", 
      "🥚 Add eggs and mix", 
      "🥣 Add flour, milk, and sugar", 
      "🧈 Melt butter in pan", 
      "🥄 Pour batter into pan", 
      "🔥 Cook until bubbles form", 
      "🔄 Flip and cook other side", 
      "🍯 Drizzle syrup", 
      "🍓 Top with fruits", 
      "📸 Snap a pic", 
      "🍽️ Serve warm and enjoy!"
    ] 
  }

];

export default function RecipePage() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [reviews, setReviews] = useState([{ name: "Alex", rating: 5, comment: "Amazing recipes!" }]);
  const [newReview, setNewReview] = useState({ name: "", rating: 0, comment: "" });

  const handleAddReview = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.comment && newReview.rating) {
      setReviews([newReview, ...reviews]);
      setNewReview({ name: "", rating: 0, comment: "" });
    }
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setUploadedImage(reader.result);
      reader.readAsDataURL(file);
    }
  };
  const StarRating = ({ rating, setRating }) => (
    <div className="flex space-x-1 text-yellow-400">
      {[1, 2, 3, 4, 5].map((star) => (
        <motion.span
          key={star}
          className={`cursor-pointer text-2xl ${star <= rating ? "text-yellow-400" : "text-gray-400"}`}
          onClick={() => setRating(star)}
          whileHover={{ scale: 1.2 }}
        >
          ★
        </motion.span>
      ))}
    </div>
  );
  const removeImage = () => setUploadedImage(null);
  const handleAddTag = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
      e.preventDefault();
    }
  };
  const handleRemoveTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };


  return (
    <main>
      <IntroSection />

      {/* Recipe Cards Section */}
      <div className="py-16 px-6 bg-gray-900">
        <h2 className="text-4xl font-bold text-green-400 text-center mb-8">Explore Our Recipes 🍳</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {recipes.map((recipe) => (
            <motion.div key={recipe.id} whileHover={{ scale: 1.05 }} className="bg-white/10 backdrop-blur-md border border-green-400/20 shadow-lg rounded-2xl p-4 cursor-pointer">
              <Image src={recipe.image} alt={recipe.title} width={200} height={200} className="rounded-md object-cover w-full h-40" />
              <h3 className="text-xl font-semibold text-green-400 mb-2">{recipe.title}</h3>
              <button onClick={() => setSelectedRecipe(recipe)} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">View Recipe</button>
            </motion.div>
          ))}
        </div>

        {/* Recipe Popup */}
        {selectedRecipe && (
          <motion.div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <motion.div className="bg-gray-800 p-6 rounded-xl max-w-5xl w-full flex gap-6" initial={{ scale: 0.9 }} animate={{ scale: 1 }}>
              <motion.div className="w-1/3 bg-white/10 backdrop-blur-md p-4 rounded-xl">
                <Image src={selectedRecipe.image} alt={selectedRecipe.title} width={300} height={300} className="rounded-lg object-cover" />
              </motion.div>
              <motion.ol className="w-2/3 list-decimal list-inside text-gray-300 space-y-2">
                {selectedRecipe.steps.map((step, index) => (
                  <motion.li key={index} initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.1 }}>{step}</motion.li>
                ))}
              </motion.ol>
              <button onClick={() => setSelectedRecipe(null)} className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">Close</button>
            </motion.div>
          </motion.div>
        )}

        {/* AI-Generated Meal Plans Section */}
        <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="max-w-5xl mx-auto p-6 bg-gradient-to-br from-green-900/70 to-gray-900/70 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg mt-16 relative overflow-hidden"
    >
      {/* Blended Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-800 to-gray-800 opacity-40 blur-[120px] pointer-events-none"></div>

      <h2 className="text-4xl font-bold text-green-400 mb-6 text-center relative z-10">🍽️ AI-Generated Meal Plans</h2>

      <div className="flex flex-wrap gap-2 mb-4 relative z-10">
        {tags.map((tag, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, backgroundColor: "#4ade80" }}
            className="bg-gray-700 text-white px-3 py-1 rounded-full flex items-center gap-2"
          >
            {tag}
            <button onClick={() => handleRemoveTag(index)}>❌</button>
          </motion.div>
        ))}
      </div>

      <input
        type="text"
        placeholder="Type ingredients and press Enter 🍳"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleAddTag}
        className="w-full mb-4 px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 relative z-10"
      />

      <input type="file" accept="image/*" onChange={handleImageUpload} className="mb-4 relative z-10" />

      {uploadedImage && (
        <div className="relative mb-4 z-10">
          <Image src={uploadedImage} alt="Uploaded" width={200} height={200} className="rounded-lg" />
          <button
            onClick={removeImage}
            className="absolute top-2 right-2 text-white px-2 py-1 rounded-full transition"
          >
            ❌
          </button>
        </div>
      )}

      <motion.button
        whileHover={{ scale: 1.05 }}
        className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition mb-4 relative z-10"
      >
        🍽️ Generate Meal Plans
      </motion.button>

      <div className="flex gap-4 relative z-10">
        <button className="w-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">💾 Save to Favorites</button>
        <button className="w-1/2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition">🔗 Share</button>
        <button className="w-1/2 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">🖨️ Print</button>
      </div>
    </motion.div>
        {/* FAQ Section */}
        <section className="max-w-5xl mx-auto p-6 mt-16 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg">
          <h2 className="text-4xl font-bold text-green-400 mb-6 text-center">❓ FAQs</h2>
          <div className="space-y-4">
            <details className="bg-gray-800 p-4 rounded-lg">
              <summary className="text-green-400 cursor-pointer">How does Sustainabite reduce food waste?</summary>
              <p className="text-gray-300 mt-2">We provide recipes based on available ingredients, helping you utilize everything you have.Sustainabite reduces food waste by leveraging AI-powered solutions that promote mindful cooking and efficient ingredient utilization. The platform allows users to input available ingredients or upload images of items they have, generating personalized recipes that ensure nothing goes unused. Sustainabite also helps track the expiration dates of ingredients, sending timely reminders and suggesting recipes to use items before they spoil. </p>
            </details>
            <details className="bg-gray-800 p-4 rounded-lg">
              <summary className="text-green-400 cursor-pointer">Can I contribute my own recipes?</summary>
              <p className="text-gray-300 mt-2">Yes! Use the contribution section to upload and share your favorite recipes with the community.Yes, you can contribute your own recipes on Sustainabite! The platform allows users to upload and share their favorite recipes with the community. Simply provide ingredient details, step-by-step instructions, and images of your dish. Your contributions help others discover new meals while reducing food waste. Join the community and inspire sustainable cooking!</p>
            </details>
            <details className="bg-gray-800 p-4 rounded-lg">
              <summary className="text-green-400 cursor-pointer">Is the AI meal plan generator customizable?</summary>
              <p className="text-gray-300 mt-2">Absolutely! You can customize based on dietary needs, time, difficulty, and more.Yes, the AI meal plan generator on Sustainabite is highly customizable. Users can personalize meal plans based on dietary preferences like vegan, keto, or gluten-free. You can also filter by cuisine, cooking time, and difficulty level. The AI adapts to your ingredient availability and preferences, ensuring tailored meal suggestions. This flexibility helps you plan meals efficiently while minimizing food waste.</p>
            </details>
          </div>
        </section>
        {/* Extended Sustainability Tips */}
        <section className="max-w-5xl mx-auto p-8 mt-16 bg-gradient-to-br from-green-900 to-gray-900 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl relative overflow-hidden">
  {/* Floating Leaf Emojis */}
  <div className="absolute inset-0 pointer-events-none z-0">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-green-400 text-2xl"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: "100%", opacity: 1 }}
        transition={{ duration: 8, repeat: Infinity, delay: i * 0.5 }}
        style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 20}%` }}
      >
      </motion.div>
    ))}
  </div>
  <h2 className="text-5xl font-extrabold text-green-400 mb-6 text-center relative z-10 animate-pulse">♻️ Sustainability Tips</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
    <motion.div
      whileHover={{ scale: 1.05, borderColor: "#4ade80" }}
      transition={{ duration: 0.3 }}
      className="bg-gray-800/60 backdrop-blur-lg p-6 rounded-2xl border border-transparent shadow-lg transition-all"
    >
      <h4 className="text-green-400 font-semibold mb-2">Proper Food Storage</h4>
      <p className="text-gray-300">Store fruits and veggies separately, use airtight containers for leftovers.</p>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.05, borderColor: "#4ade80" }}
      transition={{ duration: 0.3 }}
      className="bg-gray-800/60 backdrop-blur-lg p-6 rounded-2xl border border-transparent shadow-lg transition-all"
    >
      <h4 className="text-green-400 font-semibold mb-2">Creative Leftover Recipes</h4>
      <p className="text-gray-300">Turn last night’s dinner into today’s lunch with creative leftover ideas.</p>
    </motion.div>
  </div>
</section>
        {/* Call-to-Action Section */}
        <section className="max-w-5xl mx-auto p-8 mt-16 bg-gradient-to-br from-green-900 to-gray-900 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl text-center relative overflow-hidden">
  {/* Floating Leaf Emojis */}
  <div className="absolute inset-0 pointer-events-none z-0">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-green-400 text-2xl"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: "100%", opacity: 1 }}
        transition={{ duration: 8, repeat: Infinity, delay: i * 0.5 }}
        style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 20}%` }}
      >
      </motion.div>
    ))}
  </div>
  {/* Content */}
  <h2 className="text-5xl font-extrabold text-green-400 mb-6 relative z-10 animate-pulse">📩 Join the Sustainabite Community</h2>
  <p className="text-gray-300 mb-6 text-lg relative z-10">
    Subscribe for exclusive recipes, sustainability tips, and more! 🥗🍳
  </p>
  {/* Subscription Form */}
  <form className="space-y-4 relative z-10 max-w-md mx-auto">
    <motion.input
      whileFocus={{ scale: 1.02 }}
      type="email"
      placeholder="Your email 📧"
      className="w-full p-3 bg-gray-700 text-white rounded-lg shadow-md focus:ring-2 focus:ring-green-500 transition"
      required
    />
    <motion.button
      whileHover={{ scale: 1.05, backgroundColor: "#22c55e" }}
      whileTap={{ scale: 0.95 }}
      className="w-full bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition font-semibold shadow-md"
    >
      Subscribe 🚀
    </motion.button>
  </form>
</section>

      </div>
    </main>
  );
}
