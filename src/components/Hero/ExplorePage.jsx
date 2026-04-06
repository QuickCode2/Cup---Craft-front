// import React from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom"; 

// const ExplorePage = () => {
//     const navigate = useNavigate(); 
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">

//       {/* HERO SECTION */}
//       <div className="flex flex-col items-center justify-center text-center px-6 py-20">
//         <motion.h1
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-5xl md:text-6xl font-bold mb-6"
//         >
//           Explore Our Café ☕
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="max-w-2xl text-lg text-gray-300"
//         >
//           Step into a world of aroma, creativity, and comfort. Our café is not just a place to drink coffee — it's an experience.
//         </motion.p>
//       </div>

//       {/* 3D CARD SECTION */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 pb-20">

//         {["Premium Coffee", "Cozy Workspace", "Community Vibes"].map((title, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ rotateY: 15, rotateX: 10, scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 200 }}
//             className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl shadow-2xl cursor-pointer"
//             style={{ transformStyle: "preserve-3d" }}
//           >
//             <h2 className="text-2xl font-bold mb-4 text-[#c69c6d]">{title}</h2>
//             <p className="text-gray-300">
//               Experience the best of {title.toLowerCase()} with our carefully crafted environment designed for comfort and inspiration.
//             </p>
//           </motion.div>
//         ))}

//       </div>

//       {/* PARALLAX SECTION */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="px-6 md:px-20 py-20 text-center"
//       >
//         <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
//         <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
//           From espresso shots to creamy lattes and freshly baked pastries — every detail is made with passion. Whether you're coding, chilling, or meeting friends, our café gives you a perfect vibe.
//         </p>
//       </motion.div>

//       {/* FLOATING ELEMENTS */}
//       <motion.div
//         animate={{ y: [0, -20, 0] }}
//         transition={{ repeat: Infinity, duration: 4 }}
//         className="absolute top-20 left-10 w-20 h-20 bg-[#c69c6d] rounded-full blur-2xl opacity-30"
//       />

//       <motion.div
//         animate={{ y: [0, 20, 0] }}
//         transition={{ repeat: Infinity, duration: 5 }}
//         className="absolute bottom-20 right-10 w-28 h-28 bg-yellow-400 rounded-full blur-3xl opacity-20"
//       />

//       {/* CTA SECTION */}
//       <div className="text-center pb-20">
//         <motion.button
//           onClick={() => navigate("/menu")} // ✅ now works
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           className="px-8 py-3 bg-[#c69c6d] text-black font-semibold rounded-full shadow-lg"
//         >
//           Discover Menu
//         </motion.button>
//       </div>

//     </div>
//   );
// };

// export default ExplorePage;
