export default function Profile() {
  return (
    <div className="flex-grow mt-12 bg-gray-300">
      {/* Profile Section */}
      <div className="flex justify-center py-6">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl border-t-4 border-green-500 bg-gray-700">
          <h2 className="text-2xl font-bold text-green-700 mb-3">User Profile</h2>
          <p className="text-gray-600 text-sm mb-4">Manage your account details and preferences.</p>

          {/* Full Name */}
          <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 hover:border-green-400 transition"
              placeholder="Enter full name"
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-1">Email Address (Verification Required)</label>
            <div className="flex">
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-green-500 hover:border-green-400 transition"
                placeholder="Enter email"
              />
              <button className="bg-green-500 text-white px-3 py-2 rounded-r-md hover:bg-green-600 transition">
                Verify
              </button>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-1">Profile Picture</label>
            <input type="file" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>

          {/* Date of Birth */}
          <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-1">Date of Birth</label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 hover:border-green-400 transition"
            />
          </div>

          {/* Gender */}
          <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-1">Gender</label>
            <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 hover:border-green-400 transition">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Save Button */}
          <button className="w-full bg-green-600 text-white p-2 rounded-md font-semibold mt-3 hover:bg-green-700 transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
