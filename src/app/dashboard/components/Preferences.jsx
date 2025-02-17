import { useState } from "react";

export default function FoodPreferences() {
  const [diet, setDiet] = useState("");
  const [allergies, setAllergies] = useState([]);
  const [cuisine, setCuisine] = useState([]);
  const [commitments, setCommitments] = useState([]);
  const [sustainabilityScore, setSustainabilityScore] = useState(75);

  const handleAllergyChange = (event) => {
    const { value, checked } = event.target;
    setAllergies(checked ? [...allergies, value] : allergies.filter((a) => a !== value));
  };

  const handleCuisineChange = (event) => {
    const { value, checked } = event.target;
    setCuisine(checked ? [...cuisine, value] : cuisine.filter((c) => c !== value));
  };

  const handleCommitmentsChange = (event) => {
    const { value, checked } = event.target;
    setCommitments(checked ? [...commitments, value] : commitments.filter((c) => c !== value));
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Content Wrapper */}
      <div className="flex-grow flex justify-center items-center px-6">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl border-t-4 border-green-500">
          <h2 className="text-3xl font-bold text-green-700 mb-4">Sustainability & Food Preferences</h2>
          <p className="text-gray-600 text-sm mb-5">Customize your food preferences for a better experience.</p>

          <div className="grid grid-cols-2 gap-6">
            {/* Dietary Preference */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Dietary Preference</label>
              <select
                value={diet}
                onChange={(e) => setDiet(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 hover:border-green-400 transition"
              >
                <option value="">Select Preference</option>
                <option value="Vegan">Vegan</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Pescatarian">Pescatarian</option>
                <option value="Non-Vegetarian">Non-Vegetarian</option>
              </select>
            </div>

            {/* Sustainability Score */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Sustainability Score</label>
              <div className="relative w-full bg-gray-200 rounded-full h-6">
                <div
                  className="bg-green-500 h-6 rounded-full text-white flex items-center justify-center text-sm font-bold"
                  style={{ width: `${sustainabilityScore}%` }}
                >
                  {sustainabilityScore}%
                </div>
              </div>
            </div>

            {/* Allergies (Multi-Select) */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Allergies</label>
              <div className="grid grid-cols-2 gap-2">
                {["Nuts", "Dairy", "Gluten", "Soy", "Seafood"].map((item) => (
                  <label key={item} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      value={item}
                      checked={allergies.includes(item)}
                      onChange={handleAllergyChange}
                      className="form-checkbox text-green-600"
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Favorite Cuisine (Multi-Select) */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Favorite Cuisine</label>
              <div className="grid grid-cols-2 gap-2">
                {["Indian", "Italian", "Chinese", "Mexican", "Japanese"].map((item) => (
                  <label key={item} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      value={item}
                      checked={cuisine.includes(item)}
                      onChange={handleCuisineChange}
                      className="form-checkbox text-green-600"
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Eco-Friendly Commitments */}
            <div className="col-span-2">
              <label className="block text-gray-700 font-medium mb-1">Eco-Friendly Commitments</label>
              <div className="grid grid-cols-3 gap-2">
                {["I reduce food waste", "I use reusable bags", "I compost food scraps"].map((item) => (
                  <label key={item} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      value={item}
                      checked={commitments.includes(item)}
                      onChange={handleCommitmentsChange}
                      className="form-checkbox text-green-600"
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="mt-6 flex justify-end">
            <button className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition">
              Save Preferences
            </button>
          </div>
        </div>
      </div>

      {/* Push Footer Down */}
      <div className="h-12"></div>
    </div>
  );
}
