"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What is SustainaBite?",
    answer: "SustainaBite is your guide to sustainable and eco-friendly eating. We provide plant-based recipes, sustainability tips, and food choices that help you reduce your environmental impact.",
  },
  {
    question: "Are all recipes completely vegan?",
    answer: "Not all recipes are 100% vegan, but we focus on plant-based, organic, and eco-conscious food choices that support sustainability.",
  },
  {
    question: "How can I contribute to SustainaBite?",
    answer: "We welcome contributions! You can share sustainable recipes, write blog posts, or support us by engaging with our community on social media.",
  },
  {
    question: "Is SustainaBite free to use?",
    answer: "Yes! SustainaBite is completely free. Our goal is to educate and inspire people to make environmentally friendly food choices.",
  },
  {
    question: "How can I contact you for collaborations?",
    answer: "We love collaborations! Reach out to us via our Contact Page or email us at contact@sustainabite.com.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-green-50 text-gray-900 py-16 px-6 mt-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-green-600">Frequently Asked Questions 🌿</h1>
        <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
          Got questions? We’ve got answers! Here are some common queries about SustainaBite and our mission.
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto mt-10">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md mb-4 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left text-lg font-semibold text-green-700"
            >
              {faq.question}
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown className="text-green-500" />
              </motion.div>
            </button>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4 bg-gray-100 text-gray-700"
              >
                {faq.answer}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
