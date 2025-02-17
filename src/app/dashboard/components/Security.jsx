import { useState } from "react";

export default function SecuritySettings() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [twoFactor, setTwoFactor] = useState(false);
  const [otp, setOtp] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState({
    emailAlerts: false,
    pushNotifications: false,
  });

  const handleNotificationChange = (e) => {
    setNotifications({
      ...notifications,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? "bg-gray-900 text-white" : "bg-gray-900 text-black"}`}>
      {/* Content Wrapper */}
      <div className="flex-grow flex justify-center items-center px-6">
        <div className={`p-8 rounded-lg shadow-lg w-full max-w-4xl border-t-4 ${darkMode ? "border-gray-600 bg-gray-800" : "border-red-500 bg-white"}`}>
          <h2 className={`text-3xl font-bold ${darkMode ? "text-gray-300" : "text-red-700"} mb-4`}>
            Security Settings
          </h2>
          <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"} `}>
            Manage your security preferences.
          </p>

          <div className="grid grid-cols-2 gap-3">
            {/* Current Password */}
            <div>
              <label className="block font-medium mb-1">Current Password</label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 hover:border-red-400 transition bg-transparent"
                placeholder="Enter current password"
              />
            </div>

            {/* New Password */}
            <div>
              <label className="block font-medium mb-1">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 hover:border-red-400 transition bg-transparent"
                placeholder="Enter new password"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block font-medium mb-1">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 hover:border-red-400 transition bg-transparent"
                placeholder="Confirm new password"
              />
            </div>

            {/* Two-Factor Authentication */}
            <div className="col-span-2 flex items-center">
              <input
                type="checkbox"
                checked={twoFactor}
                onChange={() => setTwoFactor(!twoFactor)}
                className="form-checkbox text-red-600 h-5 w-5"
              />
              <label className="ml-3">Enable Two-Factor Authentication (2FA)</label>
            </div>

            {/* OTP Verification (Only visible if 2FA is enabled) */}
            {twoFactor && (
              <div className="col-span-2">
                <label className="block font-medium mb-1">Enter OTP</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 hover:border-red-400 transition bg-transparent"
                  placeholder="Enter OTP received"
                />
              </div>
            )}

            {/* Theme Switcher */}
            <div className="col-span-2 flex items-center">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                className="form-checkbox text-gray-600 h-5 w-5"
              />
              <label className="ml-3">Enable Dark Mode</label>
            </div>

            {/* Notification Preferences */}
            <div className="col-span-2">
              <label className="block font-medium mb-2">Notification Preferences</label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="emailAlerts"
                    checked={notifications.emailAlerts}
                    onChange={handleNotificationChange}
                    className="form-checkbox text-red-600 h-5 w-5"
                  />
                  <label className="ml-2">Email Alerts</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="pushNotifications"
                    checked={notifications.pushNotifications}
                    onChange={handleNotificationChange}
                    className="form-checkbox text-red-600 h-5 w-5"
                  />
                  <label className="ml-2">Push Notifications</label>
                </div>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="mt-6 flex justify-end">
            <button className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition">
              Save Security Settings
            </button>
          </div>
        </div>
      </div>

      {/* Push Footer Down */}
      <div className="h-12"></div>
    </div>
  );
}
