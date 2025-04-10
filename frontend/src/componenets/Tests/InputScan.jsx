import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaKeyboard, FaPaperPlane } from 'react-icons/fa';

export const InputScan = () => {
  const [inputText, setInputText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your submission logic here
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-2xl"
      >
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-block mb-4"
            >
              <FaKeyboard className="w-16 h-16 text-purple-600" />
            </motion.div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
              Text Mood Analysis
            </h1>
            <p className="text-gray-600 text-lg">
              Express your thoughts and we'll analyze your emotional state
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="How are you feeling today? Share your thoughts..."
                className="w-full h-48 p-4 rounded-xl border border-gray-200 focus:border-purple-300 focus:ring-2 focus:ring-purple-100 resize-none transition-all shadow-sm"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 flex justify-center"
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-xl font-semibold flex items-center gap-2 hover:scale-105 transition-transform disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Analyzing...
                  </div>
                ) : (
                  <>
                    <FaPaperPlane className="text-lg" />
                    Analyze Text
                  </>
                )}
              </button>
            </motion.div>
          </form>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center text-gray-500 text-sm mt-8"
          >
            Your text is processed securely and never stored
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};