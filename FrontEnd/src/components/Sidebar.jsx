import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, UserGroupIcon, ChartBarIcon, Cog6ToothIcon, XMarkIcon, BookOpenIcon, BookmarkSlashIcon, BookmarkSquareIcon, BookmarkIcon } from '@heroicons/react/24/outline';

const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: HomeIcon, path: '/dashboard' },
    { id: 'students', name: 'Students', icon: UserGroupIcon, path: '/students' },
    { id: 'attendance', name: 'Attendance', icon: BookOpenIcon, path: '/attendance' },
    { id: 'attendanceSheet', name: 'Attendance Sheet', icon: BookmarkIcon, path: '/attendanceSheet' },
    { id: 'analytics', name: 'Analytics', icon: ChartBarIcon, path: '/analytics' },
    { id: 'settings', name: 'Settings', icon: Cog6ToothIcon, path: '/settings' },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed left-0 top-0 h-screen bg-gray-800 text-white z-30
        transform transition-transform duration-300 ease-in-out
        w-64 lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex justify-between items-center p-4">
          <div className="text-2xl font-bold">Student Admin</div>
          <button 
            onClick={onClose}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-700"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-8 px-4">
          {menuItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) => `
                flex items-center space-x-2 p-3 rounded-lg cursor-pointer mb-2
                ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}
              `}
            >
              <item.icon className="h-6 w-6" />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;