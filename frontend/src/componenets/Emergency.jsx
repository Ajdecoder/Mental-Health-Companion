import React from "react";
import { motion } from "framer-motion";

export const Emergency = () => {
  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-red-50 dark:bg-red-200 p-9 rounded-xl border-2 border-red-200 dark:border-red-300 w-[80%] m-auto mt-6 mb-6"
      >
        <h2 className="text-2xl font-bold text-red-600">
          Need Immediate Help?
        </h2>
        <p className="text-gray-700 dark:text-gray-900 mb-4">
          You're not alone. Reach out to these resources:
        </p>
        <div className="space-y-2">
          <p className="text-red-500">📞 Crisis Hotline: 1-800-273-8255</p>
          <p className="text-red-500">💬 Text HOME to 741741</p>
        </div>
      </motion.div>
    </div>
  );
};
