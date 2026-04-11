/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AdminAuth from "./AdminAuth";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import toast from "react-hot-toast";  

const Admin = () => {
  const [orders, setOrders] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const res = await fetch("https://cup-craft-1back.vercel.app/api/orders", {   
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      console.log("Orders Response:", data);

      if (Array.isArray(data)) {
        setOrders(data);
      } else {
        toast.error(data.message || "Failed to fetch orders");
      }
    } catch (error) {
      console.error("Fetch Orders Error:", error);
      toast.error("Server error while fetching orders");
    }
  };

  useEffect(() => {
    if (isAuthenticated) fetchOrders();
  }, [isAuthenticated]);

  const updateStatus = async (id, status) => {
    try {
      const token = localStorage.getItem("adminToken");

      const res = await fetch(`https://cup-craft-1back.vercel.app/api/orders/${id}`, {  
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });

      const updated = await res.json();

      if (updated && updated._id) {
        setOrders((prev) =>
          prev.map((o) => (o._id === updated._id ? updated : o))
        );
      } else {
        fetchOrders();
      }
    } catch (error) {
      console.error("Update Status Error:", error);
      toast.error("Failed to update order status");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <AdminAuth onAuth={setIsAuthenticated} />;
  }

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-[#1a120b] via-[#3d2517] to-black text-white">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl md:text-5xl font-cursive2 tracking-wide 
          bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text drop-shadow-xl">
          <MdOutlineDashboardCustomize className="inline mr-3 text-5xl text-white" />
          Coffee Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-500/80 backdrop-blur-md px-5 py-2 rounded-xl shadow-lg hover:bg-red-600 transition duration-300"
        >
          Logout
        </button>
      </div>

      {/* CARDS */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 perspective-1000">
        {orders && orders.length > 0 ? (
          orders.map((order) => (
            <motion.div
              key={order._id}
              className="relative p-6 rounded-2xl shadow-2xl backdrop-blur-lg 
              border border-white/20 bg-white/10 hover:bg-white/20 transition-all duration-300"
              whileHover={{
                rotateY: 10,
                rotateX: 5,
                scale: 1.05,
              }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/20 to-orange-500/20
                blur-xl opacity-0 hover:opacity-100 transition duration-500"></div>

              <div className="relative z-10">
                <p className="text-lg font-semibold text-yellow-300">
                  👤 {order.customerName}
                </p>
                <p className="mt-2">☕ {order.coffeeName}</p>
                <p className="mt-1 text-yellow-200">Type: {order.coffeeType}</p>
                <p className="mt-1 text-orange-300">Qty: {order.qty}</p>
                <p className="mt-1 text-gray-300">📍 {order.address}</p>
                <p className="mt-2">💰 ₹{order.total}</p>
                <p
                  className={`mt-2 font-bold ${
                    order.status === "delivered"
                      ? "text-green-400"
                      : "text-yellow-400"
                  }`}
                >
                  Status: {order.status}
                </p>

                <motion.button
                  onClick={() => updateStatus(order._id, "delivered")}
                  className="mt-4 w-full bg-gradient-to-b from-green-400 to-green-800 
                  py-2 rounded-xl shadow-lg hover:scale-105 transition"
                  whileTap={{ scale: 0.9 }}
                >
                  Mark Delivered
                </motion.button>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-400 text-lg">
            No Orders Found ☕
          </p>
        )}
      </div>
    </div>
  );
};

export default Admin;
