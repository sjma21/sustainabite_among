"use client";
import Link from "next/link";

export default function FoodDonationPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white ">
      {/* Hero Section */}
      <div className="text-center py-16 px-6 bg-[url('/food-bg.jpg')] bg-cover bg-center bg-opacity-50">
        <h1 className="text-5xl font-extrabold text-green-400 drop-shadow-lg mt-20">
          🍲 Share a Meal, Change a Life!
        </h1>
        <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
          Join us in our mission to eliminate hunger. Every meal donated is a step toward a better world.
        </p>
        <Link href="/dodonate">
          <button className="mt-6 px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
            🍛 Start Donating
          </button>
        </Link>
      </div>

      {/* Stats Section */}
      <div className="mt-12 flex flex-wrap justify-center gap-8 px-6">
        <div className="bg-gray-800 p-6 rounded-lg w-64 text-center shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-3xl font-bold text-yellow-400">10M+</h3>
          <p className="text-gray-300">Meals Donated</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg w-64 text-center shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-3xl font-bold text-yellow-400">500+</h3>
          <p className="text-gray-300">NGO Partnerships</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg w-64 text-center shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-3xl font-bold text-yellow-400">95%</h3>
          <p className="text-gray-300">Food Utilization Rate</p>
        </div>
      </div>

      {/* Why Donate Section */}
      <div className="mt-16 text-center px-6">
        <h2 className="text-4xl font-semibold text-yellow-400">🌍 Why Donate Food?</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {[
            { title: "Reduce Waste", text: "Prevent excess food from going to waste and feed the needy." },
            { title: "Feed the Hungry", text: "Provide meals to struggling families and individuals." },
            { title: "Make an Impact", text: "A small act of kindness can change someone's life." },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg w-72 text-center shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="mt-16 text-center px-6">
        <h2 className="text-4xl font-semibold text-yellow-400">🔄 How It Works?</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {[
            { step: "1️⃣", title: "List Your Food", text: "Enter details of surplus food you wish to donate." },
            { step: "2️⃣", title: "Connect with NGOs", text: "Local charities will be notified about your donation." },
            { step: "3️⃣", title: "Make an Impact", text: "Your contribution helps in reducing hunger." },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg w-72 text-center shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-bold">{item.step} {item.title}</h3>
              <p className="text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-16 text-center px-6">
        <h2 className="text-4xl font-semibold text-yellow-400">💬 Testimonials</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {[
            { name: "Amit Kumar", quote: "Donating food has never been easier! I'm happy to be part of this initiative." },
            { name: "Sneha Roy", quote: "This platform connects those in need with surplus food efficiently." },
            { name: "Rahul Mehta", quote: "A great way to ensure no food goes to waste!" },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg w-72 text-center shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              <h4 className="mt-4 font-semibold text-green-400">— {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Get Involved Section */}
      <div className="mt-16 text-center px-6 pb-16">
        <h2 className="text-4xl font-semibold text-yellow-400">🤝 Get Involved!</h2>
        <p className="text-lg text-gray-300 mt-2 max-w-3xl mx-auto">
          Whether you want to donate food or find a meal, this is the right place.
        </p>
        <div className="mt-6 flex justify-center gap-6">
          <Link href="/dodonate">
            <button className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              🍛 Donate Food
            </button>
          </Link>
          <Link href="/find">
            <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              🔍 Find Donations
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
