import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpenIcon,
  PhoneIcon,
  MusicalNoteIcon,
  HeartIcon,
  ChatBubbleLeftRightIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

const resources = [
  {
    title: 'Mental Health Articles',
    description: 'Curated collection of expert-written articles on mental wellness',
    icon: BookOpenIcon,
    color: 'bg-blue-100 dark:bg-blue-900',
    link: '#',
  },
  {
    title: '24/7 Crisis Hotlines',
    description: 'Immediate help available through these emergency contacts',
    icon: PhoneIcon,
    color: 'bg-red-100 dark:bg-red-900',
    link: '#',
  },
  {
    title: 'Guided Meditations',
    description: 'Daily mindfulness exercises and relaxation techniques',
    icon: MusicalNoteIcon,
    color: 'bg-green-100 dark:bg-green-900',
    link: '#',
  },
  {
    title: 'Self-Care Tools',
    description: 'Interactive tools for mood tracking and self-care planning',
    icon: HeartIcon,
    color: 'bg-pink-100 dark:bg-pink-900',
    link: '#',
  },
  {
    title: 'Support Communities',
    description: 'Connect with others in safe, moderated discussion forums',
    icon: ChatBubbleLeftRightIcon,
    color: 'bg-purple-100 dark:bg-purple-900',
    link: '#',
  },
  {
    title: 'Global Resources',
    description: 'Find local mental health services and professionals',
    icon: GlobeAltIcon,
    color: 'bg-indigo-100 dark:bg-indigo-900',
    link: '#',
  },
];

export const Resources = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Mental Health Resources
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Your comprehensive guide to mental wellness. Explore curated resources, tools, and support systems to help you on your journey.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              whileHover={{ y: -5 }}
              className={`${resource.color} rounded-lg p-6 transition-all duration-300 hover:shadow-lg`}
            >
              <resource.icon className="h-12 w-12 text-gray-700 dark:text-gray-100 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {resource.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{resource.description}</p>
              <a
                href={resource.link}
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
              >
                Explore
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Need Immediate Help?
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg inline-block">
            <div className="flex items-center space-x-4">
              <PhoneIcon className="h-8 w-8 text-red-500" />
              <div className="text-left">
                <p className="text-lg font-medium text-gray-900 dark:text-white">24/7 Crisis Hotline</p>
                <p className="text-2xl font-bold text-red-600 dark:text-red-400">1-800-273-8255</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
