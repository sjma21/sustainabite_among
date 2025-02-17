import { useState } from "react";

export default function UserStats() {
  // Sample User Stats
  const [recipesTried, setRecipesTried] = useState(50);
  const [caloriesSaved, setCaloriesSaved] = useState(1200);
  const [mealPlansFollowed, setMealPlansFollowed] = useState(10);
  const [foodDonated, setFoodDonated] = useState(5);
  const [communityContributions, setCommunityContributions] = useState(20);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      {/* Content Wrapper */}
      <div className="flex-grow flex justify-center items-center px-6">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl border-t-4 border-green-500">
          <h2 className="text-3xl font-bold text-green-700 mb-4">User Statistics</h2>
          <p className="text-gray-600 text-sm mb-5">Track your contributions and progress on the platform.</p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-6 text-center">
            {/* Recipes Tried */}
            <div className="bg-gray-100 p-5 rounded-lg shadow">
              <h3 className="text-lg font-bold text-green-700">Total Recipes Tried</h3>
              <p className="text-2xl font-semibold">{recipesTried}</p>
            </div>

            {/* Calories Saved */}
            <div className="bg-gray-100 p-5 rounded-lg shadow">
              <h3 className="text-lg font-bold text-green-700">Calories Saved</h3>
              <p className="text-2xl font-semibold">{caloriesSaved}</p>
            </div>

            {/* Meal Plans Followed */}
            <div className="bg-gray-100 p-5 rounded-lg shadow">
              <h3 className="text-lg font-bold text-green-700">Meal Plans Followed</h3>
              <p className="text-2xl font-semibold">{mealPlansFollowed}</p>
            </div>

            {/* Food Donated */}
            <div className="bg-gray-100 p-5 rounded-lg shadow">
              <h3 className="text-lg font-bold text-green-700">Food Donated</h3>
              <p className="text-2xl font-semibold">{foodDonated}</p>
            </div>

            {/* Community Contributions */}
            <div className="bg-gray-100 p-5 rounded-lg shadow">
              <h3 className="text-lg font-bold text-green-700">Community Contributions</h3>
              <p className="text-2xl font-semibold">{communityContributions}</p>
            </div>
          </div>

          {/* Refresh Button */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={() => {
                setRecipesTried(recipesTried + 1);
                setCaloriesSaved(caloriesSaved + 50);
                setMealPlansFollowed(mealPlansFollowed + 1);
                setFoodDonated(foodDonated + 1);
                setCommunityContributions(communityContributions + 2);
              }}
              className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition"
            >
              Refresh Stats
            </button>
          </div>
        </div>
      </div>

      {/* Push Footer Down */}
      <div className="h-12"></div>
    </div>
  );
}
