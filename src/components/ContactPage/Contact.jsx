/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast"; 


const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);


  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); 


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  const toastId = toast.loading("Sending message... ⏳");

  try {
    const response = await fetch("https://cup-craft-1back.vercel.app/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (response.ok) {
      toast.success(`📩 Thank you ${form.name}! Message sent successfully.`, {
        id: toastId,
      });

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      toast.error(data.message || "Something went wrong", {
        id: toastId,
      });
    }
  } catch (error) {
    toast.error("Server error. Try again.", {
      id: toastId,
    });
  } finally {
    setLoading(false); 
  }
};

  return (
    <div
      id="contact"
      className="min-h-screen bg-gradient-to-tr from-brandDark via-[#3d2517] to-black text-white px-6 py-16"
    >
      {/* TOASTER ADD */}
      <Toaster position="top-center" reverseOrder={false} />

      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <h1
          className="text-5xl font-bold text-center mb-10 text-[#d7ccc8]"
          data-aos="fade-down"
          data-aos-delay="350"
        >
          📞 Contact Coffee Cafe
        </h1>

        <p
          className="text-center text-lg text-gray-300 mb-16"
          data-aos="fade-down"
          data-aos-delay="350"
        >
          Have questions, feedback, or want to place a special order?
          Our baristas are always ready to serve you.
        </p>

        {/* FORM */}
        <form
          data-aos="fade-up"
          data-aos-delay="350"
          onSubmit={handleSubmit}
          className="bg-[#4e342e] rounded-2xl shadow-xl p-10 space-y-6"
        >
          <div>
            <label className="block text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="Your Name"
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white text-black"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="Your Email"
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white text-black"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                setForm({ ...form, phone: value });
              }}
              required
              maxLength={10}
              placeholder="Your Number"
              className="w-full p-3 rounded-lg bg-white text-black"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white text-black h-32"
            />
          </div>

          <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-[#6f1d1b] to-[#8d6e63] text-white py-3 rounded-lg font-semibold hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
          {loading ? "Processing..." : "Send Message"}
          </button>

        </form>

        {/* EXTRA INFO */}
        <div className="mt-20 grid md:grid-cols-3 gap-10 text-center" data-aos="fade-down" data-aos-delay="350">
          <div className="py-6 bg-[#3b2f2f] rounded-xl shadow-lg">
            <h2 className="text-xl font-bold mb-2">📍 Address</h2>
            <p className="text-gray-300">Cup & Craft Cafe JawaharNagar Kota, Rajasthan</p>
          </div>
          <div className="py-6 bg-[#3b2f2f] rounded-xl shadow-lg">
            <h2 className="text-xl font-bold mb-2">📧 Email</h2>
            <p className="text-gray-300">niteshahiniya2.0@gmail.com</p>
          </div>
          <div className="py-6 bg-[#3b2f2f] rounded-xl shadow-lg">
            <h2 className="text-xl font-bold mb-2">📞 Phone</h2>
            <p className="text-gray-300">+91-8905093477</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;