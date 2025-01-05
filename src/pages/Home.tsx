import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Star } from 'lucide-react';

export const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Bienvenue à LireFrançais!
        </h1>
        <p className="text-xl text-gray-600">
          Your journey to mastering French through reading starts here
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-6 rounded-xl shadow-lg"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-indigo-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-indigo-600" />
            </div>
            <h2 className="text-xl font-semibold">Continue Reading</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Pick up where you left off in "Le Petit Prince"
          </p>
          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            Resume Reading
          </button>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-6 rounded-xl shadow-lg"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-amber-100 rounded-lg">
              <Star className="w-6 h-6 text-amber-600" />
            </div>
            <h2 className="text-xl font-semibold">Daily Goal</h2>
          </div>
          <div className="mb-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-amber-600 h-2.5 rounded-full w-2/3"></div>
            </div>
            <p className="text-gray-600 mt-2">30 minutes left to reach your daily goal</p>
          </div>
          <button className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors">
            Start Reading
          </button>
        </motion.div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Recommended Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Placeholder for book recommendations */}
          <div className="aspect-[2/3] bg-gray-100 rounded-lg animate-pulse"></div>
          <div className="aspect-[2/3] bg-gray-100 rounded-lg animate-pulse"></div>
          <div className="aspect-[2/3] bg-gray-100 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};