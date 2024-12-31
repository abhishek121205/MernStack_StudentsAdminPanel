import React from 'react';
import PerformanceChart from '../components/analytics/PerformanceChart';
import AttendanceChart from '../components/analytics/AttendanceChart';

const Analytics = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PerformanceChart />
        <AttendanceChart />
      </div>
    </div>
  );
};

export default Analytics;