import { motion } from "framer-motion";

const partners = [
  { name: "EcoFund", logo: "/images/eco.png" },
  { name: "GreenFuture", logo: "/images/green.png" },
  { name: "SustainaTech", logo: "/images/sustain.png" },
  { name: "EarthCare", logo: "/images/earthcare.png" },
  { name: "NatureFirst", logo: "/images/naturefirst.png" },
  { name: "GoGreen", logo: "/images/gogreen.png" },
];

const leaves = new Array(10).fill(0).map((_, i) => ({
    id: i,
    x: Math.random() * 100, // Random horizontal position
    delay: Math.random() * 5, // Random delay
    duration: 5 + Math.random() * 5, // Random speed
  }));
  
  export default function Partners() {
    return (
      <div className="relative py-16 px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        
        {/* Floating Leaves Background */}
        {leaves.map((leaf) => (
          <motion.div
            key={leaf.id}
            initial={{ y: "-10vh", opacity: 0 }}
            animate={{ y: "100vh", opacity: 1 }}
            transition={{
              duration: leaf.duration,
              delay: leaf.delay,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute"
            style={{
              left: `${leaf.x}%`,
              fontSize: "24px",
              color: "rgba(34,197,94,0.6)",
            }}
          >
            🍃
          </motion.div>
        ))}
  
        <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
          
          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-green-400">Our Partners</h2>
            <p className="text-gray-300 mb-6">
              We collaborate with amazing organizations dedicated to sustainability and green initiatives. 
              Together, we create a lasting impact on the environment.
            </p>
            <p className="text-gray-400">
              Want to partner with us? <a href="/contact" className="text-green-400 hover:underline">Get in touch</a>.
            </p>
          </div>
  
          {/* Right Side: Partner Logos */}
          <div className="grid grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="p-4 rounded-lg bg-opacity-20 backdrop-blur-lg shadow-lg border border-gray-700 flex items-center justify-center"
              >
                <img src={partner.logo} alt={partner.name} className="w-24 h-24 object-contain" />
              </motion.div>
            ))}
          </div>
  
        </div>
      </div>
    );
  }
