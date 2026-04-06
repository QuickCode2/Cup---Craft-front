
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ColdCoffee = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen  bg-gradient-to-tl from-[#1a120b] via-[#3d2517] to-black text-white px-6 py-16">

      {/* HEADER */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-10 text-[#7dd3fc]"
      >
        🧊 Cold Coffee Vibes
      </motion.h1>

      {/* INTRO */}
      <p className="text-center max-w-3xl mx-auto text-gray-200 text-lg mb-16">
        Refresh yourself with our chilled coffee collection.  
        From smooth iced lattes to bold cold brews, each sip is crafted to cool you down 
        and energize your day. Cold coffee isn’t just a drink—it’s a vibe of relaxation and freshness.
      </p>

      {/* FEATURE CARDS */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {["Cold Brew", "Iced Latte", "Mocha Shake"].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08 }}
            className="p-6 bg-gradient-to-r from-[#1e3a5f] to-[#256d85] rounded-xl shadow-xl border border-[#7dd3fc]"
          >
            <h2 className="text-xl font-bold text-[#e0f7fa]">{item}</h2>
            <p className="text-gray-100 mt-2">Cool & refreshing drinks.</p>
          </motion.div>
        ))}
      </div>

      {/* ORDER SECTION */}
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-[#7dd3fc]">Order Your Cold Coffee</h2>
        <p className="text-gray-200 max-w-2xl mx-auto">
          Pick your favorite cold coffee and enjoy the chill.  
          Whether you want a creamy iced latte or a bold cold brew, we’ll deliver it fresh and icy to your doorstep.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={() => navigate("/normal-order")}
            className="px-6 py-3 bg-[#256d85] text-white rounded-lg font-semibold hover:scale-105 transition"
          >
            Order Normal Coffee
          </button>

          <button
            onClick={() => navigate("/menu")}
            className="px-6 py-3 bg-[#1e3a5f] text-white rounded-lg font-semibold hover:scale-105 transition"
          >
            Order Premium Coffee 👑
          </button>
        </div>
      </div>

    </div>
  );
};

export default ColdCoffee;