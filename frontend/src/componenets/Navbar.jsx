import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaUserCircle, FaRegBell } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/UserContext";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Resources", path: "/resources" },
  { name: "Therapists", path: "/therapists" },
  { name: "Community", path: "/community" },
  { name: "Pricing", path: "/pricing" },
];

const getLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive ? "text-purple-200 bg-purple-800/30" : "text-white hover:bg-purple-800/30"
  }`;

const NavbarLink = ({ link, onClick }) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <NavLink 
      to={link.path} 
      className={getLinkClass} 
      onClick={onClick}
      role="navigation"
    >
      {link.name}
    </NavLink>
  </motion.div>
);

const ProfileDropdown = ({ onClose }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <motion.div
      ref={dropdownRef}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50"
    >
      {["dashboard", "settings"].map((page) => (
        <NavLink
          key={page}
          to={`/${page}`}
          className={({ isActive }) =>
            `block px-4 py-2 text-sm transition-colors ${
              isActive ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-100"
            }`
          }
          onClick={onClose}
        >
          {page.charAt(0).toUpperCase() + page.slice(1)}
        </NavLink>
      ))}
    </motion.div>
  );
};

const Navbar = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const menuRef = useRef(null);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
        setProfileOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <motion.nav
        className="bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg fixed w-full z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
              <NavLink 
                to="/" 
                className="flex items-center text-white text-xl font-bold"
                aria-label="Home"
              >
                🧠 MindCare
              </NavLink>
            </motion.div>

            <div className="hidden md:flex md:space-x-4">
              {navLinks.map((link) => (
                <NavbarLink key={link.path} link={link} />
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                className="p-2 rounded-full text-white hover:bg-purple-700/30 transition-colors"
              >
                <span className="text-xl">{theme === "light" ? "🌙" : "☀️"}</span>
              </motion.button>

              <NavLink 
                to="/notifications" 
                className="p-2 rounded-full text-white hover:bg-purple-700/30 transition-colors"
                aria-label="Notifications"
              >
                <FaRegBell className="text-xl" />
              </NavLink>

              <motion.div className="relative">
                <motion.button
                  onClick={() => setProfileOpen(!isProfileOpen)}
                  whileHover={{ scale: 1.05 }}
                  className="p-2 rounded-full text-white hover:bg-purple-700/30 transition-colors"
                  aria-label="Profile menu"
                  aria-expanded={isProfileOpen}
                >
                  <FaUserCircle className="text-2xl" />
                </motion.button>
                <AnimatePresence>
                  {isProfileOpen && <ProfileDropdown onClose={() => setProfileOpen(false)} />}
                </AnimatePresence>
              </motion.div>
            </div>

            <div className="md:hidden flex items-center gap-4">
              <motion.button
                onClick={toggleTheme}
                whileTap={{ scale: 0.95 }}
                className="text-white p-2"
                aria-label="Toggle theme"
              >
                {theme === "light" ? "🌙" : "☀️"}
              </motion.button>
              <motion.button
                onClick={() => setMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white p-2"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Spacer below fixed navbar */}
      <div className="h-16" />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden w-full bg-purple-700 z-40"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navLinks.map((link) => (
                <NavbarLink 
                  key={link.path} 
                  link={link} 
                  onClick={() => setMenuOpen(false)}
                />
              ))}
              <div className="flex items-center justify-center gap-4 mt-4">
                <NavLink 
                  to="/notifications" 
                  className="p-2 text-white"
                  aria-label="Notifications"
                >
                  <FaRegBell className="text-xl" />
                </NavLink>
                <NavLink 
                  to="/profile" 
                  className="p-2 text-white"
                  aria-label="Profile"
                >
                  <FaUserCircle className="text-2xl" />
                </NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
