import React from 'react';
import { ProgressDashboard } from '../components/ProgressDashboard';
import { Calendar, Award } from 'lucide-react';

const mockProgress = {
  currentBook: 'Le Petit Prince',
  booksCompleted: 3,
  readingLevel: 'Intermediate',
  totalReadingTime: 24,
  badges: ['Early Bird', 'Bookworm', 'Quick Learner']
};

export const Progress = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Progress</h1>
      
      <ProgressDashboard progress={mockProgress} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <Calendar className="w-6 h-6 text-indigo-600" />
            <h2 className="text-xl font-semibold">Reading Streak</h2>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {Array(28).fill(null).map((_, i) => (
              <div
                key={i}
                className={`aspect-square rounded-lg ${
                  i % 3 === 0 ? 'bg-indigo-600' : 'bg-gray-100'
                }`}
              ></div>
            ))}
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <Award className="w-6 h-6 text-amber-600" />
            <h2 className="text-xl font-semibold">Recent Achievements</h2>
          </div>
          <div className="space-y-4">
            {mockProgress.badges.map((badge, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Award className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{badge}</p>
                  <p className="text-sm text-gray-500">Earned 3 days ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};