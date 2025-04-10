import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const badgeVariants = {
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300 },
  },
};

const RevenueModel = () => {
  const plans = [
    {
      title: "Freemium",
      description:
        "Access basic features for free including text & image-based mood detection and AI conversation.",
      badge: "Free",
    },
    {
      title: "Premium",
      description:
        "Unlock advanced tools like personalized reports, voice agents, progress tracking, and exclusive content.",
      badge: "$4.99/month",
    },
    {
      title: "B2B Licensing",
      description:
        "Custom solutions for colleges, workplaces, and therapy platforms to improve wellness at scale.",
      badge: "Contact Us",
    },
    {
      title: "Affiliate Earnings",
      description:
        "Partner with wellness apps, books, and courses. Recommend them to users and earn commission.",
      badge: "Ongoing",
    },
    {
      title: "Real Therapist Referrals",
      description:
        "Offer referrals to verified therapists when users need professional help.",
      badge: "Pay-per-referral",
    },
    {
      title: "In-App Donations",
      description:
        "Users who love the companion can support development via one-time or monthly donations.",
      badge: "Voluntary",
    },
  ];

  return (
    <div className="min-h-screen p-4 md:p-10 mx-auto dark:bg-gray-800 dark:text-white">
      <motion.div 
        className="max-w-7xl mx-auto h-full flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 md:mb-12 text-center text-gray-800 dark:text-gray-100"
        >
          Pricing
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 pb-8"
        >
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full bg-white dark:bg-zinc-900 dark:border-zinc-700 flex flex-col">
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 pr-2">
                      {plan.title}
                    </h2>
                    <motion.div whileHover="hover" variants={badgeVariants}>
                      <Badge
                        variant="outline"
                        className="bg-blue-50 text-blue-600 dark:bg-blue-900 dark:text-blue-300 whitespace-nowrap m-2"
                      >
                        {plan.badge}
                      </Badge>
                    </motion.div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">
                    {plan.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};


export default RevenueModel;
