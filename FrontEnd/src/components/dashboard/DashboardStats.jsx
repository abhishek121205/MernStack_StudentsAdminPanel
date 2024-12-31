import React from 'react';
import { AcademicCapIcon, UserGroupIcon, ClockIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const DashboardStats = () => {
  const stats = [
    { name: 'Total Students', value: '256', icon: UserGroupIcon, color: 'bg-blue-500' },
    { name: 'Average Grade', value: 'B+', icon: AcademicCapIcon, color: 'bg-green-500' },
    { name: 'Attendance Rate', value: '94%', icon: ClockIcon, color: 'bg-yellow-500' },
    { name: 'Performance', value: '88%', icon: ChartBarIcon, color: 'bg-purple-500' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {stats.map((item) => (
        <div key={item.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 lg:p-6">
          <div className="flex items-center">
            <div className={`${item.color} p-3 rounded-lg`}>
              <item.icon className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.name}</p>
              <p className="text-2xl font-semibold dark:text-white">{item.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;