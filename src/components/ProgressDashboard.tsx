import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Book, Clock, TrendingUp } from 'lucide-react';
import { UserProgress } from '../types';

interface ProgressDashboardProps {
  progress: UserProgress;
}

export const ProgressDashboard: React.FC<ProgressDashboardProps> = ({ progress }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-6 rounded-xl text-white"
      >
        <div className="flex items-center gap-4">
          <Book className="w-8 h-8" />
          <div>
            <h3 className="text-lg font-semibold">Books Completed</h3>
            <p className="text-2xl font-bold">{progress.booksCompleted}</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 rounded-xl text-white"
      >
        <div className="flex items-center gap-4">
          <TrendingUp className="w-8 h-8" />
          <div>
            <h3 className="text-lg font-semibold">Reading Level</h3>
            <p className="text-2xl font-bold">{progress.readingLevel}</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-gradient-to-br from-amber-500 to-amber-600 p-6 rounded-xl text-white"
      >
        <div className="flex items-center gap-4">
          <Clock className="w-8 h-8" />
          <div>
            <h3 className="text-lg font-semibold">Reading Time</h3>
            <p className="text-2xl font-bold">{progress.totalReadingTime}h</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-gradient-to-br from-rose-500 to-rose-600 p-6 rounded-xl text-white"
      >
        <div className="flex items-center gap-4">
          <Trophy className="w-8 h-8" />
          <div>
            <h3 className="text-lg font-semibold">Badges Earned</h3>
            <p className="text-2xl font-bold">{progress.badges.length}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};