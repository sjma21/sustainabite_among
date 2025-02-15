import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Food Blogger",
    review:
      "Sustainabite has completely transformed the way I think about food waste. The AI-powered recipe suggestions are spot-on, helping me create delicious meals from ingredients I already have. Love the smooth UI and ease of use!",
    rating: 5,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Verma",
    role: "Environmental Activist",
    review:
      "I’ve tried several sustainability apps, but Sustainabite stands out with its innovative food donation feature. Now, I can easily share surplus meals with people in need. It’s truly a game-changer in reducing food waste!",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Kapoor",
    role: "Nutritionist",
    review:
      "The smart meal planning feature is perfect for my clients who struggle with meal prep. Sustainabite helps them plan healthy meals while staying mindful of food sustainability. The real-time alerts are a brilliant touch!",
    rating: 4.8,
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Amit Desai",
    role: "Tech Enthusiast",
    review:
      "From the sleek design to the AI-powered insights, everything about Sustainabite is top-notch. The global food trends section keeps me updated on sustainability practices worldwide. A must-have for anyone passionate about food and the planet!",
    rating: 4.9,
    img: "https://randomuser.me/api/portraits/men/29.jpg",
  },
];

const Testimonials = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 animate-fadeIn">🌟 What Our Users Say</h2>
        <p className="mb-12 text-lg opacity-90 animate-fadeIn delay-200">
          Real people. Real impact. Discover how Sustainabite is helping users worldwide make smarter food choices.
        </p>

        <div className="grid md:grid-cols-2 gap-10 animate-slideUp">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`relative cursor-pointer bg-gray-800 bg-opacity-60 backdrop-blur-lg p-8 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-opacity-90 shadow-lg ${
                hoverIndex === index ? "shadow-blue-500/50 scale-110" : "shadow-gray-500/30"
              }`}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center space-x-4">
                <img src={testimonial.img} alt={testimonial.name} className="w-14 h-14 rounded-full border-2 border-blue-400" />
                <div>
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-300">{testimonial.review}</p>
              <div className="flex mt-4">
                {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
                {testimonial.rating % 1 !== 0 && <StarIcon className="h-5 w-5 text-yellow-400 opacity-60" />}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
