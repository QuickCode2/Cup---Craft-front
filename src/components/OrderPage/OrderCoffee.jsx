/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BiSolidCoffeeTogo } from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";




const coffeeMenu = [
  { name: "Single Espresso", type: "Espresso", price: 100 },
  { name: "Double Espresso", type: "Espresso", price: 200 },

  { name: "Latte", type: "Latte", price: 150 },
  { name: "Cold Latte", type: "Latte", price: 170 },
  { name: "Vanilla Latte", type: "Latte", price: 190 },

  { name: "Cappuccino", type: "Cappuccino", price: 100 },
  { name: "Classic Cappuccino", type: "Cappuccino", price: 180 },
  { name: "Flavoured Cappuccino", type: "Cappuccino", price: 220 },

  { name: "Americano", type: "Americano", price: 150 },
  { name: "Hot Americano", type: "Americano", price: 220 },

  { name: "Mocha", type: "Mocha", price: 165 },
  { name: "White Mocha", type: "Mocha", price: 305 },

  { name: "Cold Brew", type: "Cold Brew", price: 150 },
  { name: "Premium Cold Brew", type: "Cold Brew", price: 250 },

  { name: "Flat White", type: "Flat White", price: 220 },
  { name: "Macchiato", type: "Macchiato", price: 180 },
  { name: "Filter Coffee", type: "Filter Coffee", price: 100 },

  { name: "Affogato", type: "Affogato", price: 320 },
  { name: "Irish Coffee", type: "Irish Coffee", price: 280 },
  { name: "Turkish Coffee", type: "Turkish Coffee", price: 260 },
  { name: "Cortado", type: "Cortado", price: 210 },
  { name: "Ristretto", type: "Ristretto", price: 180 },
  { name: "Lungo", type: "Lungo", price: 190 },
  { name: "Doppio", type: "Doppio", price: 230 },
  { name: "Iced Coffee", type: "Iced Coffee", price: 200 },

  // Espresso Variants
  { name: "Single Espresso", type: "Espresso", price: 100 },
  { name: "Double Espresso", type: "Espresso", price: 200 },

  // Latte Variants
  { name: "Latte", type: "Latte", price: 150 },
  { name: "Cold Latte", type: "Latte", price: 170 },
  { name: "Vanilla Latte", type: "Latte", price: 190 },

  // Cappuccino Variants
  { name: "Cappuccino", type: "Cappuccino", price: 100 },
  { name: "Classic Cappuccino", type: "Cappuccino", price: 180 },
  { name: "Flavoured Cappuccino", type: "Cappuccino", price: 220 },

  // Americano Variants
  { name: "Americano", type: "Americano", price: 150 },
  { name: "Hot Americano", type: "Americano", price: 220 },

  // Mocha Variants
  { name: "Mocha", type: "Mocha", price: 165 },
  { name: "White Mocha", type: "Mocha", price: 305 },

  // Cold Brew 
  { name: "Cold Brew", type: "Cold Brew", price: 150 },
  { name: "Premium Cold Brew", type: "Cold Brew", price: 250 },

  // Other Classics
  { name: "Flat White", type: "Flat White", price: 220 },
  { name: "Macchiato", type: "Macchiato", price: 180 },
  { name: "Filter Coffee", type: "Filter Coffee", price: 100 },
  { name: "Affogato", type: "Affogato", price: 320 },
  { name: "Irish Coffee", type: "Irish Coffee", price: 280 },
  { name: "Turkish Coffee", type: "Turkish Coffee", price: 260 },
  { name: "Cortado", type: "Cortado", price: 210 },
  { name: "Ristretto", type: "Ristretto", price: 180 },
  { name: "Lungo", type: "Lungo", price: 190 },
  { name: "Doppio", type: "Doppio", price: 230 },
  { name: "Iced Coffee", type: "Iced Coffee", price: 200 },

  // Hot Coffee 
  { name: "Espresso", type: "Hot Coffee", price: 150 },
  { name: "Americano", type: "Hot Coffee", price: 180 },
  { name: "Cappuccino", type: "Hot Coffee", price: 200 },
  { name: "Latte", type: "Hot Coffee", price: 220 },

  // Cold Coffee 
  { name: "Cold Brew", type: "Cold Coffee", price: 250 },
  { name: "Iced Latte", type: "Cold Coffee", price: 270 },
  { name: "Mocha Shake", type: "Cold Coffee", price: 300 },

  // Barista Special
  { name: "Signature Espresso Blend", type: "Barista Special", price: 350 },
  { name: "Caramel Cream Delight", type: "Barista Special", price: 400 },
  { name: "Chocolate Velvet Coffee", type: "Barista Special", price: 450 },
];



