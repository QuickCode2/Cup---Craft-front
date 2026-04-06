// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Logo from "../../assets/website/coffee_logo.png";
import { FaCoffee } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi"; // hamburger icon
import { IoClose } from "react-icons/io5"; // close icon

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Services", link: "/services" },
  { id: 3, name: "About", link: "/banner" },
  { id: 4, name: "Blog", link: "/blog" },
  { id: 5, name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-[#2a1a0f] via-[#3d2517] to-[#5c4033] text-white shadow-2xl w-full">
      <div className="container py-3">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-3 tracking-wider font-cursive hover:scale-105 transition-transform duration-300"
            >
              <img
                src={Logo}
                alt="Logo"
                className="w-14 drop-shadow-lg hover:rotate-6 transition-transform duration-300"
              />
              <span className="inline-block leading-none text-2xl sm:text-3xl bg-gradient-to-b from-[#d7ccc8] to-[#e0b09f] bg-clip-text text-transparent">
                Cup & Craft Cafe
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center gap-4">
            <ul className="flex items-center gap-4">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <NavLink
                    to={menu.link}
                    className={({ isActive }) =>
                      `inline-block text-lg py-2 px-4 transition-all duration-300 ease-in-out  ${
                        isActive
                          ? "bg-gradient-to-r from-[#d7ccc8] to-[#e49173] bg-clip-text text-transparent  font-semibold"
                          : "text-white/80 hover:text-[#d7ccc8] hover:scale-110"
                      }`
                    }
                  >
                    {menu.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Order Button */}
           <NavLink
              to="/order"
              className={({ isActive }) =>
                `bg-gradient-to-r from-primary to-secondary border-2 border-primary
                duration-300 ease-in-out text-white px-5 py-2 
                rounded-full flex items-center gap-3 transform transition-all 
                hover:scale-110 ${
                  isActive
                    ? "border-2 border-white font-semibold shadow-[0_0_20px_#ff7247]"
                    : ""
                }`
              }
            >
              <span className="font-semibold">Order</span>
              <FaCoffee className="text-xl text-[#d7ccc8] drop-shadow-md" />
            </NavLink>
          </div>

          {/* Mobile Hamburger */}
          <div className="sm:hidden flex items-center">
            <button onClick={() => setOpen(!open)} className="text-3xl">
              {open ? <IoClose /> : <GiHamburgerMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="sm:hidden bg-[#3b2f2f] text-white shadow-lg">
          <ul className="flex flex-col items-center gap-4 py-6">
            {Menu.map((menu) => (
              <li key={menu.id}>
                <NavLink
                  to={menu.link}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block text-lg py-2 px-4 transition-all duration-300 ${
                      isActive
                        ? "text-[#d7ccc8] font-semibold"
                        : "text-white/80 hover:text-[#d7ccc8]"
                    }`
                  }
                >
                  {menu.name}
                </NavLink>
              </li>
            ))}
            {/* Order Button */}
            <Link
              to="/order"
              onClick={() => setOpen(false)}
              className="bg-gradient-to-r from-[#4e342e] to-[#8d6e63] text-white px-5 py-2 rounded-full flex items-center gap-3 hover:scale-105 transition"
            >
              <span className="font-semibold">Order</span>
              <FaCoffee className="text-xl text-[#d7ccc8]" />
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;