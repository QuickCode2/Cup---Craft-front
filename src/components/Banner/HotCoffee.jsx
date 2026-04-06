
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HotCoffee = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen  bg-gradient-to-tl from-[#1a120b] via-[#3d2517] to-black text-white px-6 py-16">

      {/* HEADER */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-10 text-[#facc15]"
      >
        🔥 Hot Coffee Collection
      </motion.h1>

      {/* INTRO */}
      <p className="text-center max-w-3xl mx-auto text-gray-200 text-lg mb-16">
        Experience the warmth of freshly brewed hot coffee.  
        Our collection ranges from bold espressos to creamy lattes, each cup 
        designed to energize your mornings and comfort your evenings.  
        With rich aroma and smooth taste, hot coffee is the soul of every café.
      </p>

      {/* FEATURE CARDS */}
      <div className="grid md:grid-cols-2 gap-10 mb-20">
        {["Espresso", "Americano", "Cappuccino", "Latte"].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gradient-to-r from-[#6f4e37] to-[#b87333] rounded-xl shadow-lg border border-[#facc15]"
          >
            <h2 className="text-xl font-bold text-[#ffe4b5]">{item}</h2>
            <p className="text-gray-100 mt-2">Freshly brewed hot coffee.</p>
          </motion.div>
        ))}
      </div>

      {/* ORDER SECTION */}
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-[#facc15]">Order Your Hot Coffee</h2>
        <p className="text-gray-200 max-w-2xl mx-auto">
          Choose your favorite hot coffee and place an order instantly.  
          Whether you love a strong espresso or a smooth cappuccino, we’ll deliver it fresh and hot to your doorstep.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={() => navigate("/normal-order")}
            className="px-6 py-3 bg-[#844b16] text-white rounded-lg font-semibold hover:scale-105 transition"
          >
            Order Normal Coffee
          </button>

          <button
            onClick={() => navigate("/menu")}
            className="px-6 py-3 bg-[#3f200b] text-white rounded-lg font-semibold hover:scale-105 transition"
          >
            Order Premium Coffee 👑
          </button>
        </div>
      </div>

    </div>
  );
};

export default HotCoffee;