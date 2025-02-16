// "use client"; // Required for Next.js App Router

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { Menu, X } from "lucide-react"; // Using Lucide icons


// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-slate-900 bg-opacity-80 backdrop-blur-md shadow-md z-50">
//       <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold text-green-400">
//           Sustainabite
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6 items-center">
//           <NavLink href="/">Home</NavLink>
//           <NavLink href="/recipes">Recipes</NavLink>
//           <NavLink href="/meal-plans">Meal Plans</NavLink>
//           <NavLink href="/donate">Food Donation</NavLink>

//           {/* Login/Signup Buttons */}
//           <div className="ml-4 flex space-x-4">
//           <Link href="/login">
//   <button className="px-4 py-2 text-white border border-green-400 rounded-lg hover:bg-green-600 transition">
//     Login
//   </button>
// </Link>


//             <Link href="/signup">
//               <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
//                 Sign Up
//               </button>
//             </Link>
//           </div>
//         </div>

//         {/* Mobile Menu Button */}
//         <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//           className="md:hidden bg-slate-900 text-white text-center py-4 space-y-4"
//         >
//           <MobileNavLink href="/" setIsOpen={setIsOpen}>Home</MobileNavLink>
//           <MobileNavLink href="/recipes" setIsOpen={setIsOpen}>Recipes</MobileNavLink>
//           <MobileNavLink href="/meal-plans" setIsOpen={setIsOpen}>Meal Plans</MobileNavLink>
//           <MobileNavLink href="/donate" setIsOpen={setIsOpen}>Food Donation</MobileNavLink>

//           {/* Mobile Login/Signup */}
//           <div className="mt-4 flex flex-col space-y-3">
//             <Link href="/login">
//               <button className="px-4 py-2 w-40 border border-green-400 text-white rounded-lg hover:bg-green-600 transition" onClick={() => setIsOpen(false)}>
//                 Login
//               </button>
//             </Link>
//             <Link href="/signup">
//               <button className="px-4 py-2 w-40 bg-green-500 text-white rounded-lg hover:bg-green-600 transition" onClick={() => setIsOpen(false)}>
//                 Sign Up
//               </button>
//             </Link>
//           </div>
//         </motion.div>
//       )}
//     </nav>
//   );
// }

// // Desktop Nav Links
// const NavLink = ({ href, children }) => (
//   <Link href={href} className="text-gray-300 hover:text-green-400 transition">
//     {children}
//   </Link>
// );

// // Mobile Nav Links
// const MobileNavLink = ({ href, children, setIsOpen }) => (
//   <Link href={href} onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-green-400 transition">
//     {children}
//   </Link>
// );




// navbar after implementing user dashboard

"use client"; // Required for Next.js App Router

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Using Lucide icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900 bg-opacity-80 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-green-400">
          Sustainabite
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/recipes">Recipes</NavLink>
          <NavLink href="/meal-plans">Meal Plans</NavLink>
          <NavLink href="/donate">Food Donation</NavLink>

          {/* ✅ Add User Dashboard Link */}
          <NavLink href="/dashboard" className="font-semibold text-green-400">
            User Dashboard
          </NavLink>

          {/* Login/Signup Buttons */}
          <div className="ml-4 flex space-x-4">
            <Link href="/login">
              <button className="px-4 py-2 text-white border border-green-400 rounded-lg hover:bg-green-600 transition">
                Login
              </button>
            </Link>
            <Link href="/signup">
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                Sign Up
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-slate-900 text-white text-center py-4 space-y-4"
        >
          <MobileNavLink href="/" setIsOpen={setIsOpen}>Home</MobileNavLink>
          <MobileNavLink href="/recipes" setIsOpen={setIsOpen}>Recipes</MobileNavLink>
          <MobileNavLink href="/meal-plans" setIsOpen={setIsOpen}>Meal Plans</MobileNavLink>
          <MobileNavLink href="/donate" setIsOpen={setIsOpen}>Food Donation</MobileNavLink>

          {/* ✅ Add User Dashboard to Mobile Menu */}
          <MobileNavLink href="/dashboard" setIsOpen={setIsOpen}>
            User Dashboard
          </MobileNavLink>

          {/* Mobile Login/Signup */}
          <div className="mt-4 flex flex-col space-y-3">
            <Link href="/login">
              <button className="px-4 py-2 w-40 border border-green-400 text-white rounded-lg hover:bg-green-600 transition" onClick={() => setIsOpen(false)}>
                Login
              </button>
            </Link>
            <Link href="/signup">
              <button className="px-4 py-2 w-40 bg-green-500 text-white rounded-lg hover:bg-green-600 transition" onClick={() => setIsOpen(false)}>
                Sign Up
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

// Desktop Nav Links
const NavLink = ({ href, children }) => (
  <Link href={href} className="text-gray-300 hover:text-green-400 transition">
    {children}
  </Link>
);

// Mobile Nav Links
const MobileNavLink = ({ href, children, setIsOpen }) => (
  <Link href={href} onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-green-400 transition">
    {children}
  </Link>
);
