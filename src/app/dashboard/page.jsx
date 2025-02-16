"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Menu, X, User, BookOpen, Heart, BarChart, Settings,
  Leaf, ClipboardCheck, MapPin, Shield
} from "lucide-react"; // Updated Icons

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(true); // Sidebar toggle state

  return (
    <div className="flex h-screen bg-gray-400">
      {/* Sidebar */}
      <motion.aside
        initial={{ width: 80 }}
        animate={{ width: isOpen ? 260 : 80 }}
        transition={{ duration: 0.3 }}
        className="bg-slate-900 text-white h-full p-5 flex flex-col shadow-md"
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center">
          <h1 className={`text-lg font-bold transition-all ${isOpen ? "block" : "hidden"}`}>
            Sustainabite
          </h1>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="mt-10 flex flex-col space-y-6">
          <NavItem href="/dashboard/profile" icon={<User size={24} />} label="User Profile" isOpen={isOpen} />
          <NavItem href="/dashboard/recipes-meals" icon={<BookOpen size={24} />} label="Recipes & Meal Plans" isOpen={isOpen} />
          <NavItem href="/dashboard/donations" icon={<Heart size={24} />} label="Food Donations" isOpen={isOpen} />
          <NavItem href="/dashboard/progress" icon={<BarChart size={24} />} label="Progress & Insights" isOpen={isOpen} />
          <NavItem href="/dashboard/settings" icon={<Settings size={24} />} label="Settings" isOpen={isOpen} />
        </nav>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">User Dashboard</h2>
          <div className="flex items-center space-x-4">
            <User size={28} className="text-gray-700" />
            <span className="text-gray-700">Welcome, User</span>
          </div>
        </header>

        {/* Dashboard Content */}
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DashboardCard title="Total Recipes Tried" value="15" />
            <DashboardCard title="Calories Saved" value="2,000 kcal" />
            <DashboardCard title="Meal Plans Followed" value="8" />
            <DashboardCard title="Food Donations" value="5 kg" />
            <DashboardCard title="Sustainability Score" value="87%" />
          </div>
        </motion.main>
      </div>
    </div>
  );
}

// Sidebar Navigation Item Component
const NavItem = ({ href, icon, label, isOpen }) => (
  <Link href={href} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-slate-700 transition">
    {icon}
    <span className={`text-gray-300 transition-all ${isOpen ? "block" : "hidden"}`}>{label}</span>
  </Link>
);

// Dashboard Stats Card Component
const DashboardCard = ({ title, value }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-5 rounded-lg shadow-md flex flex-col items-center"
  >
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-2xl font-bold text-green-500">{value}</p>
  </motion.div>
);
