import fs from "fs";
import path from "path";

// Path to JSON file for storing user meal plans (for now)
const filePath = path.join(process.cwd(), "public", "userMealPlans.json");

// Helper function to read meal plans
const readMealPlans = () => {
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
};

// Helper function to write meal plans
const writeMealPlans = (mealPlans) => {
  fs.writeFileSync(filePath, JSON.stringify(mealPlans, null, 2), "utf8");
};

// GET: Fetch all user meal plans
export async function GET() {
  return new Response(JSON.stringify(readMealPlans()), {
    headers: { "Content-Type": "application/json" },
  });
}

// POST: Add a new meal plan
export async function POST(req) {
  const newPlan = await req.json();
  const mealPlans = readMealPlans();
  mealPlans.push({ id: Date.now(), ...newPlan });
  writeMealPlans(mealPlans);
  return new Response(JSON.stringify({ message: "Meal Plan Added!" }), { status: 201 });
}

// PUT: Edit an existing meal plan
export async function PUT(req) {
  const updatedPlan = await req.json();
  let mealPlans = readMealPlans();
  mealPlans = mealPlans.map((plan) => (plan.id === updatedPlan.id ? updatedPlan : plan));
  writeMealPlans(mealPlans);
  return new Response(JSON.stringify({ message: "Meal Plan Updated!" }), { status: 200 });
}

// DELETE: Remove a meal plan
export async function DELETE(req) {
  const { id } = await req.json();
  let mealPlans = readMealPlans();
  mealPlans = mealPlans.filter((plan) => plan.id !== id);
  writeMealPlans(mealPlans);
  return new Response(JSON.stringify({ message: "Meal Plan Deleted!" }), { status: 200 });
}
