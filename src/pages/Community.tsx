import React from 'react';
import { Users, MessageSquare, Heart } from 'lucide-react';

export const Community = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Community</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <MessageSquare className="w-6 h-6 text-indigo-600" />
              <h2 className="text-xl font-semibold">Discussion Board</h2>
            </div>
            
            <div className="space-y-4">
              {Array(3).fill(null).map((_, i) => (
                <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div>
                      <p className="font-medium">User Name</p>
                      <p className="text-sm text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2">
                    Thoughts on "Le Petit Prince" Chapter 3? The symbolism is fascinating!
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <button className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>12 likes</span>
                    </button>
                    <button className="flex items-center gap-1">
                      <MessageSquare className="w-4 h-4" />
                      <span>5 replies</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <Users className="w-6 h-6 text-indigo-600" />
              <h2 className="text-xl font-semibold">Reading Groups</h2>
            </div>
            
            <div className="space-y-4">
              {Array(3).fill(null).map((_, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-medium">Beginner Readers</p>
                    <p className="text-sm text-gray-500">15 members</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-6 rounded-xl text-white">
            <h3 className="text-lg font-semibold mb-2">Create a Reading Group</h3>
            <p className="text-indigo-100 mb-4">
              Start your own reading group and connect with fellow learners!
            </p>
            <button className="w-full bg-white text-indigo-600 py-2 rounded-lg hover:bg-indigo-50 transition-colors">
              Create Group
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};