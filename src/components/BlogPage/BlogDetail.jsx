/* eslint-disable react/no-unescaped-entities */

import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const BlogDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const post = location.state;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700">
        <h1>No blog data found.</h1>
      </div>
    );
  }

  // Unique content based on blog id
  const blogContent = {
    1: {
      intro: "Espresso is more than just coffee — its an art form. Discover how our baristas craft the perfect shot with precision and passion.",
      main: `Espresso brewing is a delicate balance of grind size, water temperature, and extraction time. 
      A perfect shot carries a golden crema on top, a rich aroma, and a bold flavor that awakens the senses. 
      At our café, every espresso is prepared with freshly ground beans, ensuring consistency and depth in every sip.`,
      experience: "From bean selection to tamping technique, our baristas treat espresso like a ritual. Each shot is a moment of craftsmanship.",
      conclusion: "Espresso is the heartbeat of coffee culture — strong, bold, and unforgettable."
    },
    2: {
      intro: "Cold Brew has taken the coffee world by storm. Learn why this smooth, refreshing drink is perfect for summer days.",
      main: `Cold brew is steeped slowly in cold water for 12–24 hours, creating a naturally sweet, low‑acid coffee. 
      Unlike iced coffee, its never bitter and carries a smooth, chocolatey undertone. 
      Served chilled, its the ultimate refreshment for warm afternoons.`,
      experience: "Our cold brew blends premium beans with patience. The slow steeping process unlocks hidden flavors and a silky texture.",
      conclusion: "Cold brew isnt just a drink — its a lifestyle choice for those who love smooth energy without the bite."
    },
    3: {
      intro: "Our café is a hub for coders and creators. Explore how coffee fuels creativity and productivity in the digital age.",
      main: `Coffee and coding share a rhythm — long hours, deep focus, and bursts of creativity. 
      A warm cup of cappuccino or latte keeps developers energized while brainstorming solutions. 
      The café atmosphere, buzzing with ideas, makes coffee the silent partner in innovation.`,
      experience: "We believe every coder deserves a perfect brew. Whether debugging or designing, coffee keeps the mind sharp and inspired.",
      conclusion: "Coffee & coding together create more than apps — they create experiences, fueled by passion and caffeine."
    }
  };

  const current = blogContent[post.id];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-brandDark via-[#3d2517] to-black  text-white py-16 px-4 md:px-10">

      {/* BACK BUTTON */}
      <div className="max-w-5xl mx-auto mb-6">
        <button
          onClick={() => navigate("/blog")}
          className="text-white hover:underline font-semibold text-xl"
        >
          ← Back to Blog
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto bg-gradient-to-br from-[#2b140a] to-[#6f4e37] rounded-3xl shadow-2xl overflow-hidden"
      >

        {/* IMAGE */}
        <motion.img
          src={post.img}
          alt={post.title}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-[350px] object-cover"
        />

        {/* CONTENT */}
        <div className="p-6 md:p-10 space-y-6">

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold leading-tight text-[#D4AF37]"
          >
            {post.title}
          </motion.h1>

          {/* META */}
          <p className="text-sm text-gray-300">
            {post.date} • By {post.author}
          </p>

          {/* INTRO CARD */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-black/40 p-6 rounded-xl shadow-lg border border-[#D4AF37]/30"
          >
            <p className="text-lg leading-relaxed text-gray-200">
              {current.intro}
            </p>
          </motion.div>

          {/* MAIN CONTENT */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="leading-relaxed text-gray-200 text-lg"
          >
            {current.main}
          </motion.p>

          {/* EXTRA EXPERIENCE BLOCK */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-r from-[#4b2a1a] to-[#7a5238] p-6 rounded-xl shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#D4AF37]">☕ Coffee Experience</h3>
            <p className="text-gray-200">
              {current.experience}
            </p>
          </motion.div>

          {/* QUOTE */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-black/40 backdrop-blur-md p-6 rounded-xl border-l-4 border-[#D4AF37] italic"
          >
            "Coffee is a language in itself — every sip tells a story."
          </motion.div>

          {/* CONCLUSION */}
          <p className="text-gray-200 leading-relaxed">
            {current.conclusion}
          </p>

        </div>
      </motion.div>
    </div>
  );
};

export default BlogDetail;