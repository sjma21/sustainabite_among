import { useState } from "react";
import { SparklesIcon, CalendarIcon, HeartIcon, LightBulbIcon, ChartBarIcon, GlobeAltIcon } from "@heroicons/react/24/solid";

const features = [
  {
    title: "AI-Powered Recipe Suggestions",
    description:
      "With our cutting-edge AI, effortlessly generate recipes based on ingredients you already have. No more last-minute grocery runs—get personalized meal ideas tailored to your preferences, dietary restrictions, and cooking skills!",
    icon: <SparklesIcon className="h-12 w-12 text-green-400" />,
    glow: "shadow-green-500/50",
  },
  {
    title: "Smart Meal Planning",
    description:
      "Plan your weekly meals like a pro! Our meal planner ensures balanced nutrition while minimizing food waste. Get optimized grocery lists, track calorie intake, and discover time-saving batch cooking strategies.",
    icon: <CalendarIcon className="h-12 w-12 text-blue-400" />,
    glow: "shadow-blue-500/50",
  },
  {
    title: "Food Donation & Sharing",
    description:
      "Got surplus food? Easily donate extra meals to those in need with our integrated donation network. Connect with local food banks or share excess food with neighbors to combat food waste and hunger.",
    icon: <HeartIcon className="h-12 w-12 text-red-400" />,
    glow: "shadow-red-500/50",
  },
  {
    title: "Sustainability Insights",
    description:
      "Understand your food consumption impact with real-time analytics. Track carbon footprint reduction, analyze waste patterns, and receive actionable tips to adopt a more sustainable lifestyle.",
    icon: <ChartBarIcon className="h-12 w-12 text-purple-400" />,
    glow: "shadow-purple-500/50",
  },
  {
    title: "Global Food Trends",
    description:
      "Stay updated with the latest trends in sustainable eating. Explore global innovations in eco-friendly packaging, plant-based diets, and zero-waste cooking techniques.",
    icon: <GlobeAltIcon className="h-12 w-12 text-yellow-400" />,
    glow: "shadow-yellow-500/50",
  },
  {
    title: "AI-Driven Smart Alerts",
    description:
      "Receive real-time notifications for expiring food items, best deals on organic groceries, and local sustainability events. Never let good food go to waste again!",
    icon: <LightBulbIcon className="h-12 w-12 text-teal-400" />,
    glow: "shadow-teal-500/50",
  },
];

const Features = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-blue-400 via-gray-900 to-black text-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 animate-fadeIn">🌍 Transform Your Food Habits</h2>
        <p className="mb-12 text-lg opacity-90 animate-fadeIn delay-200">
          Sustainabite empowers you with AI-driven tools to optimize your food choices, minimize waste, and embrace sustainability.
        </p>

        <div className="grid md:grid-cols-3 gap-10 animate-slideUp">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => setExpanded(expanded === index ? null : index)}
              className={`relative cursor-pointer bg-gray-800 bg-opacity-60 backdrop-blur-lg p-8 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-opacity-90 shadow-lg ${feature.glow} ${
                expanded === index ? "bg-opacity-100 scale-110" : ""
              }`}
            >
              {feature.icon}
              <h3 className="text-2xl font-semibold mt-4">{feature.title}</h3>
              <p
                className={`mt-4 transition-all duration-300 text-gray-300 ${
                  expanded === index ? "opacity-100 max-h-96" : "opacity-0 max-h-0 overflow-hidden"
                }`}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
