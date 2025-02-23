"use client";
import { motion } from "framer-motion";
import Image from "next/image"; // If using Next.js, otherwise replace with <img> tag

// Team Member Data
const teamMembers = [
  {
    name: "Sajal Mishra",
    role: "Founder & Chief Architect",
    image: "/images/sajal.jpg", // Replace with actual image path
    bio: "Sajal leads the technological vision of SustainaBite, designing and developing the platform. His expertise in full-stack development ensures a seamless and efficient user experience, making sustainability accessible to all.",
  },
  {
    name: "Sana Asiwal",
    role: "Sustainability & Content Strategist",
    image: "/sana.jpg", // Replace with actual image path
    bio: "Sana drives the sustainability mission of SustainaBite, curating content that educates users about eco-friendly practices. She ensures that every recipe and resource aligns with our vision of promoting a greener lifestyle.",
  },
  {
    name: "Shailendra Khatri",
    role: "Operations & Community Engagement",
    image: "/shailendra.jpg", // Replace with actual image path
    bio: "Shailendra manages operations and fosters community growth for SustainaBite. He connects with sustainability enthusiasts, collaborates with partners, and ensures smooth day-to-day execution of our initiatives.",
  },
  {
    name: "Shivani Agrawal",
    role: "Marketing & Outreach Lead",
    image: "/shivani.jpg", // Replace with actual image path
    bio: "Shivani is responsible for spreading the vision of SustainaBite through digital marketing and outreach. She engages with audiences, manages social campaigns, and builds brand awareness to make sustainability mainstream.",
  },
];

export default function Team() {
  return (
    <div className="bg-green-50 text-gray-900 py-16 px-6 mt-3">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-green-600">Meet Our Team 🌿</h1>
        <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
          SustainaBite is built by a passionate team committed to integrating technology and sustainability for a better future.
        </p>
      </div>

      {/* Team Members Grid */}
      <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            {/* Profile Image */}
            <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden shadow-md">
              <Image src={member.image} alt={member.name} width={128} height={128} />
            </div>

            {/* Name & Role */}
            <h3 className="text-xl font-semibold text-green-700 mt-4">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.role}</p>

            {/* Bio */}
            <p className="text-gray-700 mt-3 text-sm">{member.bio}</p>
          </motion.div>
        ))}
      </div>

      {/* Join Us Section */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold text-green-700">Want to Join Our Team? 🌱</h2>
        <p className="text-gray-600 mt-2">
          We're always looking for passionate individuals to make a difference!
        </p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="/contact"
          className="inline-block mt-6 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition"
        >
          Contact Us
        </motion.a>
      </div>
    </div>
  );
}
