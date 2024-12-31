import React from 'react';

const PerformanceChart = () => {
  const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science'];
  const performances = [85, 78, 92, 88, 95];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4 dark:text-white">Subject Performance</h3>
      <div className="space-y-4">
        {subjects.map((subject, index) => (
          <div key={subject} className="space-y-2">
            <div className="flex justify-between text-sm dark:text-gray-300">
              <span>{subject}</span>
              <span>{performances[index]}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${performances[index]}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceChart;