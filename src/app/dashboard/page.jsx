"use client";

import { useState } from "react";
import { User, BarChart, BookOpen, Heart, Settings } from "lucide-react";
import Profile from "./components/Profile";
import Preferences from "./components/Preferences";
import Location from "./components/Location";
import Security from "./components/Security";
import Stats from "./components/Stats";

export default function Dashboard() {
  const [selectedSection, setSelectedSection] = useState("Profile"); // Default is Profile

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-5">
        <h2 className="text-xl font-bold mb-5">Dashboard</h2>
        <nav className="space-y-4">
          <button
            onClick={() => setSelectedSection("Profile")}
            className={`flex items-center space-x-2 p-2 rounded-md w-full ${
              selectedSection === "Profile" ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            <User size={20} /> <span>Profile</span>
          </button>
          <button
            onClick={() => setSelectedSection("Preferences")}
            className={`flex items-center space-x-2 p-2 rounded-md w-full ${
              selectedSection === "Preferences" ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            <Heart size={20} /> <span>Food Preferences</span>
          </button>
          <button
            onClick={() => setSelectedSection("Location")}
            className={`flex items-center space-x-2 p-2 rounded-md w-full ${
              selectedSection === "Location" ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            <BookOpen size={20} /> <span>Location</span>
          </button>
          <button
            onClick={() => setSelectedSection("Security")}
            className={`flex items-center space-x-2 p-2 rounded-md w-full ${
              selectedSection === "Security" ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            <Settings size={20} /> <span>Security</span>
          </button>
          <button
            onClick={() => setSelectedSection("Stats")}
            className={`flex items-center space-x-2 p-2 rounded-md w-full ${
              selectedSection === "Stats" ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            <BarChart size={20} /> <span>User Stats</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        {selectedSection === "Profile" && <Profile />}
        {selectedSection === "Preferences" && <Preferences />}
        {selectedSection === "Location" && <Location />}
        {selectedSection === "Security" && <Security />}
        {selectedSection === "Stats" && <Stats />}
      </main>
    </div>
  );
}
