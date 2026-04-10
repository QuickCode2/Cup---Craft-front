import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import FooterBg from "../../assets/website/coffee-footer.jpg";
import { GiOpeningShell } from "react-icons/gi";

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
          <p className="pt-4 text-sm sm:text-base leading-relaxed">
          At <span className="font-semibold">Coffee Cafe</span>, every cup is a story.  
          From bold espressos to creamy lattes, we blend comfort and luxury in every sip.  
          Nestled in Kota, Rajasthan — your daily coffee escape awaits.
          </p>


        {/* Premium Opening Hours Section */}
        <div className="mt-6 bg-gradient-to-r from-[#2a1a0f]/70 to-[#5c4033]/70 
             p-5 rounded-lg shadow-lg border border-[#d7ccc8]/30">
          <h2 className="text-xl font-semibold mb-4 text-[#d7ccc8]">
             <GiOpeningShell  className="inline text-2xl text-yellow-400 mr-2"/>
              Golden Hours - Fresh Brews Await!
          </h2>
          <ul className="space-y-2 text-sm sm:text-base">
            <li className="flex justify-between">
              <span>Monday - Friday</span>
              <span className="font-medium">8:00 AM - 10:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday</span>
              <span className="font-medium">9:00 AM - 11:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span>
              <span className="font-medium">9:00 AM - 8:00 PM</span>
            </li>
          </ul>
          <p className="mt-4 text-xs italic text-white/70">
            ✨ Visit us during our golden hours for the freshest brews and cozy vibes.
          </p>
        </div>
        </div>

          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            {/* Important Links */}
            <div className="py-20 px-10">
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
            <div className="py-20 px-4">
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
            <div className="py-20 px-4 col-span-2 sm:col-auto">
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
