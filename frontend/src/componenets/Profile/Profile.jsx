import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserEdit, FaSignOutAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { motion } from "framer-motion";

export default function Profile() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [profileIcon,setProfileIcon] = useState()
  
  useEffect(() => {
    const data = localStorage.getItem("user-info");
    if (data) {
      const user = JSON.parse(data);
      console.log("User Data:", user); // Check what’s being retrieved
      setCurrentUser(user);
      setDisplayName(user?.name || "User");
      setProfileIcon(user?.image || "https://via.placeholder.com/150");
    }
  }, []);
  

  const handleLogout = () => {
    localStorage.removeItem("user-info");
    navigate("/login");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="p-6 md:p-8 max-w-lg mx-auto bg-purple-100 dark:bg-[#2b2661] rounded-2xl shadow-2xl space-y-8 mt-4 text-white"
    >
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-3xl font-extrabold text-center text-gray-700 dark:text-gray-200"
      >
        Profile 
      </motion.h1>
      <div className="text-center">
        <img
          src={profileIcon || "https://via.placeholder.com/150"}
          alt="Avatar"
          className="w-24 h-24 mx-auto rounded-full shadow-lg object-cover"
        />
       
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">
            Display Name
          </label>
          <div className="relative mt-2">
            <FaUserEdit className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="font-semibold pl-12 pr-4 py-3 border rounded-lg w-full focus:ring-2 focus:ring-black bg-gray-50 text-gray-900"
            />
          </div>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <div className="relative mt-2">
            <MdMarkEmailRead className="text-xl absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-300" />
            <input
              type="email"
              value={currentUser?.email || ""}
              disabled
              className="font-semibold pl-12 py-3 border rounded-lg w-full bg-gray-200 dark:text-gray-400 cursor-not-allowed"
            />
          </div>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleLogout}
        className="bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 flex items-center justify-center w-full mt-4"
      >
        <FaSignOutAlt className="mr-2" /> Logout
      </motion.button>
    </motion.div>
  );
}
