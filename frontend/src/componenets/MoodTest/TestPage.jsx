import React from "react";
import { motion } from "framer-motion";
import { Features } from "./Features";

export const TestPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        <div className="bg-white/90 dark:bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-white/20 dark:border-white/30">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold text-gray-800 dark:text-white mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Mood Analysis
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center"
          >
            Choose your preferred method to begin the emotional wellness assessment
          </motion.p>

          <Features />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm"
          >
            <p>Your privacy is protected - all analysis is processed locally</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
