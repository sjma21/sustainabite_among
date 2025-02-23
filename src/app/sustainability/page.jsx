"use client";

export default function Sustainability() {
  return (
    <div className="bg-gray-50 text-gray-900 py-16 px-6 mt-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-green-600">Sustainability & Eco-Friendly Eating 🌱</h1>
        <p className="text-lg text-gray-600 mt-3">
          Discover how SustainaBite helps you make eco-friendly food choices for a greener planet.
        </p>
      </div>

      {/* Sections */}
      <div className="mt-12 max-w-4xl mx-auto space-y-12">
        {/* Section 1: Why Sustainability Matters */}
        <section className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-green-500">Why Sustainability Matters</h2>
          <p className="text-gray-700 mt-2">
            The way we produce and consume food has a direct impact on the environment. By making sustainable choices, we can reduce food waste, lower carbon footprints, and protect natural resources.
          </p>
        </section>

        {/* Section 2: Our Commitment to Sustainability */}
        <section className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-green-500">Our Commitment to Sustainability</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
            <li>We promote plant-based and locally sourced ingredients.</li>
            <li>Our recipes minimize food waste and encourage mindful consumption.</li>
            <li>We educate our users about the environmental impact of food choices.</li>
          </ul>
        </section>

        {/* Section 3: Eco-Friendly Eating Tips */}
        <section className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-green-500">Eco-Friendly Eating Tips</h2>
          <p className="text-gray-700 mt-2">Here are some easy steps to reduce your food footprint:</p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2">
            <li>Buy seasonal and local produce.</li>
            <li>Reduce meat consumption and try plant-based alternatives.</li>
            <li>Avoid single-use plastics and use sustainable packaging.</li>
            <li>Compost food scraps to reduce waste.</li>
          </ul>
        </section>

        {/* Section 4: Sustainable Recipes */}
        <section className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-green-500">Sustainable Recipes</h2>
          <p className="text-gray-700 mt-2">
            We feature recipes that are healthy, nutritious, and have a minimal environmental impact.  
            <a href="/recipes" className="text-green-500 font-medium underline"> Check out our eco-friendly recipes! </a>
          </p>
        </section>

        {/* Section 5: Get Involved */}
        <section className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-green-500">Get Involved</h2>
          <p className="text-gray-700 mt-2">
            Join our mission to make sustainable food choices the norm! Follow us on social media, share your sustainable recipes, and contribute to a healthier planet.
          </p>
        </section>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <p className="text-lg text-gray-700">
          Ready to start your sustainability journey? Explore eco-friendly recipes and lifestyle tips today!  
        </p>
        <a href="/recipes" className="inline-block mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
          Explore Recipes 🌍
        </a>
      </div>
    </div>
  );
}
