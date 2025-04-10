import React from 'react';
import { motion } from 'framer-motion';
import {
  UserCircleIcon,
  MapPinIcon,
  ClockIcon,
  AcademicCapIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const therapists = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Cognitive Behavioral Therapy",
    experience: "15 years",
    location: "New York, NY",
    sessionFee: "$150/session",
    availability: "Mon-Fri, 9am - 5pm",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Michael Chen, LCSW",
    specialty: "Anxiety & Stress Management",
    experience: "8 years",
    location: "San Francisco, CA",
    sessionFee: "$120/session",
    availability: "Flexible Hours",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLXGqwSZZs3OK7U26xHEBf6KQ77X_cCnXCtw&s"
  },
  {
    name: "Dr. Aisha Patel",
    specialty: "Trauma & PTSD",
    experience: "12 years",
    location: "Chicago, IL",
    sessionFee: "$180/session",
    availability: "Weekdays & Evenings",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Emily Rodriguez, LMFT",
    specialty: "Family & Relationship Counseling",
    experience: "10 years",
    location: "Austin, TX",
    sessionFee: "$130/session",
    availability: "By Appointment",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
];

export const Therapists = () => {
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
            Professional Therapists
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Connect with licensed mental health professionals who can support you on your journey to wellness.
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
                staggerChildren: 0.2
              }
            }
          }}
        >
          {therapists.map((therapist, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-48 bg-gray-100 dark:bg-gray-800">
                <img 
                  src={therapist.image}
                  alt={therapist.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h3 className="text-xl font-semibold text-white">{therapist.name}</h3>
                  <p className="text-gray-200">{therapist.specialty}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <AcademicCapIcon className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-600 dark:text-gray-300">{therapist.experience} experience</span>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <MapPinIcon className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-600 dark:text-gray-300">{therapist.location}</span>
                </div>

                <div className="flex items-center space-x-2 mb-6">
                  <CurrencyDollarIcon className="h-5 w-5 text-green-600" />
                  <span className="text-gray-600 dark:text-gray-300">{therapist.sessionFee}</span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <ClockIcon className="h-5 w-5 text-orange-600" />
                    <span className="text-gray-600 dark:text-gray-300">{therapist.availability}</span>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors">
                    Book Session
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Need Immediate Assistance?</h2>
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg inline-block">
            <div className="flex items-center space-x-4">
              <UserCircleIcon className="h-8 w-8 text-red-500" />
              <div className="text-left">
                <p className="text-lg font-medium text-gray-900 dark:text-white">24/7 Crisis Support</p>
                <p className="text-2xl font-bold text-red-600">1-800-273-8255</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
