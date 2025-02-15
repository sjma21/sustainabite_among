import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

const data = [
  { name: "Volunteering", value: 35, color: "#22c55e" }, // Green
  { name: "Donations", value: 25, color: "#3b82f6" }, // Blue
  { name: "Awareness Campaigns", value: 20, color: "#facc15" }, // Yellow
  { name: "Eco Projects", value: 20, color: "#ef4444" }, // Red
];

const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      className="text-sm font-bold"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function CommunityContribution() {
  return (
    <div className="py-16 px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-green-400">Community Contribution</h2>
          <p className="text-gray-300 mb-6">
            Our community actively participates in sustainability efforts through various initiatives. 
            Here’s how we contribute to a greener planet:
          </p>
          <ul className="list-none space-y-3">
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span> 🌱 Volunteering for environmental causes
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span> 💰 Donations to sustainability projects
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span> 📢 Awareness campaigns
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span> 🏡 Eco-friendly projects
            </li>
          </ul>
        </div>

        {/* Right Side: Pie Chart & Animated Bar Chart */}
        <div className="flex flex-col items-center bg-opacity-20 backdrop-blur-lg p-6 rounded-lg shadow-xl border border-gray-700">
          {/* Pie Chart */}
          <ResponsiveContainer width={300} height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={100}
                innerRadius={60}
                dataKey="value"
                labelLine={false}
                label={renderCustomLabel}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} className="hover:opacity-80 transition-opacity duration-300" />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: "#1f2937", borderRadius: "8px", color: "#fff" }} />
              <Legend iconType="circle" layout="horizontal" verticalAlign="bottom" align="center" />
            </PieChart>
          </ResponsiveContainer>

          {/* Beautiful Text Below Pie Chart */}
          <h3 className="mt-6 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-center">
            "Together, We Make a Difference!"
          </h3>
          <p className="mt-2 text-gray-400 text-center">
            Every small step counts in creating a sustainable future. Join us in making the world greener and better for everyone.
          </p>

          {/* Animated Bar Chart */}
         
        </div>
      </div>
    </div>
  );
}
