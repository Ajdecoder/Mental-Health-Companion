import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCamera, FaKeyboard } from "react-icons/fa";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120 },
  },
};

export const Features = () => {
  return (
    <div className="p-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-6 md:grid-cols-2"
      >
        <motion.div variants={itemVariants}>
          <Link
            to={"/face-scan"}
            className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 hover:from-blue-600 hover:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl text-white overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 dark:bg-black/10 opacity-0 group-hover:opacity-20 transition-opacity" />
            <FaCamera className="w-12 h-12 mb-4 transform group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-semibold mb-2">Visual Scan</h2>
            <p className="text-center opacity-90">Facial expression analysis using webcam</p>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Link
            to={"/text-scan"}
            className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700 hover:from-purple-600 hover:to-purple-700 dark:hover:from-purple-700 dark:hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl text-white overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 dark:bg-black/10 opacity-0 group-hover:opacity-20 transition-opacity" />
            <FaKeyboard className="w-12 h-12 mb-4 transform group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-semibold mb-2">Text Analysis</h2>
            <p className="text-center opacity-90">Emotion detection through written input</p>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};
