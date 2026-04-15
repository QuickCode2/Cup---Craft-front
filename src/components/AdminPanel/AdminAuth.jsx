/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import { RiAdminFill } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";

const AdminAuth = ({ onAuth }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!username || !password) {
    toast.error("Please fill all fields");
    return;
  }

  setLoading(true);

  try {
    const res = await fetch("https://cup-craft-1back.vercel.app/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (res.ok) {
      
      localStorage.setItem("adminToken", data.token);

      toast.success("Login Successful!");

      setTimeout(() => {
        onAuth(true);
      }, 800);
    } else {
      toast.error(data.message || "Login failed");
    }
  } catch (error) {
    toast.error("Server error");
  }

  setLoading(false);
};


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#1a120b] via-[#3d2517] to-black text-white">
      <Toaster position="top-center" />

      <motion.form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-[350px] border border-[#D4AF37]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#8d6e63]">
          <RiAdminFill className="inline mr-3 text-3xl text-[#D4AF37]" />
          Admin Login
        </h2>

        {/* Username */}
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-3 w-full mb-4 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          required
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-3 w-full mb-6 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          required
        />

        {/* Button */}
        <motion.button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg font-semibold shadow-lg bg-gradient-to-r from-[#D4AF37] to-[#8d6e63] ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
          whileTap={{ scale: 0.95 }}
        >
          {loading ? "Checking..." : "Login"}
        </motion.button>
      </motion.form>
    </div>
  );
};

export default AdminAuth;
