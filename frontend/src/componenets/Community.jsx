import React from 'react';
import { motion } from 'framer-motion';
import {
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  CalendarIcon,
  HeartIcon,
  SparklesIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

const communityPosts = [
  {
    user: 'WellnessWarrior',
    content:
      'Just completed a mindfulness session and feeling grounded. Remember to take deep breaths today! 💆♀️',
    likes: 42,
    timestamp: '2h ago',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    user: 'MindfulMax',
    content:
      "Sharing my favorite affirmation today: 'I am capable of handling whatever comes my way.' Feel free to share yours! 💬",
    likes: 28,
    timestamp: '4h ago',
    avatar:
      'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    user: 'SerenitySeeker',
    content: 'New to the community! Looking for meditation buddies 👋',
    likes: 15,
    timestamp: '6h ago',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

export const Community = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Support Community
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Connect, share, and grow with others on similar journeys. You're not alone.
          </motion.p>
        </div>

        {/* Community Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            whileHover={{ y: -5 }}
          >
            <UserGroupIcon className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Support Groups</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Join specialized groups based on your needs and interests
            </p>
            <button className="bg-purple-100 dark:bg-purple-700 dark:text-white text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-600 transition-colors">
              Explore Groups
            </button>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            whileHover={{ y: -5 }}
          >
            <ChatBubbleLeftRightIcon className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Discussion Forums</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Participate in moderated, safe conversations
            </p>
            <button className="bg-blue-100 dark:bg-blue-700 dark:text-white text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-600 transition-colors">
              View Topics
            </button>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            whileHover={{ y: -5 }}
          >
            <CalendarIcon className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Community Events</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Join workshops, webinars, and meetups
            </p>
            <button className="bg-green-100 dark:bg-green-700 dark:text-white text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 dark:hover:bg-green-600 transition-colors">
              See Events
            </button>
          </motion.div>
        </div>

        {/* Recent Discussions */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
            <SparklesIcon className="h-8 w-8 text-yellow-500 mr-2" />
            Recent Discussions
          </h2>

          <div className="space-y-6">
            {communityPosts.map((post, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                whileHover={{ x: 5 }}
              >
                <div className="flex items-start gap-4">
                  <img
                    src={post.avatar}
                    alt={post.user}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-gray-900 dark:text-white">{post.user}</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">{post.timestamp}</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-200 mb-3">{post.content}</p>
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400">
                        <HeartIcon className="h-5 w-5" />
                        <span>{post.likes}</span>
                      </button>
                      <button className="text-gray-500 hover:text-green-600 dark:hover:text-green-400">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Guidelines */}
        <motion.div
          className="bg-indigo-50 dark:bg-indigo-900 rounded-xl p-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <UsersIcon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Community Guidelines</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto">
            Our community is built on respect, empathy, and support. Please maintain confidentiality,
            be kind to others, and remember that we're all here to help each other grow.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-500 transition-colors">
            Read Full Guidelines
          </button>
        </motion.div>

        {/* Emergency Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Immediate Support</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg inline-block">
            <div className="flex items-center space-x-4">
              <HeartIcon className="h-8 w-8 text-red-500" />
              <div className="text-left">
                <p className="text-lg font-medium text-gray-900 dark:text-white">24/7 Crisis Support Line</p>
                <p className="text-2xl font-bold text-red-600 dark:text-red-400">1-800-273-8255</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
