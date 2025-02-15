const sustainabilityTips = [
    {
      title: "Reduce Food Waste",
      description: "Plan meals, store food properly, and use leftovers creatively to reduce waste.",
      color: "from-green-500 via-green-600 to-green-700",
      hoverColor: "hover:from-green-400 hover:via-green-500 hover:to-green-600",
    },
    {
      title: "Eco-Friendly Packaging",
      description: "Opt for reusable bags, containers, and biodegradable packaging to minimize plastic waste.",
      color: "from-blue-500 via-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-400 hover:via-blue-500 hover:to-blue-600",
    },
    {
      title: "Sustainable Eating",
      description: "Choose locally sourced, organic, and seasonal foods to support sustainability.",
      color: "from-yellow-500 via-yellow-600 to-yellow-700",
      hoverColor: "hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600",
    },
    {
      title: "Save Water & Energy",
      description: "Use water-efficient appliances, cook with lids on, and reduce electricity consumption.",
      color: "from-purple-500 via-purple-600 to-purple-700",
      hoverColor: "hover:from-purple-400 hover:via-purple-500 hover:to-purple-600",
    },
    {
      title: "Composting & Recycling",
      description: "Separate waste, compost organic materials, and recycle properly to minimize landfill impact.",
      color: "from-orange-500 via-orange-600 to-orange-700",
      hoverColor: "hover:from-orange-400 hover:via-orange-500 hover:to-orange-600",
    },
  ];
  
  export default function SustainabilityTips() {
    return (
      <div className="py-16 px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <h2 className="text-3xl font-bold text-center mb-8">Sustainability Tips</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {sustainabilityTips.map((tip, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-lg bg-gradient-to-b ${tip.color} text-white 
                transition-transform duration-300 transform hover:scale-105 ${tip.hoverColor}`}
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                <p className="text-sm">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  