const OrderCoffee = () => {
  const location = useLocation();
  const navigate = useNavigate();


  const [selected, setSelected] = useState(
    coffeeMenu.find(item => item.type === location.state?.coffee) || null
  );

  const [form, setForm] = useState({
    name: "",
    email: "", 
    quantity: 1,
    address: "",
  });

  const [loading, setLoading] = useState(false); 


  const handleDropdownChange = (e) => {
    const item = coffeeMenu.find(c => c.name === e.target.value);
    setSelected(item);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const totalPrice = selected ? selected.price * form.quantity : 0;


  const handleSubmit = async (e) => {
    e.preventDefault();

  if (!selected) {
    toast.error("Please select a coffee ☕");
    return;
  }

  setLoading(true);
  const toastId = toast.loading("Sending message... ⏳");

  try {
    const response = await fetch("https://cup-craft-1back.vercel.app/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customerName: form.name,
        email: form.email,
        coffeeName: selected.name,
        coffeeType: "Normal",
        qty: Number(form.quantity),
        total: totalPrice,
        address: form.address,
      }),
    });


    if (response.ok) {
      toast.success("☕ Your Order successful!", {
        id: toastId,
      });

      setForm({
        name: "",
        email: "",
        quantity: 1,
        address: "",
      });

      setSelected(null);
    } else {
      toast.error("Order Error - failed! Try again.", {
        id: toastId,
      });
    }
  } catch (error) {
    toast.error("Server error", {
      id: toastId,
    });
  } finally {
    setLoading(false); 
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-tl from-[#1a120b] via-[#3d2517] to-black text-white px-6 py-16">
      <Toaster position="top-center" reverseOrder={false} />
      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold font-cursive2 px-2">
        Order Your Coffee
      <BiSolidCoffeeTogo  className="inline text-[#D4AF37] text-6xl"/>   
      </h1>
        <p className="text-white mt-12 px-2 md:px-16 lg:px-32 text-justify text-lg md:text-base lg:text-lg leading-relaxed">
        Welcome to our café! Here, behind every cup of coffee lies a story. We use 100% freshly roasted coffee beans, 
        hand-selected from the finest plantations across the globe, to ensure that every sip delivers a pure and aromatic flavor experience.
        Whether you wish to kickstart your day with a strong and bold Classic Americano, or simply unwind with a velvety, creamy Latte—we have 
        something truly special to suit every mood and every palate. Our coffee is not just a beverage it is an experience—one that will melt 
        away your fatigue and bring a smile to your face. So, what are you waiting for? Order your favorite coffee right now, lose yourself in 
        its magical aroma, and transform an ordinary day into a memorable and delightful one!
      <br /> <br />
        If you are looking for something truly exceptional click on our 'Premium Selection' button. Here, you will discover the world's rarest
        blends and our Master Barista's signature recipes—crafted exclusively for distinguished guests like you.       
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-24">
        {[...new Set(coffeeMenu.map(item => item.type))].map((type, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              const firstItem = coffeeMenu.find(c => c.type === type);
              setSelected(firstItem);
            }}
            className="p-4 bg-gradient-to-r from-primary to-secondary border-2 border-primary border-x-2 rounded-xl cursor-pointer text-center"
          >
            {type}
          </motion.div>
        ))}
      </div>

      {/* FORM */}
      <div className="max-w-xl mx-auto bg-gradient-to-l from-primary to-secondary border-2 border-primary border-x-2 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-white font-serif">
          Order coffee here
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* NAME */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white border border-[#270c03] text-black placeholder:text-slate-500"
            required
          />

            {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-white border border-[#270c03] text-black"
          />


          {/* DROPDOWN */}
          <select
            value={selected?.name || ""}
            onChange={handleDropdownChange}
            className="w-full p-3 rounded-lg bg-white border border-[#270c03] text-black placeholder:text-slate-500"
          >
            <option value="">Select Coffee Variant</option>
            {coffeeMenu.map((item, i) => (
              <option key={i} value={item.name}>
                {item.name} - ₹{item.price}
              </option>
            ))}
          </select>

          {/* QUANTITY */}
          <input
            type="number"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white border border-[#270c03] text-black placeholder:text-slate-500"
          />

          {/* TOTAL */}
          <div className="text-center text-white text-xl font-bold">
            Total: ₹{totalPrice}
          </div>

          {/* ADDRESS */}
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full p-3 rounded-lg bg-white border border-[#270c03] text-black placeholder:text-slate-500"
            required
          />

          {/* BUTTON */}
          <button 
          type="submit"
          disabled={loading}
          className="w-full bg-[#00000070] border-x-2 text-white py-3 rounded-lg font-semibold hover:scale-105 transition">
          {loading ? "Sending Your Order..." : "Place Order"}
          </button>
        </form>

        <div className="text-center mt-6">
        <button
          onClick={() => navigate("/menu")}
          className="bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-black shadow-md"
        >
          Go to Premium Coffee 👑
        </button>
      </div>
      </div>
    </div>
  );
};

export default OrderCoffee;
