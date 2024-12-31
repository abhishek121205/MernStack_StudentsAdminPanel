import React from 'react';

const AttendanceChart = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const attendance = [92, 88, 95, 89, 94, 91];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4 dark:text-white">Monthly Attendance</h3>
      <div className="flex items-end h-48 space-x-2">
        {attendance.map((value, index) => (
          <div key={months[index]} className="flex-1 flex flex-col items-center">
            <div 
              className="w-full bg-blue-500 rounded-t"
              style={{ height: `${value}%` }}
            ></div>
            <span className="text-sm mt-2 dark:text-gray-300">{months[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendanceChart;