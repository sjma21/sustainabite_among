import { useState } from "react";

export default function LocationPreferences() {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [completeAddress, setCompleteAddress] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      {/* Content Wrapper */}
      <div className="flex-grow flex justify-center items-center px-6">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl border-t-4 border-blue-500">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Location Preferences</h2>
          <p className="text-gray-600 text-sm mb-5">Set your location details for better recommendations.</p>

          <div className="grid grid-cols-2 gap-6">
            {/* Country Dropdown */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Country</label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition"
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Australia">Australia</option>
                <option value="Canada">Canada</option>
              </select>
            </div>

            {/* State/Region Dropdown */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">State/Region</label>
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition"
              >
                <option value="">Select State/Region</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="California">California</option>
                <option value="New York">New York</option>
                <option value="Ontario">Ontario</option>
              </select>
            </div>

            {/* City Input */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">City</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition"
                placeholder="Enter city name"
              />
            </div>

            {/* Postal Code Input */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Postal Code</label>
              <input
                type="number"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition"
                placeholder="Enter postal code"
              />
            </div>

            {/* Complete Address Textarea (Full Width) */}
            <div className="col-span-2">
              <label className="block text-gray-700 font-medium mb-1">Complete Address</label>
              <textarea
                value={completeAddress}
                onChange={(e) => setCompleteAddress(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 hover:border-blue-400 transition h-24 resize-none"
                placeholder="Enter your full address"
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="mt-6 flex justify-end">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
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
