/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AdminAuth from "./AdminAuth";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import toast from "react-hot-toast";

const Admin = () => {
  const [orders, setOrders] = useState([]);
  const [view, setView] = useState("pending"); // pending by default

  // Clear all delivered
  const clearDeliveredOrders = () => {
    setOrders((prev) => prev.filter((order) => order.status !== "delivered"));
    toast.success("All delivered orders cleared");
  };

  // Remove single order
  const removeOrder = (id) => {
    setOrders((prev) => prev.filter((order) => order._id !== id));
    toast.success("Order removed");
  };

  // ✅ Fetch orders without token
  const fetchOrders = async () => {
    try {
      const res = await fetch("https://cup-craft-1back.vercel.app/api/orders", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

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
    fetchOrders();
  }, []);

  // ✅ Update status without token
  const updateStatus = async (id, status) => {
    setOrders((prev) =>
      prev.map((o) => (o._id === id ? { ...o, status: "delivered" } : o))
    );

    try {
      const res = await fetch(
        `https://cup-craft-1back.vercel.app/api/orders/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        }
      );

      const updated = await res.json();

      if (updated && updated._id) {
        setOrders((prev) =>
          prev.map((o) => (o._id === updated._id ? updated : o))
        );
      }
    } catch (error) {
      console.error("Update Status Error:", error);

      // rollback
      setOrders((prev) =>
        prev.map((o) => (o._id === id ? { ...o, status: "pending" } : o))
      );

      toast.error("Failed to update order status");
    }
  };

  const filteredOrders = orders.filter((order) =>
    view === "pending" ? order.status !== "delivered" : order.status === "delivered"
  );

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-[#1a120b] via-[#3d2517] to-black text-white">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <h1 className="text-4xl md:text-5xl font-cursive2 tracking-wide 
        bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text drop-shadow-xl">
          <MdOutlineDashboardCustomize className="inline mr-3 text-5xl text-white" />
          Coffee Dashboard
        </h1>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setView("pending")}
            className={`px-4 py-2 rounded-xl ${
              view === "pending" ? "bg-yellow-500" : "bg-gray-600"
            }`}
          >
            Pending Orders
          </button>

          <button
            onClick={() => setView("delivered")}
            className={`px-4 py-2 rounded-xl ${
              view === "delivered" ? "bg-green-500" : "bg-gray-600"
            }`}
          >
            Delivered Orders
          </button>

          <button
            onClick={clearDeliveredOrders}
            className="bg-green-500/80 px-5 py-2 rounded-xl"
          >
            Clear Delivered
          </button>
        </div>
      </div>

      {/* CARDS */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <motion.div
              key={order._id}
              className="p-6 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/20 bg-white/10"
              whileHover={{ scale: 1.05 }}
            >
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
                  order.status === "delivered" ? "text-green-400" : "text-yellow-400"
                }`}
              >
                Status: {order.status}
              </p>

              {view === "pending" && (
                <motion.button
                  onClick={() => updateStatus(order._id, "delivered")}
                  className="mt-4 w-full py-2 rounded-xl shadow-lg bg-gradient-to-b from-green-400 to-green-800"
                  whileTap={{ scale: 0.9 }}
                >
                  Mark Delivered
                </motion.button>
              )}

              {view === "delivered" && (
                <motion.button
                  onClick={() => removeOrder(order._id)}
                  className="mt-4 w-full bg-red-500 py-2 rounded-xl shadow-lg hover:bg-red-600"
                  whileTap={{ scale: 0.9 }}
                >
                  Remove
                </motion.button>
              )}
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
