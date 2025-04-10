import { motion } from "framer-motion";
import { FaBars, FaTimes, FaUserCircle, FaRegBell } from "react-icons/fa";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/UserContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: "Therapists", path: "/therapists" },
    { name: "Community", path: "/community" },
  ];

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  const linkVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
  };

  return (
    <motion.nav
      className="bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      role="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section */}
          <div className="flex-shrink-0 flex items-center">
            <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.4 }}>
              <NavLink to="/" className="text-white text-2xl font-bold">
                🧠 MindCare
              </NavLink>
            </motion.div>
          </div>

          {/* Desktop Links */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <motion.div key={link.path} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `
                    text-white hover:text-purple-200 
                    ${isActive ? 'text-purple-200' : ''} 
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500
                  `}
                >
                  {link.name}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Toggle Theme */}
            <button
              onClick={() => {
                const nextTheme = theme === "light" ? "dark" : "light";
                setTheme(nextTheme);
              }}
              aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
              className="text-right p-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              {theme === "light" ? "🌙 " : "☀️ "}
            </button>
            <NavLink to="/notifications" aria-label="Notifications" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              <FaRegBell className="text-white text-xl sm:hidden" />
            </NavLink>
            <NavLink to="/profile" aria-label="Profile" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              <FaUserCircle className="text-white text-2xl" />
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              {isMenuOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        variants={menuVariants}
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        className="md:hidden absolute w-full bg-purple-700 z-50"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <motion.div key={link.path} variants={linkVariants} className="px-3 py-2">
              <NavLink
                to={link.path}
                className={({ isActive }) => `
                  text-white hover:text-purple-200 
                  ${isActive ? 'text-purple-200' : ''} 
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500
                `}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            </motion.div>
          ))}
          <NavLink to="/notifications" aria-label="Notifications" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            <FaRegBell className="text-white text-xl" />
          </NavLink>
          <NavLink to="/profile" aria-label="Profile" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            <FaUserCircle className="text-white text-2xl" />
          </NavLink>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;