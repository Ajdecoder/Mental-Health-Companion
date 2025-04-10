import { motion } from "framer-motion";
import {
  FaHeart,
  FaBrain,
  FaBook,
  FaSmile,
  FaHandHoldingHeart,
  FaPrayingHands,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "../context/UserContext";
import { useMemo } from "react";

const Home = () => {
  const { theme, setTheme } = useTheme();

  const features = useMemo(
    () => [
      {
        icon: <FaPrayingHands />,
        title: "Guided Meditation",
        color: "bg-blue-100",
      },
      { icon: <FaBrain />, title: "CBT Exercises", color: "bg-purple-100" },
      { icon: <FaBook />, title: "Mood Journal", color: "bg-pink-100" },
      { icon: <FaSmile />, title: "Mood Tracker", color: "bg-yellow-100" },
      { icon: <FaHeart />, title: "Self-Care Plan", color: "bg-green-100" },
      {
        icon: <FaHandHoldingHeart />,
        title: "Support Network",
        color: "bg-red-100",
      },
    ],
    []
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen pb-0.5 bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
     

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-20 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            animate={{ y: [-5, 5] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
            }}
            className="text-6xl mb-6 text-blue-600 dark:text-blue-300"
          >
            🌈
          </motion.div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Your compassionate space for mental wellness
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="mood-test"
              className="border border-red-500 px-4 py-2 rounded-lg dark:border-red-300 dark:text-white"
            >
              Take Mood Test
            </Link>
          </motion.button>
        </div>
      </motion.section>

      {/* Features */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 py-12 max-w-7xl mx-auto"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className={`${feature.color} dark:bg-gray-700 p-6 rounded-2xl shadow-lg flex items-center space-x-4 cursor-pointer transition-all`}
          >
            <div className="text-3xl text-gray-700 dark:text-gray-100">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              {feature.title}
            </h3>
          </motion.div>
        ))}
      </motion.div>

      {/* Mood Check-in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white dark:bg-gray-800 mx-8 my-16 p-8 rounded-3xl shadow-xl"
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          How are you feeling today?
        </h2>
        <div className="flex justify-center space-x-6">
          {["😢", "😞", "😐", "🙂", "😁"].map((emoji, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.2 }}
              className="text-4xl transition-transform"
              aria-label={`Feeling ${emoji}`}
            >
              {emoji}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Breathing Exercise */}
      <div className="my-16 px-8">
        <motion.div
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="bg-blue-500 dark:bg-blue-400 w-40 h-40 mx-auto rounded-full flex items-center justify-center text-white text-xl font-bold"
        >
          Breathe
        </motion.div>
      </div>

      {/* Quote Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center py-16 bg-purple-600 dark:bg-purple-800 text-white"
      >
        <p className="text-2xl italic max-w-2xl mx-auto px-4">
          "You don't have to control your thoughts. You just have to stop
          letting them control you."
        </p>
        <p className="mt-4 font-semibold">– Dan Millman</p>
      </motion.div>

      {/* Emergency Help */}
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

export default Home;
