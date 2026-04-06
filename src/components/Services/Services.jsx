// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CiCoffeeBean } from "react-icons/ci";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


import EspressoImg from "../../assets/ServiceImg/EspressoImg.webp";
import Cappuccino from "../../assets/ServiceImg/CappuccinoImg.webp";
import LatteImg from "../../assets/ServiceImg/LatteImg.webp";
import MochaImg from "../../assets/ServiceImg/MochaImg.jpg";
import ColdBrewImg from "../../assets/ServiceImg/ColdBrewImg.webp";
import FlatWhiteImg from "../../assets/ServiceImg/coffee-white.png";
import BlackCoffeeImg from "../../assets/ServiceImg/blackCoffee.webp";
import FilterCoffeeImg from "../../assets/ServiceImg/FilterCoffee.webp";
import MacchiatoImg from "../../assets/ServiceImg/Macchiato.jpg";

const coffeeData = [
  { id: 1, name: "Espresso", price: "₹100 - ₹200+", img: EspressoImg },
  { id: 2, name: "Cappuccino", price: "₹150 - ₹250+", img: Cappuccino },
  { id: 3, name: "Latte", price: "₹100 - ₹250+", img: LatteImg },
  { id: 4, name: "Mocha", price: "₹200 - ₹350+", img: MochaImg },
  { id: 5, name: "Cold Brew", price: "₹200 - ₹300+", img: ColdBrewImg },
  { id: 6, name: "Flat White", price: "₹180 - ₹250+", img: FlatWhiteImg },
  { id: 7, name: "Black Coffee", price: "₹100 - ₹150+", img: BlackCoffeeImg },
  { id: 8, name: "Filter Coffee", price: "₹100 - ₹200+", img: FilterCoffeeImg },
  { id: 9, name: "Macchiato", price: "₹100 - ₹250+", img: MacchiatoImg },
];

const Services = () => {
  useEffect(() => {
  AOS.init({
  duration: 1000, 
  once: true,     
  });
  }, []);
  const navigate = useNavigate();

  const handleOrderCoffee = (coffeeName) => {
    console.log("Navigating:", coffeeName);
    navigate("/order", { state: { coffee: coffeeName } });
  };

  return (
    <div id="services" className="min-h-screen bg-gradient-to-br from-brandDark via-[#3d2517] to-black py-16 px-6">

    {/* HEADER */}
    <div className="text-center mb-14" data-aos="fade-down" data-aos-delay="500">
      <h1 className="text-5xl font-bold font-cursive2 text-white drop-shadow-lg">
        Choose your favorite coffee and order instantly
        <CiCoffeeBean className="inline text-[#D4AF37] text-6xl"/>   
      </h1>

  {/* OVERVIEW */}
      <div className="mt-8 max-w-6xl mx-auto">
        <p className="text-gray-300 text-lg leading-relaxed bg-black/40 p-6 rounded-2xl shadow-lg">
          Step into a world where every cup tells a story. 
          From the bold kick of <span className=" font-semibold"> Espresso </span> 
          to the creamy smoothness of <span className="font-semibold"> Latte </span>
          our menu is crafted to suit every mood and moment. 
          Whether your seeking comfort in a warm <span className="font-semibold"> Cappuccino </span> 
          indulging in the chocolate‑rich <span className="font-semibold"> Mocha </span>
          or refreshing yourself with a chilled <span className="font-semibold"> Cold Brew </span>
          each sip is designed to deliver luxury and satisfaction. 
          Explore, select, and savor — your perfect coffee experience is just one click away.
        </p>
      </div>
    </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto"
       data-aos="fade-up" data-aos-delay="350">
        {coffeeData.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-3xl group"
          >

            {/* IMAGE */}
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-[300px] object-cover rounded-3xl group-hover:scale-110 transition duration-500"
            />

            {/* OVERLAY FIX */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition pointer-events-none"></div>

            {/* CONTENT */}
            <div className="absolute bottom-0 p-6 w-full text-center z-10">
              <h2 className="text-2xl font-bold text-white">{item.name}</h2>
              <p className="text-[#f5e6d3] mt-1">{item.price}</p>

              <button
                onClick={() => handleOrderCoffee(item.name)}
                className="mt-3 px-5 py-2 bg-[#c69c6d] text-black font-semibold rounded-full hover:scale-110 transition relative z-20"
              >
                Order Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
