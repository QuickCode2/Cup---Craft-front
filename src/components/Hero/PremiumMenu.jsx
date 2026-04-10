import { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";


const premiumMenu = [
  { name: "Royal Espresso Reserve", price: 499, tag: "Signature" },
  { name: "Gold Cappuccino Deluxe", price: 699, tag: "Premium" },
  { name: "Luxury Vanilla Latte", price: 799, tag: "VIP" },
  { name: "Dark Chocolate Mocha Supreme", price: 899, tag: "Exclusive" },
  { name: "Ice Cold Brew Elite", price: 599, tag: "Chill" },
  { name: "Caramel Latte Royale", price: 749, tag: "Sweet Premium" },
  { name: "Hazelnut Cappuccino King", price: 829, tag: "Rich Taste" },
  { name: "Belgian Chocolate Mocha", price: 899, tag: "Luxury" },
  { name: "Signature Affogato Deluxe", price: 999, tag: "Dessert Coffee" },

  // Hot Coffee Collection
  { name: "Espresso", price: 150, tag: "Hot Classic" },
  { name: "Americano", price: 180, tag: "Hot Bold" },
  { name: "Cappuccino", price: 200, tag: "Hot Creamy" },
  { name: "Latte", price: 220, tag: "Hot Smooth" },

  // Cold Coffee Collection
  { name: "Cold Brew", price: 250, tag: "Icy Bold" },
  { name: "Iced Latte", price: 270, tag: "Chilled Smooth" },
  { name: "Mocha Shake", price: 300, tag: "Cool Chocolate" },

  // Barista Special Creations
  { name: "Signature Espresso Blend", price: 350, tag: "Barista Craft" },
  { name: "Caramel Cream Delight", price: 400, tag: "Barista Sweet" },
  { name: "Chocolate Velvet Coffee", price: 450, tag: "Barista Luxury" },
];

const PremiumMenu = () => {
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "", 
    quantity: 1,
    address: "",
  });

  const handleSelect = (item) => {
    setSelected(item);
  };

  const handleDropdownChange = (e) => {
    const selectedItem = premiumMenu.find(
      (item) => item.name === e.target.value
    );
    setSelected(selectedItem);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const totalPrice = selected ? selected.price * form.quantity : 0;

  const [loading, setLoading] = useState(false); // ✅ add this

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
        coffeeType: "Premium",
        qty: Number(form.quantity),
        total: totalPrice,
        address: form.address,
      }),
    });

    if (response.ok) {
      toast.success("👑 Premium Order Successfully!", {
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
      toast.error("Order Error - Please try again.", {
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
    <div className="min-h-screen bg-gradient-to-tl from-[#1a120b] via-[#3d2517] to-black text-[#f5f5dc] px-6 py-16">
      <Toaster position="top-center" reverseOrder={false} />
      {/* HEADER */}
      <div className="text-center mb-14">
        <h1 className="text-5xl font-bold text-[#D4AF37] font-serif">
          👑 PREMIUM ORDER - FOR SPECIAL GUESTS ONLY
        </h1>
        <p className="text-gray-200 mt-12 px-2 md:px-16 lg:px-32 text-justify text-lg leading-relaxed">
          Welcome to our exclusive Premium Lounge. This section is reserved solely for true 
          connoisseurs—those who view coffee not merely as a beverage, but as an art form.
          Our expert baristas handcraft every cup with precision, delivering a rich, velvety, 
          and bold flavor profile that is truly unparalleled.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-32">
        {premiumMenu.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleSelect(item)}
            className={`p-6 rounded-2xl cursor-pointer border transition-all ${
              selected?.name === item.name
                ? "border-[#D4AF37] bg-gradient-to-r from-[#3b2f2f] to-[#6f4e37]"
                : "border-[#D4AF37] bg-gradient-to-r from-[#2a1a0f] to-[#3b2f2f]"
            }`}
          >
            <h2 className="text-xl font-bold text-[#ffe4b5]">{item.name}</h2>
            <p className="text-gray-300 mt-1">{item.tag}</p>
            <p className="mt-3 font-semibold text-[#D4AF37]">₹{item.price}</p>
            {selected?.name === item.name && (
              <p className="mt-2 text-green-400 font-semibold">Selected ✔</p>
            )}
          </motion.div>
        ))}
      </div>

      {/* FORM */}
      <div className="max-w-xl mx-auto border-[#D4AF37] border-x-2 bg-gradient-to-r from-[#2a1a0f] to-[#3b2f2f] rounded-2xl p-8 shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#D4AF37] font-serif">
          Premium Coffee Order Here
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-white border border-[#270c03] text-black"
          />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white border border-[#270c03] text-black"
            />

          {/* Dropdown */}
          <select
            value={selected?.name || ""}
            onChange={handleDropdownChange}
            className="w-full p-3 rounded-lg bg-white border border-[#270c03] text-[#270c03]"
          >
            <option value="">Select Premium Coffee</option>
            {premiumMenu.map((item, i) => (
              <option key={i} value={item.name}>
                {item.name} - ₹{item.price}
              </option>
            ))}
          </select>

          {/* Quantity */}
          <input
            type="number"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white border border-[#270c03] text-black placeholder:text-slate-500"
          />

          {/* Total */}
          <div className="text-xl font-bold text-center text-[#D4AF37]">
            Total: ₹{totalPrice}
          </div>

          {/* Address */}
          <textarea
            name="address"
            placeholder="Delivery Address"
            value={form.address}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-white border border-[#270c03] text-[#270c03]"
          />

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#6f1d1b] border-[#D4AF37] border-x-2 text-white py-3 rounded-lg font-semibold hover:scale-105 transition"
          >
          {loading ? "Sending Your Order..." : "Confirm Premium Order"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PremiumMenu;