"use client"
import { useState } from "react";
import { User, Mail, Calendar, Edit3, Camera } from "lucide-react";

export default function ProfilePage() {
  const [user, setUser] = useState({
    avatar: "/avatar.png", // Default avatar
    name: "Sajal Mishra",
    email: "sajal@example.com",
    joinDate: "August 15, 2023",
    recipesTried: 15,
    caloriesSaved: "2,000 kcal",
    mealPlansFollowed: 8,
    sustainabilityScore: "87%",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(user.name);
  const [newEmail, setNewEmail] = useState(user.email);

  const handleSave = () => {
    setUser({ ...user, name: newName, email: newEmail });
    setIsEditing(false);
  };

  return (
    <div className="p-6 flex justify-center">
      <div className="max-w-3xl w-full bg-white p-6 rounded-lg shadow-md">
        
        {/* Profile Header */}
        <div className="flex items-center space-x-6">
          <div className="relative">
            <img src={user.avatar} alt="Profile" className="w-24 h-24 rounded-full border-4 border-green-500" />
            <label htmlFor="avatarUpload" className="absolute bottom-0 right-0 bg-green-500 p-2 rounded-full cursor-pointer">
              <Camera size={16} className="text-white" />
              <input type="file" id="avatarUpload" className="hidden" />
            </label>
          </div>

          <div>
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="border p-2 rounded-md w-full"
                />
                <input
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="border p-2 rounded-md w-full mt-2"
                />
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-gray-500">{user.email}</p>
              </>
            )}
            <p className="text-gray-600 flex items-center mt-1">
              <Calendar size={16} className="mr-2" /> Joined: {user.joinDate}
            </p>
          </div>

          <button
            onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
            className="ml-auto px-4 py-2 bg-green-500 text-white rounded-lg flex items-center space-x-2"
          >
            <Edit3 size={16} />
            <span>{isEditing ? "Save" : "Edit"}</span>
          </button>
        </div>

        {/* User Stats */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard title="Recipes Tried" value={user.recipesTried} />
          <StatCard title="Calories Saved" value={user.caloriesSaved} />
          <StatCard title="Meal Plans Followed" value={user.mealPlansFollowed} />
          <StatCard title="Sustainability Score" value={user.sustainabilityScore} highlight />
        </div>
      </div>
    </div>
  );
}

// Reusable Stat Card Component
const StatCard = ({ title, value, highlight }) => (
  <div className={`p-4 rounded-lg shadow-md text-center ${highlight ? "bg-green-500 text-white" : "bg-gray-100"}`}>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);
