import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import FooterBg from "../../assets/website/coffee-footer.jpg";
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";


const FooterLinks = [
  { title: "Home", link: "/hero" },
  { title: "About", link: "/banner" },
  { title: "Services", link: "/services" },
  { title: "Blog", link: "/blog" },
  { title: "CoffeeGallery", link: "/coffeegallery" },
];

const QuickLinks = [
  { title: "Contact", link: "/contact" },
  { title: "Order Coffee", link: "/order" },
  { title: "Premium Menu", link: "/menu" },
  { title: "Admin", link: "/admin" },
];

const Footer = () => {
  const bgImage = {
    backgroundImage: `url(${FooterBg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "300px",
    width: "100%",
  };

  return (
    <div id="footer" style={bgImage} className="text-white">
      <div className="bg-black/40 min-h-[200px] flex items-center">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          {/* Company details */}
          <div className="py-8 px-4">
            <Link
              to="/"
            className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive"
            >
              Coffee Cafe
            </Link>
            <p className="pt-4 ">
              Coffee Cafe brings you handcrafted brews, cozy vibes,
              and unforgettable moments. Now your favorite café experience
              is just a tap away — available on Android & iOS for your daily
              coffee escape.
            </p>
       
             {/* App Availability Section */}
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-6 mt-4">
            <a href="#" className="transform transition duration-500 hover:scale-110 hover:rotate-3">
              <img
                src={PlayStoreImg}
                alt="Play store"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px] drop-shadow-2xl"
              />
            </a>
            <a href="#" className="transform transition duration-500 hover:scale-110 hover:-rotate-3">
              <img
                src={AppStoreImg}
                alt="App store"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px] drop-shadow-2xl"
              />
            </a>
          </div>
         </div>

          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            {/* Important Links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <Link
                      to={data.link}
                      className="inline-block hover:scale-105 duration-200"
                    >
                      {data.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {QuickLinks.map((data, index) => (
                  <li key={index}>
                    <Link
                      to={data.link}
                      className="inline-block hover:scale-105 duration-200"
                    >
                      {data.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Address
              </h1>
              <div>
                <p className="mb-3">The Tower Of Liberty, Kota Rajasthan</p>
                <p>+91 8905093477</p>

                {/* Social links */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="https://www.instagram.com/nitesh_ahiniya2">
                    <FaInstagram className="text-3xl hover:text-stone-800 duration-300" />
                  </a>
                  <a href="https://www.facebook.com/niteshahiniya">
                    <FaFacebook className="text-3xl hover:text-stone-800 duration-200" />
                  </a>
                  <a href="https://www.linkedin.com/in/nitesh-ahiniya-6b745a2b7">
                    <FaLinkedin className="text-3xl hover:text-stone-800 duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;