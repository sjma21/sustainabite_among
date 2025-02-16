"use client";
import { useState } from "react";

export default function DonateFood() {
  const [formData, setFormData] = useState({
    foodName: "",
    quantity: "",
    expiryDate: "",
    location: "",
    contact: "",
    description: "",
  });

  const [message, setMessage] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.foodName ||
      !formData.quantity ||
      !formData.expiryDate ||
      !formData.location ||
      !formData.contact
    ) {
      setMessage("⚠️ Please fill in all required fields.");
      return;
    }

    setMessage("✅ Food Donation Submitted Successfully!");
    setFormData({
      foodName: "",
      quantity: "",
      expiryDate: "",
      location: "",
      contact: "",
      description: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg mt-20">
        <h2 className="text-3xl font-bold text-green-400 text-center ">
          🍛 Donate Surplus Food
        </h2>
        <p className="text-gray-300 text-center mt-2">
          Fill out the form below to list your food donation.
        </p>

        {/* Success/Error Message */}
        {message && (
          <p
            className={`mt-4 text-center text-sm ${
              message.includes("⚠️") ? "text-red-400" : "text-green-400"
            }`}
          >
            {message}
          </p>
        )}

        {/* Form Start */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Food Name */}
          <div>
            <label className="block text-sm font-semibold">Food Name *</label>
            <input
              type="text"
              name="foodName"
              value={formData.foodName}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-green-400 focus:outline-none"
              placeholder="E.g. Rice, Bread, Vegetables"
              required
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-sm font-semibold">Quantity (in kg) *</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-green-400 focus:outline-none"
              placeholder="E.g. 5 kg"
              required
            />
          </div>

          {/* Expiry Date */}
          <div>
            <label className="block text-sm font-semibold">Expiry Date *</label>
            <input
              type="date"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-green-400 focus:outline-none"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-semibold">Pickup Location *</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-green-400 focus:outline-none"
              placeholder="Enter address or landmark"
              required
            />
          </div>

          {/* Contact Information */}
          <div>
            <label className="block text-sm font-semibold">Contact Number *</label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-green-400 focus:outline-none"
              placeholder="Enter phone number"
              required
            />
          </div>

          {/* Additional Description (Optional) */}
          <div>
            <label className="block text-sm font-semibold">Additional Notes</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-green-400 focus:outline-none"
              placeholder="Any extra details..."
            ></textarea>
          </div>

          {/* Submit Button with Hover Effect */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-bold py-2 mt-4 rounded-md hover:bg-green-600 transition-transform duration-300 hover:scale-105"
          >
            📩 Submit Donation
          </button>
        </form>
      </div>
    </div>
  );
}
