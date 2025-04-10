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

export const TestPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-white/20">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold text-gray-800 mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Mood Analysis
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 mb-8 text-center"
          >
            Choose your preferred method to begin the emotional wellness
            assessment
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-6 md:grid-cols-2"
          >
            <motion.div variants={itemVariants}>
              <Link to={'/face-scan'} className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl text-white overflow-hidden">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity" />
                <FaCamera className="w-12 h-12 mb-4 transform group-hover:scale-110 transition-transform" />
                <h2 className="text-2xl font-semibold mb-2">Visual Scan</h2>
                <p className="text-center opacity-90">
                  Facial expression analysis using webcam
                </p>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link to={'/text-scan'} className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl text-white overflow-hidden">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity" />
                <FaKeyboard className="w-12 h-12 mb-4 transform group-hover:scale-110 transition-transform" />
                <h2 className="text-2xl font-semibold mb-2">Text Analysis</h2>
                <p className="text-center opacity-90">
                  Emotion detection through written input
                </p>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-center text-gray-500 text-sm"
          >
            <p>Your privacy is protected - all analysis is processed locally</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
