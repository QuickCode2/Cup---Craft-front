/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import { RiAdminFill } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";


const AdminAuth = ({ onAuth }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const endpoint = isLogin ? "login" : "signup";

      const res = await fetch(`http://localhost:5000/api/admin/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      let data = {};
      try {
        data = await res.json();
      } catch {
        data = {};
      }

      // ERROR
      if (!res.ok) {
      if (data.message) {
        toast.error(data.message); // backend ka message show hoga
      } else {
        toast.error("Something went wrong");
      }
      setLoading(false);
      return;
    }

      //SUCCESS
      toast.success(isLogin ? "Login Successful!" : "Signup Successful!");

      if (data.token) {
        localStorage.setItem("adminToken", data.token);
      }

      if (isLogin) {
        //Login ke case me hi authenticate karo
        setTimeout(() => {
          onAuth(true);
        }, 1500);
      } else {
        //Signup ke baad login screen pe redirect
        setTimeout(() => {
          setIsLogin(true);
          setUsername(""); 
          setPassword(""); 
        }, 1500);
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#1a120b] via-[#3d2517] to-black text-white">
      <Toaster position="top-center" reverseOrder={false} />
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-[350px] border border-[#D4AF37]"
        initial={{ scale: 0.8, opacity: 0, rotateY: -20 }}
        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#8d6e63]">
          <RiAdminFill className="inline mr-3 text-3xl text-[#D4AF37]" />
          {isLogin ? "Admin Login" : "Admin Signup"}
        </h2>

        <motion.input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-3 w-full mb-4 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          whileFocus={{ scale: 1.02 }}
          required
        />

        <motion.input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-3 w-full mb-6 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          whileFocus={{ scale: 1.02 }}
          required
        />

        <motion.button
          type="submit"
          disabled={loading}
          className={`bg-gradient-to-r from-[#D4AF37] to-[#8d6e63] text-white px-6 py-3 rounded-lg w-full font-semibold shadow-lg ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {loading ? "Processing..." : isLogin ? "Login" : "Signup"}
        </motion.button>

        <motion.p
          className="mt-6 text-sm text-[#D4AF37] text-center cursor-pointer hover:underline"
          onClick={() => setIsLogin(!isLogin)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {isLogin ? "New Admin? Signup here" : "Already have account? Login"}
        </motion.p>
      </motion.form>
    </div>
  );
};

export default AdminAuth;