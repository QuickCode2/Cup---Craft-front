/* eslint-disable react/no-unescaped-entities */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import HeroPng from "../../assets/coffee2.png";

const Hero = () => {

  useEffect(() => {
  AOS.init({
  duration: 1000, // animation speed (ms)
  once: true,     
  });
  }, []);
  
  const navigate = useNavigate();

  const handleCoffeeAndCode = () => {
    alert("Welcome to Coffee & Code! ☕💻");
  };

  const handleBestCoffee = () => {
    alert("We serve the Best Coffee in town!");
  };

  const handleHeyCoder = () => {
    alert("Hey Coder! Keep brewing ideas with coffee.");
  };

  const handleDiscoverMenu = () => {
    navigate("/menu"); 
  };

  return (
    <>
      {/* Hero Section */}
      <div id="hero" className="min-h-[650px] sm:min-h-[700px] bg-gradient-to-tr from-brandDark via-[#3d2517] to-black  flex justify-center items-center text-white">
        <div className="container py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* text content section */}
            <div
              className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
              data-aos="fade-up"
              data-aos-once="true"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                We serve the richest{" "}
                <span
                  data-aos="zoom-out"
                  data-aos-delay="300"
                  className="bg-gradient-to-r from-[#d7ccc8] to-[#c9694c] bg-clip-text text-transparent font-cursive"
                >
                  Coffee
                </span>{" "}
                in the city
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="350"
                className="text-lg sm:text-xl leading-relaxed max-w-xl mx-auto sm:mx-0"
              >
                Welcome to our cozy coffee haven! Here, every cup is brewed with
                passion and perfection...
              </p>
              <div data-aos="fade-up" data-aos-delay="400">
                <button
                  onClick={handleCoffeeAndCode}
                  className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-white py-2 px-6 rounded-full"
                >
                  Coffee And Code
                </button>
              </div>
            </div>

            {/* Image section */}
            <div
              data-aos="zoom-in"
              data-aos-duration="300"
              className="min-h-[500px] flex justify-center items-center relative order-1 sm:order-2"
            >
              <img
                data-aos-once="true"
                src={HeroPng}
                alt="coffee cup"
                className="w-[320px] sm:w-[480px] sm:scale-110 mx-auto spin"
              />
              <div
                onClick={handleHeyCoder}
                data-aos="fade-left"
                className="cursor-pointer bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute top-10 left-10"
              >
                <h1 className="text-white">Hey Coder</h1>
              </div>
              <div
                onClick={handleBestCoffee}
                data-aos="fade-right"
                data-aos-offset="0"
                className="cursor-pointer bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute bottom-10 right-10"
              >
                <h1 className="text-white">Best Coffee</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extra section with animation */}
      <div className="bg-gradient-to-br from-brandDark via-[#3d2517] to-black  text-white py-16 px-6 sm:px-12">
        <div data-aos="fade-up" data-aos-duration="800" className="max-w-4xl mx-auto">
          <div className="bg-white backdrop-blur-md shadow-xl shadow-black rounded-2xl p-8 sm:p-12 space-y-6 hover:scale-105 transform transition duration-300">
            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-3xl text-brandDark sm:text-4xl font-bold text-center sm:text-left"
            >
            Premium Coffee, Crafted for True Connoisseurs
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-lg text-brandDark leading-relaxed"
            >
            Premium coffee isn't just about taste, it's about exquisite aroma,
            fresh roasting, and ethical sourcing. We deliver a unique experience 
            through high-quality beans, micro-roasting, and sustainable packaging.
            Our focus on freshness and quality ensures a richer, more refined flavor in every sip than ordinary coffee.            </p>
            <div className="flex justify-center sm:justify-start">
              <button
                onClick={handleDiscoverMenu}
                data-aos="zoom-in"
                data-aos-delay="500"
                className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-6 rounded-full shadow-lg hover:scale-110 transition duration-300"
              >
                Premium Coffee
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;