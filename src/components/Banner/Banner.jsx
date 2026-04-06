/* eslint-disable react/no-unescaped-entities */

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { GiCoffeeCup } from "react-icons/gi";

import BannerImg from "../../assets/ServiceImg/coffee-white.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { SiCoffeescript } from "react-icons/si";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed in milliseconds
      once: true,
    });
  }, []);
  const navigate = useNavigate();

  return (
    <>
      <span id="about"></span>
      <div
        id="banner"
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${""})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brandDark via-[#3d2517] to-black backdrop-blur-sm"></div>

        <div className="relative min-h-[750px] flex items-center py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

              {/* IMAGE + BUTTONS */}
              <motion.div
                initial={{ opacity: 0, rotateY: 40 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center gap-5 perspective-[1000px] mb-16"
              >
                {/* Coffee Cup Image */}
                <motion.img
                  src={BannerImg}
                  alt="coffee"
                  whileHover={{ scale: 1.1, rotateY: 15 }}
                  transition={{ type: "spring", stiffness: 120 }}
                  className="w-[300px] md:w-[420px] drop-shadow-[20px_20px_40px_rgba(0,0,0,0.9)] spin"
                />

                {/* Buttons under cup */}
                <div className="grid grid-cols-2 gap-6" data-aos="fade-right">
                  <motion.div
                    onClick={() => navigate("/premium-coffee")}
                    whileHover={{ scale: 1.05 }}
                    className="cursor-pointer flex items-center gap-3 bg-gradient-to-r from-brandDark to-white backdrop-blur-md px-4 py-3 rounded-xl shadow-xl"
                  >
                    <GrSecure className="text-2xl text-yellow-400" />
                    <span className="text-lg">Premium Coffee</span>
                  </motion.div>

                  <motion.div
                    onClick={() => navigate("/hot-coffee")}
                    whileHover={{ scale: 1.05 }}
                    className="cursor-pointer flex items-center gap-3 bg-gradient-to-r from-brandDark to-white backdrop-blur-md px-4 py-3 rounded-xl shadow-xl"
                  >
                    <IoFastFood className="text-2xl text-orange-400" />
                    <span className="text-lg">Hot Coffee</span>
                  </motion.div>

                  <motion.div
                    onClick={() => navigate("/cold-coffee")}
                    whileHover={{ scale: 1.05 }}
                    className="cursor-pointer flex items-center gap-3 bg-gradient-to-r from-brandDark to-white backdrop-blur-md px-4 py-3 rounded-xl shadow-xl"
                  >
                    <GiFoodTruck className="text-2xl text-yellow-300" />
                    <span className="text-lg">Cold Coffee</span>
                  </motion.div>

                  <motion.div
                    onClick={() => navigate("/barista-special")}
                    whileHover={{ scale: 1.05 }}
                    className="cursor-pointer flex items-center gap-3 bg-gradient-to-r from-brandDark to-white backdrop-blur-md px-4 py-3 rounded-xl shadow-xl"
                  >
                    <SiCoffeescript className="text-2xl text-yellow-400" />
                    <span className="text-lg">Barista Special</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* TEXT CONTENT + OVERVIEW */}
              <div className="flex flex-col justify-center gap-8 text-white">
                <motion.h1
                  className="text-4xl sm:text-5xl font-bold font-cursive2 leading-tight mb-8"
                  data-aos="fade-down"
                >
                  Premium Blend Coffee Experience 
                <GiCoffeeCup  className="inline text-[#D4AF37] text-5xl ml-2"/>
                </motion.h1>

                <motion.p
                  className="text-gray-300 leading-relaxed text-lg"
                  data-aos="fade-down"
                >
                  Experience coffee like never before. Crafted from the finest beans,
                  roasted to perfection, and served with passion. Every sip delivers
                  warmth, richness, and a story worth remembering.
                </motion.p>

                {/* Overview according to buttons */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-black/40 border border-[#D4AF37]/40 rounded-2xl p-8 shadow-2xl"
                  data-aos="fade-up"
                >
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Explore our curated coffee experiences  
                    <span className="font-semibold"> Premium Coffee </span> 
                    for those who seek richness and elegance,  
                    <span className="font-semibold"> Hot Coffee </span> 
                    to warm your mornings with comfort,  
                    <span className="font-semibold"> Cold Coffee </span> 
                    for refreshing energy on the go,  
                    and the <span className="font-semibold"> Barista Special </span> 
                    — a handcrafted masterpiece for true coffee lovers.  
                    Each choice is designed to elevate your mood, awaken your senses, 
                    and redefine your coffee journey with luxury.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;