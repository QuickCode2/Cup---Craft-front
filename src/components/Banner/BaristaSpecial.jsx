
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SiCoffeescript } from "react-icons/si";


const BaristaSpecial = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-t from-[#1a120b] via-[#3d2517] to-black text-white px-6 py-16">

      {/* HEADER */}
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="text-5xl font-bold text-center mb-10 text-[#fbbf24]"
      >
      <SiCoffeescript className="inline mr-3 text-5xl text-white"/>
         Barista Special Creations
      </motion.h1>

      {/* INTRO */}
      <p className="text-center max-w-3xl mx-auto text-gray-200 text-lg mb-16">
        Welcome to our Barista’s Special corner.  
        Here, coffee is not just brewed—it’s crafted with artistry.  
        From caramel-infused delights to chocolate velvet blends, every sip is a masterpiece.  
        These creations are designed for those who crave something unique, indulgent, and unforgettable.
      </p>

      {/* FEATURE CARDS */}
      <div className="space-y-8 max-w-3xl mx-auto mb-20">
        {[
          "Signature Espresso Blend",
          "Caramel Cream Delight",
          "Chocolate Velvet Coffee",
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-gradient-to-r from-[#30190e] to-[#7a5238] rounded-xl shadow-xl border border-[#fbbf24]"
          >
            <h2 className="text-xl font-bold text-[#ffe4b5]">{item}</h2>
            <p className="text-gray-100 mt-2">
              Crafted by expert baristas with precision.
            </p>
          </motion.div>
        ))}
      </div>

      {/* ORDER SECTION */}
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-[#fbbf24]">Order Barista Specials</h2>
        <p className="text-gray-200 max-w-2xl mx-auto">
          Treat yourself to our barista’s signature creations.  
          Whether you want a caramel delight or a chocolate velvet indulgence, place your order now and enjoy café-style luxury at home.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={() => navigate("/normal-order")}
            className="px-6 py-3 bg-[#57291d] hover:shadow-black shadow-md text-white rounded-lg font-semibold hover:scale-105 transition"
          >
            Order Normal Coffee
          </button>

          <button
            onClick={() => navigate("/menu")}
            className="px-6 py-3  bg-[#61381f6c]  text-white rounded-lg font-semibold hover:scale-105 transition"
          >
            Order Premium Coffee 👑
          </button>
        </div>
      </div>

    </div>
  );
};

export default BaristaSpecial;