import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("user-info");
    if (data) {
      setUserInfo(JSON.parse(data));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user-info");
    navigate("/login");
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 "
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
     
      <motion.div
        className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.img
          src={userInfo?.image}
          alt={userInfo?.name}
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500"
          whileHover={{ scale: 1.1 }}
        />
        <h1 className="text-2xl font-bold text-red-800 bg-green-600 ">{userInfo?.name}</h1>
        <h3 className="text-gray-600">{userInfo?.email}</h3>

        <motion.button
          onClick={handleLogout}
          className="mt-6 bg-red-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-600 focus:outline-none"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          Logout
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
