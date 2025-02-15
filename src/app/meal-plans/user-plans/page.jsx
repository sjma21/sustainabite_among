"use client";
import { useState, useEffect } from "react";

export default function UserMealPlans() {
  const [mealPlans, setMealPlans] = useState([]);
  const [newPlan, setNewPlan] = useState({ name: "", meals: [] });
  const [editing, setEditing] = useState(null); // Track if editing

  // Fetch all meal plans
  useEffect(() => {
    async function fetchMealPlans() {
      const response = await fetch("/api/user-meal-plans");
      const data = await response.json();
      setMealPlans(data);
    }
    fetchMealPlans();
  }, []);

  // Handle form input
  const handleInputChange = (e) => {
    setNewPlan({ ...newPlan, [e.target.name]: e.target.value });
  };

  // Add a meal to the list
  const addMeal = (meal, food) => {
    setNewPlan({ ...newPlan, meals: [...newPlan.meals, { meal, food }] });
  };

  // Save Meal Plan (Create or Update)
  const saveMealPlan = async () => {
    if (editing) {
      // Update existing meal plan
      const updatedPlan = { ...newPlan, id: editing };
      await fetch("/api/user-meal-plans", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPlan),
      });
      setEditing(null);
    } else {
      // Create new meal plan
      await fetch("/api/user-meal-plans", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPlan),
      });
    }
    setNewPlan({ name: "", meals: [] });
    window.location.reload(); // Refresh after save
  };

  // Delete Meal Plan
  const deleteMealPlan = async (id) => {
    await fetch("/api/user-meal-plans", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    window.location.reload(); // Refresh after delete
  };

  // Edit Meal Plan
  const editMealPlan = (plan) => {
    setNewPlan(plan);
    setEditing(plan.id);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-green-400 mb-4">📌 Your Meal Plans</h1>

      {/* MEAL PLAN FORM */}
      <div className="p-6 bg-gray-800 rounded-lg mb-6">
        <input
          type="text"
          name="name"
          value={newPlan.name}
          onChange={handleInputChange}
          placeholder="Meal Plan Name"
          className="w-full p-3 bg-gray-700 text-white rounded mb-4"
        />

        {/* ADD MEAL INPUTS */}
        <div className="flex gap-2 mb-4">
          <input type="text" id="mealType" placeholder="Meal Type (e.g., Breakfast)" className="p-3 bg-gray-700 text-white rounded w-1/2" />
          <input type="text" id="mealFood" placeholder="Food (e.g., Oatmeal)" className="p-3 bg-gray-700 text-white rounded w-1/2" />
          <button
            onClick={() => {
              const mealType = document.getElementById("mealType").value;
              const mealFood = document.getElementById("mealFood").value;
              if (mealType && mealFood) {
                addMeal(mealType, mealFood);
                document.getElementById("mealType").value = "";
                document.getElementById("mealFood").value = "";
              }
            }}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            ➕
          </button>
        </div>

        {/* SAVE BUTTON */}
        <button
          onClick={saveMealPlan}
          className="w-full px-4 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          {editing ? "Update Meal Plan" : "Save Meal Plan"}
        </button>
      </div>

      {/* LIST OF MEAL PLANS */}
      <div className="space-y-4">
        {mealPlans.map((plan) => (
          <div key={plan.id} className="p-5 bg-gray-800 rounded-lg flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="text-gray-400 text-sm">{plan.meals.length} meals added</p>
            </div>
            <div className="space-x-3">
              <button onClick={() => editMealPlan(plan)} className="px-3 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">✏️ Edit</button>
              <button onClick={() => deleteMealPlan(plan.id)} className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600">🗑️ Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
