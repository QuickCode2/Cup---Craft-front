import { useState, useEffect } from "react";
import { GiCoffeeBeans } from "react-icons/gi";

import Espresso from "../../assets/PhotoGallery/Espresso1.webp";
import Americano from "../../assets/PhotoGallery/Americano.avif";
import Cappuccino from "../../assets/PhotoGallery/Cappuccino.jpg";
import Latte from "../../assets/PhotoGallery/latte-art.webp";
import Mocha from "../../assets/PhotoGallery/Mocha1.jpg";
import IcedCoffee from "../../assets/PhotoGallery/Cold-coffee.jpg";
import ColdBrew from "../../assets/PhotoGallery/ColdBrew.jpg";
import FlatWhite from "../../assets/PhotoGallery/FlatWhite.webp";
import BlackCoffee from "../../assets/PhotoGallery/BlackCoffee.jpeg";
import FilterCoffee from "../../assets/PhotoGallery/FilterCoffee.jpg";
import Macchiato from "../../assets/PhotoGallery/MacchiatoCoffee.webp";

const coffees = [
  { title: "Espresso", desc: "Strong and bold coffee shot.", img: Espresso },
  { title: "Americano", desc: "Smooth diluted espresso.", img: Americano },
  { title: "Cappuccino", desc: "Perfect milk foam balance.", img: Cappuccino },
  { title: "Latte", desc: "Creamy and smooth texture.", img: Latte },
  { title: "Mocha", desc: "Chocolate infused coffee.", img: Mocha },
  { title: "Iced Coffee", desc: "Cool and energizing.", img: IcedCoffee },
  { title: "Cold Brew", desc: "Slow-steeped, smooth and refreshing.", img: ColdBrew },
  { title: "Flat White", desc: "Velvety microfoam with espresso.", img: FlatWhite },
  { title: "Black Coffee", desc: "Pure, bold, and aromatic.", img: BlackCoffee },
  { title: "Filter Coffee", desc: "Classic Indian style brew.", img: FilterCoffee },
  { title: "Macchiato", desc: "Espresso topped with milk foam.", img: Macchiato },
];

const CoffeeGallery = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % coffees.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + coffees.length) % coffees.length);
  };

  // Auto-play 
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // 4 seconds 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div id="CoffeeGallery" className="bg-gradient-to-tr from-brandDark via-[#3d2517] to-black text-white py-16 px-6 relative">
      {/* Heading + Overview */}
      <div className="text-center mb-14">
        <h1 className="flex items-center justify-center gap-3 text-4xl md:text-5xl font-cursive font-bold mb-10">
          Our Coffee Gallery
          <GiCoffeeBeans className="text-[#D4AF37] text-5xl" />
        </h1>
        <p className="mt-4 max-w-6xl mx-auto text-gray-300 text-lg leading-relaxed">
          Discover the artistry behind every cup. From the bold intensity of
          <span className="font-semibold"> Espresso </span>
          to the creamy elegance of
          <span className="font-semibold"> Latte</span>, our collection celebrates coffee in all its forms. 
          Whether you crave the chocolate‑kissed warmth of
          <span className="font-semibold"> Mocha</span>, the refreshing chill of
          <span className="font-semibold"> Iced Coffee</span>, or the smooth indulgence of
          <span className="font-semibold"> Cold Brew</span>, each sip is crafted to deliver comfort, luxury, and pure indulgence.
        </p>
      </div>

      {/* Slideshow */}
      <div
        className="relative w-full h-[600px] mx-auto rounded-xl overflow-hidden shadow-2xl"
        style={{ maxWidth: "1200px" }}
      >
        <div
          className="absolute inset-0 transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${coffees[current].img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
        </div>

        {/* Content */}
        <div className="absolute bottom-16 left-0 right-0 text-center px-6">
          <h2 className="text-4xl font-semibold text-[#D4AF37] drop-shadow-lg animate-fadeIn">
            {coffees[current].title}
          </h2>
          <p className="mt-3 text-lg text-white bg-black bg-opacity-60 font-sans max-w-xl mx-auto animate-slideUp">
            {coffees[current].desc}
          </p>
        </div>

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute md:left-6 left-1 top-1/2 transform -translate-y-1/2 hover:bg-neutral-800 text-white px-4 py-2 rounded-full shadow-lg hover:scale-110 transition"
        >
          ◀
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute md:right-6 right-1 top-1/2 transform -translate-y-1/2 hover:bg-neutral-800 text-white px-4 py-2 rounded-full shadow-lg hover:scale-110 transition"
        >
          ▶
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
          {coffees.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition ${
                i === current ? "bg-[#D4AF37]" : "bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoffeeGallery;