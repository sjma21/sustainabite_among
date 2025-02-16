"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaMapMarkerAlt, FaUtensils } from "react-icons/fa";

// Dummy Data
const foodDonations = [
  {
    id: 1,
    name: "Community Kitchen",
    location: "Indore, MP",
    foodType: "Vegetarian Meals",
    image: "https://www.thestop.org/wp-content/uploads/0H9A5536-1024x701.jpg",
  },
  {
    id: 2,
    name: "Helping Hands NGO",
    location: "Bhopal, MP",
    foodType: "Rice & Lentils",
    image: "https://tse2.mm.bing.net/th?id=OIP.157CEMFzw-r-EoSiCjxn_QHaEK&pid=Api&P=0&h=180",
  },
  {
    id: 3,
    name: "Feed the Hungry",
    location: "Mandla, MP",
    foodType: "Healthy Snacks",
    image: "https://thumbs.dreamstime.com/b/volunteer-to-feed-hungry-society-concept-donating-food-poor-131738358.jpg",
  },
];

export default function FindDonation() {
  const [search, setSearch] = useState("");

  // Floating Apples Effect
  const apples = new Array(10).fill(0).map((_, i) => ({
    id: i,
    x: Math.random() * 100, // Random horizontal position
    delay: Math.random() * 5, // Random delay
    duration: 5 + Math.random() * 5, // Random speed
  }));

  const filteredDonations = foodDonations.filter((donation) =>
    donation.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden flex flex-col items-center">
      {/* Floating Apples */}
      {apples.map((apple) => (
        <motion.div
          key={apple.id}
          initial={{ y: "-10vh", opacity: 0 }}
          animate={{ y: "100vh", opacity: 1 }}
          transition={{
            duration: apple.duration,
            delay: apple.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute"
          style={{
            left: `${apple.x}%`,
            fontSize: "24px",
            color: "rgba(255,69,0,0.8)", // Reddish color for apple effect
          }}
        >
          🥦
        </motion.div>
      ))}

      {/* Hero Section */}
      <section className="relative text-center py-20">
        <div className="absolute inset-0 bg-[url('https://source.unsplash.com/1600x900/?food')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-4">Find Food Donations 🍽️</h1>
          <p className="text-lg font-light max-w-2xl mx-auto text-gray-300">
            Help reduce food waste and provide meals to those in need. Find a food donation near you and make a difference today!
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <div className="flex justify-center mt-10">
        <div className="relative w-96">
          <input
            type="text"
            placeholder="Search food donations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-4 pl-12 bg-gray-800 border border-gray-700 text-white rounded-lg shadow-lg backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
          <FaSearch className="absolute left-4 top-4 text-gray-400" />
        </div>
      </div>

      {/* Food Donation Listings */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <h2 className="text-3xl font-bold text-gray-100 mb-6 text-center">
          Available Food Donations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredDonations.length > 0 ? (
            filteredDonations.map((donation) => (
              <motion.div
                key={donation.id}
                whileHover={{ scale: 1.05 }}
                className="relative bg-gray-800/50 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden transition border-2 border-transparent hover:border-green-400/50"
              >
                <img
                  src={donation.image}
                  alt={donation.name}
                  className="w-full h-56 object-cover opacity-80"
                />
                <div className="p-5">
                  <h2 className="text-2xl font-semibold">{donation.name}</h2>
                  <p className="text-gray-400 flex items-center">
                    <FaMapMarkerAlt className="text-green-400 mr-2" />
                    {donation.location}
                  </p>
                  <p className="text-green-400 font-medium flex items-center mt-2">
                    <FaUtensils className="mr-2" />
                    {donation.foodType}
                  </p>
                  <button className="mt-4 w-full py-3 bg-green-600/80 text-white rounded-lg hover:bg-green-500/90 transition backdrop-blur-md">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-400 col-span-3 text-lg">
              No food donations found.
            </p>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <section className="text-center py-12 mt-12 bg-gray-800/60 backdrop-blur-md rounded-lg mx-6">
        <h2 className="text-3xl font-bold text-white mb-4">Want to Donate Food?</h2>
        <p className="text-lg text-gray-300 max-w-xl mx-auto">
          Your small contribution can make a big difference. Join hands and help feed the needy!
        </p>
        <button className="mt-6 px-6 py-3 bg-green-600/80 text-white font-semibold text-lg rounded-lg hover:bg-green-500/90 transition">
          Donate Now
        </button>
      </section>
    </div>
  );
}
