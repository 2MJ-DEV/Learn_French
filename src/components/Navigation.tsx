import React from 'react';
import { NavLink } from 'react-router-dom';
import { Book, BookOpen, Home, Trophy, Users } from 'lucide-react';

export const Navigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 md:left-0 md:top-0 md:w-64 md:h-screen md:border-r">
      <div className="flex flex-row md:flex-col h-full p-4">
        <div className="hidden md:flex items-center gap-2 mb-8">
          <BookOpen className="w-8 h-8 text-indigo-600" />
          <span className="text-xl font-bold text-gray-800">LireFrançais</span>
        </div>
        
        <div className="flex flex-row md:flex-col justify-around md:justify-start w-full gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-indigo-100 text-indigo-600'
                  : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            <Home className="w-5 h-5" />
            <span className="hidden md:inline">Dashboard</span>
          </NavLink>
          
          <NavLink
            to="/library"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-indigo-100 text-indigo-600'
                  : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            <Book className="w-5 h-5" />
            <span className="hidden md:inline">Library</span>
          </NavLink>
          
          <NavLink
            to="/progress"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-indigo-100 text-indigo-600'
                  : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            <Trophy className="w-5 h-5" />
            <span className="hidden md:inline">Progress</span>
          </NavLink>
          
          <NavLink
            to="/community"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-indigo-100 text-indigo-600'
                  : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            <Users className="w-5 h-5" />
            <span className="hidden md:inline">Community</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};