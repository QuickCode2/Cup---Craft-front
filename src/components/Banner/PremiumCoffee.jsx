/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // for navigation

const PremiumCoffee = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-tl from-[#1a120b] via-[#3d2517] to-black text-white px-6 py-16">

      {/* HEADER */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-10"
      >
        👑 Premium Coffee Experience
      </motion.h1>

      {/* INTRO */}
      <p className="text-center max-w-3xl mx-auto text-gray-300 text-lg mb-16">
        Indulge in rare coffee blends crafted for true coffee lovers.  
        Our premium selection is roasted with precision, offering bold flavors, 
        velvety textures, and an unforgettable aroma. Coffee here isn't just a drink—it's a royal experience.
      </p>

      {/* FEATURE CARDS */}
      <div className="grid md:grid-cols-3 gap-10 mb-20">
        {["Royal Espresso", "Gold Cappuccino", "Luxury Latte"].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gradient-to-r from-[#3b1d0f] to-[#6f4e37] rounded-2xl shadow-xl"
          >
            <h2 className="text-xl font-bold mb-3">{item}</h2>
            <p className="text-gray-300">Premium handcrafted coffee blend.</p>
          </motion.div>
        ))}
      </div>

      {/* ORDER SECTION */}
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold">Order Your Coffee</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Choose between our exclusive premium collection or a classic normal coffee.  
          Whether you want to treat yourself royally or enjoy a simple cup, we’ve got you covered.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={() => navigate("/menu")}
            className="px-6 py-3 bg-[#6f4e37] text-white rounded-lg font-semibold hover:scale-105 transition"
          >
             👑 Order Premium Coffee
          </button>

          <button
            onClick={() => navigate("/normal-order")}
            className="px-6 py-3 bg-[#3b1d0f] text-white rounded-lg font-semibold hover:scale-105 transition"
          >
            Order Normal Coffee
          </button>
        </div>
      </div>

    </div>
  );
};

export default PremiumCoffee;